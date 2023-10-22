// AgeCalculator.js
import React, { useState } from "react";
import "./age.css";

function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const calculateAge = () => {
    const birthDateObj = new Date(birthDate);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - birthDateObj;
    const ageInYears = new Date(ageInMilliseconds).getUTCFullYear() - 1970;
    setAge(ageInYears);
  };
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="container">
      <h1>Age Calculator</h1>
      <h4>Enter your birth date</h4>
      <input
        className="inbox"
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      <br></br>
      <button className="clbtn" onClick={calculateAge}>
        Calculate Age
      </button>
      {age !== null && <p>Your are {age} years old</p>}
    </div>
  );
}

export default AgeCalculator;
