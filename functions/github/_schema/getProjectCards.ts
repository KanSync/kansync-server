export const GET_PROJECT_CARDS = `
query($repo: String!, $projectName: String!, $cursor: String!) {
  search(first: 1, type: REPOSITORY, query: $repo) {
    nodes {
      ... on Repository {
        projectsV2(first: 1, query: $projectName) {
          nodes {
            items(first: 50, after: $cursor) {
              pageInfo {
                startCursor
                hasNextPage
                endCursor
              }
              nodes {
                status: fieldValueByName(name: "Status") {
                  ... on ProjectV2ItemFieldSingleSelectValue {
                    column: name
                    updatedAt
                  }
                }
                project {
                  id
                }
                content {
                  ... on Issue {
                    assignees(first: 50) {
                      nodes {
                        login
                      }
                    }
                    author {
                      login
                    }
                    body
                    createdAt
                    comments(first: 50) {
                      nodes {
                        body
                      }
                    }
                    labels(first: 50) {
                      nodes {
                        name
                      }
                    }
                    lastEditedAt
                    milestone {
                      dueOn
                    }
                    title
                    updatedAt
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

`;