import { Conversation } from "@/types/converstaion";

export const convoMock: {
  data: Conversation[];
} = {
  // Mocked data
  data: [
    {
      id: "1",
      sender: {
        id: "1",
        name: "Elmer Laverty",
        avatar: "https://robohash.org/John Doe",
        status: "Online",
      },
      lastMessage: "Hello, how are you?",
      lastMessageTime: new Date(
        new Date().getTime() - 12 * 60000
      ).toISOString(),

      tags: ["bug", "question"],
    },
    {
      id: "2",
      sender: {
        id: "2",
        name: "Florrencio Dorrance",
        avatar: "https://robohash.org/name=Jane Doe",
        status: "Online",
      },
      lastMessage: "Hello, how are you?",
      lastMessageTime: "2024-03-01T00:00:00.000Z",
      tags: ["feature", "question"],
    },
    {
      id: "3",
      sender: {
        id: "3",
        name: "Lavern Laboy",
        avatar: "https://robohash.org/name=Alice",
        status: "Online",
      },
      lastMessage: "Hello, how are you?",
      lastMessageTime: "2021-09-01T00:00:00.000Z",
      tags: ["feedback", "bug"],
    },
    {
      id: "4",
      sender: {
        id: "4",
        name: "Titus Kitamura",
        avatar: "https://robohash.org/name=Bob",
        status: "Online",
      },
      lastMessage: "Hello, how are you?",
      lastMessageTime: "2021-09-01T00:00:00.000Z",
      tags: ["support", "feature"],
    },
    {
      id: "5",
      sender: {
        id: "5",
        name: "Geoffrey Mott",
        avatar: "https://robohash.org/name=Charlie",
        status: "Online",
      },
      lastMessage: "Hello, how are you?",
      lastMessageTime: "2021-09-01T00:00:00.000Z",
      tags: ["other", "support"],
    },
  ],
};

export const getConversations = async () => {
  const conversations: Conversation[] = await new Promise((resolve) =>
    setTimeout(() => {
      resolve(convoMock.data);
    }, 10)
  );

  return { conversations };
};
