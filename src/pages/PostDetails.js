import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Base from "../components/Base";
import API from "../services/api";
import { addComment } from "../services/api";

const PostDetails = () => {

  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [comment, setComment] = useState("");
  const [username, setUsername] = useState("");
  const [relatedPosts, setRelatedPosts] = useState([]);

  const btn = {
    padding: "10px 16px",
    marginRight: "10px",
    border: "none",
    borderRadius: "8px",
    background: "#203a43",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold"
  };

  useEffect(() => {
    loadPost();
  }, []);

  const loadPost = async () => {
    try {
      const res = await API.get(`/posts/${id}`);
      setPost(res.data);

      const related = await API.get("/posts");

      const filtered = related.data.filter(
        (p) =>
          p.category === res.data.category &&
          p._id !== res.data._id
      );

      setRelatedPosts(filtered.slice(0, 3));

    } catch (error) {
      console.log(error);
    }
  };

  const handleComment = async () => {
    if (!username || !comment) {
      return;
    }

    try {
      await addComment(id, {
        username,
        text: comment
      });

      loadPost();
      setComment("");
      setUsername("");

    } catch (error) {
      console.log(error);
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied!");
  };

  const shareWhatsApp = () => {
    const url = window.location.href;
    window.open(`https://wa.me/?text=${url}`, "_blank");
  };

  const shareTwitter = () => {
    const url = window.location.href;
    window.open(`https://twitter.com/intent/tweet?url=${url}`, "_blank");
  };

  if (!post) {
    return <h2>Loading...</h2>;
  }

  return (
    <Base>
      <div style={{ maxWidth: "900px", margin: "auto", padding: "30px" }}>

        <p style={{ color: "#777", fontWeight: "bold" }}>
          {post.category}
        </p>

        <h1 style={{ fontSize: "52px", fontWeight: "bold", marginBottom: "25px" }}>
          {post.title}
        </h1>

        <p style={{ color: "#777", fontSize: "18px" }}>
          ✍ By {post.author}
        </p>

        <div style={{ display: "flex", gap: "20px", marginBottom: "20px", color: "#666" }}>
          <span>❤️ {post.likes} Likes</span>
          <span>📚 {post.readingTime}</span>
          <span>🕒 {new Date(post.createdAt).toLocaleDateString()}</span>
        </div>

        <hr />

        <p style={{ lineHeight: "38px", fontSize: "20px", color: "#333", marginTop: "30px" }}>
          {post.content}
        </p>

        <div style={{ marginTop: "40px" }}>
          {post.tags &&
            post.tags.map((tag, index) => (
              <span
                key={index}
                style={{
                  background: "#eee",
                  padding: "10px 16px",
                  borderRadius: "20px",
                  marginRight: "10px"
                }}
              >
                #{tag}
              </span>
            ))}
        </div>

        <div style={{ marginTop: "70px" }}>
          <h2 style={{ marginBottom: "25px", fontWeight: "bold" }}>
            🔥 Related Posts
          </h2>

          {relatedPosts.map((item) => (
            <div
              key={item._id}
              style={{
                padding: "18px",
                border: "1px solid #ddd",
                borderRadius: "12px",
                marginBottom: "15px"
              }}
            >
              <h4>{item.title}</h4>
              <p>{item.category}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "20px" }}>
          <button onClick={copyLink} style={btn}>📋 Copy Link</button>
          <button onClick={shareWhatsApp} style={btn}>📱 WhatsApp</button>
          <button onClick={shareTwitter} style={btn}>🐦 Twitter</button>
        </div>

        <div style={{ marginTop: "60px" }}>
          <h2 style={{ marginBottom: "25px", fontWeight: "bold" }}>
            💬 Comments
          </h2>

          <input
            type="text"
            placeholder="Your Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "10px",
              border: "1px solid #ccc"
            }}
          />

          <textarea
            placeholder="Write a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows="4"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #ccc"
            }}
          />

          <button
            onClick={handleComment}
            style={{
              marginTop: "15px",
              padding: "12px 22px",
              border: "none",
              borderRadius: "10px",
              background: "#203a43",
              color: "white",
              fontWeight: "bold"
            }}
          >
            Add Comment
          </button>

          <div style={{ marginTop: "40px" }}>
            {post.comments &&
              post.comments.map((c, index) => (
                <div
                  key={index}
                  style={{
                    background: "#f4f4f4",
                    padding: "18px",
                    borderRadius: "12px",
                    marginBottom: "15px"
                  }}
                >
                  <h5 style={{ fontWeight: "bold" }}>{c.username}</h5>
                  <p>{c.text}</p>
                </div>
              ))}
          </div>

        </div>
      </div>
    </Base>
  );
};

export default PostDetails;