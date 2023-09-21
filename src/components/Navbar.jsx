import { Link } from "react-router-dom"
import { Stack, useTheme } from "@mui/material"
import logo from "/assets/images/Logo.png"
const Navbar = () => {
  const theme = useTheme()
  return (
    <Stack direction = {"row"} alignItems = {"center"}  gap = {{xs :"40px" , sm: "122px"  }}
      mt = {{ xs: "20px" , sm : "32px"}} px = {"20px"}
     >
      <Link to="/" >
        <img src={logo} alt={"logo"} style={{ width: "48px", height: "48px", margin: "0 28px" }} />
      </Link>

      <Stack direction = {"row"} alignItems = {"flex-end"} gap = {"40px"} fontSize = "24px"  >
        <Link to="/" style={{ color: "#3a1212", textDecoration: "none", borderBottom: `2px solid ${theme.palette.primaryColor.main} ` }}  >
          Home
        </Link>

        <a href="#exercises" style={{ color: "#3a1212", textDecoration: "none" }}  >
          Exercises
        </a>

      </Stack>


    </Stack>
  )
}

export default Navbar