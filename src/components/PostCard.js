import React from "react";
import API from "../services/api";

const PostCard = ({ post }) => {

  const likePost = async () => {
    await API.put(`/posts/${post._id}/like`);
    window.location.reload();
  };

  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "15px",
      margin: "15px",
      borderRadius: "10px"
    }}>
      <h2>{post.title}</h2>
      <p>{post.content.substring(0,120)}...</p>
      <p><b>Category:</b> {post.category}</p>
      <p><b>Reading time:</b> {post.readingTime}</p>

      <button onClick={likePost}>
        ❤️ {post.likes}
      </button>
    </div>
  );
};

export default PostCard;