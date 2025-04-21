import React from "react";
import "./Home.css";
import Footer from "../common/Footer";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-main">
        <h1>Welcome to My React App</h1>
        <p>This is the home page of the application.</p>
        <p>Here you can find various features and information about our app.</p>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
