import { createUser, userExists } from "../_database";
import { Request, Response } from "express";

async function handler(req: Request, res: Response) {
  let login = req.body.login;
  console.log(req.body);

  if (login === undefined) {
    res.status(400).send(`Missing user details.`);
    return;
  }
  login = login as string;

  try {
    if (await userExists(login)) {
      res.status(409).send("User already exists.");
      return;
    }

    await createUser(login);
  } catch (error) {
    res.status(500).send(`Database error occurred during user creation. CWD: ${process.cwd()}\n ${error}`);
    return;
  }
  res.status(201).send("User created.");
}

export default handler;
