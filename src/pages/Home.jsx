/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import Exercises from "../components/Exercises";
import SearchExercise from "../components/SearchExercise";
import { useState } from "react";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <Box>
      <HeroBanner />
      <SearchExercise
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
    </Box>
  );
};

export default Home;
