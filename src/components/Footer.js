import React from 'react';

const Footer = () => {

  return (

    <div
      style={{
        background: "#141e30",
        color: "white",
        padding: "25px",
        textAlign: "center",
        marginTop: "60px"
      }}
    >

      <h4>
        🌍 BlogSphere
      </h4>

      <p>
        Share Ideas • Explore Knowledge • Inspire Others
      </p>

      <p
        style={{
          color: "#bbb",
          fontSize: "14px"
        }}
      >
        © 2026 BlogSphere | Built with React, Node.js & MongoDB
      </p>

    </div>
  );
};

export default Footer;