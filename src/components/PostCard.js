import { deletePost, likePost } from "../services/api";
import { useNavigate } from "react-router-dom";

const PostCard = ({ post, refreshPosts }) => {

  const navigate = useNavigate();

  const deleteThisPost = async () => {
    await deletePost(post._id);
    refreshPosts();
  };

  const likeThisPost = async () => {
    await likePost(post._id);
    refreshPosts();
  };

  const goToEditPage = () => {
    navigate(`/edit-post/${post._id}`);
  };

  return (
    <div style={{border:"1px solid gray", padding:"15px", margin:"15px"}}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <small>By {post.author}</small>

      <h4>❤️ Likes: {post.likes}</h4>

      <p><b>Category:</b> {post.category}</p>
<p><b>Reading Time:</b> {post.readingTime}</p>
<p><b>Tags:</b> {post.tags?.join(", ")}</p>

{post.isFeatured && <h3>⭐ Featured</h3>}

      <button onClick={likeThisPost}>Like</button>
      <button onClick={goToEditPage}>Edit</button>
      <button onClick={deleteThisPost}>Delete</button>
    </div>
  );
};

export default PostCard;