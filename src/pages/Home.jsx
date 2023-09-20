import React from 'react'
import SearchExercises from '../components/home/SearchExercises'
import BodyPartsList from '../components/home/BodyPartsList'
import {Box} from "@mui/material"

const Home = () => {
  return (
    <Box>
    <SearchExercises />
    <BodyPartsList />
  </Box>
  )
}

export default Home