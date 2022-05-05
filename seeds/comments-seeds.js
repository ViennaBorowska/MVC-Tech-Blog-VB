const { Comments } = require("../models");

const commentData = [
  { id: 1, content: "Nice point of view", userId: 5, postId: 4 },
  { id: 2, content: "I really like your post", userId: 1, postId: 2 },
  { id: 3, content: "Fascinating", userId: 3, postId: 3 },
];

const seedComments = () => Comments.bulkCreate(commentData);

module.exports = seedComments;
