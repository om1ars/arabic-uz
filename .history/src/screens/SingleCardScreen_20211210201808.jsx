import React from "react";
import { useParams } from "react-router";
import { chapters } from "../utils/quranChapters";

export const SingleCard = () => {
  const { slug } = useParams();
  //   console.log(slug, "Heg");

  const Layer = () => {
    if(slug === chapters.map((c) => c.slug) {
      console.log('Worked');
    })
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
