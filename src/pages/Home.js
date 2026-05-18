import API from "../services/api";
import { useEffect, useState } from "react";
import Base from "../components/Base";
import PostCard from "../components/PostCard";

const Home = () => {

  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await API.get("/posts");
      setPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return(
    <Base>
      <h1>All Blog Posts</h1>

      {posts.map(post => (
        <PostCard 
          key={post._id} 
          post={post} 
          refreshPosts={fetchPosts}
        />
      ))}

    </Base>
  );
};

export default Home;