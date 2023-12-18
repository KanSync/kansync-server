import "dotenv/config";

import { Request, Response } from "express";
import OAuth from "oauth";
import { allowCors } from "../../_utils/helpers";

/**
 * Configuration for OAuth request, access, and authorization URLs.
 */
const requestURL = "https://trello.com/1/OAuthGetRequestToken";
const accessURL = "https://trello.com/1/OAuthGetAccessToken";

/**n
 * Trello API key and secret. Replace with actual key and secret for production.
 */
const key = process.env.TRELLO_KEY;
const secret = process.env.TRELLO_OAUTH_SECRET;
const loginCallback = process.env.REDIRECT_URI;

/**
 * Initializes the OAuth object using the OAuth library.
 */
const oauth = new OAuth.OAuth(
  requestURL,
  accessURL,
  key,
  secret,
  "1.0A",
  loginCallback,
  "HMAC-SHA1",
);

/**
 * Handles OAuth logic for both login and callback.
 * If the URL starts with "/callback," it processes the OAuth callback from Trello.
 * If not, it initiates the OAuth login process and redirects the user to Trello for authorization.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */

async function login(req: Request, res: Response) {
  try {
    const tokens = await new Promise<{ token: string, tokenSecret: string }>((resolve, reject) => {
      oauth.getOAuthRequestToken(
        (error: any, token: string | number, tokenSecret: string) => {
          if (error) {
            console.error("Error getting OAuth request token:", error);
            reject("Error getting OAuth request token");
            return;
          }
          resolve({ token: token as string, tokenSecret: tokenSecret });
        },
      );
    });
    // Redirect user to Trello for authorization
    res.status(200).send(tokens)
  } catch (error) {
    console.error("Error in login:", error);
    res.status(500).send("Internal Server Error");
  }
}

export default allowCors(login)