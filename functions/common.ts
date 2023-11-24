export interface Assignee {
  name: string;
}

export interface IUnifiedIssue {
  title: string;
  assignees: Assignee[];
  author: Assignee;
  body: string;
  category: string;
  statusChangeTime: Date;
  createdAt: Date;
  comments: string[];
  lastEditedAt: Date;
  projectID: string;
  dueDate: Date;
  labels: string[];
  dependencies?: IUnifiedIssue[];
}
