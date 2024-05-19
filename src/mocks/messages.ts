const messagesData = {
  // messages between sender and receiver
  messages: [
    {
      message: "Hello, how are you?",
      time: new Date(new Date().getTime() - 12 * 60000).toISOString(),
      senderID: "1",
    },
    {
      message: "I am fine",
      time: new Date(new Date().getTime() - 12 * 60000).toISOString(),
      senderID: "2",
    },
    {
      message: "How about you?",
      time: new Date(new Date().getTime() - 12 * 60000).toISOString(),
      senderID: "1",
    },
    {
      message: "I am fine too",
      time: new Date(new Date().getTime() - 12 * 60000).toISOString(),
      senderID: "2",
    },
    {
      message: "That's great",
      time: new Date(new Date().getTime() - 12 * 60000).toISOString(),
      senderID: "1",
    },
    {
      message: "When's the deadline for the project?",
      time: new Date(new Date().getTime() - 12 * 60000).toISOString(),
      senderID: "1",
    },
    {
      message: "It's on Friday",
      time: new Date(new Date().getTime() - 12 * 60000).toISOString(),
      senderID: "2",
    },
    {
      message: "How far have you gone with the project?",
      time: new Date(new Date().getTime() - 12 * 60000).toISOString(),
      senderID: "2",
    },
    {
      message: "Are you done with the chat feature?",
      time: new Date(new Date().getTime() - 12 * 60000).toISOString(),
      senderID: "2",
    },
  ],
};

const senders: {
  [key: string]: { id: string; name: string; avatar: string; status: string };
} = {
  1: {
    id: "1",
    name: "Elmer Laverty",
    avatar: "https://robohash.org/John Doe",
    status: "Online",
  },
  2: {
    id: "2",
    name: "Florrencio Dorrance",
    avatar: "https://robohash.org/name=Jane Doe",
    status: "Online",
  },
  3: {
    id: "3",
    name: "Lavern Laboy",
    avatar: "https://robohash.org/name=Alice",
    status: "Online",
  },
  4: {
    id: "4",
    name: "Titus Kitamura",
    avatar: "https://robohash.org/name=Bob",
    status: "Online",
  },
  5: {
    id: "5",
    name: "Geoffrey Mott",
    avatar: "https://robohash.org/name=Charlie",
    status: "Online",
  },
};

export const getMessages = async (id: string) => {
  // get from mock api
  const sender = senders[id];

  const data: typeof messagesData = await new Promise((resolve) =>
    setTimeout(() => {
      resolve({ ...messagesData, sender });
    }, 10)
  );

  return { messages: data.messages, sender: data.sender };
};
