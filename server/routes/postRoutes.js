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

// LIKE POST
router.put("/posts/like/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    post.likes = post.likes + 1;
    const updatedPost = await post.save();
    res.json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;