import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { UserState } from "./context/user/UserState";
import Profile from './pages/Profile';
import UserPoint from "./pages/UserPoint";

function App() {
  return (
    <UserState>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-point" element={<UserPoint />} />
        </Routes>
      </div>
    </UserState>
  );
}

export default App;
