import React, { createContext, useState, useEffect } from 'react';
import { fetchPosts, createPostApi, updatePostApi, deletePostApi } from '../services/api';

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };
    getPosts();
  }, []);

  const addPost = async (post) => {
    const newPost = await createPostApi(post);
    setPosts([newPost, ...posts]);
  };

  const editPost = async (id, updatedPost) => {
    const updated = await updatePostApi(id, updatedPost);
    setPosts(posts.map(p => p.id === id ? updated : p));
  };

  const deletePost = async (id) => {
    await deletePostApi(id);
    setPosts(posts.filter(p => p.id !== id));
  };

  return (
    <PostContext.Provider value={{
      posts, loading, searchQuery, setSearchQuery,
      selectedCategory, setSelectedCategory, addPost, editPost, deletePost
    }}>
      {children}
    </PostContext.Provider>
  );
};