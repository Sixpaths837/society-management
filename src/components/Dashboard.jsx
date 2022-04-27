import React, { useState, useEffect } from "react";
import Issues from "./Issues";
import Axios from "axios";

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

  return (
    <div className="container" style={{ width: "90%" }}>
      <div className="row">
        <div className="col m-2">
          <div className="row">
            <div className="bg-dark text-light card col-12 m-2">
              <h4 style={{ color: "aqua" }}>User Details</h4>
              <ul className="list-group m-2">
                <li className="list-group-item active m-0 border border-white">
                  Username : {user.User_ID}
                </li>
                <li className="list-group-item active m-0 border border-white">
                  Name : {user.Name}
                </li>
                <li className="list-group-item active m-0 border border-white">
                  House No. : {user.House_Number}
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="bg-dark txt-light card col-12 m-2">
              <h4 style={{ color: "aqua" }}>House Details</h4>
              <ul className="list-group m-2">
                <li className="list-group-item active m-0 border border-white">
                  Society ID : {house.Society_ID}
                </li>
                <li className="list-group-item active m-0 border border-white">
                  House No. : {house.House_Number}
                </li>
                <li className="list-group-item active m-0 border border-white">
                  Type : {house.Type_of_House}
                </li>
                <li className="list-group-item active m-0 border border-white">
                  Block : {house.Block_Number}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-6 m-2">
          <div className="row">
            <Issues user={props.user} />
          </div>
        </div>
        <div className="col m-2">3 of 3</div>
      </div>
    </div>
  );
}

export default Dashboard;
