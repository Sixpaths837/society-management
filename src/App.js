import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate
} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  
  return (
    <div className="App" styles={{background:'beige'}}>
      <Router>
      <Header/>
      <Routes>
        <Route exact path="/Sixpaths837/society-management/register/" element={<Register/>}/>
        <Route exact path="/Sixpaths837/society-management/" element={<Login/>}/>

        <Route exact path="/Sixpaths837/society-management/dashboard" element={<Dashboard/>}/>
      </Routes>
      </Router>
      <Footer/>
    </div>
  );
}


export default App;
