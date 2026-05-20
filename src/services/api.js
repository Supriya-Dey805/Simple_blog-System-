import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

// attach token automatically to every request
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});


// POSTS API

export const getPosts = () => API.get("/posts");

export const createPost = (postData) => API.post("/posts", postData);

export const updatePost = (postId, postData) =>
  API.put(`/posts/${postId}`, postData);

export const deletePost = (postId) =>
  API.delete(`/posts/${postId}`);

export const likePost = (postId) =>
  API.put(`/posts/like/${postId}`);


// AUTH API

export const registerUser = (data) =>
  API.post("/auth/register", data);

export const loginUser = (data) =>
  API.post("/auth/login", data);

export default API;