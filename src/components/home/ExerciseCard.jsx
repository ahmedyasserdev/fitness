/* eslint-disable react/prop-types */
import { Stack , Button  , useTheme, Typography} from "@mui/material"
import {Link} from "react-router-dom"



const ExerciseCard = ({exercise}) => {
    const {name , id , gifUrl , bodyPart , target } = exercise
    const theme= useTheme()
  return (
    <Link to = {`/exercise/${id}`}  className="exercise-card" >
        <img src = {gifUrl} alt = {name} loading = "lazy"  />

        <Stack direction={"row"}  >
            <Button
            sx = {{
                ml :"21px" , color : "#fff" ,  backgroundColor : "#ffa9a9" ,   fontSize : "14px" , borderRadius : "20px" , 
                textTransform  :"capitalize", fontWeight: "bold" ,
                "&:hover" : {color : "#ffa9a9"}

            }}
            >
            {bodyPart}
            </Button>
            <Button
            sx = {{
                ml :"21px" , color : "#fff" ,  backgroundColor : "#fcc757" ,   fontSize : "14px" , borderRadius : "20px" , 
                textTransform  :"capitalize", fontWeight: "bold" ,
                "&:hover" : {color : "#fcc757"}

            }}
            >
            {target}
            </Button>


        </Stack>

        <Typography  fontSize = {"22px"} color="#000" fontWeight ={"bold"} ml = "11px" pb = "10px" textTransform = "capitalize"  >
            {name}
        </Typography>
    
    </Link>
  )
}

export default ExerciseCard