import { Request, Response } from "express";
import {
  getIssuesFromDB,
  projectExists,
  storeIssuesToDB,
  userExists,
} from "./database";
import type { Issues } from "../.prisma/client";

export interface Assignee {
  name: string;
  [key: string]: any;
}

export interface IUnifiedIssue extends Omit<Issues, 'id' | 'projectID'> {
  dependencies?: IUnifiedIssue[];
}

// /**
//  * Handle get issue requests i.e. if they should be obtained from the database or from external APIs.
//  *
//  * @param req - Incoming request
//  * @param res - Outgoing response
//  * @param getIssuesFromBoard - Function to get issues from an external board, should be sending responses
//  */
export async function handleIssueRequest(
  req: Request,
  res: Response,
  getIssuesFromBoard: (
    req: Request,
    res: Response,
  ) => Promise<IUnifiedIssue[] | undefined>,
): Promise<void> {
  let user = req.query.user;
  let project_name = req.query.project_name;
  let update = req.query.update;

  // If user or project name is undefined => can't get data from db
  if (user === undefined || project_name === undefined) {
    await getIssuesFromBoard(req, res);
    return;
  }

  user = user as string;
  project_name = project_name as string;

  try {
    if (!userExists(user)) {
      res.status(400).send("Invalid user.");
      return;
    }
  } catch (error) {
    res.status(500).send("Failed to validate user.");
  }

  if (update || !(await projectExists(user, project_name))) {
    let issues = await getIssuesFromBoard(req, res);

    // If issues is undefined getIssuesFromBoard should have sent an error response
    if (issues !== undefined) {
      try {
        await storeIssuesToDB(user, project_name, issues);
      } catch (error) {
        // If the store fails ignore it as getIssuesFromBoard already consumes the response
        console.log(error);
      }
    }
    return;
  }

  let issues: IUnifiedIssue[];
  try {
    issues = await getIssuesFromDB(user, project_name);
  } catch (error) {
    res
      .status(error.status || 500)
      .send(error.status ? error.msg : "Failed database get.");
    return;
  }

  if (issues.length == 0) {
    res.status(404).send("No issues linked to project.");
    return;
  }

  res.status(200).send({ num: issues.length, issues: issues });
}
