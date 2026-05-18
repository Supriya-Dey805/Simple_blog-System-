import React from 'react';

const TagList = ({ tags }) => {
  if (!tags || tags.length === 0) return null;
  return (
    <div className="tag-list">
      {tags.map(tag => (
        <span key={tag} className="tag">#{tag}</span>
      ))}
    </div>
  );
};

export default TagList;