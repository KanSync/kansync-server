import "dotenv/config";
import { Request, Response } from "express";
import { OAuth2Client } from "@badgateway/oauth2-client";
import { auth } from "../../oauth";
import { allowCors } from "../../_utils/helpers";


const client = new OAuth2Client({
  server: "https://auth.atlassian.com",
  clientId: "jgvPRa4EzDY5U4zwoFeSSqizfPfNuBk1",
  clientSecret: process.env.JIRA_CLIENT_SECRET,
  authenticationMethod: "client_secret_post",
  tokenEndpoint: "/oauth/token",
  authorizationEndpoint: "/authorize",
});


export default allowCors(async (req: Request, res: Response) => {
  await auth(req, res, client)
})
