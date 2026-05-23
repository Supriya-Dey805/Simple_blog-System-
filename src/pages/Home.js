import { useEffect, useState } from "react";
import Base from "../components/Base";
import PostCard from "../components/PostCard";
import API from "../services/api";
import { Navigate } from "react-router-dom";

const Home = () => {

  const [posts, setPosts] = useState([]);

  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {

    try {

      const res = await API.get("/posts");

      setPosts(res.data);

    } catch (error) {

      console.log(error);

    }
  };

  // FILTER POSTS
  const filteredPosts = posts.filter((post) => {

    const title = post.title || "";

    const content = post.content || "";

    const category = post.category || "";

    // SEARCH MATCH
    const matchesSearch =

      title.toLowerCase().includes(search.toLowerCase()) ||

      content.toLowerCase().includes(search.toLowerCase()) ||

      category.toLowerCase().includes(search.toLowerCase());

    // CATEGORY MATCH
    const matchesCategory =

      selectedCategory === "All" ||

      category.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  const isLoggedIn = localStorage.getItem("isLoggedIn");

if(!isLoggedIn){

  return <Navigate to="/login" />;
}
  return (

    <Base>


    {/* HERO SECTION */}

<div
  style={{
    background: "linear-gradient(to right, #141e30, #243b55)",
    color: "white",
    padding: "60px 30px",
    borderRadius: "20px",
    marginBottom: "40px",
    textAlign: "center",
    boxShadow: "0px 8px 25px rgba(0,0,0,0.3)"
  }}
>

  <h1
    style={{
      fontSize: "52px",
      fontWeight: "bold",
      marginBottom: "20px"
    }}
  >
    Share Your Ideas With The World 🌍
  </h1>

  <p
    style={{
      fontSize: "20px",
      color: "#ddd",
      marginBottom: "30px"
    }}
  >
    Discover trending blogs, write stories, and inspire readers.
  </p>

  <a
    href="/create"
    style={{
      background: "#00d4ff",
      color: "black",
      padding: "14px 28px",
      borderRadius: "12px",
      textDecoration: "none",
      fontWeight: "bold",
      fontSize: "18px"
    }}
  >
    ✍ Create New Blog
  </a>

</div>


      {/* SEARCH + CATEGORY SECTION */}

<div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "35px",
    flexWrap: "wrap",
    gap: "20px"
  }}
>

  {/* SEARCH BAR */}
  <input
    type="text"
    placeholder="Search blogs, technology, AI, travel, coding..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    style={{
      padding: "14px",
      width: "420px",
      borderRadius: "12px",
      border: "1px solid #ccc",
      outline: "none",
      boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
      fontSize: "15px"
    }}
  />

  {/* CATEGORY DROPDOWN */}
  <select
    value={selectedCategory}
    onChange={(e) => setSelectedCategory(e.target.value)}
    style={{
      padding: "14px",
      borderRadius: "12px",
      border: "1px solid #ccc",
      outline: "none",
      boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
      minWidth: "220px",
      fontWeight: "bold"
    }}
  >

    <option value="All">All Topics</option>

    <option value="Technology">Technology</option>

    <option value="Artificial Intelligence">Artificial Intelligence</option>

    <option value="Programming">Programming</option>

    <option value="Cyber Security">Cyber Security</option>

    <option value="Cloud Computing">Cloud Computing</option>

    <option value="Travel">Travel</option>

    <option value="Lifestyle">Lifestyle</option>

    <option value="Fitness">Fitness</option>

    <option value="Education">Education</option>

    <option value="Study">Study</option>

    <option value="Business">Business</option>

    <option value="Finance">Finance</option>

    <option value="Sports">Sports</option>

    <option value="Food">Food</option>

  </select>

</div>

      {/* FEATURED POSTS */}
      <div style={{ marginBottom: "40px" }}>

        <h2
          style={{
            marginBottom: "20px",
            color: "#ff9800",
            fontWeight: "bold"
          }}
        >
          ⭐ Featured Posts
        </h2>

        {
          filteredPosts
            .filter((post) => post.isFeatured)
            .map((post) => (
              <PostCard key={post._id} post={post} />
            ))
        }

      </div>
      {/* TRENDING POSTS */}

<div style={{ marginBottom: "40px" }}>

  <h2
    style={{
      marginBottom: "20px",
      color: "#ff5722",
      fontWeight: "bold"
    }}
  >
    🔥 Trending Blogs
  </h2>

  {
    [...filteredPosts]
      .sort((a, b) => b.likes - a.likes)
      .slice(0, 3)
      .map((post) => (
        <PostCard
          key={post._id}
          post={post}
        />
      ))
  }

</div>

      {/* ALL POSTS */}
      <div>

        <h2
          style={{
            marginBottom: "20px",
            fontWeight: "bold"
          }}
        >
          📚 Latest Blogs
        </h2>

        {filteredPosts.length === 0 && (

          <div
            style={{
              textAlign: "center",
              marginTop: "50px",
              color: "#777"
            }}
          >
            <h3>No posts found 😢</h3>
          </div>

        )}

        {
          filteredPosts.map((post) => (
            <PostCard
              key={post._id}
              post={post}
            />
          ))
        }

      </div>

    </Base>
  );
};

const styles = {

  filterButton: {

    padding: "10px 18px",

    border: "none",

    borderRadius: "25px",

    background: "#203a43",

    color: "white",

    cursor: "pointer",

    fontWeight: "bold",

    transition: "0.3s",
boxShadow: "0px 4px 12px rgba(0,0,0,0.2)"
  }
};

export default Home;