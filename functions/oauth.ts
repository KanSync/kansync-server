
import "dotenv/config";
import { Request, Response } from "express";
import { OAuth2Client } from "@badgateway/oauth2-client";

// TODO: frontend should probably get these consts from here
const REDIRECT_URI = process.env.REDIRECT_URI;

// TODO: Should be hash of the users session ID, works for now but unsafe
const state = "Safe String";


export default async function auth(req: Request, res: Response, client: OAuth2Client) {
    let code = req.query.code;

    if (code === undefined) {
        res.status(400).send(`Missing code`);
        return;
    }

    code = code as string;

    try {
        const token = await client.authorizationCode.getToken({
            code: code,
            redirectUri: REDIRECT_URI,
        });

        res.header("Access-Control-Allow-Origin", "*");

        res.status(200).send(token);
    } catch (error) {
        res.status(400).send(error);
    }
}