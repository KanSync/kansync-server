export const GET_PROJECT_CARDS = `
query GET_PROJECT_CARDS($login: String!) {
  organization(login: $login) {
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
                          activeLockReason
                          assignees {
                              totalCount
                          }
                          author {
                              avatarUrl
                              login
                              resourcePath
                              url
                          }
                          authorAssociation
                          body
                          bodyResourcePath
                          bodyHTML
                          closed
                          bodyText
                          bodyUrl
                          closedAt
                          createdAt
                          comments(first: 10) {
                              totalCount
                          }
                          createdViaEmail
                          databaseId
                          editor {
                              avatarUrl
                              login
                              resourcePath
                              url
                          }
                          id
                          includesCreatedEdit
                          isPinned
                          isReadByViewer
                          labels(first: 10) {
                              totalCount
                          }
                          lastEditedAt
                          locked
                          milestone {
                              closed
                              closedAt
                              createdAt
                              description
                              dueOn
                              id
                              number
                              progressPercentage
                              resourcePath
                              state
                              title
                              updatedAt
                              url
                              viewerCanClose
                              viewerCanReopen
                          }
                          number
                          linkedBranches(first: 10) {
                              totalCount
                          }
                          participants(first: 10) {
                              totalCount
                          }
                          projectCards(first: 10) {
                              totalCount
                          }
                          projectItems(first: 10) {
                              totalCount
                          }
                          publishedAt
                          reactionGroups {
                              content
                              createdAt
                              viewerHasReacted
                          }
                          reactions(first: 10) {
                              totalCount
                              viewerHasReacted
                          }
                          repository {
                              allowUpdateBranch
                              archivedAt
                              autoMergeAllowed
                              createdAt
                              databaseId
                              deleteBranchOnMerge
                              description
                              descriptionHTML
                              diskUsage
                              forkCount
                              forkingAllowed
                              hasDiscussionsEnabled
                              hasIssuesEnabled
                              hasProjectsEnabled
                              hasVulnerabilityAlertsEnabled
                              hasWikiEnabled
                              homepageUrl
                              id
                              isArchived
                              isBlankIssuesEnabled
                              isDisabled
                              isEmpty
                              isFork
                              isInOrganization
                              isLocked
                              isMirror
                              isPrivate
                              isSecurityPolicyEnabled
                              isTemplate
                              isUserConfigurationRepository
                              lockReason
                              mergeCommitAllowed
                              mergeCommitMessage
                              mergeCommitTitle
                              mirrorUrl
                              name
                              nameWithOwner
                              openGraphImageUrl
                              projectsResourcePath
                              projectsUrl
                              pushedAt
                              rebaseMergeAllowed
                              resourcePath
                              securityPolicyUrl
                              shortDescriptionHTML
                              squashMergeAllowed
                              squashMergeCommitMessage
                              squashMergeCommitTitle
                              squashPrTitleUsedAsDefault
                              sshUrl
                              stargazerCount
                              tempCloneToken
                              updatedAt
                              url
                              usesCustomOpenGraphImage
                              viewerCanAdminister
                              viewerCanCreateProjects
                              viewerCanSubscribe
                              viewerCanUpdateTopics
                              viewerDefaultCommitEmail
                              viewerDefaultMergeMethod
                              viewerHasStarred
                              viewerPermission
                              viewerPossibleCommitEmails
                              viewerSubscription
                              visibility
                              webCommitSignoffRequired
                          }
                          resourcePath
                          state
                          stateReason
                          title
                          titleHTML
                          updatedAt
                          url
                          userContentEdits(first: 10) {
                              totalCount
                          }
                          trackedInIssues(first: 10) {
                              totalCount
                          }
                          trackedIssues(first: 10) {
                              totalCount
                          }
                          viewerCanClose
                          viewerCanDelete
                          viewerCanReact
                          viewerCanReopen
                          viewerCanSubscribe
                          viewerCanUpdate
                          viewerCannotUpdateReasons
                          viewerDidAuthor
                          viewerSubscription
                          viewerThreadSubscriptionFormAction
                          viewerThreadSubscriptionStatus
                      }
                  }
              }
          }
      }
  }
}

`;
