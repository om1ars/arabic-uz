import React, { useState } from "react";
import { Link } from "react-router-dom";

export interface ChaptersProps {
  v: any;
}
export const SingleCard: React.FC<ChaptersProps> = ({ v }) => {
  const [load, setLoad] = useState<boolean>(false);


  return (
    <>
     {v }
    </>
  );
};
