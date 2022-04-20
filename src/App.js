import './App.css';
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';
import Axios  from 'axios';

function App() {

  Axios.defaults.withCredentials = true;
  
  useEffect(()=>{
    Axios.get("http://localhost:3001/login").then((response)=>{
      console.log(response);
    })
  }, []);
  return (
    <div className="App" styles={{background:'beige'}}>
      <Router>
      <Header/>
      <Routes>
        <Route exact path="/society-management/register/" element={<Register/>}/>
        <Route exact path="/society-management/" element={<Login/>}/>
        <Route exact path="/society-management/dashboard" element={<Dashboard/>}/>
      </Routes>
      </Router>
      <Footer/>
    </div>
  );
}


export default App;
