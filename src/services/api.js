import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});


export const getPosts = () => API.get("/posts");

export const createPost = (postData) => API.post("/posts", postData);

export const updatePost = (postId, postData) =>
  API.put(`/posts/${postId}`, postData);

export const deletePost = (postId) =>
  API.delete(`/posts/${postId}`);

export const likePost = (postId) =>
  API.put(`/posts/like/${postId}`);

export const registerUser = (data) =>
  API.post("/auth/register", data);

export const loginUser = (data) =>
  API.post("/auth/login", data);

export const addComment = (postId, commentData) =>
  API.post(`/posts/${postId}/comment`, commentData);

export default API;