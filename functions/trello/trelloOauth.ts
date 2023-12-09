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

// add your keys here
const key = "";
const secret = "";
//const loginCallback = `http://localhost:5173/trello-callback`;
const loginCallback = `http://localhost:3000/callback`;

// let token_secret: string = "";

// Function to save oauth_secrets to a file
const saveOAuthSecrets = (secrets: Record<string, string>) => {
  fs.writeFileSync(
    "./functions/trello/oauth_secrets.json",
    JSON.stringify(secrets, null, 2),
  );
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

const oauth_secrets: Record<string, string> = loadOAuthSecrets();

const oauth = new OAuth.OAuth(
  requestURL,
  accessURL,
  key,
  secret,
  "1.0A",
  loginCallback,
  "HMAC-SHA1",
);

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
          //token_secret = tokenSecret;
          oauth_secrets[token] = tokenSecret;
          resolve(token as string);
        },
      );
    });
    response.redirect(
      `${authorizeURL}?oauth_token=${requestToken}&name=${appName}&scope=${scope}&expiration=${expiration}`,
    );
  } catch (error) {
    console.error("Error in login:", error);
    response.status(500).send("Internal Server Error");
  }
};

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
// export const login = (_request: Request, response: Response) => {
//   oauth.getOAuthRequestToken((error, token, tokenSecret) => {
//     if (error) {
//       console.error("Error getting OAuth request token:", error);
//       response.status(500).send("Internal Server Error");
//       return;
//     }

//     response.redirect(`https://trello.com/1/OAuthAuthorizeToken?oauth_token=${token}`);
//   });
// };

// export const callback = async (req: Request, res: Response) => {
//   try {
//     const query = url.parse(req.url!, true).query as {
//       oauth_token: string;
//       oauth_verifier: string;
//     };

//     const { oauth_token, oauth_verifier } = query;

//     oauth.getOAuthAccessToken(oauth_token, "", oauth_verifier, (error, accessToken, accessTokenSecret) => {
//       if (error) {
//         console.error("Error getting OAuth access token:", error);
//         res.status(500).send("Internal Server Error");
//         return;
//       }
//       token_secret = accessToken
//       // Redirect to the frontend with the access token as a query parameter
//       res.redirect(`${loginCallback}?accessToken=${accessToken}`);
//     });
//     console.log("Access Token:", token_secret);
//     res.send("Everything looks good.");
//   } catch (error) {
//     console.error("Error in callback:", error);
//     res.status(500).send("Internal Server Error");
//   }
// };
/*
/   Routes
*/

app.get("/callback", (request: Request, response: Response) => {
  console.log(`GET '/trello-callback' ${Date()}`);
  callback(request, response);
});
app.get("/", (request: Request, response: Response) => {
  console.log(`GET '/'  ${Date()}`);
  login(request, response);
});
