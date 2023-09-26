import { Box, Stack  , Typography , useTheme } from "@mui/material"
import { useSelector } from "react-redux"
import { getFavs } from "../features/slices/FavoritesSlice"
import ExerciseCard from "../components/home/ExerciseCard"
const Favorites = () => {
    const favorites = useSelector(getFavs)
    const theme = useTheme()
    return (
        <Box
            mt={{ xs: "50px", lg: "110px", }} p={"20px"}
        >
       


        <Typography variant="h4" color={theme.palette.primaryColor.main} mb={"46px"} > 
            {
                favorites.length > 0 ? "Your Favorite Exercises" : "You don't have any favorite exercises yet"
            }
        </Typography>
            <Stack
                direction={"row"} gap={{ xs: "50px", lg: "110px" }} flexWrap={"wrap"} justifyContent={"center"}
                alignItems={"center"}
            >

                {
                    favorites?.map((exercise, index) => (
                        <ExerciseCard key={index} exercise={exercise} />
                    ))
                }


            </Stack>
        </Box>
    )
}

export default Favorites