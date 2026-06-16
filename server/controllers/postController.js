const Post = require("../models/Post");

exports.createPost = async (req, res) => {

  try {

    const post = await Post.create({
      ...req.body,
      image: req.file ? req.file.path : ""
    });

    res.status(201).json(post);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

exports.getAllPosts = async (req, res) => {

  try {

    const posts = await Post.find().sort({ createdAt: -1 });

    res.status(200).json(posts);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

exports.getSinglePost = async (req, res) => {

  try {

    const post = await Post.findById(req.params.id);

    res.status(200).json(post);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

exports.updatePost = async (req, res) => {

  try {

    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedPost);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};
exports.deletePost = async (req, res) => {

  try {

    await Post.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Post deleted successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

exports.likePost = async (req, res) => {

  try {

    const post = await Post.findById(req.params.id);

    post.likes = post.likes + 1;

    await post.save();

    res.status(200).json(post);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

const addComment = async (req, res) => {

  try {

    const post = await Post.findById(req.params.id);

    const newComment = {
      username: req.body.username,
      text: req.body.text
    };

    post.comments.push(newComment);

    await post.save();

    res.json(post);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};

exports.addComment = addComment;