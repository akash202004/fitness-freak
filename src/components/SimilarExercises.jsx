import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Loader from "./Loader";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SimilarExercises = ({ targetMuscleExercise, equipmentExercise }) => {
  return (
    <Box sx={{ marginTop: { lg: "100px", xs: "0px" } }} p="10px">
      <Typography
        variant="h3"
        sx={{ marginBottom: { lg: "40px", xs: "10px" }, marginLeft: "40px" }}
      >
        Exercises that target the same{" "}
        <span style={{ color: "red" }}>Muscle Group</span>
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {targetMuscleExercise.length ? (
          <HorizontalScrollbar data={targetMuscleExercise} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography
        variant="h3"
        sx={{
          marginBottom: { lg: "40px", xs: "10px" },
          marginLeft: "40px",
          marginTop: { lg: "100px", xs: "40px" },
        }}
      >
        Exercises that target the same{" "}
        <span style={{ color: "red" }}>Equipment</span>
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {equipmentExercise.length ? (
          <HorizontalScrollbar data={equipmentExercise} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
