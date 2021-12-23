import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { chapters } from "../utils/quranChapters";

export const SingleCard = () => {
  const { title } = useParams();

  const test = useSelector((state) => state.test.list);

  let get_title;

  let get_name = null;

  test.forEach((m) => {
    let get;

    for (let key in m) {
      get = m[key].surah_name_lang;
      get_name = get;
    }
  });

  const arrayed_list = [test, get_name];

  // console.log(arrayed_list[1]);
  // console.log(title);
  // console.log(get_title);

  const Layer = () => {
    return <p>{arrayed_list[1] === title && {


      return(
        
      )
    }}</p>;
  };
  return <div>{<Layer />}</div>;
};
