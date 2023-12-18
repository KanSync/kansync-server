import "dotenv/config";
import { Request, Response } from "express";
import { OAuth2Client, OAuth2Token } from "@badgateway/oauth2-client";

// TODO: frontend should probably get these consts from here
const REDIRECT_URI = process.env.REDIRECT_URI;

// TODO: Should be hash of the users session ID, works for now but unsafe
const state = "Safe State";

type GetTokenFunc = (params: { code: string, redirectUri: string, codeVerifier?: string }) => Promise<OAuth2Token>;

export async function auth(
  req: Request,
  res: Response,
  client?: OAuth2Client,
  getToken?: GetTokenFunc,
) {
  let code = req.query.code;

  if (code === undefined) {
    res.status(400).send(`Missing code`);
    return;
  }

  if (!client && !getToken) {
    res.status(400).send(`Missing client or get token function`);
    return;
  }

  code = code as string;

  let token: OAuth2Token;
  try {
    if (client) {
      token = await client.authorizationCode.getToken({
        code: code,
        redirectUri: REDIRECT_URI,
      })

    } else {
      token = await getToken({
        code: code,
        redirectUri: REDIRECT_URI,
      });
    }

    res.status(200).send(token);
  } catch (error) {
    console.log(error)
    res.status(400).send(error);
  }
}
