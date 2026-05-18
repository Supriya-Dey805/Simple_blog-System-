import { useState } from "react";
import API from "../services/api";
import Base from "../components/Base";

const CreatePost = () => {

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
    tags: "",
    isFeatured: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const postData = {
        ...formData,
        tags: formData.tags.split(",") // convert to array
      };

      await API.post("/posts", postData);

      alert("Post Created Successfully");
      
      // clear form
      setFormData({
        title: "",
        content: "",
        category: "",
        tags: "",
        isFeatured: false
      });

    } catch (error) {
      console.log(error);
      alert("Error creating post");
    }
  };

  return (
    <Base>
      <h1>Create New Blog Post</h1>

      <form onSubmit={handleSubmit} style={{maxWidth:"600px"}}>

        <input
          type="text"
          name="title"
          placeholder="Post Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <br/><br/>

        <textarea
          name="content"
          placeholder="Write content..."
          rows="6"
          value={formData.content}
          onChange={handleChange}
          required
        />
        <br/><br/>

        <input
          type="text"
          name="category"
          placeholder="Category (Technology, Travel...)"
          value={formData.category}
          onChange={handleChange}
        />
        <br/><br/>

        <input
          type="text"
          name="tags"
          placeholder="Tags separated by comma (react,node)"
          value={formData.tags}
          onChange={handleChange}
        />
        <br/><br/>

        <label>
          <input
            type="checkbox"
            name="isFeatured"
            checked={formData.isFeatured}
            onChange={handleChange}
          />
          Featured Post
        </label>

        <br/><br/>

        <button type="submit">Create Post</button>

      </form>
    </Base>
  );
};

export default CreatePost;