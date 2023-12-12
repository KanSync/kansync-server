import { createUser, userExists } from "../database";
import { Request, Response } from "express";

async function handler(req: Request, res: Response) {
  let login = req.query.login;

  if (login === undefined) {
    res.status(400).send(`Missing user details.`);
    return;
  }
  login = login as string;

  try {
    if (userExists(login)) {
        res.status(409).send("User already exists.");
        return;
    }
    
    await createUser(login);
  } catch (error) {
    res.status(500).send("Database error occurred during user creation.");
  }
  res.status(201).send("User created.");
}

export default handler;
