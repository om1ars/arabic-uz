import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Test() {
  const test = useSelector((state) => state.test.list);

  //   let get_chapter_names;
  const [get_chapter_name, setGet_chapter_name] = useState("");

  test.forEach((m) => {
    let get;

    for (let key in m) {

        get = m[key].surah_name_lang;

      console.log(get);
   
  
      return get
    }
    setGet_chapter_name(get)
  });

  console.log(get_chapter_name, "hey");

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
