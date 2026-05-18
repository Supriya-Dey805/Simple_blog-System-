import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

export const deletePost = (postId) => {
  return API.delete(`/posts/${postId}`);
};

export const updatePost = (postId, postData) => {
  return API.put(`/posts/${postId}`, postData);
};

export const likePost = (postId) => {
  return API.put(`/posts/like/${postId}`);
};

export default API;