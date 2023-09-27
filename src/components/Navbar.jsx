/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Stack,
  useTheme,
  IconButton,
  Drawer,
  Badge,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Menu, FavoriteBorder } from "@mui/icons-material";
import logo from "/assets/images/Logo.png";
import { getFavs } from "../features/slices/FavoritesSlice";
import { useSelector } from "react-redux";

const links = [
  { title: "Home", path: "/" },
  { title: "BMI", path: "/bmi" },
];

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();
  const location = useLocation();
  const favsLength = useSelector(getFavs);
  const favsCount = favsLength.length;
  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
          <StyledLink key={link.path} to={link.path}>
            {link.title}
          </StyledLink>
        ))}
      </Stack>

      {isMobile ? (
        <>
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
            <Menu />
          </IconButton>

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
                <StyledLink key={link.path} to={link.path}>
                  {link.title}
                </StyledLink>
              ))}
            </Stack>
          </Drawer>
        </>
      ) : (
        <Link to="/favorites">
          <IconButton>
            <Badge badgeContent={favsCount} color="error">
              <FavoriteBorder
                sx={{
                  color: "#ff0000",
                  fontSize: "24px",
                }}
              />
            </Badge>
          </IconButton>
        </Link>
      )}
    </Stack>
  );
};

export default Navbar;

const StyledLink = ({ to, children }) => {
  const location = useLocation();
  const theme = useTheme();

  return (
    <Link
      to={to}
      style={{
        color:
          location.pathname === to
            ? theme.palette.primaryColor.main
            : "#3a1212",
        textDecoration: "none",
        borderBottom:
          location.pathname === to
            ? `2px solid ${theme.palette.primaryColor.main}`
            : "none",
      }}
    >
      {children}
    </Link>
  );
};