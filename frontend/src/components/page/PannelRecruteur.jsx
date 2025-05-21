import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Logout from "@mui/icons-material/Logout";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink, Outlet, useLocation } from "react-router";
import { ListItemIcon, Menu, MenuItem, Tooltip } from "@mui/material";

const drawerWidth = 240;

function PannelRecruteur(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const location = useLocation();
  const menuActive = location.pathname
    .split("/")
    .filter((segment) => segment !== "")[
    location.pathname
      .split("/")
      .filter((segment) => segment !== "")
      .indexOf("pannel-recruteur") + 1
  ];

  const getActiveClass = ({ isActive }) =>
    isActive ? "text-green-600" : "text-white hover:text--500";

  const drawer = (
    <div>
      <Toolbar>
        <Typography
          sx={{ fontFamily: "Sora", fontWeight: "bold", fontSize: "25px" }}
        >
          <span className="text-white">Job</span>
          <span className="text-green-600">Remote</span>
        </Typography>
      </Toolbar>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText
              primary={
                <NavLink
                  to="/pannel-recruteur/dashboard"
                  className={({ isActive }) =>
                    `${getActiveClass({ isActive })}`
                  }
                >
                  <div className="flex items-center justify-left">
                    <LeaderboardIcon className="mr-4" />
                    <Typography sx={{ fontFamily: "Sora" }}>
                      Dashboard
                    </Typography>
                  </div>
                </NavLink>
              }
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText
              primary={
                <NavLink
                  to="/pannel-recruteur/freelancer"
                  className={({ isActive }) =>
                    `${getActiveClass({ isActive })}`
                  }
                >
                  <div className="flex items-center justify-left">
                    <PeopleAltIcon className="mr-4" />
                    <Typography sx={{ fontFamily: "Sora" }}>
                      Freelancer
                    </Typography>
                  </div>
                </NavLink>
              }
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText
              primary={
                <NavLink
                  to="/pannel-recruteur/offres"
                  className={({ isActive }) =>
                    `${getActiveClass({ isActive })}`
                  }
                >
                  <div className="flex items-center justify-left">
                    <BusinessCenterIcon className="mr-4" />
                    <Typography sx={{ fontFamily: "Sora" }}>Offres</Typography>
                  </div>
                </NavLink>
              }
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText
              primary={
                <NavLink
                  to="/pannel-recruteur/candidature"
                  className={({ isActive }) =>
                    `${getActiveClass({ isActive })}`
                  }
                >
                  <div className="flex items-center justify-left">
                    <EmailIcon className="mr-4" />
                    <Typography sx={{ fontFamily: "Sora" }}>Candidature</Typography>
                  </div>
                </NavLink>
              }
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText
              primary={
                <NavLink
                  to="/pannel-recruteur/compte"
                  className={({ isActive }) =>
                    `${getActiveClass({ isActive })}`
                  }
                >
                  <div className="flex items-center justify-left">
                    <ManageAccountsIcon className="mr-4" />
                    <Typography sx={{ fontFamily: "Sora" }}>Compte</Typography>
                  </div>
                </NavLink>
              }
            />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        className="bg-gray-"
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: "#101828",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: "Sora",
              textTransform: "capitalize",
            }}
          >
            {menuActive}
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="freelancer@exemple.com">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <AccountCircleIcon
                  sx={{ width: 40, height: 40, color: "#fff" }}
                />
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            slotProps={{
              paper: {
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 2,
                  bgcolor: "#030712",
                  color: "#fff",
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 20,
                    width: 10,
                    height: 10,
                    bgcolor: "#030712",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleClose}>
              <AccountCircleIcon
                className="mr-2"
                sx={{ width: 40, height: 40 }}
              />
              <Box>
                <Typography sx={{ fontFamily: "Sora", fontSize: "14px" }}>
                  Pseudo
                </Typography>
                <Typography sx={{ fontFamily: "Sora", fontSize: "12px" }}>
                  freelancer001@exemple.com
                </Typography>
              </Box>
            </MenuItem>
            <Divider sx={{ borderColor: "#fff", m: 2 }} />
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <SettingsIcon fontSize="small" sx={{ color: "#fff" }} />
              </ListItemIcon>
              <NavLink to="/pannel-freelancer/compte">
                <Typography sx={{ fontFamily: "Sora", fontSize: "14px" }}>
                  Gérer mon compte
                </Typography>
              </NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Logout fontSize="small" sx={{ color: "#fff" }} />
              </ListItemIcon>
              <Typography sx={{ fontFamily: "Sora", fontSize: "14px" }}>
                Se déconnecter
              </Typography>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              bgcolor: "#030712",
            },
          }}
          slotProps={{
            root: {
              keepMounted: true, // Better open performance on mobile.
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              height: "100%",
              bgcolor: "#030712",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>

      
    </Box>
  );
}

PannelRecruteur.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default PannelRecruteur;
