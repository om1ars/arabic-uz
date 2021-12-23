import React from "react";
import CardListing from "../components/CardListing";
import SearchForQuran from "../components/SearchForQuran";
import { sidebarOptions } from "../utils/sidebarOptions";

export default function HomeScreen() {
  return (
    <>
      {sidebarOptions.map((v, i) => {
        console.log(v.opt);
        
        return (
          
         
            <SearchForQuran />
            <CardListing />
      
        )
      })}
    </>
  );
}
