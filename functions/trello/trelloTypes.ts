export interface Member {
  id: string;
  fullName: string;
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
}

export interface List {
  cards: Card[];
  name: string;
}
