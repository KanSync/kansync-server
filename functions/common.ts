import { Request, Response } from "express";
import { getIssuesFromDB, storeIssuesToDB, userExists } from "./database";

export interface Assignee {
  name: string;
}

export interface IUnifiedIssue {
  title: string;
  assignees: Assignee[];
  author: Assignee;
  body: string;
  category: string;
  statusChangeTime: Date;
  createdAt: Date;
  comments: string[];
  lastEditedAt: Date;
  projectID: number | string;
  dueDate: Date;
  labels: string[];
  dependencies?: IUnifiedIssue[];
}

/**
 * Handle get issue requests i.e. if they should be obtained from the database or from external APIs.
 * 
 * @param req - Incoming request
 * @param res - Outgoing response
 * @param getIssuesFromBoard - Function to get issues from an external board, should sending response
 */
export async function handleIssueRequest(req: Request, res: Response, getIssuesFromBoard: (req: Request, res: Response) => Promise<IUnifiedIssue[] | undefined>): Promise<void> {
  let user = req.query.user
  let project_name = req.query.project_name
  let update = req.query.update

  // If user or project name is undefined => can't get data from db
  if (user === undefined || project_name === undefined) {
    await getIssuesFromBoard(req, res);
    return;
  }

  user = user as string
  project_name = project_name as string

  if (!userExists(user)) {
    res.status(400).send("Invalid user.")
    return;
  }

  if (update) {
    let issues = await getIssuesFromBoard(req, res);

    // If issues is undefined getIssuesFromBoard should have sent an error response
    if (issues !== undefined) {
      await storeIssuesToDB(user, project_name, issues)
    }
    return;
  }

  let issues = await getIssuesFromDB(user, project_name)

  if (issues.length == 0) {
    res.status(404).send("Project not found or no issues linked to project.")
    return;
  }

  res.status(200).send(issues);
}