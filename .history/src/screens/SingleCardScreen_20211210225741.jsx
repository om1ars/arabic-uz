import React from "react";
import { useParams } from "react-router";
import { chapters } from "../utils/quranChapters";

export const SingleCard = () => {
  const {title} = useParams()
  console.log(title, 'Hey');

  if()

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};
