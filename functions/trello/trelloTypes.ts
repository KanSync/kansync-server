
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
}

export interface List {
  cards: Card[];
}
