/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import { Stack, Button, Box, useTheme, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { useDispatch , useSelector } from "react-redux"
import { deleteFromFavs, addToFavs , getFavs } from "../../features/slices/FavoritesSlice.js"

const ExerciseCard = ({ exercise }) => {
    const favorites = useSelector(getFavs);
    const { name, id, gifUrl, bodyPart, target } = exercise;
    const [isFavorite, setIsFavorite] = useState(false);
    const theme = useTheme();
    const dispatch = useDispatch()

 useEffect(() => {
    const isExerciseFavorite = favorites.some(
      (fav) => fav.id === exercise.id
    );
    setIsFavorite(isExerciseFavorite);
  }, [favorites]);



    const handleFavoriteClick = (e) => {
        e.preventDefault();
    
        if (isFavorite) {
            dispatch(deleteFromFavs(exercise));
            setIsFavorite(false); 
        } else {
            dispatch(addToFavs(exercise));
            setIsFavorite(true); 
        }
    };



    const iconStyles = {
        color: "#ff0000",
        fontSize: "24px",
    }
    return (
        <Link to={`/exercise/${id}`} className="exercise-card" >

            <Box
                sx={{
                    position: "absolute",
                    top: "8px",
                    left: "8px",
                    zIndex: 1,
                }}
            >
                {isFavorite ? (
                    <Favorite
                        sx={
                            iconStyles
                        }
                        onClick={ handleFavoriteClick}

                        aria-label="Remove from favorites"
                    />
                ) : (
                    <FavoriteBorder
                        sx={
                            iconStyles
                        }
                        onClick={ handleFavoriteClick}
                        aria-label="Add to favorites"
                    />
                )}
            </Box>


            <img src={gifUrl} alt={name} loading="lazy" />

            <Stack direction={"row"}  >
                <Button
                    sx={{
                        ml: "21px", color: "#fff", backgroundColor: "#ffa9a9", fontSize: "14px", borderRadius: "20px",
                        textTransform: "capitalize", fontWeight: "bold",
                        "&:hover": { color: "#ffa9a9" }

                    }}
                >
                    {bodyPart}
                </Button>
                <Button
                    sx={{
                        ml: "21px", color: "#fff", backgroundColor: "#fcc757", fontSize: "14px", borderRadius: "20px",
                        textTransform: "capitalize", fontWeight: "bold",
                        "&:hover": { color: "#fcc757" }

                    }}
                >
                    {target}
                </Button>


            </Stack>

            <Typography fontSize={"22px"} color="#000" fontWeight={"bold"} ml="11px" pb="10px" textTransform="capitalize"  >
                {name}
            </Typography>

        </Link>
    )
}

export default ExerciseCard