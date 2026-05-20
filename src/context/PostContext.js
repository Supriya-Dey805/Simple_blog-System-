import { createContext, useState, useEffect } from "react";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost
} from "../services/api";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {

  const [posts, setPosts] = useState([]);

  // LOAD POSTS FROM BACKEND
  const fetchAllPosts = async () => {
    try {
      const res = await getPosts();
      setPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  // CREATE POST
  const addPost = async (postData) => {
    const res = await createPost(postData);
    setPosts([res.data, ...posts]);
  };

  // UPDATE POST
  const editPost = async (id, postData) => {
    const res = await updatePost(id, postData);
    setPosts(posts.map(p => p._id === id ? res.data : p));
  };

  // DELETE POST
  const removePost = async (id) => {
    await deletePost(id);
    setPosts(posts.filter(p => p._id !== id));
  };

  // LIKE POST
  const likePostHandler = async (id) => {
    const res = await likePost(id);
    setPosts(posts.map(p => p._id === id ? res.data : p));
  };

  return (
    <PostContext.Provider value={{
      posts,
      fetchAllPosts,
      addPost,
      editPost,
      removePost,
      likePostHandler
    }}>
      {children}
    </PostContext.Provider>
  );
};