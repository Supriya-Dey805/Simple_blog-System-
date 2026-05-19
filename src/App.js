import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import "./styles/global.css";

import { PostProvider } from "./context/PostContext";

// Components & Pages
import Home from "./pages/Home";
import LoginForm from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Services from "./pages/Services";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import Userdashboard from "./pages/Userdashboard";

import Privateroute from "./components/Privateroute";

function App() {
  return (
    <PostProvider>

      <BrowserRouter>

        <Routes>

          {/* Public Routes */}
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<LoginForm />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="/about" element={<About />} />

          <Route path="/services" element={<Services />} />

          <Route path="/create" element={<CreatePost />} />

          <Route path="/edit-post/:id" element={<EditPost />} />

          {/* Protected Route */}
          <Route path="/user" element={<Privateroute />}>
            <Route
              path="dashboard"
              element={<Userdashboard />}
            />
          </Route>

        </Routes>

      </BrowserRouter>

    </PostProvider>
  );
}

export default App;