/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Box, Stack, Button, Typography, TextField } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercise = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });

      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" justifyContent="center" p="20px">
      <Typography
        fontWeight="700"
        textAlign="center"
        mb="50px"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
      >
        Awesome Exercise You <br /> Should Know.
      </Typography>
      <Box position="relative">
        <TextField
          sx={{
            input: {
              fontWeight: "600",
              border: "none",
              borderRadius: "4px",
            },
            width: {
              lg: "1170px",
              xs: "350px",
            },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          type="text"
          placeholder="Search Exercise"
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
        />
        <Button
          onClick={handleSearch}
          className="search-btn"
          sx={{
            backgroundColor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyParts
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercise;
