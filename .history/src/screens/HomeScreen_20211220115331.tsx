import React from "react";
import CardListing from "../components/CardListing";
import SearchForQuran from "../components/SearchForQuran";
import { sidebarOptions } from "../utils/sidebarOptions";

export default function HomeScreen() {
  return (
    <>
      {sidebarOptions.map((v, i) => (
        <div className="relative min-h-screen md:flex z-999">
          <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
            <div className="block p-4 text-white font-bold">Better Dev</div>
          </div>

          <div className="sidebar bg-green-800 text-green-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
            <div className="text-white flex items-center space-x-2 px-4">
              <span className="text-2xl font-extrabold">
                More free accesses
              </span>
            </div>

            <h1>{v.opt}</h1>
          </div>

          <div className="flex-1 p-10 text-2xl font-bold">
            <SearchForQuran />
            <CardListing />
          </div>
        </div>
      ))}
    </>
  );
}
