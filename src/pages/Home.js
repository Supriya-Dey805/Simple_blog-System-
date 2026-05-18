import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { PostContext } from "../context/PostContext";
import CustomNavbar from "../components/CustomNavbar";

import FeaturedPosts from "../components/FeaturedPosts";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import PostCard from "../components/PostCard";
import Loader from "../components/Loader";
import EmptyState from "../components/EmptyState";

import "../styles/home.css";

const Home = ({ setPage, setSelectedPostId }) => {

  const {
    posts,
    loading,
    searchQuery,
    selectedCategory
  } = useContext(PostContext);

  if (loading) return <Loader />;

  const filteredPosts = posts.filter((post) => {

    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory
        ? post.category === selectedCategory
        : true;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="home-page">
      <CustomNavbar />

      

      {!searchQuery && !selectedCategory && (
        <FeaturedPosts
          posts={posts}
          setPage={setPage}
          setSelectedPostId={setSelectedPostId}
        />
      )}

      <div className="main-content">

        <h2>Latest Exploration</h2>

        <div className="toolbar">
          <SearchBar />
          <CategoryFilter />
        </div>

        {filteredPosts.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="posts-grid">
            {filteredPosts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                setPage={setPage}
                setSelectedPostId={setSelectedPostId}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default Home;