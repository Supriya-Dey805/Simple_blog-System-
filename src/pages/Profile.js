import { useEffect, useState } from "react";
import Base from "../components/Base";
import API from "../services/api";

const Profile = () => {

  const [userPosts, setUserPosts] = useState([]);

  const username =
    localStorage.getItem("username") || "Guest User";

  const [profileImage, setProfileImage] = useState(
    localStorage.getItem("profileImage") ||
    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
  );

  useEffect(() => {
    fetchUserPosts();
  }, []);

  const fetchUserPosts = async () => {

    try {

      const res = await API.get("/posts");

      const filtered = res.data.filter(
        (post) => post.author === username
      );

      setUserPosts(filtered);

    } catch (error) {

      console.log(error);

    }
  };


  const totalPosts = userPosts.length;


  const totalLikes = userPosts.reduce(
    (sum, post) => sum + post.likes,
    0
  );


  const featuredPosts = userPosts.filter(
    (post) => post.isFeatured
  ).length;

  const handleProfileImage = (e) => {

    const file = e.target.files[0];

    const reader = new FileReader();

    reader.onloadend = () => {

      localStorage.setItem(
        "profileImage",
        reader.result
      );

      setProfileImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (

    <Base>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          padding: "40px"
        }}
      >

        <div
          style={{
            background: "linear-gradient(to right, #141e30, #243b55)",
            color: "white",
            padding: "40px",
            borderRadius: "20px",
            textAlign: "center",
            boxShadow: "0px 8px 25px rgba(0,0,0,0.3)"
          }}
        >

          <img
            src={profileImage}
            alt="profile"
            style={{
              width: "130px",
              height: "130px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid white",
              boxShadow: "0px 4px 15px rgba(0,0,0,0.3)"
            }}
          />

          <br /><br />

          <label
            style={{
              background: "#00d4ff",
              color: "black",
              padding: "10px 18px",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            📷 Change Photo

            <input
              type="file"
              accept="image/*"
              onChange={handleProfileImage}
              hidden
            />
          </label>



          <h1
            style={{
              marginTop: "20px",
              fontWeight: "bold"
            }}
          >
            {username}
          </h1>

          <p>
            Full Stack Blog Developer 🚀
          </p>

          <p
            style={{
              color: "#ddd",
              marginTop: "10px"
            }}
          >
            📧 {localStorage.getItem("email")}
          </p>

        </div>

        {/* STATS */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
            gap: "20px",
            marginTop: "40px"
          }}
        >

          <div style={styles.card}>
            <h2>📝 {totalPosts}</h2>
            <p>Total Posts</p>
          </div>

          <div style={styles.card}>
            <h2>❤️ {totalLikes}</h2>
            <p>Total Likes</p>
          </div>

          <div style={styles.card}>
            <h2>⭐ {featuredPosts}</h2>
            <p>Featured Posts</p>
          </div>

        </div>

      </div>

    </Base>
  );
};

const styles = {

  card: {

    background: "#f4f4f4",

    padding: "30px",

    borderRadius: "15px",

    textAlign: "center",

    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)"
  }
};

export default Profile;