import React, { useState, useEffect } from "react";
import Issues from "./Issues";
import Axios from "axios";
import "./dashboard.css";



function Dashboard(props) {
  const [house, setHouse] = useState({});
  const [user, setUser] = useState({});

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        setUser(response.data.user[0]);
      }
    });
  });

  function changeTab(e){
    e.preventDefault();

  }
  return (
      <div className="container" style={{backgroundColor:"#e3d053", width : "100%",height:"100%",margin:"0"}} >
      <div className="row" style={{margin: "0", height: "100%",width : "100%"}}>

        <div className="col-3" style={{backgroundColor: "#e3d053",borderRight: "2px solid #212529" }}>

          <a className="row buttons btn btn-primary" style={{marginTop: "10px"}} onClick={changeTab}>Payments</a>
          <a className="row buttons" onClick={changeTab}>Add Issue</a>
          <a className="row buttons">Video games</a>
          <a className="row buttons">thank you srom</a>

        </div>
        <div className="col-9" style={{backgroundColor: "#e3d053" ,color: "white" ,height: "100%"}}>
          Random Dashboard shit
        </div>
      </div>

      </div>

      );
}

export default Dashboard;
