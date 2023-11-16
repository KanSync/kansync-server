import "dotenv/config";

import { Request, Response } from "express";
import { allowCors } from "../_utils/helpers";
import { GET_PROJECT_CARDS } from "./schema/getProjectCards";

const handler = async (req: Request, res: Response) => {
  if (!process.env.PERSONAL_ACCESS_TOKEN) {
    return res.status(500).send("Missing PERSONAL_ACCESS_TOKEN");
  }

  const search = req.query.search;

  const result = await fetch("https://api.github.com/graphql", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `token ${process.env.PERSONAL_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      query: GET_PROJECT_CARDS,
      variables: {
        login: search,
      },
    }),
    method: "POST",
  }).then((response) => response.json());

  res.status(200).send(result);
};

export default allowCors(handler);
