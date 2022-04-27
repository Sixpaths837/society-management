import React from "react";
import { Link as RouterLink } from "react-router-dom";
// material
import { styled } from "@mui/material/styles";
import { Box, Link, Typography, Avatar } from "@mui/material";
// mock
import account from "../../../_mock/account";
// hooks
// components
import Scrollbar from "../../Scrollbar";
import NavSection from "../../NavSection";
//
import navConfig from "./NavConfig";

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}));

const AccountStyle = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.grey[50012],
}));

// ----------------------------------------------------------------------

export default function DashboardSidebar(props) {
  return (
    <RootStyle>
      <Scrollbar
        sx={{
          height: 1,
          "& .simplebar-content": {
            height: 1,
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <Box sx={{ mb: 5, mx: 2.5 }}>
          <Link underline="none" component={RouterLink} to="#">
            <AccountStyle>
              <Avatar src="/avatar_default.jpg" alt="photoURL" />
              <Box sx={{ ml: 2 }}>
                <Typography variant="subtitle2" sx={{ color: "text.primary" }}>
                  <b>{"Admin"}</b>
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {account.role}
                </Typography>
              </Box>
            </AccountStyle>
          </Link>
        </Box>

        <NavSection navConfig={navConfig} />
      </Scrollbar>
    </RootStyle>
  );
}
