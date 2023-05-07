import { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import { UserRoleContext } from "../utils/context/role";
import routes from "../routes";

const drawerWidth = 240;
const appTitle = "Animal Rescue";

function DrawerAppBar(props) {
  const isAdmin = useContext(UserRoleContext);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { window } = props;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const visibleRoutes = Object.values(routes).filter((route) => {
    return isAdmin ? true : !route.requiresAuth;
  });

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {appTitle}
      </Typography>
      <Divider />
      <List>
        {visibleRoutes.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText
                primary={item.name}
                onClick={() => props.router.navigate(item.path)}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ display: { xs: "none", sm: "block" }, textAlign: "center" }}
          >
            {appTitle}
          </Typography>
          <Box sx={{ display: { md: "block", xs: "none" }, marginLeft: 2 }}>
            {visibleRoutes.map((item) => (
              <Button
                key={item.name}
                sx={{ color: "#fff" }}
                onClick={() => props.router.navigate(item.path)}
              >
                {item.name}
              </Button>
            ))}
          </Box>
          <Switch
            sx={{ marginLeft: "auto" }}
            checked={isAdmin}
            color="default"
            onChange={() => props.setIsAdmin((prev) => !prev)}
            aria-label="login switch"
          />
          <Box sx={{ minWidth: "60px" }}>{isAdmin ? "Admin" : "Guest"}</Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 4 }}></Box>
    </Box>
  );
}

export default DrawerAppBar;
