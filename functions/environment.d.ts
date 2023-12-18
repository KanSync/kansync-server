declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PERSONAL_ACCESS_TOKEN: string;
      CLIENT_SECRET: string;
      REDIRECT_URI: string;
      SERVER_URL: string;
      DATABASE_URL: string;
      TRELLO_OAUTH_SECRET: string;
      TRELLO_KEY: string;
      JIRA_CLIENT_SECRET: string;
      GITHUB_CLIENT_SECRET: string;
    }
  }
}


// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export { };
