import express, { Request, Response } from "express";
import OAuth from "oauth";
import url from "url";
import fs from "fs";

/*
/   Express Server Setup
*/
const app = express();
app.use(express.static("public"));

const server = app.listen(3000, () => {
  console.log("Server up and running...");
  console.log("Listening on port %s", (server.address() as any).port);
  console.log(`Click here to open the app: http://localhost:3000/`);
});

/*
/   OAuth Setup and Functions
*/
const requestURL = "https://trello.com/1/OAuthGetRequestToken";
const accessURL = "https://trello.com/1/OAuthGetAccessToken";
const authorizeURL = "https://trello.com/1/OAuthAuthorizeToken";
const appName = "test_2";
const scope = "read,write,account";
const expiration = "never";

const key = "";
const secret = "";
const loginCallback = `http://localhost:3000/callback`;

let token_secret: string = "";

const oauth = new OAuth.OAuth(
  requestURL,
  accessURL,
  key,
  secret,
  "1.0A",
  loginCallback,
  "HMAC-SHA1",
);

export const login = (_request: Request, response: Response) => {
  oauth.getOAuthRequestToken(
    (
      error: any,
      token: string | number,
      tokenSecret: string,
      _results: any,
    ) => {
      if (error) {
        console.error("Error getting OAuth request token:", error);
        response.status(500).send("Error getting OAuth request token");
        return;
      }
      token_secret = tokenSecret;

      response.redirect(
        `${authorizeURL}?oauth_token=${token}&name=${appName}&scope=${scope}&expiration=${expiration}`,
      );
    },
  );
};

export const callback = (req: Request, res: Response) => {
  const query = url.parse(req.url!, true).query as {
    oauth_token: string;
    oauth_verifier: string;
  };
  const { oauth_token, oauth_verifier } = query;
  const tokenSecret = token_secret;

  if (!tokenSecret) {
    console.error("Token secret not found for the given OAuth token");
    res.status(400).send("Token secret not found for the given OAuth token");
    return;
  }

  oauth.getOAuthAccessToken(
    oauth_token,
    tokenSecret,
    oauth_verifier,
    (error: any, accessToken: string, _accessTokenSecret: string) => {
      if (error) {
        console.error("Error getting OAuth access token:", error);
        res
          .status(500)
          .send(`Error getting OAuth access token: ${error.message}`);
        return;
      }
      console.log("Access Token:", accessToken);

      res.send("Every thing looks good.");
    },
  );
};
/*
/   Routes
*/

app.get("/login", (request: Request, response: Response) => {
  console.log(`GET '/login' ${Date()}`);
  login(request, response);
});

app.get("/callback", (request: Request, response: Response) => {
  console.log(`GET '/callback' ${Date()}`);
  callback(request, response);
});
app.get("/", (_request: Request, response: Response) => {
  console.log(`GET '/'  ${Date()}`);
  response.send(
    "<h1>Oh, hello there!</h1><a href='./login'>Login with OAuth!</a>",
  );
});
