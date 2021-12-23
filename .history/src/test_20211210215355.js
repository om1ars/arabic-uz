import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Test() {
  const test = useSelector((state) => state.test.list);

//   let get_chapter_names;
const (get_chapter_name, setGet_chapter_name) = useState('')

  test.forEach((m) => {
    for (let key in m) {
      console.log(m[key].surah_name_lang);
      setGet_chapter_name(m[key].surah_name_lang)
      return key;
    }
  });

  console.log(get_ch);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
