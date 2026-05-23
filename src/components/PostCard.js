import { Card, CardBody, Button, Badge } from "reactstrap";

import { Link } from "react-router-dom";

import { likePost, deletePost } from "../services/api";

const PostCard = ({ post }) => {

  const handleLike = async () => {

    try {

      await likePost(post._id);

      window.location.reload();

    } catch (err) {

      console.log(err);

    }
  };

  const handleDelete = async () => {

    try {

      const confirmDelete = window.confirm("Delete this post?");

      if(confirmDelete){

        await deletePost(post._id);

        window.location.reload();
      }

    } catch (err) {

      console.log(err);

    }
  };

  const toggleBookmark = (post) => {

  let saved = JSON.parse(localStorage.getItem("bookmarks")) || [];

  const exists = saved.find(p => p._id === post._id);

  if(exists){
    saved = saved.filter(p => p._id !== post._id);
  } else {
    saved.push(post);
  }

  localStorage.setItem("bookmarks", JSON.stringify(saved));
};

  return (

    <Card
      className="mb-4 shadow"
      style={{
        borderRadius: "18px",

        border: post.isFeatured
          ? "2px solid gold"
          : "1px solid #ddd",

        background: post.isFeatured
          ? "linear-gradient(to right, #fff8dc, #ffffff)"
          : "#fff",

        transition: "0.3s",

        overflow: "hidden"
      }}
    >

      <CardBody>

        {/* Featured Badge */}
        {post.isFeatured && (

          <Badge
            color="warning"
            pill
            style={{
              marginBottom: "12px",
              fontSize: "14px",
              padding: "8px"
            }}
          >
            ⭐ Featured Post
          </Badge>

        )}

        {/* Category */}
        <p
          style={{
            color: "#777",
            marginBottom: "5px",
            fontWeight: "bold"
          }}
        >
          {post.category}
        </p>

{
  post.image && (

    <img
      src={post.image}
      alt="blog"
      style={{
        width: "100%",
        height: "250px",
        objectFit: "cover",
        borderRadius: "12px",
        marginBottom: "15px"
      }}
    />

  )
}
        {/* CLICKABLE TITLE */}
        <Link
          to={`/posts/${post._id}`}
          style={{
            textDecoration: "none",
            color: "black"
          }}
        >

          <h2
            style={{
              fontWeight: "bold",
              marginBottom: "15px",
              cursor: "pointer"
            }}
          >
            {post.title}
          </h2>

        </Link>

        <p
  style={{
    color: "#666",
    marginBottom: "10px"
  }}
>
  ✍ By {post.author}
</p>

        {/* Content */}
        <p
          style={{
            color: "#444",
            lineHeight: "28px"
          }}
        >
          {post.content.substring(0, 150)}...
        </p>

        {/* Read More */}
        <Link
          to={`/posts/${post._id}`}
          style={{
            color: "#007bff",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          Read Full Blog →
        </Link>

        {/* Tags */}
        <div style={{ marginTop: "15px" }}>

          {
            post.tags &&
            post.tags.map((tag, index) => (

              <Badge
                key={index}
                color="dark"
                className="me-2"
                style={{
                  padding: "8px",
                  fontSize: "12px"
                }}
              >
                #{tag}
              </Badge>

            ))
          }

        </div>

        {/* Extra Info */}
        <div
          style={{
            marginTop: "18px",
            color: "#555"
          }}
        >

          <p>
            ❤️ Likes:
            <strong> {post.likes}</strong>
          </p>

          <p>
            📚 Reading Time:
            <strong> {post.readingTime}</strong>
          </p>

          <p>
            🕒 Posted On:
            <strong>
              {" "}
              {new Date(post.createdAt).toLocaleDateString()}
            </strong>
          </p>

        </div>

        {/* Buttons */}
        <div style={{ marginTop: "20px" }}>

          <Button
            color="danger"
            onClick={handleLike}
            className="me-2"
          >
            ❤️ Like
          </Button>

          <Button
            color="primary"
            tag={Link}
            to={`/edit/${post._id}`}
            className="me-2"
          >
            ✏ Edit
          </Button>

          <Button
            color="dark"
            onClick={handleDelete}
          >
            🗑 Delete
          </Button>
          <button onClick={() => toggleBookmark(post)}>
  🔖 Bookmark
</button>

        </div>

      </CardBody>
    </Card>
  );
};

export default PostCard;