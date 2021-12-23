import React from "react";
import { useParams } from "react-router";
import { chapters } from "../utils/quranChapters";

export const SingleCard = () => {
  const { slug }: any = useParams();
//   console.log(slug, "Heg");

  return (
    <div>
      {chapters.filter((c) => slug === c.slug).map((c) =>
      (
          <h1>{}}</h1>
      ))}
      <h1>Hello</h1>
    </div>
  );
};
