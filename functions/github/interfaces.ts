interface IStatus {
    column: string;
    updatedAt: Date;
}

interface IProject {
    id: string
}

interface ILabels {
    nodes: { name: string }[]
}

interface IComments {
    nodes: { body: string }[]
}

interface IAssignees {
    nodes: { login: string }[]
}

interface IAuthor {
    login: string;
}


interface IMilestone {
    dueOn: Date;
}

interface IContent {
    assignees: IAssignees;
    author: IAuthor;
    body: string;
    createdAt: Date,
    comments: IComments,
    labels: ILabels,
    lastEditedAt: Date | null,
    milestone: IMilestone | null,
    title: string,
    updatedAt: Date,
}

/**
 * Information about a GitHub issue.
 */
export interface IGithubIssue {
    status: IStatus,
    project: IProject;
    content: IContent
}