import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { chapters } from "../utils/quranChapters";

export const SingleCard = () => {
  const { title } = useParams();
  // console.log(title, "Hey");
  const test = useSelector((state) => state.test.list);

  const [get_title, setGet_title] = useS


  let get_name = null;

  test.forEach((m) => {
    let get;

    for (let key in m) {
      get = m[key].surah_name_lang;
      get_name = get;
    }
  });

  const arrayed_list = [test, get_name];
  console.log(arrayed_list);

  const Layer = () => {
    // if(title ====)
    return <p>Hey</p>;
  };
  return <div>{<Layer />}</div>;
};
