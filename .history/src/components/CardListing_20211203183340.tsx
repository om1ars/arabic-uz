import React from 'react'

export default function CardListing() {
    return (
        <div>
             <div class="bg-white p-10 rounded-lg shadow-md">
    <h1 class="text-xl font-bold">Jump back in!</h1>
    <div class="mt-4 mb-10">
      <p class="text-gray-600">Course 75% completed</p>
      <div class="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
        <div class="bg-pink-400 w-3/4 h-full rounded-lg shadow-md"></div>
      </div>
    </div>
    <h3 class="text-xs uppercase">Current lesson:</h3>
    <h2 class="tracking-wide">
      Object in JavaScript
      <br />
      (Challenge)
    </h2>
    <button class="bg-orange-400 py-3 px-8 mt-4 rounded text-sm font-semibold hover:bg-opacity-75">Go to lesson</button>
  </div>
        </div>
    )
}
