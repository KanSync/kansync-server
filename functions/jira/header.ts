export const HEADERS = {
  /**
   * Create a header containing a bearer authorization token.
   *
   * @param bearerToken - The bearer token to send
   */
  authHeader: (bearerToken: string) =>
    new Headers({
      accept: "application/json",
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${bearerToken}`,
    }),

  /**
   * Create a header containing a basic authorization token.
   *
   * @param BasicToken - Basic Token (without 'Basic ' in the beginning)
   */
  basicAuthHeader: (BasicToken: string) =>
    new Headers({
      accept: "application/json",
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: "Basic " + `${BasicToken}`,
    }),
};
