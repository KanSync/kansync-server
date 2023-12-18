import OAuth from "oauth";
import { Request, Response } from "express";
import "dotenv/config";
import { OAuth2Token } from '@badgateway/oauth2-client';
import { allowCors } from "../../_utils/helpers";

type OAuth1Token = OAuth2Token;

const requestURL = "https://trello.com/1/OAuthGetRequestToken";
const accessURL = "https://trello.com/1/OAuthGetAccessToken";

/**n
 * Trello API key and secret. Replace with actual key and secret for production.
 */
const key = process.env.TRELLO_KEY;
const secret = process.env.TRELLO_OAUTH_SECRET;
const loginCallback = process.env.REDIRECT_URI;

const oauth = new OAuth.OAuth(
  requestURL,
  accessURL,
  key,
  secret,
  "1.0A",
  loginCallback,
  "HMAC-SHA1",
);

async function handler(req: Request, res: Response) {
  try {
    let { token: oauth_token, tokenSecret, verifier: oauth_verifier } = req.body;

    if (!tokenSecret || !oauth_token || !oauth_verifier) {
      console.error("Request Token, Oauth Token or verifier missing.");
      res.status(400).send("Missing credentials.");
      return;
    }
    console.log(oauth_token, tokenSecret, oauth_verifier)

    const accessToken = await new Promise<string>((resolve, reject) => {
      oauth.getOAuthAccessToken(
        oauth_token,
        tokenSecret,
        oauth_verifier,
        (error: any, accessToken: string) => {
          if (error) {
            console.error("Error getting OAuth access token:", error);
            reject(`Error getting OAuth access token: ${error.message}`);
            return;
          }
          resolve(accessToken);
        },
      );
    });

    let token: OAuth1Token = {
      accessToken: accessToken,
      expiresAt: null,
      refreshToken: null,
    };

    res.status(200).send(token);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

export default allowCors(handler)