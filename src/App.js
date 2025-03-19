import React, { useState, useEffect } from "react";
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
        <>
          <Navbar />
          <Hero />
          <ChatWidget />
          <Catalog />
          <Action />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
