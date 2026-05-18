import React, { useContext } from 'react';
import { PostContext } from '../context/PostContext';
import TagList from '../components/TagList';
import '../styles/post.css';

const PostDetails = ({ id, setPage }) => {
  const { posts, deletePost } = useContext(PostContext);
  const post = posts.find(p => p.id === id);

  if (!post) {
    return <div className="container">Post not found.</div>;
  }

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      await deletePost(id);
      setPage('home');
    }
  };

  return (
    <article className="post-details">
      <button className="btn-back" onClick={() => setPage('home')}>← Back to Home</button>
      <header className="post-header">
        <span className="post-category">{post.category}</span>
        <h1>{post.title}</h1>
        <div className="post-meta">
          <span>Published on {post.date}</span>
          <div className="post-actions">
            <button className="btn-edit" onClick={() => setPage('edit')}>Edit</button>
            <button className="btn-delete" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </header>
      <div className="post-content">
        {post.content.split('\n').map((para, i) => <p key={i}>{para}</p>)}
      </div>
      <footer className="post-footer">
        <TagList tags={post.tags} />
      </footer>
    </article>
  );
};

export default PostDetails;