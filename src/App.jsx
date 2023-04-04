import { useState } from "react";

import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Land from "./Auth/Land";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Search from "./App/Search";
import Detail from "./App/Detail";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Land />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/home" element={<Detail />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
