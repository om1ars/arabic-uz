import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Test() {
//   const test = useSelector((state) => state.test.list);

//   let get_name = null;

//   test.forEach((m) => {
//     let get;

//     for (let key in m) {
//       get = m[key].surah_name_lang;
//       get_name = get;

//     }
//   });

//   const arrayed_list = [test, get_name];
// //   console.log(arrayed_list)


const fetch = async() => {
  await axios('http://api.alquran.cloud/v1/format/text').then(res => console.log(res.data))
}

useEffect(() => {

}, [])

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
