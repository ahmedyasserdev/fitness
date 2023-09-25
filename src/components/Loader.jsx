import {Stack , useTheme , CircularProgress } from "@mui/material"

const Loader = () => {
    const theme = useTheme()
  return (
    <Stack direction = "row" justifyContent = "center" alignItems = "center" width = "100%" height ="100vh"   >
    <CircularProgress  sx = {{color : theme.palette.primaryColor.main}}    />
    </Stack>
  )
}

export default Loader