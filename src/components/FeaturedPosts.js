import React from 'react';
import PostCard from './PostCard';

const FeaturedPosts = ({ posts, setPage, setSelectedPostId }) => {
  const featured = posts.filter(post => post.featured);

  if (featured.length === 0) return null;

  return (
    <div className="featured-container">
      <h2>🔥 Featured Stories</h2>
      <div className="featured-grid">
        {featured.map(post => (
          <PostCard key={post.id} post={post} setPage={setPage} setSelectedPostId={setSelectedPostId} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;