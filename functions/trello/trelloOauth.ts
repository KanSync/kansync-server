import express, { Request, Response } from "express";
import OAuth from "oauth";
import url from "url";
import fs from "fs";

/**
 * Initializes and configures the Express server.
 */
const app = express();
app.use(express.static("public"));

/**
 * Starts the server and listens on port 3000.
 */
const server = app.listen(3000, () => {
  console.log("Server up and running...");
  console.log("Listening on port %s", (server.address() as any).port);
  console.log(`Click here to open the app: http://localhost:3000/`);
});

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
const key = "";
const secret = "";
const loginCallback = `http://localhost:3000/callback`;

/**
 * Function to save OAuth secrets to a file for persistence.
 * @param {Record<string, string>} secrets - The OAuth secrets to be saved.
 */
const saveOAuthSecrets = (secrets: Record<string, string>) => {
  fs.writeFileSync(
    "./functions/trello/oauth_secrets.json",
    JSON.stringify(secrets, null, 2),
  );
};

/**
 * Function to load OAuth secrets from a file.
 * @returns {Record<string, string>} The loaded OAuth secrets.
 */
const loadOAuthSecrets = (): Record<string, string> => {
  try {
    const data = fs.readFileSync("oauth_secrets.json");
    return JSON.parse(data.toString());
  } catch (error) {
    return {};
  }
};

/**
 * Loads or initializes OAuth secrets.
 */
const oauth_secrets: Record<string, string> = loadOAuthSecrets();

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
 * Endpoint to initiate the OAuth login process.
 * @param {Request} _request - The request object.
 * @param {Response} response - The response object.
 */
export const login = async (_request: Request, response: Response) => {
  try {
    const requestToken = await new Promise<string>((resolve, reject) => {
      oauth.getOAuthRequestToken(
        (error: any, token: string | number, tokenSecret: string) => {
          if (error) {
            console.error("Error getting OAuth request token:", error);
            reject("Error getting OAuth request token");
            return;
          }
          oauth_secrets[token] = tokenSecret; // Store the token secret
          resolve(token as string);
        },
      );
    });
    // Redirect user to Trello for authorization
    response.redirect(
      `${authorizeURL}?oauth_token=${requestToken}&name=${appName}&scope=${scope}&expiration=${expiration}`,
    );
  } catch (error) {
    console.error("Error in login:", error);
    response.status(500).send("Internal Server Error");
  }
};

/**
 * Callback endpoint for handling the OAuth response from Trello.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
export const callback = async (req: Request, res: Response) => {
  try {
    const query = url.parse(req.url!, true).query as {
      oauth_token: string;
      oauth_verifier: string;
    };
    const { oauth_token, oauth_verifier } = query;
    const tokenSecret = oauth_secrets[oauth_token];

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
    res.send("Every thing looks good.");

    // Save the updated oauth_secrets to the file
    oauth_secrets["token"] = accessToken;
    saveOAuthSecrets(oauth_secrets);
  } catch (error) {
    console.error("Error in callback:", error);
    res.status(500).send("Internal Server Error");
  }
};

app.get("/callback", (request: Request, response: Response) => {
  console.log(`GET '/trello-callback' ${Date()}`);
  callback(request, response);
});
app.get("/", (request: Request, response: Response) => {
  console.log(`GET '/'  ${Date()}`);
  login(request, response);
});
