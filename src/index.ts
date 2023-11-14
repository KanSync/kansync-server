import { callAPI } from "./api/jira/callAPI";
import { API_OPS } from "./api/jira/APIOperations";
import { HEADERS } from "./api/jira/header";
let token = "";
let email = "";

console.log(callAPI(
    API_OPS.getIssues("KAN"), 
    HEADERS.basicAuthHeader(token, email), 
    "GET"))