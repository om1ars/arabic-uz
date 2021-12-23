import React from "react";
import { useParams } from "react-router";
import { chapters } from "../utils/quranChapters";

export const SingleCard = () => {
  const { slug } = useParams();
  //   console.log(slug, "Heg");

  const Layer = () => {
    return (
      <h1>Hello</h1>
    )
  }

  return (
    <div>
     {<Layer />}
    </div>
  );
};
