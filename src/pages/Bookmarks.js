import { useEffect, useState } from "react";

import Base from "../components/Base";

import PostCard from "../components/PostCard";

const Bookmarks = () => {

  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {

    const saved =
      JSON.parse(localStorage.getItem("bookmarks")) || [];

    setBookmarks(saved);

  }, []);

  return (

    <Base>

      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
          padding: "30px"
        }}
      >

        <h1
          style={{
            marginBottom: "30px",
            fontWeight: "bold"
          }}
        >
          🔖 My Bookmarks
        </h1>

        {
          bookmarks.length === 0 && (

            <div
              style={{
                textAlign: "center",
                marginTop: "80px",
                color: "#666"
              }}
            >

              <img
                src="https://cdn-icons-png.flaticon.com/512/7486/7486740.png"
                width="130"
                alt="empty"
              />

              <h2 style={{ marginTop: "20px" }}>
                No bookmarks yet
              </h2>

              <p>
                Save blogs to read later
              </p>

            </div>
          )
        }

        {
          bookmarks.map((post) => (

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

export default Bookmarks;