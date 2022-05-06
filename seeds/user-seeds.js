const { User } = require("../models");

const userData = [
  {
    id: 1,
    username: "Elon",
    password: "Musk123",
  },
  {
    id: 2,
    username: "Jack",
    password: "Dorsey123",
  },
  {
    id: 3,
    username: "Mark",
    password: "Zuckerberg123",
  },
  {
    id: 4,
    username: "Jeff",
    password: "Bezos123",
  },
  {
    id: 5,
    username: "Ariana",
    password: "Huffington123",
  },
];

const seedUser = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUser;
