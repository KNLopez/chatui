import { User } from "./user";

export type Conversation = {
  id: string;
  sender: User;
  lastMessage: string;
  lastMessageTime: string;
  tags: Tag[];
};

export type Tag =
  | "bug"
  | "question"
  | "feature"
  | "feedback"
  | "support"
  | "other"
  | "chip";
