import {useState, useContext} from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import UserContext from "../context/user/UserContext";

const Navbar = () => {
  const { user, dispatch } = useContext(UserContext);

  return (
    <nav>
      <Link to="/">Home</Link>
      {user.id ? (
        <>
          
          <Link to="/profile">Profile</Link>
          <Link to="/logout">Logout</Link>
          </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
      )
            
      }
    </nav>
  );
};

export default Navbar;
