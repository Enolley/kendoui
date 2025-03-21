import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import Hero from "./components/Hero";
import ChatWidget from "./components/ChatWidget";
import Catalog from "./components/Catalog";
import PageLoader from "./components/PageLoader";
import Footer from "./components/Footer";
import Action from "./components/Action";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import { CartProvider } from "./context/CartContext";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); 
    }, 3000);
  }, []);

  return (
    <CartProvider>
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
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          <Footer />  
        </Router>
          // 
        )}
      </div>
    </CartProvider>
  );
}

export default App;
