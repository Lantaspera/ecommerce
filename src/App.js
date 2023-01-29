import React from 'react';
import Header from'./COMPONENTS/header/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './COMPONENTS/home/Home';
import Login from './COMPONENTS/login/Login';
import Register from './COMPONENTS/register/Register';


function App() {
  return (
    <Router>
      <div className="App">
      {/* <Header/>
      <Home/> 
      <Login/> */}
      <Register/>
      </div>
    </Router>
    
    
  );
}

export default App;
