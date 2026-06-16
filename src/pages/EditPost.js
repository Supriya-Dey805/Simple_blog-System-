import JoditEditor from "jodit-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import Base from "../components/Base";
import API from "../services/api";

const EditPost = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const [post, setPost] = useState({
    title: "",
    content: "",
    category: "",
    tags: "",
    readingTime: "",
    author: ""
  });

  useEffect(() => {
    loadPost();
  }, []);

  const loadPost = async () => {

    try {

      const res = await API.get(`/posts/${id}`);

      setPost({
        ...res.data,
        tags: res.data.tags.join(", ")
      });

    } catch (error) {

      console.log(error);

    }
  };

  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setPost({
      ...post,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const updateThisPost = async (e) => {

    e.preventDefault();

    try {

      const updatedData = {
        ...post,
        tags: post.tags.split(",")
      };

      await API.put(`/posts/${id}`, updatedData);

      toast.success("Post Updated Successfully");

      navigate("/");

    } catch (error) {

      console.log(error);

      alert("Update failed");

    }
  };

  return (

    <Base>

      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(to right, #141e30, #243b55)",
          padding: "40px 20px"
        }}
      >

        <div
          style={{
            maxWidth: "700px",
            margin: "auto",
            background: "white",
            padding: "40px",
            borderRadius: "20px",
            boxShadow: "0px 8px 25px rgba(0,0,0,0.3)"
          }}
        >

          <h1
            style={{
              textAlign: "center",
              marginBottom: "30px",
              fontWeight: "bold",
              color: "#203a43"
            }}
          >
            ✏ Edit Blog Post
          </h1>

          <form onSubmit={updateThisPost}>

            <input
              type="text"
              name="title"
              value={post.title}
              onChange={handleChange}
              placeholder="Title"
              required
              style={styles.input}
            />

            <input
              type="text"
              name="author"
              value={post.author}
              onChange={handleChange}
              placeholder="Author Name"
              style={styles.input}
            />

  <JoditEditor
  value={post.content}
  onChange={(newContent) =>
    setPost({
      ...post,
      content: newContent
    })
  }
/>

            <input
              type="text"
              name="category"
              value={post.category}
              onChange={handleChange}
              placeholder="Category"
              style={styles.input}
            />

            <input
              type="text"
              name="tags"
              value={post.tags}
              onChange={handleChange}
              placeholder="Tags"
              style={styles.input}
            />

            <input
              type="text"
              name="readingTime"
              value={post.readingTime}
              onChange={handleChange}
              placeholder="Reading Time"
              style={styles.input}
            />

            <button
              type="submit"
              style={styles.button}
            >
              🚀 Update Post
            </button>

          </form>

        </div>

      </div>

    </Base>
  );
};

const styles = {

  input: {

    width: "100%",

    padding: "14px",

    marginBottom: "20px",

    borderRadius: "12px",

    border: "1px solid #ccc",

    outline: "none",

    fontSize: "15px",

    boxShadow: "0px 4px 10px rgba(0,0,0,0.08)"
  },

  textarea: {

    width: "100%",

    padding: "14px",

    marginBottom: "20px",

    borderRadius: "12px",

    border: "1px solid #ccc",

    outline: "none",

    fontSize: "15px",

    resize: "none",

    boxShadow: "0px 4px 10px rgba(0,0,0,0.08)"
  },

  button: {

    width: "100%",

    padding: "15px",

    border: "none",

    borderRadius: "12px",

    background: "linear-gradient(to right, #141e30, #243b55)",

    color: "white",

    fontWeight: "bold",

    fontSize: "16px",

    marginTop: "25px",

    cursor: "pointer",

    transition: "0.3s"
  }
};

export default EditPost;