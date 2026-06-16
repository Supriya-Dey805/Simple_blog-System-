import JoditEditor from "jodit-react";
import React, { useState } from "react";
import { toast } from "react-toastify";


import API from "../services/api";

import Base from "../components/Base";

const CreatePost = () => {

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
    tags: "",
    readingTime: "",
    author: "",
    image: "",
    status: "published"
  });

  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {

  const file = e.target.files[0];

  setFormData({
    ...formData,
    image: file
  });
};

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const postData = new FormData();

postData.append("title", formData.title);
postData.append("content", formData.content);
postData.append("category", formData.category);
postData.append("author", formData.author);
postData.append("readingTime", formData.readingTime);
postData.append("status", formData.status);
postData.append("image", formData.image);

formData.tags.split(",").forEach((tag) => {
  postData.append("tags", tag.trim());
});

      await API.post("/posts", postData);

      toast.success("Post Created Successfully");

      setFormData({
        title: "",
        content: "",
        category: "",
        tags: "",
        readingTime: "",
        image: "",
        isFeatured: false,
      });

    } catch (error) {

      console.log(error);

      alert("Error creating post");
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
            ✍ Create New Blog Post
          </h1>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="title"
              placeholder="Post Title"
              value={formData.title}
              onChange={handleChange}
              required
              style={styles.input}
            />

            <input
              type="text"
              name="author"
              placeholder="Author Name"
              value={formData.author}
              onChange={handleChange}
              required
              style={styles.input}
            />

            <JoditEditor
  value={formData.content}
  onChange={(newContent) =>
    setFormData({
      ...formData,
      content: newContent
    })
  }
/>

           <select
  name="category"
  value={formData.category}
  onChange={handleChange}
  style={styles.input}
  required
>
  <option value="">Select Category</option>

  <option value="Technology">Technology</option>
  <option value="Artificial Intelligence">Artificial Intelligence</option>
  <option value="Programming">Programming</option>
  <option value="Cyber Security">Cyber Security</option>
  <option value="Cloud Computing">Cloud Computing</option>
  <option value="Travel">Travel</option>
  <option value="Lifestyle">Lifestyle</option>
  <option value="Fitness">Fitness</option>
  <option value="Education">Education</option>
  <option value="Study">Study</option>
  <option value="Business">Business</option>
  <option value="Finance">Finance</option>
  <option value="Sports">Sports</option>
  <option value="Food">Food</option>
</select>

            <input
  type="file"
  name="image"
  accept="image/*"
  onChange={handleFileChange}
  style={styles.input}
/>

            <input
              type="text"
              name="tags"
              placeholder="Tags separated by comma"
              value={formData.tags}
              onChange={handleChange}
              style={styles.input}
            />

            <select
              name="status"
              onChange={handleChange}
              style={styles.input}
            >
              <option value="published">Publish</option>
              <option value="draft">Draft</option>
            </select>

            <input
              type="text"
              name="readingTime"
              placeholder="Reading time (5 min)"
              value={formData.readingTime}
              onChange={handleChange}
              style={styles.input}
            />

            <button
              type="submit"
              style={styles.button}
            >
              🚀 Create Post
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

export default CreatePost;