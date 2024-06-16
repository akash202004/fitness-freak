import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { exerciseOptions, fetchData, ytOptions } from "../utils/fetchData";
import Detail from "../components/Detail";
import ExerxiseVideos from "../components/ExerxiseVideos";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercise, setTargetMuscleExercise] = useState([]);
  const [equipmentExercise, setEquipmentExercise] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchExerciseData = async () => {
      const exerciseDburl = "https://exercisedb.p.rapidapi.com";
      const ytSearch = "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDburl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(
        `${ytSearch}/search?query=${exerciseDetailData.name} exercise`,
        ytOptions
      );
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExerciseData = await fetchData(
        `${exerciseDburl}/exercises/target/${exerciseDetailData.target}`,
        exerciseOptions
      );
      setTargetMuscleExercise(targetMuscleExerciseData);

      const equipmentExerciseData = await fetchData(
        `${exerciseDburl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions
      );
      setEquipmentExercise(equipmentExerciseData);
    };

    fetchExerciseData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerxiseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetMuscleExercise={targetMuscleExercise}
        equipmentExercise={equipmentExercise}
      />
    </Box>
  );
};

export default ExerciseDetails;
