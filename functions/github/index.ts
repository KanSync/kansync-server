import "dotenv/config";

import { Request, Response } from "express";
import { allowCors } from "../_utils/helpers";
import { GET_PROJECT_CARDS } from "./schema/getProjectCards";
import { toUnified } from "./conversion";
import { IGithubIssue } from "./interfaces";
import { IUnifiedIssue, handleIssueRequest } from "../common";

const handler = async (req: Request, res: Response) => {
  let reqAuthHeader = req.headers.authorization;

  if (reqAuthHeader === undefined) {
    res.status(403).send(`Missing authorization header.`);
    return;
  }

  let [tokenType, token] = reqAuthHeader.split(" ");

  const repo = req.query.repo;
  const name = req.query.projectName;

  if (token === undefined || repo === undefined || name === undefined) {
    res.status(400).send(`Missing token, repository or project name.`);
    return;
  }

  let issues: IUnifiedIssue[] = [];
  let cursor: string = "";
  let hasNextPage: boolean = false;
  do {
    const result = await fetch("https://api.github.com/graphql", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `${tokenType} ${token}`,
      },
      body: JSON.stringify({
        query: GET_PROJECT_CARDS,
        variables: {
          repo: repo,
          projectName: name,
          cursor: cursor,
        },
      }),
      method: "POST",
    }).then((response) => response.json());

    if (result.data === undefined) {
      res.status(403).send("Unauthorized.");
      return;
    }

    let res_repo = result.data.search.nodes;

    if (res_repo.length == 0) {
      res.status(404).send("Unable to find repository.");
      return;
    }

    let res_project = res_repo[0].projectsV2.nodes;

    if (res_project.length == 0) {
      res.status(404).send("Unable to find project.");
      return;
    }
    let pageInfo = res_project[0].items.pageInfo;
    hasNextPage = pageInfo.hasNextPage;
    cursor = pageInfo.endCursor;
    //console.log(res_project[0].items.nodes.map(issue => issue.content))
    try {
      res_project[0].items.nodes.map((issue: IGithubIssue) => {
        if (Object.keys(issue.content).length !== 0) {
          issues.push(toUnified(issue));
        }
      });
    } catch (error) {
      console.log(error);
    }
  } while (hasNextPage);
  res.status(200).send({ num: issues.length, issues: issues });
  return issues;
};

async function DBHandler(req, res) {
  await handleIssueRequest(req, res, handler);
}

export default allowCors(DBHandler);
