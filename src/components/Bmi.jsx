import React, { useState } from "react";

const Bmi = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");
  const [bmiResult, setBmiResult] = useState(null);
  const [message, setMessage] = useState("");
  const [risk, setRisk] = useState("");

  const calculateBmi = (e) => {
    e.preventDefault();

    if (weight > 0 && height > 0) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmiResult(bmiValue);

      let bmiMessage = "";
      let riskMessage = "";

      if (bmiValue < 18.5) {
        bmiMessage = "Underweight";
        riskMessage = "Malnutrition risk";
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        bmiMessage = "Normal weight";
        riskMessage = "Low risk";
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        bmiMessage = "Overweight";
        riskMessage = "Enhanced risk";
      } else {
        bmiMessage = "Obese";
        riskMessage = "High risk";
      }

      setMessage(bmiMessage);
      setRisk(riskMessage);
    } else {
      setBmi(null);
      setMessage("Please enter valid weight and height values.");
    }
  };

  return (
    <div className="px-20 py-10">
      <h1 className="text-[50px]">BMI Calculator</h1>
      <form onSubmit={calculateBmi}>
        <div>
          <label className="mx-2 text-[20px]">Weight (in kg )</label>
          <input
            className="px-1 py-2 bg-red-200 mt-2"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div>
          <label className="mx-2 text-[20px]">Height (in cm )</label>
          <input
            className="px-1 py-2 bg-red-200 mt-2"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="mt-2">
          <label className="mx-2 text-[20px]">Sex</label>
          <select
            value={sex}
            onChange={(e) => setSex(e.target.value)}
            className="text-[20px]"
          >
            <option value="m">male</option>
            <option value="f">female</option>
          </select>
        </div>
        <div>
          <label className="mx-2 text-[20px]">Age</label>
          <input
            className="px-1 py-2 bg-red-200 mt-2"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button
          className="mt-6 mx-2 px-6 py-2 bg-black text-white"
          type="submit"
        >
          Submit
        </button>
      </form>
      {bmiResult && (
        <div className="mt-4 mx-2 text-[20px]">
          <h2 className="underline">BMI Result</h2>
          <p>BMI : {bmiResult}</p>
          <p>Status : {message}</p>
          <p>Risk : {risk}</p>
        </div>
      )}
    </div>
  );
};

export default Bmi;
