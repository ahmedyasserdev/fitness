import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { Box, Stack, Typography } from "@mui/material"
import Detail from '../components/exercisesDetails/Detail'
import ExerciseVideos from '../components/exercisesDetails/ExerciseVideos'
import SimilarExercises from '../components/exercisesDetails/SimilarExercises'
import { fetchById  , getExerciseDetail} from '../features/slices/exerciseSlice'
import { useDispatch , useSelector} from 'react-redux'
import { fetchRelatedVideosByName } from '../features/slices/videoSlice'

const ExerciseDetails = () => {
  const {id} = useParams() 
  const dispatch = useDispatch()
  const exerciseDetail = useSelector(getExerciseDetail)


  useEffect(() => {
    dispatch(fetchById(id))
    dispatch(fetchRelatedVideosByName(exerciseDetail.name))
  }, [id])


  return (
    <Box>
      <Detail exerciseDetail = {exerciseDetail}  />
      <ExerciseVideos name = {exerciseDetail.name}  />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetails

