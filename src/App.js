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
import { ProductProvider } from "./context/ProductContext";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import Wishlist from "./pages/Wishlist";
import ChatAI from "./components/ChatAI";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); 
    }, 3000);
  }, []);

  return (
    <ProductProvider>
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
                  
                  <Catalog />
                  <Action />
                </>} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/chat" element={<ChatAI />} />
              </Routes>
              <ChatWidget />
              <Footer />  
            </Router>
            
          )}
        </div>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;