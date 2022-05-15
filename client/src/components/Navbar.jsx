import {useState, useContext} from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import UserContext from "../context/user/UserContext";

const Navbar = () => {
  const { user, dispatch } = useContext(UserContext);

  const handelLogout = () => {
    dispatch({ type: "LOGOUT" });
  }

  return (
    <nav>
      <Link to="/">Home</Link>
      {user ? (
        <>
          
          <Link to="/profile">Profile</Link>
          <a onClick={handelLogout}>Logout</a>
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
