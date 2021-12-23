import React from "react";
import { colors, randomColorNumbers } from "../utils/colors";
import { dummyData } from "../utils/dummyData";

export default function CardListing() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const randomNumberOfColor =
    randomColorNumbers[Math.floor(Math.random() * randomColorNumbers.length)];

  console.log(randomNumberOfColor);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-around",
      }}
    >
        {d}
    
    </div>
  );
}
