import React, { useState, useEffect } from "react";
import Issues from "./Issues";
import Axios from "axios";
<<<<<<< HEAD
import "./dashboard.css";


=======
import { styled } from "@mui/material/styles";
import DashboardSidebar from "./layouts/dashboard/DashboardSidebar";

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

const MainStyle = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("lg")]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));
>>>>>>> 1a57b024ced35cb604d4f638e380d1a40022ac73

function Dashboard(props) {
  const [house, setHouse] = useState({});
  const [user, setUser] = useState({});
  const [open, setOpen] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        setUser(response.data.user[0]);
      }
    });
  });

<<<<<<< HEAD
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
=======
  function render() {
    switch (open) {
      case 0:
        return <Issues />;
      case 1:
        return <Issues />;
      case 2:
        return <Issues />;
      case 3:
        return <Issues />;
      case 4:
        return <Issues />;
    }
  }
  return (
    <RootStyle>
      <DashboardSidebar
        isOpenSidebar={open}
        onCloseSidebar={(e) => console.log(e)}
        user={user}
      />
      <MainStyle></MainStyle>
    </RootStyle>
  );
>>>>>>> 1a57b024ced35cb604d4f638e380d1a40022ac73
}

export default Dashboard;
