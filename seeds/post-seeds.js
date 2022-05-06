const { Post } = require("../models");

const postData = [
  {
    id: 1,
    title: "How Do You Centre A Div?",
    content:
      "Correctly named, I feel so foolish trying to get to grips with CSS!",
    userId: 3,
  },
  {
    id: 2,
    title: "Today...I Was Tired",
    content:
      "Taking breaks is an important part of work, just like staying hydrated!",
    userId: 2,
  },
  {
    id: 3,
    title: "Should I Buy Twitter?",
    content:
      "Internet people! Should I just buy Twitter and put it out of it's misery? Is that even possible?",
    userId: 1,
  },
  {
    id: 4,
    title: "If I Ruled The World...",
    content: "Oh wait...haha, whoops, silly me!",
    userId: 4,
  },
  {
    id: 5,
    title: "Hello? Is There Anybody Out There?",
    content:
      "The delcine of print media is the bane of my life. Must be wine o'clock somewhere.",
    userId: 5,
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
