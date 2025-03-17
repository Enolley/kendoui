import React from 'react';
import Navbar from './components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import Hero from './components/Hero';
import ChatAI from './components/ChatAI';
import ChatWidget from './components/ChatWidget';

function App() {
  const handleClick = React.useCallback(() => {
    window.open('https://www.telerik.com/kendo-react-ui/components/', '_blank');
  }, []);

  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <ChatWidget/>
    </div>
  );
}

export default App;
