import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./styles/global.css";
import { PostProvider } from "./context/PostContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Services from "./pages/Services";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import Splash from "./pages/Splash";
import Userdashboard from "./pages/Userdashboard";
import PostDetails from "./pages/PostDetails";
import Profile from "./pages/Profile";
import Bookmarks from "./pages/Bookmarks";

import Privateroute from "./components/Privateroute";

function App() {

  return (

    <PostProvider>

      <BrowserRouter>

        <ToastContainer
          position="top-right"
          autoClose={3000}
        />

        <Routes>

  <Route path="/" element={<Splash />} />

  <Route path="/login" element={<Login />} />

  <Route path="/signup" element={<Signup />} />

  <Route path="/home" element={<Home />} />

  <Route path="/about" element={<About />} />

  <Route path="/services" element={<Services />} />

  <Route path="/create" element={<CreatePost />} />

  <Route path="/edit/:id" element={<EditPost />} />

  <Route path="/posts/:id" element={<PostDetails />} />

  <Route path="/profile" element={<Profile />} />

  <Route path="/bookmarks" element={<Bookmarks />} />

  <Route path="/user" element={<Privateroute />}>

    <Route path="dashboard" element={<Userdashboard />} />

  </Route>

</Routes>
      </BrowserRouter>

    </PostProvider>
  );
}

export default App;