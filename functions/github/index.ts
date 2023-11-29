import "dotenv/config";

import { Request, Response } from "express";
import { allowCors } from "../_utils/helpers";
import { GET_PROJECT_CARDS } from "./schema/getProjectCards";
import { toUnified } from "./conversion";
import { IGithubIssue } from './interfaces';

const handler = async (req: Request, res: Response) => {
  if (!process.env.PERSONAL_ACCESS_TOKEN) {
    return res.status(500).send("Missing PERSONAL_ACCESS_TOKEN");
  }

  const search = req.query.search;
  const name = req.query.projectName;

  const result = await fetch("https://api.github.com/graphql", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `token ${process.env.PERSONAL_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      query: GET_PROJECT_CARDS,
      variables: {
        repo: search,
        projectName: name,
      },
    }),
    method: "POST",
  }).then((response) => response.json());

  let issues = result.data.search.nodes[0].projectsV2.nodes[0].items.nodes.map((issue: IGithubIssue) => toUnified(issue))

  res.status(200).send(issues);
};

export default allowCors(handler);
