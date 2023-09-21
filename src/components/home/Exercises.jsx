import {useEffect} from "react"
import {Box , Pagination , Stack , Typography , useTheme} from "@mui/material"
import { getExercises ,   setExercises , getChosenPart  } from "../../features/slices/exerciseSlice"
import { useSelector } from "react-redux"
import ExerciseCard from "./ExerciseCard"
const Exercises = () => {
    const theme = useTheme()
    const exercises = useSelector(getExercises)
    return (
    <Box id = "exercises" mt = {{ xs :  "50px" , lg : "110px" ,  } } p = {"20px"} >
        <Typography variant="h4" color={theme.palette.primaryColor.main} mb = {"46px"} >Showing Results</Typography>

        <Stack
            direction = {"row"} gap = {{ xs : "50px" , lg: "110px"}} flexWrap = {"wrap"} justifyContent  = {"center"}
            alignItems={"center"}
        >

        {
            exercises.map((exercise,index) => (
                   <ExerciseCard key = {index}  exercise= {exercise} ></ExerciseCard>
                ) )
        }
       
        
        </Stack>
        
    </Box>
  )
}

export default Exercises