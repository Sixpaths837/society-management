import React, { useState, useEffect } from "react";
import Issues from "./Issues";
import Axios from "axios";
import UserProfileTable from "./UserProfileTable";
import UserHouse from "./UserProfileHouse";
import ViewReply from "./UserIssuesTable";
import ShowPayment from "./MakePaymentTable";

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
    paddingTop: APP_BAR_DESKTOP + 22,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

function Dashboard(props) {
  const [house, setHouse] = useState({});
  const [user, setUser] = useState({});
  const [open, setOpen] = useState("0");

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        setUser(response.data.user[0]);
      }
    });
    Axios.get("http://localhost:3001/gethousedeets").then((response) => {
      setHouse(response.data[0]);
    });
  }, [user, house]);

  function render(open, user, house) {
    switch (open) {
      case "0":
        return <UserProfileTable user={[user, house]} />;
      case "1":
        return <UserHouse user={[user, house]} />;
      case "2":
        return <Issues />;
      case "3":
        return <ViewReply />;
      case "4":
        return <ShowPayment />;
      default:
        return <></>;
    }
  }
  function setval(val) {
    setOpen(val);
  }
  return (
    <RootStyle>
      <DashboardSidebar user={user} setval={setval} active={open} />
      <MainStyle>{render(open, user, house)}</MainStyle>
    </RootStyle>
  );
}

export default Dashboard;
