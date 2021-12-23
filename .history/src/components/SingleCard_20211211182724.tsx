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

  const mapped_surahs = v.data.surahs.map((d: any) => '');

  console.log(get_name);

  return (
    <Link to={`/products/${v.title}`}>
      <div>
        <div className="bg-white p-10 rounded-lg shadow-md my-4">
          <h1 className="text-xl font-bold">{mapped_surahs.name}</h1>
          <div className="mt-4 mb-10">
            <p className="text-gray-600">Course 75% completed</p>
            <div className="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
              <div
              //   className={`bg-${randomColor}-${randomNumberOfColor} w-3/4 h-full rounded-lg shadow-md`}
              ></div>
            </div>
          </div>
          <h3 className="text-xs uppercase">Current lesson:</h3>
          <h2 className="tracking-wide">
            Object in JavaScript
            <br />
            (Challenge)
          </h2>
          <button className="bg-orange-400 py-3 px-8 mt-4 rounded text-sm font-semibold hover:bg-opacity-75">
            Go to lesson
          </button>
        </div>
      </div>
    </Link>
  );
};
