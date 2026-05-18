const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("../config/db");
const Post = require("../models/Post");
const calculateReadingTime = require("./readingTime");

dotenv.config();
connectDB();

const samplePosts = [
  {
    title: "Getting Started With React",
    content:
      "React is a popular JavaScript library for building user interfaces. It allows developers to create reusable components and build fast applications.",
    category: "Technology",
    tags: ["react", "javascript", "frontend"],
    isFeatured: true
  },
  {
    title: "Top Study Tips for College Students",
    content:
      "Studying effectively requires planning, focus and consistency. Break your study sessions into smaller chunks and revise regularly.",
    category: "Study",
    tags: ["study", "college", "productivity"],
    isFeatured: true
  },
  {
    title: "My First Solo Trip Experience",
    content:
      "Traveling solo teaches independence and confidence. Planning your trip and staying safe are key aspects of enjoying your journey.",
    category: "Travel",
    tags: ["travel", "experience"],
    isFeatured: false
  },
  {
    title: "Node.js Backend Basics",
    content:
      "Node.js allows JavaScript to run on the server. Express framework helps build APIs quickly and efficiently.",
    category: "Technology",
    tags: ["node", "backend"],
    isFeatured: false
  }
];

const seedDB = async () => {
  try {
    await Post.deleteMany();

    const postsWithReadingTime = samplePosts.map(post => ({
      ...post,
      readingTime: calculateReadingTime(post.content)
    }));

    await Post.insertMany(postsWithReadingTime);

    console.log("Database Seeded Successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedDB();

