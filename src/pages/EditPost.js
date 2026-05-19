import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import Base from "../components/Base";

import API, { updatePost } from "../services/api";

const EditPost = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const [post, setPost] = useState({
    title: "",
    content: "",
    category: "",
    tags: "",
    readingTime: "",
    isFeatured: false
  });

  useEffect(() => {
    loadPost();
  }, []);

  const loadPost = async () => {

    const res = await API.get(`/posts/${id}`);

    setPost({
      ...res.data,
      tags: res.data.tags?.join(",")
    });
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

    const updatedData = {
      ...post,
      tags: post.tags.split(",")
    };

    await updatePost(id, updatedData);

    alert("Post updated successfully");

    navigate("/");
  };

  return (

    <Base>

      <h1>Edit Post</h1>

      <form onSubmit={updateThisPost} style={{ maxWidth: "600px" }}>

        <input
          name="title"
          value={post.title}
          onChange={handleChange}
          placeholder="Title"
        />

        <br /><br />

        <textarea
          name="content"
          value={post.content}
          onChange={handleChange}
          rows="6"
          placeholder="Content"
        />

        <br /><br />

        <input
          name="category"
          value={post.category}
          onChange={handleChange}
          placeholder="Category"
        />

        <br /><br />

        <input
          name="tags"
          value={post.tags}
          onChange={handleChange}
          placeholder="Tags comma separated"
        />

        <br /><br />

        <input
          name="readingTime"
          value={post.readingTime}
          onChange={handleChange}
          placeholder="Reading time"
        />

        <br /><br />

        <label>

          Featured Post

          <input
            type="checkbox"
            name="isFeatured"
            checked={post.isFeatured}
            onChange={handleChange}
          />

        </label>

        <br /><br />

        <button type="submit">
          Update Post
        </button>

      </form>

    </Base>
  );
};

export default EditPost;