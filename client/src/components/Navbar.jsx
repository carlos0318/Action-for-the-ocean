import {useState} from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <Link to="/">Home</Link>
      {user ? (
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
