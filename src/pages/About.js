import Base from "../components/Base";

const About = () => {

  return (

    <Base>

      <div
        style={{
          padding: "40px",
          maxWidth: "1000px",
          margin: "auto"
        }}
      >

        <h1
          style={{
            fontWeight: "bold",
            marginBottom: "30px"
          }}
        >
          🚀 About BlogSphere
        </h1>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "35px",
            color: "#444"
          }}
        >
          BlogSphere is a modern full-stack blogging platform
          where users can create, explore, edit, and interact
          with blogs across multiple categories including
          Technology, AI, Travel, Fitness, Education, and more.
        </p>

        <br/>

        <h3>✨ Features</h3>

        <ul
          style={{
            lineHeight: "35px",
            fontSize: "17px"
          }}
        >
          <li>Create, Edit & Delete Blogs</li>

          <li>Like & Featured Blog System</li>

          <li>Search & Category Filtering</li>

          <li>Trending Blogs Section</li>

          <li>User Authentication</li>

          <li>Responsive Modern UI</li>

          <li>MongoDB Database Integration</li>
        </ul>

        <br/>

        <h3>🛠 Technologies Used</h3>

        <ul
          style={{
            lineHeight: "35px",
            fontSize: "17px"
          }}
        >
          <li>React.js</li>

          <li>Node.js</li>

          <li>Express.js</li>

          <li>MongoDB</li>

          <li>Bootstrap + Reactstrap</li>
        </ul>

        <br/>

        <h3>👨‍💻 Developed By</h3>

        <p
          style={{
            fontSize: "18px"
          }}
        >
          Supriya Dey and Yash Raj 
        </p>

      </div>

    </Base>
  );
};

export default About;