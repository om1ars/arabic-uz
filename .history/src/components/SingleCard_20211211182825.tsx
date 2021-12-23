import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";

export interface ChaptersProps {
  randomColor: any;
  randomNumberOfColor: any;
  v: any;
}
export const SingleCard: React.FC<ChaptersProps> = ({
  v,
  randomNumberOfColor,
  randomColor,
}) => {
  let get_name = null

  const mapped_surahs = v.data.surahs.map((d: any) => get_name = d.name);

  console.log(get_name);

  return (
   {
     v.map((d) => )
   }
  );
};
