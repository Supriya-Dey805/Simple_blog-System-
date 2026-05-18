import React, { useContext } from 'react';
import { PostContext } from '../context/PostContext';
import PostForm from '../components/PostForm';

const EditPost = ({ id, setPage }) => {
  const { posts, editPost } = useContext(PostContext);
  const post = posts.find(p => p.id === id);

  if (!post) return <div>Post not found.</div>;

  const handleUpdate = async (updatedData) => {
    await editPost(id, updatedData);
    setPage('details');
  };

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '1rem' }}>
      <h2>Edit Post</h2>
      <PostForm initialData={post} onSubmit={handleUpdate} />
      <button className="btn-cancel" onClick={() => setPage('details')} style={{ marginTop: '1rem', background: 'none', border: 'none', color: '#666', cursor: 'pointer' }}>Cancel</button>
    </div>
  );
};

export default EditPost;