// File: src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About"; // Example additional page
import Contact from "./pages/Contact"; // Example additional page

const App = () => {
  return (
    <Routes>
      {/* Define routes for different pages */}
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
