import React from 'react';
import TagList from './TagList';

const PostCard = ({ post, setPage, setSelectedPostId }) => {
  const handleCardClick = () => {
    setSelectedPostId(post.id);
    setPage('details');
  };

  return (
    <div className="post-card" onClick={handleCardClick}>
      <span className="post-category">{post.category}</span>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 120)}...</p>
      <div className="post-card-footer">
        <TagList tags={post.tags} />
        <span className="post-date">{post.date}</span>
      </div>
    </div>
  );
};

export default PostCard;