import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Header/navber";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import React from "react";
import Printing from "./Components/Services/printing";
import Toner from "./Components/Services/Toner";
import Footer from "./Components/Footer/footer";
import BackToTop from "./Components/Footer/BackToTop";
import Blog from "./Pages/BlogPost";
import { Link } from "react-router-dom";
import CustomOrders from './Components/Services/CustomOrders';


function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-9xl font-bold text-red-600">404</h1>
      <h2 className="text-3xl font-semibold mt-4">Oops! Page Not Found</h2>
      <p className="text-lg mt-2 text-gray-600">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services/printing" element={<Printing />} />
        <Route path="/services/toner-refill" element={<Toner />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/service/custom-orders" element={<CustomOrders />} />        
        <Route path="*" element={<NotFound />} />

      </Routes>
      <Footer />
      <BackToTop />
    </Router>
  );
}

export default App;
