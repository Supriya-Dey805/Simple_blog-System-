import React, { useContext } from 'react';
import { PostContext } from '../context/PostContext';

const CategoryFilter = () => {
  const { posts, selectedCategory, setSelectedCategory } = useContext(PostContext);
  
  const categories = ['All', ...new Set(posts.map(post => post.category))];

  return (
    <div className="category-filter">
      {categories.map(cat => (
        <button
          key={cat}
          className={selectedCategory === cat || (cat === 'All' && !selectedCategory) ? 'active' : ''}
          onClick={() => setSelectedCategory(cat === 'All' ? '' : cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;