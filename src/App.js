import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Home/homepage.js";
import React from "react";
import Properties from "./pages/properties";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/properties" element={<Properties />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default App;
