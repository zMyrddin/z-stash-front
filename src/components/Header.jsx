import React from "react";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import Navbar from "./Navbar";
import Login from "../pages/Login";
import Stashes from "../pages/Stashes";


function Header() {
  return (
    <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/stash" element={<Stashes />} />
            <Route path="/users" element={<HomePage />} />
            <Route path="/user/login" element={<Login />} />
          </Routes>

        </BrowserRouter>
    </div>
  );
}

export default Header;
