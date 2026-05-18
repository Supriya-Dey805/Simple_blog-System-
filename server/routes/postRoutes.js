const express = require("express");
const router = express.Router();

const {
  createPost,
  getPosts,
  getFeaturedPosts,
  likePost,
  searchPosts,
  getPostsByCategory
} = require("../controllers/postController");

router.post("/", createPost);
router.get("/", getPosts);
router.get("/featured", getFeaturedPosts);
router.get("/search", searchPosts);
router.get("/category/:category", getPostsByCategory);
router.put("/:id/like", likePost);

module.exports = router;