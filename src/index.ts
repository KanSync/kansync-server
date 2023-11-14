import { callAPI } from "./api/jira/callAPI";
import { API_OPS } from "./api/jira/APIOperations";
import { HEADERS } from "./api/jira/header";
let token = "";
let email = "";
let domainName = "";
let projectKey = "";

callAPI(
  domainName,
  API_OPS.getIssues(projectKey),
  HEADERS.basicAuthHeader(token, email)
).then(result=>console.log(result));