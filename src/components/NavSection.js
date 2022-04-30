import React from "react";
import PropTypes from "prop-types";
// material
import { alpha, useTheme, styled } from "@mui/material/styles";
import {
  Box,
  List,
  ListItemText,
  ListItemIcon,
  ListItemButton,
} from "@mui/material";
//

// ----------------------------------------------------------------------

const ListItemStyle = styled((props) => (
  <ListItemButton disableGutters {...props} />
))(({ theme }) => ({
  ...theme.typography.body2,
  height: 48,
  position: "relative",
  textTransform: "capitalize",
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
}));

const ListItemIconStyle = styled(ListItemIcon)({
  width: 22,
  height: 22,
  color: "inherit",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

// ----------------------------------------------------------------------

NavItem.propTypes = {
  item: PropTypes.object,
  active: PropTypes.string,
};

function NavItem({ item, active }) {
  const theme = useTheme();

  const { title, icon, id } = item;

  const activeRootStyle = {
    color: "primary.main",
    fontWeight: "fontWeightMedium",
    bgcolor: alpha(
      theme.palette.primary.main,
      theme.palette.action.selectedOpacity
    ),
  };

  return (
    <ListItemStyle
      sx={{
        ...(active === id && activeRootStyle),
      }}
    >
      <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
      <ListItemText disableTypography primary={title} />
    </ListItemStyle>
  );
}

NavSection.propTypes = {
  navConfig: PropTypes.array,
  // setval: PropTypes.func,
  active: PropTypes.string,
};

export default function NavSection({ navConfig, active, setval, ...other }) {
  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {navConfig.map((item, index) => (
          <div
            onClick={() => {
              setval(item.id);
            }}
            key={index}
          >
            <NavItem item={item} active={active} />
          </div>
        ))}
      </List>
    </Box>
  );
}
