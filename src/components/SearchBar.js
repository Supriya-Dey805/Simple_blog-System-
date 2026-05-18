import React, { useContext } from 'react';
import { PostContext } from '../context/PostContext';

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useContext(PostContext);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for articles, topics..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;