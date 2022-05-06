const express = require("express");
const router = express.Router();
const { User, Post } = require("../../models");
const withAuth = require("../../utils/auth");

router.put("/:id", withAuth, async (req, res) => {
  console.log(req.body, "from update");
  try {
    const upPost = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(upPost);
    console.log(upPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

//endpoit /api/post
router.post("/", withAuth, async (req, res) => {
  try {
    console.log(req.body);
    const newPost = await Post.create({
      title: req.body.title,
      content: req.body.content,
      userId: req.session.userId,
    });
    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const delPost = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(delPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
