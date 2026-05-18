import React, { useContext } from 'react';
import { PostContext } from '../context/PostContext';
import PostForm from '../components/PostForm';

const CreatePost = ({ setPage }) => {
  const { addPost } = useContext(PostContext);

  const handleCreate = async (data) => {
    await addPost(data);
    setPage('home');
  };

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '1rem' }}>
      <h2>Create New Post</h2>
      <PostForm onSubmit={handleCreate} />
    </div>
  );
};

export default CreatePost;