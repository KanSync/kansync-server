import "dotenv/config";
import { Request, Response } from "express";
import { OAuth2Client, OAuth2Token } from "@badgateway/oauth2-client";
import { ClientSettings } from "@badgateway/oauth2-client/dist/client";

// TODO: frontend should probably get these consts from here
const REDIRECT_URI = process.env.REDIRECT_URI;

// TODO: Should be hash of the users session ID, works for now but unsafe
const state = "Safe State";

type GitHubToken = {
  access_token: string;
  token_type: string;
  scope: string;
};

export async function getGitHubToken(
  settings: ClientSettings,
  code: string,
): Promise<OAuth2Token> {
  let data = new URLSearchParams({
    client_id: settings.clientId,
    client_secret: settings.clientSecret,
    code: code,
  });
  const resp = await fetch(settings.server + settings.tokenEndpoint, {
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

export async function auth(
  req: Request,
  res: Response,
  client: OAuth2Client,
  github: boolean,
) {
  let code = req.query.code;

  if (code === undefined) {
    res.status(400).send(`Missing code`);
    return;
  }

  code = code as string;

  let token: OAuth2Token;
  try {
    if (github) {
      token = await getGitHubToken(client.settings, code);
    } else {
      token = await client.authorizationCode.getToken({
        code: code,
        redirectUri: REDIRECT_URI,
      });
    }

    res.header("Access-Control-Allow-Origin", "*");

    res.status(200).send(token);
  } catch (error) {
    res.status(400).send(error);
  }
}
