import React from "react";
import CardListing from "../components/CardListing";
import SearchForQuran from "../components/SearchForQuran";
import { sidebarOptions } from "../utils/sidebarOptions";

export default function HomeScreen() {
  return (
    <>
      {sidebarOptions.map((v, i) => (
        <div className="relative min-h-screen md:flex">
          {/* <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
            <div className="block p-4 text-white font-bold">Better Dev</div>
          </div> */}

       

          <div className="flex-1 p-10 text-2xl font-bold">
            <SearchForQuran />
            <CardListing />
          </div>
        </div>
      ))}
    </>
  );
}
