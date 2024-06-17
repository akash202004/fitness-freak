import React, { useState } from "react";
import { Stack, Box, Typography } from "@mui/material";

const Bmi = () => {
  const [selectedGender, setSelectedGender] = useState("");

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };
  return (
    <Box>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ mt: "50px" }}
      >
        <Typography variant="h2" color="red">
          BMI Calculator
        </Typography>
        <form>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ mt: "20px" }}
          >
            <label htmlFor="weight">Weight (kg)</label>
            <input
              type="number"
              id="weight"
              name="weight"
              placeholder="Enter your weight"
              required
            />
            <label htmlFor="height">Height (cm)</label>
            <input
              type="number"
              id="height"
              name="height"
              placeholder="Enter your height"
              required
            />
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              placeholder="Enter your age"
              required
            />
            <label htmlFor="sex">Sex</label>
            <div>
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                checked={selectedGender === "male"}
                onChange={handleGenderChange}
              />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                checked={selectedGender === "female"}
                onChange={handleGenderChange}
              />
              <label htmlFor="female">Female</label>
            </div>
            <button type="submit">Calculate</button>
          </Stack>
        </form>
      </Stack>
    </Box>
  );
};

export default Bmi;
