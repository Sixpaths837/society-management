import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router";
import Login from "./components/Login.jsx";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Admin from "./components/Admin";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Axios from "axios";

function App() {
  const [loginStatus, setLoginStatus] = useState("");

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].User_ID);
      }
    });
  }, [loginStatus]);

  return (
    <div className="App">
      <Header logIn={loginStatus} />
      <Routes>
        <Route
          exact
          path="/society-management/register/"
          element={<Register />}
        />
        <Route
          exact
          path="/society-management/"
          element={
            loginStatus === "" ? (
              <Login logIn={loginStatus} />
            ) : loginStatus !== "Admin" ? (
              <Navigate to="/society-management/dashboard" />
            ) : (
              <Navigate to="/society-management/admin" />
            )
          }
        />
        <Route
          exact
          path="/society-management/dashboard"
          element={
            loginStatus !== "" && loginStatus !== "Admin" ? (
              <Dashboard user={loginStatus} />
            ) : (
              <Navigate to="/society-management/" />
            )
          }
        />
        <Route
          exact
          path="/society-management/admin"
          element={
            loginStatus !== "" && loginStatus === "Admin" ? (
              <Admin user={loginStatus} />
            ) : (
              <Navigate to="/society-management/" />
            )
          }
        />
        <Route path="*" element={<Navigate to="/society-management/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
