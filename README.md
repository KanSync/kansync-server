# KanSync-Server
The backend portion of the project KanSync


### Data extraction from Github

The workflow is:

- Obtain PAT (Personal Access Token) from Github.
- Browse through [GitHub GraphQL](https://docs.github.com/en/graphql/reference) API to find the stuff needed.
- Use a GraphQL client such as [Altair GraphQL Client](https://github.com/altair-graphql/altair) to test the queries and mutations. 
- When satisfied with the query, implement it in the code. **Note**: The *.env* file is not included in the repository, so you need to create it yourself. The file should contain the following:

```
PERSONAL_ACCESS_TOKEN=ghp*******************
```








