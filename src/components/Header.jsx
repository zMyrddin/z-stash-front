import React, { useState } from "react";
import QuestionMarkIcon from "../images/question_mark_icon.png";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import HomePage from "../pages/Home";
import Navbar from "./Navbar";
import LoginForm from "./LoginForm";

function Header() {
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

  // Example user state for authentication
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsLoginFormOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100vh", padding: 5 }}>
      <img
        className="question-mark"
        src={QuestionMarkIcon}
        alt="Question Mark"
        style={{ width: 25, height: 25 }}
        onClick={() => setIsLoginFormOpen(!isLoginFormOpen)}
      />

      {isLoginFormOpen && !isLoggedIn && <LoginForm onLogin={handleLogin} />}

      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={isLoggedIn ? <HomePage /> : <Navigate to="/" />}
            />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default Header;
