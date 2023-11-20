interface Assignee {
  name: string;
}

interface UnifiedIssue {
  title: string;
  assignees: Assignee[];
  author: Assignee;
  body: string;
  category: string;
  statusChangeTime: Date;
  createdAt: Date;
  comments: string[];
  lastEditedAt: Date;
  projectID: number;
  dueDate: Date;
  labels: string[];
  dependencies?: UnifiedIssue[];
}
