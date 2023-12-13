import { userExists } from "../database";
import { Request, Response } from "express";

async function handler(req: Request, res: Response) {
    let login = req.body.login;

    if (login === undefined) {
        res.status(400).send(`Missing user details.`);
        return;
    }
    login = login as string;

    try {
        if (!(await userExists(login))) {
            res.status(401).send("Invalid login.");
            return;
        }
    } catch (error) {
        res.status(500).send("Database error occurred during user verification.");
    }
    res.status(200).send("Successful login.");
}

export default handler;
