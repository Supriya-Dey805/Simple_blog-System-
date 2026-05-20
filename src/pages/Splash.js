import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Splash = () => {

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 3000);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.logo}>📝</div>
      <h1 style={styles.title}>Simple Blog System</h1>
      <p style={styles.tag}>Write • Read • Inspire</p>
      <div style={styles.loader}></div>
    </div>
  );
};

const styles = {
  container:{
    height:"100vh",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    background:"linear-gradient(to right, #141e30, #243b55)",
    color:"white"
  },
  logo:{ fontSize:"70px" },
  title:{ fontSize:"40px", fontWeight:"bold" },
  tag:{ color:"#ccc" },
  loader:{
    marginTop:"20px",
    width:"40px",
    height:"40px",
    border:"4px solid white",
    borderTop:"4px solid transparent",
    borderRadius:"50%",
    animation:"spin 1s linear infinite"
  }
};

export default Splash;