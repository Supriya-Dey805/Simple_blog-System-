import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import "./styles/global.css";

import { PostProvider } from "./context/PostContext";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Services from "./pages/Services";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import Splash from "./pages/Splash";
import Userdashboard from "./pages/Userdashboard";

// Components
import Privateroute from "./components/Privateroute";

function App() {

  return (

    <PostProvider>

      <BrowserRouter>

        <Routes>

          {/* Splash Screen */}
          <Route
            path="/"
            element={<Splash />}
          />

          {/* Public Routes */}
          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/signup"
            element={<Signup />}
          />

          <Route
            path="/home"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/services"
            element={<Services />}
          />

          <Route
            path="/create"
            element={<CreatePost />}
          />

          <Route
            path="/edit/:id"
            element={<EditPost />}
          />

          {/* Protected Routes */}
          <Route
            path="/user"
            element={<Privateroute />}
          >

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