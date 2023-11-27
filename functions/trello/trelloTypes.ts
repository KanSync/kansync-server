export interface Member {
  id: string;
  fullName: string;
}

export interface Label {
  id: string;
  name: string;
  color: string;
}

export interface Card {
  id: string;
  name: string;
  desc: string;
  category?: string;
  idMembers: string[];
  memberNames?: string[];
  createdDate?: Date;
  assignedCount: number;
  isClosed: boolean;
  dateLastActivity: Date;
  due?: Date;
  labels: Label[];
  projectID: string;
}

export interface List {
  cards: Card[];
  name: string;
}
