import React from "react";
import { useParams } from "react-router";
import { chapters } from "../utils/quranChapters";

export const SingleCard = () => {
  // const { slug }: any = useParams();
  //   console.log(slug, "Heg");
  const params = useParams

  return (
    <div>
      {chapters
        .find((f) => f.slug === slug)
        .map((c) => (
          <h1>{c.slug}</h1>
        ))}
      <h1>Hello</h1>
    </div>
  );
};
