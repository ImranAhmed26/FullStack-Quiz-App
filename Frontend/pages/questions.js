const axios = require("axios").default;
import React from "react";
import { useEffect, useState } from "react";
import Router from "next/router";
import { useRouter } from "next/router";

import Navbar from "../components/navbar";

const Quiz = () => {
  const [userName, setUserName] = useState();
  const [quiz, setQuiz] = useState([]);
  const [number, setNumber] = useState(0);
  const [points, setPoints] = useState(0);

  const router = useRouter();

  useEffect(() => {
    axios
      .get(
        `https://opentdb.com/api.php?amount=10&category=${router.query.id}&difficulty=easy&type=multiple`,
      )
      .then((res) => {
        console.log(res);
        setQuiz(
          res.data.results.map((item) => ({
            question: item.question,
            options: shuffle([...item.incorrect_answers, item.correct_answer]),
            answer: item.correct_answer,
          })),
        );
      })
      .catch((err) => console.error(err));

    const user = localStorage.getItem("userName");
    setUserName(user);
  }, []);

  const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

  const pickAnswer = (e) => {
    let userAnswer = e.target.outerText;

    if (quiz[number].answer === userAnswer) setPoints(points + 1);
    if (number < 10) {
      setNumber(number + 1);
    }
  };

  const handleSubmit = () => {
    localStorage.setItem("points", points);
    Router.push("/result");
  };

  const handleSkip = () => {
    if (number < 10) {
      setNumber(number + 1);
    }
  };

  const handleBack = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  return (
    <div className="">
      <Navbar />
      <div className="text-center pt-20 flex flex-col justify-center items-center font-serif cursor-default ">
        <h1 className="text-3xl font-semibold text-gray-600">{`Hello ${userName}.`}</h1>
        <h1 className="text-xl text-gray-600">Please answer the multiple choice questions below</h1>
        {quiz[number] && (
          <div className="flex flex-col items-center ">
            <div className="flex items-center justify-center min-h-[8rem] bg-gray-50 w-[24rem] md:w-[30rem] lg:w-[40rem] text-2xl font-medium text-gray-700 px-6 py-2 mt-16 mb-4 rounded-md drop-shadow-md cursor-default ">
              {quiz[number].question}
            </div>

            <div className=" min-h-[20rem] lg:min-h-[18rem]">
              {quiz[number].options.map((item, index) => (
                <div key={index}>
                  <div className=" drop-shadow flex justify-center text-xl">
                    <div
                      onClick={pickAnswer}
                      className="text-center text-gray-800 bg-green-200 rounded-md px-2 py-2 mt-2 w-[24rem] md:w-[30rem] lg:w-[40rem] hover:bg-green-300 duration-200 drop-shadow-md cursor-pointer"
                    >
                      {`${item}`}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {!quiz[number] && number !== 10 && (
          <div className="flex flex-col items-center ">
            <div className="flex items-center justify-center min-h-[8rem] bg-gray-50 w-[24rem] md:w-[30rem] lg:w-[40rem] text-2xl font-medium text-gray-700 px-6 py-2 mt-16 mb-4 rounded-md drop-shadow-md cursor-default "></div>

            <div className=" min-h-[20rem] lg:min-h-[18rem]">
              <div>
                <div className=" drop-shadow flex flex-col justify-center text-xl">
                  <div className=" bg-gray-50 rounded-md px-2 py-[22px] mt-2 w-[24rem] md:w-[30rem] lg:w-[40rem]"></div>
                  <div className=" bg-gray-50 rounded-md px-2 py-[22px] mt-2 w-[24rem] md:w-[30rem] lg:w-[40rem]"></div>
                  <div className=" bg-gray-50 rounded-md px-2 py-[22px] mt-2 w-[24rem] md:w-[30rem] lg:w-[40rem]"></div>
                  <div className=" bg-gray-50 rounded-md px-2 py-[22px] mt-2 w-[24rem] md:w-[30rem] lg:w-[40rem]"></div>
                </div>
              </div>
            </div>
          </div>
        )}
        {number === 10 && (
          <div className="flex items-center justify-center bg-gray-50 w-[24rem] md:w-[30rem] lg:w-[40rem] text-2xl font-medium text-gray-700 px-6 py-2 mt-16 mb-4 rounded-md drop-shadow-md cursor-default min-h-[28rem] lg:min-h-[26rem]">
            <h1 className="">
              This is the end of your quiz. Please press the submit button below to finish your
              quiz.
            </h1>
          </div>
        )}
        <div
          className="text-xl text-center text-gray-800 bg-green-200 rounded-md px-2 py-2 mt-2 w-[24rem] md:w-[30rem] lg:w-[40rem] hover:bg-green-300 duration-200 drop-shadow-md cursor-pointer"
          onClick={handleSubmit}
        >
          Submit
        </div>
        <div className="flex gap-16 md:gap-40 lg:gap-80 py-4 mt-6 lg:mx-20 px-52 md:px-40 lg:px-20 justify-between font-sans">
          <div
            className="w-40 h-10 pt-1.5 cursor-pointer px-3 py-2 border border-gray-800 rounded-sm text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white transition-all duration-150 drop-shadow-md"
            onClick={handleBack}
          >
            Previous Question
          </div>
          <div
            className="w-40 h-10 pt-1.5 cursor-pointer px-3 py-2 border border-gray-800 rounded-sm text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white transition-all duration-150 drop-shadow-md"
            onClick={handleSkip}
          >
            Skip Question
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
