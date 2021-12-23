import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
   <button class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
  Click me
</button>

<!-- Extracting classes using @apply -->
<button class="btn btn-green">
  Button
</button>

<style>
  .btn {
    @apply py-2 px-4 font-semibold rounded-lg shadow-md;
  }
  .btn-green {
    @apply text-white bg-green-500 hover:bg-green-700;
  }
</style>
    </div>
  );
}

export default App;
