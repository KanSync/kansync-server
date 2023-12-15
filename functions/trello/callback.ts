import url from "url";
import OAuth from "oauth";
import { Request, Response } from "express";
import fs from "fs";
import "dotenv/config";

const requestURL = "https://trello.com/1/OAuthGetRequestToken";
const accessURL = "https://trello.com/1/OAuthGetAccessToken";

// Function to save oauth_secrets to a file
const saveOAuthSecrets = (secrets: Record<string, string>) => {
  fs.writeFileSync("oauth_secrets.json", JSON.stringify(secrets, null, 2));
};

// Function to load oauth_secrets from a file
const loadOAuthSecrets = (): Record<string, string> => {
  try {
    const data = fs.readFileSync("oauth_secrets.json");
    return JSON.parse(data.toString());
  } catch (error) {
    return {};
  }
};
/**n
 * Trello API key and secret. Replace with actual key and secret for production.
 */
let key_secret = {};
const key = process.env.TRELLO_KEY;
const secret = process.env.TRELLO_OAUTH_SECRET;
const loginCallback = process.env.TRELLO_CALLBACK_URL;

const oauth = new OAuth.OAuth(
  requestURL,
  accessURL,
  key,
  secret,
  "1.0A",
  loginCallback,
  "HMAC-SHA1",
);

export default async function callback(req: Request, res: Response) {
  try {
    const query = url.parse(req.url!, true).query as {
      oauth_token: string;
      oauth_verifier: string;
    };
    const { oauth_token, oauth_verifier } = query;
    key_secret = loadOAuthSecrets();
    const tokenSecret = key_secret["token_s"];
    if (!tokenSecret) {
      console.error("Token secret not found for the given OAuth token");
      res.status(400).send("Token secret not found for the given OAuth token");
      return;
    }
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
    // return the token
    key_secret["accessToken"] = accessToken;
    saveOAuthSecrets(key_secret);

    res.redirect("http://localhost:5173/dashboard");
  } catch (error) {
    console.error("Error in callback:", error);
    res.status(500).send("Internal Server Error");
  }
}
