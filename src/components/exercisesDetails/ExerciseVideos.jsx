import React from 'react';
import { getVideos } from "../../features/slices/videoSlice";
import { useSelector } from 'react-redux';
import { Box, Typography, Stack, useTheme } from "@mui/material";

const ExerciseVideos = ({ name }) => {
  const videos = useSelector(getVideos);
  const theme = useTheme();
  return (
    <Box sx={{ mt: { xs: "20px", lg: "200px" }, p: "20px" }}>
      <Typography variant="h3" mb={"33px"}>
        Watch <span style={{ color: theme.palette.primaryColor.main }}>{name}</span> exercise video
      </Typography>
      <Stack
        justifyContent={"flex-start"}
        flexWrap={"wrap"}
        alignItems={"center"}
        sx={{ flexDirection: { lg: "row" }, gap: { xs: 0, lg: " 40px" } }}
      >
      
    {
      videos?.slice(0,5).map((item , index) => {
        return (
            <a
              key={index}
              href={`https://www.youtube.com/watch?v=${item.video?.videoId}`}
              className="exercise-video"
             target = "_blank"
             rel = "noreferrer"
            >

            <img style = {{maxWidth : "100%" }}   src = {item.video?.thumbnails[0].url  } alt= {item.video?.title  }  />
          </a>

        ) 
      } )

    }

      </Stack>
    </Box>
  );
};

export default ExerciseVideos;