import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

// DELETE POST
export const deletePost = (postId) => API.delete(`/posts/${postId}`);

// UPDATE POST
export const updatePost = (postId, postData) => API.put(`/posts/${postId}`, postData);

// LIKE POST
export const likePost = (postId) => API.put(`/posts/like/${postId}`);

export default API;