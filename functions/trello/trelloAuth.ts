import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import OAuth from "oauth";
import url from "url";
import trelloConfig from "./trelloConfig";

/*
/     Express Server Setup
*/
const app = express();

app.use(express.static("public"));

const server = app.listen(3000, () => {
  console.log("Server up and running...");
  console.log(`Listening on port ${(server.address() as AddressInfo).port}`);
});

/*
/     OAuth Setup and Functions
*/
const requestURL = "https://trello.com/1/OAuthGetRequestToken";
const accessURL = "https://trello.com/1/OAuthGetAccessToken";
const authorizeURL = "https://trello.com/1/OAuthAuthorizeToken";
const appName = trelloConfig.appName;
const scope = "read,write,account";
const expiration = "1hour";
const key = trelloConfig.appKey;
const secret = trelloConfig.appSecret;
const loginCallback = trelloConfig.callbackUrl;

const oauth_secrets: Record<string, string> = {};

const oauth = new OAuth.OAuth(
  requestURL,
  accessURL,
  key,
  secret,
  "1.0A",
  loginCallback,
  "HMAC-SHA1",
);

const login = (request: Request, response: Response) => {
  oauth.getOAuthRequestToken((error, token, tokenSecret, results) => {
    oauth_secrets[token] = tokenSecret;
    response.redirect(
      `${authorizeURL}?oauth_token=${token}&name=${appName}&scope=${scope}&expiration=${expiration}`,
    );
  });
};

let token: string, tokenSecret: string;

const callback = (req: Request, res: Response) => {
  const query = url.parse(req.url!, true).query as Record<string, string>;
  const token = query.oauth_token;
  const tokenSecret = oauth_secrets[token];
  const verifier = query.oauth_verifier;
  oauth.getOAuthAccessToken(
    token,
    tokenSecret,
    verifier,
    (error, accessToken, accessTokenSecret, results) => {
      oauth.getProtectedResource(
        "https://api.trello.com/1/members/me",
        "GET",
        accessToken,
        accessTokenSecret,
        (error, data, response) => {
          res.send(data);
        },
      );
    },
  );
};

/*
/     Routes
*/
app.get("/", (request, response) => {
  console.log(`GET '/' ${Date()}`);
  response.send("<h1>hello there!</h1><a href='./login'>Login with OAuth!</a>");
});

app.get("/login", (request, response) => {
  console.log(`GET '/login' ${Date()}`);
  login(request, response);
});

app.get("/callback", (request, response) => {
  console.log(`GET '/callback' ${Date()}`);
  callback(request, response);
});
