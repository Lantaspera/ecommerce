import React from 'react';
import Header from'./COMPONENTS/header/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './COMPONENTS/home/Home';



function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
      <Home/>
      </div>
    </Router>
    
    
  );
}

export default App;
