import { Request, Response } from "express";
import OAuth from "oauth";
import url from "url";
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

/**
 * Trello API key and secret. Replace with actual key and secret for production.
 */
const key = "9b2b5ff508f04db5cad09671d541f23b";
const secret =
  "ca8c8ffa107a0eca5c128a226a070355821ab950a7149a5ad211254a793cded8";
const loginCallback = "http://localhost:5173/dashboard";

/**
 * Loads or initializes OAuth secrets.
 */
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
export const handleOAuth = async (req: Request, res: Response) => {
  try {
    if (req.url.startsWith("/callback")) {
      // Handle callback logic
      const query = url.parse(req.url!, true).query as {
        oauth_token: string;
        oauth_verifier: string;
      };
      const { oauth_token, oauth_verifier } = query;
      const tokenSecret = oauth_secrets[oauth_token];

      if (!tokenSecret) {
        console.error("Token secret not found for the given OAuth token");
        res
          .status(400)
          .send("Token secret not found for the given OAuth token");
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
      return accessToken;
    } else {
      // Handle login logic
      const requestToken = await new Promise<string>((resolve, reject) => {
        oauth.getOAuthRequestToken(
          (error: any, token: string | number, tokenSecret: string) => {
            if (error) {
              console.error("Error getting OAuth request token:", error);
              reject("Error getting OAuth request token");
              return;
            }
            // Store the token secret
            resolve(token as string);
          },
        );
      });
      // Redirect user to Trello for authorization
      res.redirect(
        `${authorizeURL}?oauth_token=${requestToken}&name=${appName}&scope=${scope}&expiration=${expiration}`,
      );
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
};


