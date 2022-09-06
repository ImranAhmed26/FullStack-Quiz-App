import Router from "next/router";
import React from "react";
import { useEffect, useState } from "react";

import Navbar from "../components/navbar";

const Result = () => {
  const [userName, setUserName] = useState();
  const [points, setPoints] = useState(0);

  useEffect(() => {
    const user = localStorage.getItem("userName");
    setUserName(user);
    const pointsScored = localStorage.getItem("points");
    setPoints(pointsScored);
  }, []);

  const handleClick = () => {
    localStorage.setItem("points", 0);
    Router.push("/topic");
  };

  return (
    <div>
      <Navbar />
      <div>
        <div className="text-center pt-20 flex flex-col justify-center items-center font-serif cursor-default ">
          <h1 className="text-3xl font-semibold text-gray-600">{`Dear ${userName}.`}</h1>
          <h1 className="text-xl text-gray-600">Your quiz has ended. </h1>
          <div className="flex flex-col items-center justify-center bg-gray-50 w-[24rem] md:w-[30rem] lg:w-[40rem] text-2xl font-medium text-gray-700 px-6 py-2 mt-16 mb-4 rounded-md drop-shadow-md cursor-default min-h-[28rem] lg:min-h-[26rem]">
            <h1 className="">You scored</h1>
            <h1 className="text-5xl text-green-400 py-2">{`${points} points`}</h1>
            <h1 className="pt-2">Out of 10</h1>
          </div>
          <div
            className="text-xl text-center text-gray-800 bg-green-200 rounded-md px-2 py-2 mt-2 w-[24rem] md:w-[30rem] lg:w-[40rem] hover:bg-green-300 duration-200 drop-shadow-md cursor-pointer"
            onClick={handleClick}
          >
            Retake another quiz
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
