import React, { useState, useEffect } from "react";
import Issues from "./Issues";
import Axios from "axios";
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
}

export default Dashboard;
