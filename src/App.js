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

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating an API/data loading process
    setTimeout(() => {
      setLoading(false); // Hide loader after 3 seconds
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
        </>
      )}
    </div>
  );
}

export default App;
