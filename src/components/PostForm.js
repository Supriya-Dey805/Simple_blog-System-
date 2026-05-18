import React, { useState } from 'react';
import '../styles/form.css';

const PostForm = ({ onSubmit, initialData = {} }) => {
  const [title, setTitle] = useState(initialData.title || '');
  const [content, setContent] = useState(initialData.content || '');
  const [category, setCategory] = useState(initialData.category || '');
  const [tags, setTags] = useState(initialData.tags ? initialData.tags.join(', ') : '');
  const [featured, setFeatured] = useState(initialData.featured || false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content || !category) return alert('Please fill in all required fields');

    onSubmit({
      title,
      content,
      category,
      tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag !== ''),
      featured
    });
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title *</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Category *</label>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Tags (comma separated)</label>
          <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} placeholder="e.g. React, JavaScript" />
        </div>
      </div>
      <div className="form-group">
        <label>Content *</label>
        <textarea rows="8" value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
      </div>
      <div className="form-group checkbox">
        <label>
          <input type="checkbox" checked={featured} onChange={(e) => setFeatured(e.target.checked)} />
          Feature this post
        </label>
      </div>
      <button type="submit" className="btn-submit">Save Post</button>
    </form>
  );
};

export default PostForm;