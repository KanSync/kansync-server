import "dotenv/config";
import { Request, Response } from "express";
import { OAuth2Client } from "@badgateway/oauth2-client";

// TODO: frontend should probably get these consts from here
const REDIRECT_URI = process.env.REDIRECT_URI;
const SCOPE = ["read:jira-work", "read:jira-user"];
const BACKEND_URL = process.env.SERVER_URL + "/jira/auth/token";

// TODO: Should be hash of the users session ID, works for now but unsafe
const state = "Safe String";

const client = new OAuth2Client({
  server: "https://auth.atlassian.com",
  clientId: "jgvPRa4EzDY5U4zwoFeSSqizfPfNuBk1",
  clientSecret: process.env.CLIENT_SECRET,
  authenticationMethod: "client_secret_post",
  tokenEndpoint: "/oauth/token",
  authorizationEndpoint: "/authorize",
});

export default async function auth(req: Request, res: Response) {
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
