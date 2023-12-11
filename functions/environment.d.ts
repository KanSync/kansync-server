declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PERSONAL_ACCESS_TOKEN: string;
            CLIENT_SECRET: string;
            REDIRECT_URI: string;
            SERVER_URL: string;
            DATABASE_URL: string;
            DATABASE_PORT: number;
            DATABASE_USER: string;
            DATABASE_PASSWORD: string;
            DATABASE_NAME: string;
        }
    }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export { }