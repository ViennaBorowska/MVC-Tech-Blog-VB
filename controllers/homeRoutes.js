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

router.get("/post/:id", async (req, res) => {
  try {
    const singlePost = await Post.findByPk(req.params.id, {
      include: [User, Comments],
    });
    const post = singlePost.get({ plain: true });
    res.render("single-post", { post, userId: req.session.userId });
  } catch (error) {
    console.log(error);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
  }
  res.render("login");
});
router.get("/signup", (req, res) => {
  console.log("route is being hit");
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
  }
  res.render("signup");
});

module.exports = router;
