import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Stack, useTheme, IconButton, Drawer } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import logo from "/assets/images/Logo.png";

const links = [
  { title: "Home", path: "/" },
  { title: "BMI", path: "/bmi" },
];

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      gap={{ xs: "40px", sm: "122px" }}
      mt={{ xs: "20px", sm: "32px" }}
      px="20px"
      sx={{ position: "relative" }}
    >
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          style={{ width: "48px", height: "48px", margin: "0 28px" }}
        />
      </Link>

      <Stack
        sx={{ display: { xs: "none", md: "flex" } }}
        direction="row"
        alignItems="flex-end"
        gap="40px"
        fontSize="24px"
      >
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            style={{
              color:
                location.pathname === link.path
                  ? theme.palette.primaryColor.main
                  : "#3a1212",
              textDecoration: "none",
              borderBottom:
                location.pathname === link.path
                  ? `2px solid ${theme.palette.primaryColor.main}`
                  : "none",
            }}
          >
            {link.title}
          </Link>
        ))}
      </Stack>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", md: "none" },
          textAlign: "center",
        }}
        PaperProps={{
          style: {
            backgroundColor: "#fff8f7",
          },
        }}
      >
        <Stack
          direction="column"
          alignItems="center"
          gap="40px"
          fontSize="24px"
          p="20px"
        >
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                color:
                  location.pathname === link.path
                    ? theme.palette.primaryColor.main
                    : "#3a1212",
                textDecoration: "none",
                borderBottom:
                  location.pathname === link.path
                    ? `2px solid ${theme.palette.primaryColor.main}`
                    : "none",
              }}
            >
              {link.title}
            </Link>
          ))}
        </Stack>
      </Drawer>

      <IconButton
        edge="end"
        color="inherit"
        aria-label="menu"
        onClick={handleDrawerToggle}
        sx={{
          display: { md: "none" },
          position: "absolute",
          right: "50px",
          color: theme.palette.primaryColor.main,
        }}
      >
        <MenuIcon />
      </IconButton>
    </Stack>
  );
};

export default Navbar;