import React from "react";
import Button from "./Components/Button";

import "./Recomendation.css";

const buttonList = [
  "All recommendations",
  "Chill-out music",
  "Comedy",
  "Python",
  "JavaScript",
  "Cooking",
  "Live",
  "Pubg",
  "Sushant Singh Rajput",
  "Photography",
  "Cinematic Videos",
  "Apple",
  "Cricket",
  "Kapil",
  "Pizza",
];

const Recomendation = (props) => {
  return buttonList.map((button) => <Button name={button} />);
};

export default Recomendation;
