const users = [
  {
    id: 1,
    name: "Pratyay",
    email: "pratyay@mail.com",
    password: "1234",
  },
  {
    id: 2,
    name: "Lewis",
    email: "lewis@main.com",
    password: "1234",
  },
];

const getUsers = () => users;

const getUserById = (id) => users.find((user) => user.id === id);

const getUserByEmail = (email) => users.find((user) => user.email === email);

const addUser = (user) => {
  user.id = users.length + 1;
  users.push(user);
};

module.exports = {
  getUsers,
  getUserByEmail,
  getUserById,
  addUser,
};
