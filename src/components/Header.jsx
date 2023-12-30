import React from "react";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import Navbar from "./Navbar";
import Login from "../pages/Login";
import Stashes from "../pages/Stashes";
import AddEntryPage from "../pages/AddEntry";
import Users from "../pages/Users";
import AddUserPage from "../pages/AddUser";


function Header() {
  return (
    <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/stash" element={<Stashes />} />
            <Route path="/users" element={<Users />} />
            <Route path="/user/login" element={<Login />} />
            <Route path="/users/add" element={<AddUserPage />} />
            <Route path="/stashes/add" element={<AddEntryPage />} />
          </Routes>

        </BrowserRouter>
    </div>
  );
}

export default Header;
