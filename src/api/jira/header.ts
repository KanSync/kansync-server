export interface Header {
  accept: string,
  "Content-Type": string,
  Authorization: string,
}

export const HEADERS = {
  authHeader: (authToken: string) => ({
    accept: "application/json",
    "Content-Type": "application/json; charset=UTF-8",
    Authorization: `Bearer ${authToken}`,
  }),

  basicAuthHeader: (basicToken: string, email: string) => ({
    accept: "application/json",
    "Content-Type": "application/json; charset=UTF-8",
    Authorization: "Basic " + btoa(`${email}:${basicToken}`),
  }),
};
