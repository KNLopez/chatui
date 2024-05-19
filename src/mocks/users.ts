// chat users
export const users = [
  {
    id: 1,
    name: "John Doe",
    title: "Software Engineer",
    avatar: "https://robohash.org/John Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
    title: "Software Engineer",
    avatar: "https://robohash.org/name=Jane Doe",
  },
  {
    id: 3,
    name: "Alice",
    title: "Software Engineer",
    avatar: "https://robohash.org/name=Alice",
  },
  {
    id: 4,
    name: "Bob",
    title: "Software Engineer",
    avatar: "https://robohash.org/name=Bob",
  },
  {
    id: 5,
    name: "Charlie",
    title: "Software Engineer",
    avatar: "https://robohash.org/name=Charlie",
  },
];

export const getUser = async (id: number) => {
  const user = users.find((user) => user.id === id);
  return user;
};

export const getUsers = async () => {
  return new Promise<typeof users>((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 10);
  });
};
