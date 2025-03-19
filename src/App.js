import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import Hero from "./components/Hero";
import ChatAI from "./components/ChatAI";
import ChatWidget from "./components/ChatWidget";
import Catalog from "./components/Catalog";
import PageLoader from "./components/PageLoader";
import Test from "./components/Test";
import Footer from "./components/Footer";
import Action from "./components/Action";
import ActionSheet from "@progress/kendo-react-inputs";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); 
    }, 3000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <PageLoader />
      ) : (
        <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={
              <>
              
              <Hero />
              <ChatWidget />
              <Catalog />
              <Action />
              
          
            
        </>} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/about" element={<AboutUs   />} />
            <Route path= '/contact' element={<ContactUs />} />
          </Routes>
        <Footer />  
      </Router>
        // 
      )}
    </div>
  );
}

export default App;
