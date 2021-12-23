import React from "react";
import CardListing from "../components/CardListing";
import SearchForQuran from "../components/SearchForQuran";
import { sidebarOptions } from "../utils/sidebarOptions";

export default function HomeScreen() {
  return (
    <>
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
<link href="https://cdn.bootcdn.net/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet">

<div className="container mx-auto my-12 p-12 bg-gray-100">  
  <div className="mb-4 w-full md:w-1/4 border-t-4 border-red-400 rounded-b-lg rounded-t shadow-lg bg-white overflow-hidden">
    <div className="mt-4 mb-8 px-6 py-4">
      <div className="py-4 text-lg text-gray-700 tracking-wide">一级菜单</div>
      <div className="px-4 py-2 border-l-4 border-red-400 bg-red-100 cursor-pointer text-gray-800 flex items-center">
        <i className="fa fa-home"></i>
        <span className="pl-2">系统设置</span>
      </div>
      <div className="px-4 py-2 border-l-4 border-transparent cursor-pointer text-gray-800 flex items-center">
        <i className="fa fa-user"></i>
        <span className="pl-2">用户管理</span>
      </div>
      <div className="py-4 text-lg text-gray-700 tracking-wide">一级菜单</div>
      <div className="px-4 py-2 border-l-4 border-transparent cursor-pointer text-gray-800 flex items-center">
        <i className="fa fa-home"></i>
        <span className="pl-2">系统设置</span>
      </div>
      <div className="px-4 py-2 border-l-4 border-transparent cursor-pointer text-gray-800 flex items-center">
        <i className="fa fa-user"></i>
        <span className="pl-2">用户管理</span>
      </div>
    </div>
  </div>
  
  <div className="mb-4 w-full md:w-1/4 shadow">
    <ul className="list-reset">
      <li>
        <a href="" className="block p-4 border-r-4 border-purple-400 text-base text-gray-gray-400 font-bold hover:border-purple-500 hover:bg-purple-100">商品管理</a>
      </li>
      <li>
        <a href="" className="block p-4 border-r-4 border-transparent text-base text-gray-gray-400 font-bold hover:border-purple-500 hover:bg-purple-100">系统管理</a>
      </li>
      <li>
        <a href="" className="block p-4 border-r-4 border-transparent text-base text-gray-gray-400 font-bold hover:border-purple-500 hover:bg-purple-100">分类管理</a>
      </li>
      <li>
        <a href="" className="block p-4 border-r-4 border-transparent text-base text-gray-gray-400 font-bold hover:border-purple-500 hover:bg-purple-100">联系我们</a>
      </li>
    </ul>
  </div>
</div>

      
            <SearchForQuran />
            <CardListing />
    
    </>
  );
}
