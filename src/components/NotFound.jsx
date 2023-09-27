import {Stack , Typography , useTheme } from "@mui/material"

const NotFound = () => {
    const theme = useTheme()
  return (
    <Stack direction = "row" justifyContent={"center" } alignItems = {"center"} sx = {{minHeight  :"80vh"}}   >

    <Typography variant = "h2"  color = {theme.palette.primaryColor.main}  textAlign = "center" > 
        404 <br/>
        Page Not Found
    
    </Typography>
    
    </Stack>
  )
}

export default NotFound