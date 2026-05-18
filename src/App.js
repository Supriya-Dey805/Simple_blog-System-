import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PostProvider } from './context/PostContext'; // Added context provider
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

// Style Imports
import './App.css';
import './styles/global.css';

// Components & Pages Imports
import Base from './components/Base';
import Home from './pages/Home';
import LoginForm from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import Services from './pages/Services';
import Userdashboard from './pages/Userdashboard';
import Privateroute from './components/Privateroute';

function App() {
  return (
    <PostProvider> {/* Wrap everything so Home.js can read the posts state */}
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />

          {/* Protected/Private Routes */}
          <Route path="/user" element={<Privateroute />}>
            <Route path="dashboard" element={<Userdashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PostProvider>
  );
}

export default App;