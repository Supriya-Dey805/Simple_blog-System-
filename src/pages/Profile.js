import Base from "../components/Base";

const Profile = () => {

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
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="profile"
            width="120"
          />

          <h1
            style={{
              marginTop: "20px",
              fontWeight: "bold"
            }}
          >
            Sup
          </h1>

          <p>
            Full Stack Blog Developer 🚀
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
            <h2>📝 12</h2>
            <p>Total Posts</p>
          </div>

          <div style={styles.card}>
            <h2>❤️ 340</h2>
            <p>Total Likes</p>
          </div>

          <div style={styles.card}>
            <h2>⭐ 5</h2>
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