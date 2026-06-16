import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Splash = () => {

  const navigate = useNavigate();

  useEffect(() => {

    const isLoggedIn = localStorage.getItem("isLoggedIn");

    const timer = setTimeout(() => {

      if (isLoggedIn) {
        navigate("/home");
      } else {
        navigate("/login");
      }

    }, 2500);

    return () => clearTimeout(timer);

  }, [navigate]);

  return (

    <div style={styles.container}>

      <div style={styles.circle1}></div>
      <div style={styles.circle2}></div>

      <div style={styles.card}>

        <div style={styles.logoContainer}>

          <div style={styles.logo}>
            📝
          </div>

        </div>

        <h1 style={styles.title}>
          BlogSphere
        </h1>

        <p style={styles.tagline}>
          Create • Explore • Inspire
        </p>

        <p style={styles.description}>
          Modern blogging platform with powerful features,
          beautiful UI, and seamless user experience.
        </p>

        <div style={styles.loader}></div>

        <p style={styles.loadingText}>
          Loading amazing stories...
        </p>

      </div>

    </div>
  );
};

const styles = {

  container: {

    height: "100vh",

    display: "flex",

    justifyContent: "center",

    alignItems: "center",

    background: "linear-gradient(135deg, #0f172a, #1e293b, #334155)",

    overflow: "hidden",

    position: "relative"
  },

  card: {

    width: "430px",

    padding: "50px 40px",

    borderRadius: "28px",

    background: "rgba(255,255,255,0.08)",

    backdropFilter: "blur(18px)",

    textAlign: "center",

    color: "white",

    boxShadow: "0px 10px 40px rgba(0,0,0,0.4)",

    zIndex: 2
  },

  logoContainer: {

    display: "flex",

    justifyContent: "center",

    marginBottom: "20px"
  },

  logo: {

    width: "100px",

    height: "100px",

    borderRadius: "50%",

    background: "linear-gradient(to right, #38bdf8, #6366f1)",

    display: "flex",

    justifyContent: "center",

    alignItems: "center",

    fontSize: "50px",

    boxShadow: "0px 0px 30px rgba(99,102,241,0.6)"
  },

  title: {

    fontSize: "42px",

    fontWeight: "bold",

    marginBottom: "10px",

    letterSpacing: "1px"
  },

  tagline: {

    fontSize: "18px",

    color: "#cbd5e1",

    marginBottom: "20px"
  },

  description: {

    color: "#94a3b8",

    lineHeight: "28px",

    marginBottom: "35px",

    fontSize: "15px"
  },

  loader: {

    width: "55px",

    height: "55px",

    border: "5px solid rgba(255,255,255,0.2)",

    borderTop: "5px solid #38bdf8",

    borderRadius: "50%",

    margin: "auto",

    animation: "spin 1s linear infinite"
  },

  loadingText: {

    marginTop: "20px",

    color: "#cbd5e1",

    fontSize: "14px",

    letterSpacing: "1px"
  },

  circle1: {

    position: "absolute",

    width: "320px",

    height: "320px",

    borderRadius: "50%",

    background: "rgba(56,189,248,0.15)",

    top: "-80px",

    left: "-80px",

    filter: "blur(30px)"
  },

  circle2: {

    position: "absolute",

    width: "280px",

    height: "280px",

    borderRadius: "50%",

    background: "rgba(99,102,241,0.18)",

    bottom: "-70px",

    right: "-70px",

    filter: "blur(30px)"
  }
};

export default Splash;