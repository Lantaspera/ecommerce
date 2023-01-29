import React from 'react';
import Header from'./COMPONENTS/header/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
      
      </div>
    </Router>
    
    
  );
}

export default App;
