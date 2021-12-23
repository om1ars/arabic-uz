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

  const get_ayahs = null

  for(let key in arrayed_list[0]){
    let value = arrayed_list[0]
    Object.keys(value)
  }

  const Layer = () => {
    return <p>{arrayed_list[1] === title && "hey"}</p>;
  };
  return <div>{<Layer />}</div>;
};
