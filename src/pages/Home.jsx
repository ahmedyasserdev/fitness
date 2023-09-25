import { Box } from "@mui/material"
import SearchExercises from '../components/home/SearchExercises'
import BodyPartsList from './../components/home/BodyPartsLIst';
import Exercises from "../components/home/Exercises";
const Home = () => {
 

  return (
    <Box>
      <SearchExercises />
      <BodyPartsList />
      <Exercises />
    </Box>
  )
}

export default Home