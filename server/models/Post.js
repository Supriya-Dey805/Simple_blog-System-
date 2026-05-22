const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  category: String,
  tags: [String],
  likes: {
    type: Number,
    default: 0
  },
  readingTime: String,
  isFeatured: {
    type: Boolean,
    default: false
  },
  comments: [
  {
    username: String,
    text: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  }
],
  createdAt: {
    type: Date,
    default: Date.now
  }
});



module.exports = mongoose.model("Post", postSchema);