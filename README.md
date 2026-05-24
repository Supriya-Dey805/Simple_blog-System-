# 🚀 BlogSphere – Advanced Full Stack Blogging Platform

BlogSphere is a modern full-stack blogging platform built using the MERN stack.  
The platform allows users to create, edit, delete, search, like, comment on, bookmark, and manage blogs with a clean and responsive user interface.

It is designed to provide a smooth blogging experience with advanced features like authentication, featured posts, trending blogs, dark mode, draft management, bookmarks, and profile customization.

---

# 🌐 Live Demo

### Frontend
https://your-frontend-link.vercel.app

### Backend API
https://your-backend-link.onrender.com

---

# 📌 Features

## 🔐 Authentication System
- User Registration
- User Login
- Protected Routes
- Logout Functionality

## 📝 Blog Management
- Create Blog Posts
- Edit Existing Posts
- Delete Blogs
- Draft & Publish System
- Featured Posts
- Blog Cover Images

## 🔍 Search & Filtering
- Search Blogs
- Category Filtering
- Trending Blogs
- Related Blogs

## 💬 User Interaction
- Like Posts
- Comment System
- Bookmark Blogs
- Profile Management

## 🎨 UI/UX Features
- Dark Mode
- Responsive Design
- Loading Spinner
- Toast Notifications
- Smooth Hover Animations
- Empty State UI
- Modern Gradient UI

---

# 🛠️ Tech Stack

## Frontend
- React.js
- React Router DOM
- Reactstrap
- Bootstrap
- Axios
- React Toastify

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs

## Database
- MongoDB Atlas

---

# 📂 Project Structure

```plaintext
frontend/
│
├── components/
│   ├── Base.jsx
│   ├── CustomNavbar.jsx
│   ├── Footer.jsx
│   ├── PostCard.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── CreatePost.jsx
│   ├── EditPost.jsx
│   ├── PostDetails.jsx
│   ├── Profile.jsx
│   ├── Bookmarks.jsx
│   └── About.jsx
│
├── services/
│   └── api.js
│
└── App.js


backend/
│
├── config/
│   └── db.js
│
├── models/
│   ├── Post.js
│   └── User.js
│
├── routes/
│   ├── postRoutes.js
│   └── userRoutes.js
│
├── controllers/
│   ├── postController.js
│   └── userController.js
│
└── server.js
```

---

# 🗄️ Database Schema

## 📄 Post Schema

```js
title: String
content: String
category: String
tags: [String]
likes: Number
image: String
author: String
status: String
isFeatured: Boolean
comments: []
createdAt: Date
```

## 👤 User Schema

```js
username: String
email: String
password: String
about: String
```

---

# 🔗 API Endpoints

## 📌 Post APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/posts | Get all posts |
| GET | /api/posts/:id | Get single post |
| POST | /api/posts | Create new post |
| PUT | /api/posts/:id | Update post |
| DELETE | /api/posts/:id | Delete post |
| PUT | /api/posts/like/:id | Like post |

---

# ⚙️ Installation Guide

## 🔹 Clone Repository

```bash
git clone https://github.com/your-username/blogsphere.git
```

---

# 🔹 Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs on:

```plaintext
http://localhost:3000
```

---

# 🔹 Backend Setup

```bash
cd backend
npm install
npm run dev
```

Backend runs on:

```plaintext
http://localhost:5000
```

# 🚀 Future Enhancements

- AI-based blog recommendations
- Real-time notifications
- Cloudinary image uploads
- Admin dashboard
- Blog analytics
- Rich text editor
- Social sharing improvements

---

# 🎯 Learning Outcomes

Through this project, the following concepts were implemented and learned:

- MERN Stack Development
- REST API Integration
- CRUD Operations
- Authentication & Authorization
- MongoDB Database Management
- Responsive UI Design
- State Management in React
- Local Storage Handling
- Component Reusability

---

# ✅ Conclusion

BlogSphere successfully demonstrates a complete MERN stack blogging platform with modern UI design, advanced blogging functionalities, authentication flow, responsive layouts, and interactive user features.

The project highlights practical implementation of full-stack web development concepts using modern technologies.

---

# 👨‍💻 Developed By

- Supriya
- YashRaj

### Full Stack MERN Developers 🚀
