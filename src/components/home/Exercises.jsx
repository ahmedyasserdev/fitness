import { useEffect, useState } from "react"
import { Box, Pagination, Stack, Typography, useTheme } from "@mui/material"
import { getExercises, getChosenPart, fetchByBodyParts, fetchExercises, getLoading  , } from "../../features/slices/exerciseSlice"
import { useDispatch, useSelector } from "react-redux"
import ExerciseCard from "./ExerciseCard"
import Loader from "../Loader"
const Exercises = () => {
    const theme = useTheme()
    const exercises = useSelector(getExercises)
    const chosenPart = useSelector(getChosenPart)
    const isLoading = useSelector(getLoading)

    const dispatch = useDispatch()
    const [currentPage, setCurentPate] = useState(1)
    const exercisesPerPage = 8
    const indexOfLastExercise = currentPage * exercisesPerPage
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

    useEffect(() => {
        if (chosenPart !== "all") {
            dispatch(fetchByBodyParts(chosenPart))
        } else {
            dispatch(fetchExercises())

        }
    }, [chosenPart])


    const handleChange = (event, value) => {
        setCurentPate(value);
        window.scrollTo({ top: 300 })
    };

  
  
    if (isLoading === true ) {
      return (
        <Loader />
  
      )
    }
  


    return (
        <Box id="exercises" mt={{ xs: "50px", lg: "110px", }} p={"20px"} >
            <Typography variant="h4" color={theme.palette.primaryColor.main} mb={"46px"} >Showing Results</Typography>

            <Stack
                direction={"row"} gap={{ xs: "50px", lg: "110px" }} flexWrap={"wrap"} justifyContent={"center"}
                alignItems={"center"}
            >

                {
                    currentExercises.map((exercise, index) => (
                        <ExerciseCard key={index} exercise={exercise} ></ExerciseCard>
                    ))
                }


            </Stack>

            <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} mt={"40px"}  >

                {
                    exercises.length > exercisesPerPage && (
                        <Pagination
                            shape="rounded"
                            defaultPage={1}
                            count={Math.ceil(exercises.length / exercisesPerPage)}
                            variant="outlined"
                            page={currentPage}
                            onChange={handleChange}
                            sx={{
                                '& .MuiPaginationItem-root': {
                                    color: 'black',
                                },
                                '& .Mui-selected': {
                                    color: theme.palette.primaryColor.main,
                                },
                            }}
                        />


                    )
                }

            </Stack>

        </Box>
    )
}

export default Exercises