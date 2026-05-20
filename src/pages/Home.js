import { useEffect, useState } from "react";
import Base from "../components/Base";
import PostCard from "../components/PostCard";
import API from "../services/api";

const Home = () => {

  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

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

  // SAFE FILTER (this was crashing before)
  const filteredPosts = posts.filter((post) => {
    const title = post.title || "";
    const content = post.content || "";
    const category = post.category || "";

    return (
      title.toLowerCase().includes(search.toLowerCase()) ||
      content.toLowerCase().includes(search.toLowerCase()) ||
      category.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <Base>

      <h1>All Blog Posts</h1>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", marginBottom: "20px", width: "300px" }}
      />

      {filteredPosts.length === 0 && <p>No posts found</p>}

      {filteredPosts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}

    </Base>
  );
};

export default Home;