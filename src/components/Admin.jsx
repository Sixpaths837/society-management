import React, { useState, useEffect } from "react";
import Axios from "axios";

import CreateHouse from "./CreateHouse";
import AddPayment from "./AddPayment";
import ResolveUserIssues from "./ResolveUserIssues.js";
import CompletedPayments from "./CompletedPayments";
import SearchUser from "./SearchUser";
import OutdtandingPayments from "./OutdtandingPayments";
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

function Admin() {
  const [user, setUser] = useState({});
  const [open, setOpen] = useState("0");

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        setUser(response.data.user[0]);
      }
    });
  }, []);

  function render(open, user) {
    switch (open) {
      case "0":
        return <CreateHouse />;
      case "1":
        return <AddPayment />;
      case "2":
        return <ResolveUserIssues />;
      case "3":
        return <SearchUser />;
      case "4":
        return <OutdtandingPayments />;
      case "5":
        return <CompletedPayments />;
      default:
        return <></>;
    }
  }
  function setval(val) {
    setOpen(val);
  }
  return (
    <RootStyle>
      <DashboardSidebar user={user} active={open} setval={setval} />
      <MainStyle>{render(open, user)}</MainStyle>
    </RootStyle>
  );
}

export default Admin;
