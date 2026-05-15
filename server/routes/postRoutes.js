const express = require("express");
const router = express.Router();

const {
  createPost,
  getPosts,
  getFeaturedPosts,
  likePost
} = require("../controllers/postController");

router.post("/", createPost);
router.get("/", getPosts);
router.get("/featured", getFeaturedPosts);
router.put("/:id/like", likePost);

module.exports = router;