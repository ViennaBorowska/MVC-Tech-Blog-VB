const router = require("express").Router();

const { post } = require(".");
const { Post, User, Comments } = require("../models");

router.get("/", async (req, res) => {
  try {
    const allPosts = await Post.findAll({ include: [User] });
    const posts = allPosts.map((post) => post.get({ plain: true }));
    res.render("homepage", { posts, userId: req.session.userId });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
