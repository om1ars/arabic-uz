import React from "react";
import { useSelector } from "react-redux";
import { colors, randomColorNumbers } from "../utils/colors";
import { RootState } from "./dataLayer/store";
import { SingleCard } from "./SingleCard";

export default function CardListing() {
  const [chapters, setChapters] = useS
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const randomNumberOfColor =
    randomColorNumbers[Math.floor(Math.random() * randomColorNumbers.length)];
  const list_of_chapters: any = useSelector<RootState>(
    (state) => state.test.list
  );

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
      {list_of_chapters.map((v: any, i: any, ) => (
        <>
        <SingleCard
          v={v}
          key={i}
          randomColor={randomColor}
          randomNumberOfColor={randomNumberOfColor}
        />
          
        </>
      ))}
    </div>
  );
}
