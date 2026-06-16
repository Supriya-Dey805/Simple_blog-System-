import { useEffect, useState } from "react";
import Base from "../components/Base";
import API from "../services/api";

const Profile = () => {

  const [userPosts, setUserPosts] = useState([]);

  const [username, setUsername] = useState(
    localStorage.getItem("username") || "Guest User"
  );

  const [email, setEmail] = useState(
    localStorage.getItem("email") || ""
  );

  const [bio, setBio] = useState(
    localStorage.getItem("bio") || "Full Stack Blog Developer 🚀"
  );

  const [isEditing, setIsEditing] = useState(false);

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
    (post) => post.likes >= 10
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

  const saveProfile = () => {

    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("bio", bio);

    setIsEditing(false);

    alert("Profile updated successfully");
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

          {
            isEditing ? (
              <>

                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={styles.input}
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={styles.input}
                />

                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  style={styles.textarea}
                />

                <button
                  onClick={saveProfile}
                  style={styles.button}
                >
                  Save Profile
                </button>

              </>
            ) : (
              <>

                <h1
                  style={{
                    marginTop: "20px",
                    fontWeight: "bold"
                  }}
                >
                  {username}
                </h1>

                <p>{bio}</p>

                <p
                  style={{
                    color: "#ddd",
                    marginTop: "10px"
                  }}
                >
                  📧 {email}
                </p>

                <button
                  onClick={() => setIsEditing(true)}
                  style={styles.button}
                >
                  ✏ Edit Profile
                </button>

              </>
            )
          }

        </div>

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
  },

  input: {
    width: "100%",
    padding: "12px",
    marginTop: "15px",
    borderRadius: "10px",
    border: "1px solid #ccc"
  },

  textarea: {
    width: "100%",
    padding: "12px",
    marginTop: "15px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    minHeight: "100px"
  },

  button: {
    marginTop: "20px",
    padding: "12px 20px",
    border: "none",
    borderRadius: "10px",
    background: "#00d4ff",
    color: "black",
    fontWeight: "bold",
    cursor: "pointer"
  }
};

export default Profile;