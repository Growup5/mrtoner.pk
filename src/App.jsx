import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Header/navber";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import React from "react";
import Printing from "./Components/Services/printing"
import Toner from "./Components/Services/Toner"
import Repair from "./Components/Services/RepairServices"
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services/printing" element={<Printing />} />
        <Route path="/services/toner-refill" element={<Toner />} />
        <Route path="/services/repair" element={<Repair />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
