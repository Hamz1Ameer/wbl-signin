"use client";
import React from "react";

function Sidebar() {
  const handleSearchClick = () => {
    // Handle search button click
    console.log("Search button clicked");
  };

  const handleClassesClick = () => {
    // Handle classes button click
    console.log("Classes button clicked");
  };

  const handleSessionsClick = () => {
    // Handle sessions button click
    console.log("Sessions button clicked");
  };

  return (
    <div className="flex flex-col justify-start items-start h-full p-4">
      <button
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 mb-2 rounded"
        onClick={handleSearchClick}
      >
        Search
      </button>
      <button
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 mb-2 rounded"
        onClick={handleClassesClick}
      >
        Classes
      </button>
      <button
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 mb-2 rounded"
        onClick={handleSessionsClick}
      >
        Sessions
      </button>
    </div>
  );
}

export default Sidebar;
