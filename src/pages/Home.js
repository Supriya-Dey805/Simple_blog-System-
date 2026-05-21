import { useEffect, useState } from "react";
import Base from "../components/Base";
import PostCard from "../components/PostCard";
import API from "../services/api";

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

  return (

    <Base>

      {/* PAGE TITLE */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "30px"
        }}
      >

        <h1
          style={{
            fontWeight: "bold",
            fontSize: "42px"
          }}
        >
          📝 Simple Blog System
        </h1>

        <p
          style={{
            color: "#666"
          }}
        >
          Read • Write • Explore Amazing Blogs
        </p>

      </div>

      {/* SEARCH BAR */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "25px"
        }}
      >

        <input
          type="text"
          placeholder="Search posts by title, category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "12px",
            width: "400px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            outline: "none",
            boxShadow: "0px 2px 8px rgba(0,0,0,0.1)"
          }}
        />

      </div>

      {/* CATEGORY FILTER BUTTONS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          marginBottom: "35px",
          flexWrap: "wrap"
        }}
      >

        <button
          onClick={() => setSelectedCategory("All")}
          style={styles.filterButton}
        >
          All
        </button>

        <button
          onClick={() => setSelectedCategory("Technology")}
          style={styles.filterButton}
        >
          Technology
        </button>

        <button
          onClick={() => setSelectedCategory("Study")}
          style={styles.filterButton}
        >
          Study
        </button>

        <button
          onClick={() => setSelectedCategory("Travel")}
          style={styles.filterButton}
        >
          Travel
        </button>

        <button
          onClick={() => setSelectedCategory("Lifestyle")}
          style={styles.filterButton}
        >
          Lifestyle
        </button>

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

      {/* ALL POSTS */}
      <div>

        <h2
          style={{
            marginBottom: "20px",
            fontWeight: "bold"
          }}
        >
          📚 All Posts
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

    transition: "0.3s"
  }
};

export default Home;