import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Registers";
import UploadModel from "./UploadModel";
import ModelViewer from "./ModelViewer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Add Home route */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/upload" element={<UploadModel />} />
        <Route path="/view" element={<ModelViewer />} />
      </Routes>
    </Router>
  );
}

export default App;
