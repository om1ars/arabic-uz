import React from "react";
import { useParams } from "react-router";
import { chapters } from "../utils/quranChapters";

export const SingleCard = () => {
  // const { slug }: any = useParams();
  //   console.log(slug, "Heg");
  const {slug} = useParams()
  console.log(params, 'Hey');

  return (
    <div>
  
    </div>
  );
};
