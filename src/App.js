import React from "react";
import "./styles.css";
import Main from "./Main"
import Notice from "./Notice"
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Weather from "./Weather";

export default function App() { 

    return (
      <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="Notice" element={<Notice />} />
      </Routes>
    </BrowserRouter>
    </div>
    );
  }