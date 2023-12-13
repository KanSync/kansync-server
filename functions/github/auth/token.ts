import "dotenv/config";
import { Request, Response } from "express";
import { OAuth2Client } from "@badgateway/oauth2-client";
import auth from "../../oauth";
import { allowCors } from "../../_utils/helpers";


const client = new OAuth2Client({
    server: "https://github.com",
    clientId: "e6afa30d9b65e51b2332",
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    authenticationMethod: "client_secret_post",
    tokenEndpoint: "/login/oauth/access_token",
    authorizationEndpoint: "/login/oauth/authorize",
});


export default allowCors(async (req: Request, res: Response) => {
    await auth(req, res, client)
})
