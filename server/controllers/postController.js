const Post = require("../models/Post");
const calculateReadingTime = require("../utils/readingTime");

// CREATE POST
exports.createPost = async (req, res) => {
  try {
    const { title, content, category, tags, isFeatured } = req.body;

    const readingTime = calculateReadingTime(content);

    const post = await Post.create({
      title,
      content,
      category,
      tags,
      isFeatured,
      readingTime
    });

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL POSTS + SORT
exports.getPosts = async (req, res) => {
  try {
    const sortType = req.query.sort;
    let sortOption = { createdAt: -1 };

    if (sortType === "popular") sortOption = { likes: -1 };

    const posts = await Post.find().sort(sortOption);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET FEATURED POSTS
exports.getFeaturedPosts = async (req, res) => {
  const posts = await Post.find({ isFeatured: true }).limit(5);
  res.json(posts);
};

// LIKE POST
exports.likePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  post.likes += 1;
  await post.save();
  res.json(post);
};