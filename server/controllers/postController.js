const Post = require("../models/Post");


// CREATE POST
exports.createPost = async (req, res) => {

  try {

    const post = await Post.create(req.body);

    res.status(201).json(post);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};


// GET ALL POSTS
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


// GET SINGLE POST
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


// UPDATE POST
exports.updatePost = async (req, res) => {

  try {

    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedPost);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};


// DELETE POST
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


// LIKE POST
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