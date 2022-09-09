import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { GET, POST } from "../lib/api";

const Quiz = () => {
  const [exam, setExam] = useState();
  const [quiz, setQuiz] = useState([]);
  const [number, setNumber] = useState(0);
  const [points, setPoints] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [userId, setUserId] = useState();
  const [endedQuiz, setEndedQuiz] = useState(false);

  const router = useRouter();
  const body = {
    name: exam?.name,
    marks: points,
    paid: exam?.isPaid,
    paidAmount: exam?.courseFee,
    user: userId,
    quiz: router.query.id,
  };

  useEffect(() => {
    GET(`/quizes/${router.query.id}`).then(({ data, status }) => {
      if (status !== 200) {
        console.log(data);
      } else {
        setExam(data);
        setQuiz(
          data.questions.map((item) => ({
            question: item.question,
            options: shuffle([...item.incorrectAnswer, ...item.correctAnswer]),
            answer: [...item.correctAnswer],
          })),
        );
        setTotalQuestions(data.questions.length);
        console.log(data.questions);
        console.log("id ", router.query.id);

        console.log("my data is ", data);
      }
      setUserId(localStorage.getItem("_id"));
    });
  }, []);

  const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

  const pickAnswer = (e) => {
    let userAnswer = e.target.outerText;
    if (!selectedAnswers.includes(userAnswer)) {
      setSelectedAnswers([...selectedAnswers, userAnswer]);
    }
  };

  const handleNext = () => {
    if (quiz[number].answer.length === selectedAnswers?.length) {
      let k = 0;
      for (let i of quiz[number].answer) {
        for (let j of selectedAnswers) {
          if (i === j) {
            k += 1;
          }
        }
      }
      if (k === selectedAnswers.length) {
        setPoints(points + 1);
      }
      if (number < totalQuestions) {
        setSelectedAnswers([]);
        setNumber(number + 1);
      }
    } else if (quiz[number].answer.length !== selectedAnswers?.length) {
      if (k === selectedAnswers.length) {
        setPoints(points + 0);
      }
      if (number < totalQuestions) {
        setSelectedAnswers([]);
        setNumber(number + 1);
      }
    }
  };

  const handleSubmit = () => {
    if (endedQuiz !== true) {
      POST("/results", body).then(({ data, status }) => {
        if (status !== 200) {
          console.log(data);
          console.log("post unsuccessfull");
        } else {
          setEndedQuiz(true);
          console.log("result posted successfully");
        }
      });
    }
  };

  const handleSkip = () => {
    if (number < totalQuestions) {
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
      <div className="text-center pt-6 flex flex-col justify-center items-center font-serif cursor-default ">
        <h1 className="text-3xl font-semibold text-gray-600">{`${exam?.name}.`}</h1>
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
        {/* {console.log(totalQuestions)} */}
        {!quiz[number] && number !== totalQuestions && (
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
        {number === totalQuestions && (
          <div className="flex items-center justify-center bg-gray-50 w-[24rem] md:w-[30rem] lg:w-[40rem] text-2xl font-medium text-gray-700 px-6 py-2 mt-16 mb-4 rounded-md drop-shadow-md cursor-default min-h-[28rem] lg:min-h-[26rem]">
            <h1 className="">
              {`${
                endedQuiz !== true
                  ? "This is the end of your quiz. Please press the submit button below to finish your quiz."
                  : "You have successfully submited your quizess the submit button below to fiish your quiz."
              }`}
            </h1>
          </div>
        )}
        {number !== totalQuestions && (
          <div
            className="text-xl text-center text-gray-800 bg-green-200 rounded-md px-2 py-2 mt-2 w-[24rem] md:w-[30rem] lg:w-[40rem] hover:bg-green-300 duration-200 drop-shadow-md cursor-pointer"
            onClick={handleNext}
          >
            Next
          </div>
        )}
        {number === totalQuestions && (
          <div
            className={`text-xl text-center text-gray-800 bg-green-200 rounded-md px-2 py-2 mt-2 w-[24rem] md:w-[30rem] lg:w-[40rem] ${
              endedQuiz !== true ? "hover:bg-green-300" : "hover:bg-green-200"
            }  duration-200 drop-shadow-md cursor-pointer`}
            onClick={handleSubmit}
          >
            {` ${endedQuiz !== true ? "Submit" : "Quiz Ended"}`}
          </div>
        )}
        <div className="flex gap-16 md:gap-40 lg:gap-80 py-4 mt-6 lg:mx-20 px-20 md:px-20 lg:px-20 h-12 justify-between font-sans">
          {endedQuiz !== true && (
            <div className="flex gap-16 md:gap-40 lg:gap-80 ">
              <div
                className="w-40 h-10 pt-1.5 cursor-pointer px-3 border border-gray-800 rounded-sm text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white transition-all duration-150 drop-shadow-md"
                onClick={handleBack}
              >
                Previous Question
              </div>
              <div
                className="w-40 h-10 pt-1.5 cursor-pointer px-3 border border-gray-800 rounded-sm text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white transition-all duration-150 drop-shadow-md"
                onClick={handleSkip}
              >
                Skip Question
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
