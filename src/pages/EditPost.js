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
    author:"",
    isFeatured: false
  });

  // LOAD POST
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

  // HANDLE CHANGE
  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setPost({
      ...post,
      [name]: type === "checkbox" ? checked : value
    });
  };

  // UPDATE POST
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

      <h1>Edit Blog Post</h1>

      <form onSubmit={updateThisPost} style={{maxWidth:"600px"}}>

        <input
          type="text"
          name="title"
          value={post.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />

        <input
  name="author"
  value={post.author}
  onChange={handleChange}
  placeholder="Author Name"
/>


        <br/><br/>

        <textarea
          name="content"
          rows="6"
          value={post.content}
          onChange={handleChange}
          placeholder="Content"
          required
        />

        <br/><br/>

        <input
          type="text"
          name="category"
          value={post.category}
          onChange={handleChange}
          placeholder="Category"
        />

        <br/><br/>

        <input
          type="text"
          name="tags"
          value={post.tags}
          onChange={handleChange}
          placeholder="Tags"
        />

        <br/><br/>

        <input
          type="text"
          name="readingTime"
          value={post.readingTime}
          onChange={handleChange}
          placeholder="Reading Time"
        />

        <br/><br/>

        <label>

          <input
            type="checkbox"
            name="isFeatured"
            checked={post.isFeatured}
            onChange={handleChange}
          />

          Featured Post

        </label>

        <br/><br/>

        <button type="submit">
          Update Post
        </button>

      </form>

    </Base>
  );
};

export default EditPost;