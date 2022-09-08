import React from "react";

const Sidebar = () => {
  return (
    <div>
      <div className="flex flex-col gap-2 bg-green-200 to-green-200 w-60 h-[40rem] xl:h-[45rem] 2xl:h-[50rem] mx-4 rounded-md text-xl text-gray-700 drop-shadow-md transition-all">
        <button
          className="p-4 bg-green-100 hover:bg-green-50 duration-300 rounded-md mx-4 mt-8 font-semibold drop-shadow-md"
          onClick={() => {}}
        >
          Quizes
        </button>
        <button
          className="p-4 bg-green-100 hover:bg-green-50 duration-300 rounded-md mx-4 font-semibold drop-shadow-md"
          onClick={() => {}}
        >
          Results
        </button>
        <button
          className="p-4 bg-green-100 hover:bg-green-50 duration-300 rounded-md mx-4 font-semibold drop-shadow-md"
          onClick={() => {}}
        >
          Settings
        </button>
        <button
          className="p-4 bg-green-100 hover:bg-green-50 duration-300 rounded-md mx-4 font-semibold drop-shadow-md"
          onClick={() => {}}
        >
          Profile
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
