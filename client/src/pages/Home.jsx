import React from "react";
import Map from "../components/Map";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
      <h1>Action for the ocean</h1>
      <Map />
    </div>
  );
};

export default Home;
