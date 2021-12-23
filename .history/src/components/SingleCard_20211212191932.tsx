import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "./dataLayer/store";

export interface ChaptersProps {
  v: any;
}
export const SingleCard: React.FC<ChaptersProps> = ({ v }) => {
  const loading = useSelector<RootState>(state => state.singleQuran.loading)

  console.log(loading);
  


  

  return (
    <>
     {!loading ? (
       <></>
     ) : (
       <>
       </>
     )}
    </>
  );
};
