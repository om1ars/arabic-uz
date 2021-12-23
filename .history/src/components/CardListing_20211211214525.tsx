import React, { useState } from "react";
import { useSelector } from "react-redux";
import { colors, randomColorNumbers } from "../utils/colors";
import { RootState } from "./dataLayer/store";
import { SingleCard } from "./SingleCard";

export default function CardListing() {

  const list_of_chapters: any = useSelector<RootState>(
    (state) => state.test.list 
  );

  log
  const [chapters, setChapters] = useState<any>(list_of_chapters);


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
      {list_of_chapters.map((v: any, i: any) => (
        <>
          <SingleCard
            v={v}
            key={i}
          />
        </>
      ))}
    </div>
  );
}
