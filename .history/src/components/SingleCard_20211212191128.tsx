import React, { useState } from "react";
import { Link } from "react-router-dom";

export interface ChaptersProps {
  v: any;
}
export const SingleCard: React.FC<ChaptersProps> = ({ v }) => {
  const [load, setLoad] = useState<boolean>(false);


  return (
    <>
     {v ? (
       <>
        {v.map((v: any) => {
          return (
            <Link to={`/singleChapter/${v.number}`}>
              <div>
                <div className="bg-white p-10 rounded-lg shadow-md my-4">
                  <div className="mt-4 mb-10">
                    <p className="text-gray-600">Course 75% completed </p>
                    <div className="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
                      <div></div>
                    </div>
                  </div>
                  <h3 className="text-xs uppercase">Current lesson:</h3>
                  <h2 className="tracking-wide">
                    {v.name}
                    <br />({v.englishName})
                  </h2>
                  <button className="bg-orange-400 py-3 px-8 mt-4 rounded text-sm font-semibold hover:bg-opacity-75">
                    Go to lesson
                  </button>
                </div>
              </div>
            </Link>
          );
          
        })}
        </>
     )}
    </>
  );
};
