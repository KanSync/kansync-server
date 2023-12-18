import "dotenv/config";
import { Request, Response } from "express";
import { OAuth2Token } from "@badgateway/oauth2-client";
import { auth } from "../../oauth";
import { allowCors } from "../../_utils/helpers";
import { ClientSettings } from "@badgateway/oauth2-client/dist/client";

const SETTINGS: ClientSettings = {
    server: "https://github.com",
    clientId: "e6afa30d9b65e51b2332",
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    authenticationMethod: "client_secret_post",
    tokenEndpoint: "/login/oauth/access_token",
    authorizationEndpoint: "/login/oauth/authorize",
}


type GitHubToken = {
    access_token: string;
    token_type: string;
    scope: string;
};


export async function getGitHubToken(
    params: { code: string, redirectUri: string, codeVerifier?: string }
): Promise<OAuth2Token> {
    let data = new URLSearchParams({
        client_id: SETTINGS.clientId,
        client_secret: SETTINGS.clientSecret,
        code: params.code,
    });
    const resp = await fetch(SETTINGS.server + SETTINGS.tokenEndpoint, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data,
    });
    let result: GitHubToken = await resp.json();
    let token: OAuth2Token = {
        accessToken: result.access_token,
        expiresAt: null,
        refreshToken: null,
    };
    return token;
}


export default allowCors(async (req: Request, res: Response) => {
    await auth(req, res, undefined, getGitHubToken)
})
