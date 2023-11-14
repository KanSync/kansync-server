import 'dotenv/config'

import { Request, Response } from 'express'
import { allowCors } from './_utils/helpers'
import { graphql } from '@octokit/graphql';

const handler = async (req: Request, res: Response) => {
  if(!process.env.PERSONAL_ACCESS_TOKEN) {
    return res.status(500).send('Missing PERSONAL_ACCESS_TOKEN')
  }


  const graphqlWithAuth = graphql.defaults({
    headers: {
      authorization: `token ${process.env.PERSONAL_ACCESS_TOKEN}`,
    },
  });
  const result = await graphqlWithAuth(`
  {
    organization(login: "kansync"){
      projectsV2(first: 10) {
        nodes { 
          title
          id
          number
        } 
      }
  
      projectV2(number: 3) {
        title
        items(first: 10) {
          nodes {
            id
            content {
              __typename
              ... on Issue {
                title
                assignees(first: 10) {
                  nodes {
                    name
                    email
                  }
                }
              }
            }
          } 
        }
      }
    }
  }
  
  `);

  res.status(200).send(result)
}

export default allowCors(handler)