import express, { Request, Response } from "express";
import OAuth from "oauth";
import url from "url";

/*
/   Express Server Setup
*/
const app = express();
app.use(express.static("public"));

const server = app.listen(3000, () => {
  console.log("Server up and running...");
  console.log("Listening on port %s", (server.address() as any).port);
});

/*
/   OAuth Setup and Functions
*/
const requestURL = "https://trello.com/1/OAuthGetRequestToken";
const accessURL = "https://trello.com/1/OAuthGetAccessToken";
const authorizeURL = "https://trello.com/1/OAuthAuthorizeToken";
const appName = "test_2";
const scope = "read";
const expiration = "never";

const key = process.env.TRELLO_KEY as string;
const secret = process.env.TRELLO_OAUTH_SECRET as string;

const loginCallback = `http://localhost:3000/callback`;

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
    if (error) {
      console.error("Error getting OAuth request token:", error);
      response.status(500).send("Error getting OAuth request token");
      return;
    }

    oauth_secrets[token] = tokenSecret;
    response.redirect(
      `${authorizeURL}?oauth_token=${token}&name=${appName}&scope=${scope}&expiration=${expiration}`,
    );
  });
};

const callback = (req: Request, res: Response) => {
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

  oauth.getOAuthAccessToken(
    oauth_token,
    tokenSecret,
    oauth_verifier,
    (error, accessToken, accessTokenSecret, results) => {
      if (error) {
        console.error("Error getting OAuth access token:", error);
        res.status(500).send("Error getting OAuth access token");
        return;
      }

      oauth.getProtectedResource(
        "https://api.trello.com/1/members/me",
        "GET",
        accessToken,
        accessTokenSecret,
        (error, data, response) => {
          if (error) {
            console.error("Error getting protected resource:", error);
            res.status(500).send("Error getting protected resource");
            return;
          }

          res.send(data);
        },
      );
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
app.get("/", (request: Request, response: Response) => {
  console.log(`GET '/'  ${Date()}`);
  response.send(
    "<h1>Oh, hello there!</h1><a href='./login'>Login with OAuth!</a>",
  );
});
