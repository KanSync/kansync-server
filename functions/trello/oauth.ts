import { Request, Response } from "express";
import OAuth from "oauth";
import fs from "fs";
import "dotenv/config";

/**
 * Configuration for OAuth request, access, and authorization URLs.
 */
const requestURL = "https://trello.com/1/OAuthGetRequestToken";
const accessURL = "https://trello.com/1/OAuthGetAccessToken";
const authorizeURL = "https://trello.com/1/OAuthAuthorizeToken";
const appName = "KanSync";
const scope = "read,write,account";
const expiration = "never";

/**n
 * Trello API key and secret. Replace with actual key and secret for production.
 */
const key = process.env.TRELLO_KEY;
const secret = process.env.TRELLO_OAUTH_SECRET;
const loginCallback = process.env.TRELLO_CALLBACK_URL;

/**
 * Loads or initializes OAuth secrets.
 */
// Function to save oauth_secrets to a file
const saveOAuthSecrets = (secrets: Record<string, string>) => {
  fs.writeFileSync("oauth_secrets.json", JSON.stringify(secrets, null, 2));
};

const oauth_secrets: Record<string, string> = {};

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

export default async function login(req: Request, res: Response) {
  try {
    const requestToken = await new Promise<string>((resolve, reject) => {
      oauth.getOAuthRequestToken(
        (error: any, token: string | number, tokenSecret: string) => {
          if (error) {
            console.error("Error getting OAuth request token:", error);
            reject("Error getting OAuth request token");
            return;
          }
          oauth_secrets["token_s"] = tokenSecret;
          saveOAuthSecrets(oauth_secrets);
          resolve(token as string);
        },
      );
    });
    // Redirect user to Trello for authorization
    res.redirect(
      `${authorizeURL}?oauth_token=${requestToken}&name=${appName}&scope=${scope}&expiration=${expiration}`,
    );
  } catch (error) {
    console.error("Error in login:", error);
    res.status(500).send("Internal Server Error");
  }
}
