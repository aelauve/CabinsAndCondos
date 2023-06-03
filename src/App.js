import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home-search.js";
import Properties from "./pages/properties";
import About from "./pages/about";
import Contact from "./pages/contact";
import PropertyDetails from "./pages/property-details";
import Header from "./components/Header/header";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/details" element={<PropertyDetails />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default App;
