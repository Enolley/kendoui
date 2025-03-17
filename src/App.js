import React from 'react';
import Navbar from './components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';

function App() {
  const handleClick = React.useCallback(() => {
    window.open('https://www.telerik.com/kendo-react-ui/components/', '_blank');
  }, []);

  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;
