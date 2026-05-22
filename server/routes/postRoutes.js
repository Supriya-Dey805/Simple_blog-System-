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


// CREATE
router.post("/", createPost);

// READ ALL
router.get("/", getAllPosts);

// LIKE
router.put("/like/:id", likePost);

// READ ONE
router.get("/:id", getSinglePost);

// UPDATE
router.put("/:id", updatePost);

// DELETE
router.delete("/:id", deletePost);

// ADD COMMENT
router.post("/:id/comment", addComment);

module.exports = router;