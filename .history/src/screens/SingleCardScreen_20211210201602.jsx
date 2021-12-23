import React from "react";
import { useParams } from "react-router";
import { chapters } from "../utils/quranChapters";

export const SingleCard = () => {
  const { slug } = useParams();
  //   console.log(slug, "Heg");

  return (
    <div>
      {chapters
        .filter((f) => f.slug === slug)
        .map((c) => (
          <h1>{c.title}</h1>
        ))}
      <h1>Hello</h1>
    </div>
  );
};
