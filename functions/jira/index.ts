import { callAPI } from "./callAPI";
import { API_OPS } from "./APIOperations";
import { HEADERS } from "./header";
import { Request, Response } from 'express'

export default (req: Request, res: Response) => {
  let token = req.query.token;
  let email = req.query.email;
  let domainName = req.query.name;
  let projectKey = req.query.projectKey;

  if (token === undefined || email === undefined || domainName === undefined || projectKey === undefined){
    res.status(400).send(`Missing token, email, domain name or project key.`)
    return
  }
  
  token = token as string
  email = email as string
  domainName = domainName as string
  projectKey = projectKey as string

  callAPI(
    domainName,
    API_OPS.getIssues(projectKey),
    HEADERS.basicAuthHeader(token, email)
  ).then(result=>res.status(200).send(result));
}

