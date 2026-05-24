const express = require("express");

const router = express.Router();

const {
  createPost,
  getAllPosts,
  getSinglePost,
  updatePost,
  deletePost,
  likePost,
  addComment
} = require("../controllers/postController");


router.post("/", createPost);

router.get("/", getAllPosts);

router.put("/like/:id", likePost);

router.get("/:id", getSinglePost);

router.put("/:id", updatePost);

router.delete("/:id", deletePost);

router.post("/:id/comment", addComment);

module.exports = router;