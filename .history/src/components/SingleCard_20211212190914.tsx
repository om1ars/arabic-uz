import React, { useState } from "react";
import { Link } from "react-router-dom";

export interface ChaptersProps {
  v: any;
}
export const SingleCard: React.FC<ChaptersProps> = ({ v }) => {
  const [loading, setLoading] = useState<boolean>(false);


  

  return (
    <>
     {loading}
    </>
  );
};
