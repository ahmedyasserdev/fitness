/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import {
  getTargetMuscle,
  getEquipment,
} from "../../features/slices/exerciseSlice";
import { Box, Stack, Typography } from "@mui/material";
import ExerciseCard from "../home/ExerciseCard";

const ExerciseSection = ({ title, exercises }) => {
  return (
    <Box mt="12px">
      <Typography
        variant="h4"
        pl="20px"
        textTransform="capitalize"
        fontSize={{ xs: "29px", md: "44px" }}
        mb="20px"
      >
        {title}
      </Typography>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent={{ xs: "center", md: "start" }}
        flexWrap="wrap"
        gap={{ xs: "20px", md: "15px" }}
        p={2}
        sx={{ position: "relative" }}
      >
        {exercises.length > 0 &&
          exercises.slice(0, 5).map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise} />
          ))}
      </Stack>
    </Box>
  );
};

const SimilarExercises = () => {
  const targetMuscle = useSelector(getTargetMuscle);
  const equipment = useSelector(getEquipment);
  return (
    <Box mt={{ xs: "180px", lg: "120px" }} textAlign={{ xs: "center", md: "start" }}>
      <ExerciseSection title="exercises that targets the same muscle group" exercises={targetMuscle} />
      <ExerciseSection title="exercises that have the same equipment" exercises={equipment} />
    </Box>
  );
};

export default SimilarExercises;