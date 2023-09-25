import {  useEffect } from 'react'
import { useParams } from "react-router-dom"
import { Box, } from "@mui/material"
import Detail from '../components/exercisesDetails/Detail'
import ExerciseVideos from '../components/exercisesDetails/ExerciseVideos'
import SimilarExercises from '../components/exercisesDetails/SimilarExercises'
import { fetchById  , getExerciseDetail , fetchTargetMuscle , fetchEquipment , getLoading } from '../features/slices/exerciseSlice'
import { useDispatch , useSelector} from 'react-redux'
import { fetchRelatedVideosByName } from '../features/slices/videoSlice'
import Loader from '../components/Loader'

const ExerciseDetails = () => {
  const {id} = useParams() 
  const dispatch = useDispatch()
  const exerciseDetail = useSelector(getExerciseDetail)
  const isLoading = useSelector(getLoading)

  useEffect(() => {
    dispatch(fetchById(id))
    dispatch(fetchRelatedVideosByName(exerciseDetail.name))
    dispatch(fetchTargetMuscle(exerciseDetail.target))
    dispatch(fetchEquipment(exerciseDetail.equipment))
    window.scrollTo(0,0)
  }, [id])


  if (isLoading === true ) {
    return (
      <Loader />

    )
  }



  return (
    <Box>
      <Detail exerciseDetail = {exerciseDetail}  />
<ExerciseVideos name = {exerciseDetail.name}  />

      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetails


