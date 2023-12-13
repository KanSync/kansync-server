import "dotenv/config";
import { Request, Response } from "express";
import { OAuth2Client } from "@badgateway/oauth2-client";
import { auth }  from "../../oauth";
import { allowCors } from "../../_utils/helpers";
import { ClientSettings } from "@badgateway/oauth2-client/dist/client";

const githubSettings: ClientSettings = {
    server: "https://github.com",
    clientId: "e6afa30d9b65e51b2332",
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    authenticationMethod: "client_secret_post",
    tokenEndpoint: "/login/oauth/access_token",
    authorizationEndpoint: "/login/oauth/authorize",
}

const client = new OAuth2Client(githubSettings);


export default allowCors(async (req: Request, res: Response) => {
    await auth(req, res, client, true)
})
