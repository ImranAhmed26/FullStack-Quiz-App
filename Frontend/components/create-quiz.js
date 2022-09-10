import React, { useEffect, useState } from "react";
import { POST } from "../lib/api";

const CreateQuiz = () => {
  const [quizName, setQuizName] = useState("");
  const [description, setDescription] = useState("");
  const [isPaid, setIsPaid] = useState(false);
  const [duration, setDuration] = useState(0);
  const [courseFee, setCourseFee] = useState(0);
  const [question, setQuestion] = useState("");
  const [correctAns, setCorrectAns] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState([]);
  const [incorrectAns, setIncorrectAns] = useState("");
  const [incorrectAnswer, setIncorrectAnswer] = useState([]);
  const [questions, setQuestions] = useState([]);

  const questionBody = {
    question,
    incorrectAnswer,
    correctAnswer,
  };

  const body = {
    name: quizName,
    description: description,
    isPaid: isPaid,
    duration: duration,
    questions: questions,
  };

  useEffect(() => {}, []);

  const handleAddCorrectAnswer = () => {
    setCorrectAnswer([...correctAnswer, correctAns]);
  };
  const handleAddIncorrectAnswer = () => {
    setIncorrectAnswer([...incorrectAnswer, incorrectAns]);
  };

  const handleAddQuizQuestion = () => {
    console.log(questionBody);
    setQuestions([...questions, questionBody]);
    console.log(questions);
    setCorrectAnswer([]);
    setIncorrectAnswer([]);
  };

  const handleSubmit = () => {
    POST("/quizes", body).then(({ data, status }) => {
      if (status !== 200) {
        console.log(status);
        console.log(data);
      } else {
        console.log(status);
        console.log(data);
      }
    });
  };
  console.log(questions);
  return (
    <div>
      <div className="text-left text-xl text-gray-700 font-semibold py-1">
        <div className="w-72 h-12 px-4 pt-2 rounded-sm border drop-shadow-sm ring-offset-0 ring-0 outline-0 text-center text-xl text-gray-700 font-semibold">
          Please add quiz below.
        </div>
      </div>
      <div className="bg-gray-100 w-full h-full flex gap-4">
        <div className="">
          <div className=" w-full">
            <form className="g">
              <div className="py-1">
                <input
                  onChange={(event) => {
                    setQuizName(event.target.value || "");
                  }}
                  value={quizName || ""}
                  className="w-72 h-12 px-4 rounded-sm border drop-shadow-sm ring-offset-0 ring-0 outline-0 text-center text-xl text-gray-700 font-semibold"
                  type="text"
                  name="quizName"
                  id="quizName"
                  placeholder="quizName"
                />
              </div>
              <div className="py-1">
                <input
                  onChange={(event) => {
                    setDescription(event.target.value || "");
                  }}
                  value={description || ""}
                  className="w-72 h-20 px-4 rounded-sm border drop-shadow-sm ring-offset-0 ring-0 outline-0 text-center text-xl text-gray-700 font-semibold"
                  type="text"
                  name="description"
                  id="description"
                  placeholder="description"
                />
              </div>
              <div className="py-1">
                <input
                  onChange={(event) => {
                    setIsPaid(event.target.value || "");
                  }}
                  value={isPaid || ""}
                  className="w-72 h-12 px-4 rounded-sm border drop-shadow-sm ring-offset-0 ring-0 outline-0 text-center text-xl text-gray-700 font-semibold"
                  type="boolean"
                  name="isPaid"
                  id="isPaid"
                  placeholder="Free or Paid Quiz"
                />
              </div>
              <div className="py-1">
                <input
                  onChange={(event) => {
                    setDuration(event.target.value || "");
                  }}
                  value={duration || ""}
                  className="w-72 h-12 px-4 rounded-sm border drop-shadow-sm ring-offset-0 ring-0 outline-0 text-center text-xl text-gray-700 font-semibold"
                  type="number"
                  name="duration"
                  id="duration"
                  placeholder="Quiz Duration"
                />
              </div>
              <div className="py-1">
                <input
                  onChange={(event) => {
                    setCourseFee(event.target.value || "");
                  }}
                  value={courseFee || ""}
                  className="w-72 h-12 px-4 rounded-sm border drop-shadow-sm ring-offset-0 ring-0 outline-0 text-center text-xl text-gray-700 font-semibold"
                  type="number"
                  name="courseFee"
                  id="courseFee"
                  placeholder="Quiz Fee"
                />
              </div>
              <div className="pt-8">
                <div className="w-72 h-16 px-4 rounded-sm border drop-shadow-sm ring-offset-0 ring-0 outline-0 text-center text-xl text-gray-700 font-semibold">
                  Please Add Questions Below
                </div>
              </div>
              <div className="py-1">
                <input
                  onChange={(event) => {
                    setQuestion(event.target.value || "");
                  }}
                  value={question || ""}
                  className="w-72 h-12 px-4 rounded-sm border drop-shadow-sm ring-offset-0 ring-0 outline-0 text-center text-xl text-gray-700 font-semibold"
                  type="text"
                  name="question"
                  id="question"
                  placeholder="Question"
                />
              </div>
              <div className="py-1 flex">
                <input
                  onChange={(event) => {
                    setCorrectAns(event.target.value || "");
                  }}
                  value={correctAns || ""}
                  className="w-56 h-12 px-4 rounded-sm border drop-shadow-sm ring-offset-0 ring-0 outline-0 text-center text-xl text-gray-700 font-semibold"
                  type="text"
                  name="correctAns"
                  id="correctAns"
                  placeholder="Correct Answer"
                />
                <div
                  className="w-16 h-12 px-2 pt-2 rounded-sm border drop-shadow-sm text-center text-xl text-gray-700 font-semibold bg-green-100 hover:bg-green-200 transition-all duration-150"
                  onClick={() => {
                    handleAddCorrectAnswer();
                  }}
                >
                  Add
                </div>
              </div>
              <div className="py-1 flex">
                <input
                  onChange={(event) => {
                    setIncorrectAns(event.target.value || "");
                  }}
                  value={incorrectAns || ""}
                  className="w-56 h-12 px-4 rounded-sm border drop-shadow-sm ring-offset-0 ring-0 outline-0 text-center text-xl text-gray-700 font-semibold"
                  type="text"
                  name="incorrectAns"
                  id="incorrectAns"
                  placeholder="Incorrect Answer"
                />
                <div
                  className="w-16 h-12 px-2 pt-2 rounded-sm border drop-shadow-sm text-center text-xl text-gray-700 font-semibold bg-green-100 hover:bg-green-200 transition-all duration-150"
                  onClick={() => {
                    handleAddIncorrectAnswer();
                  }}
                >
                  Add
                </div>
              </div>
              <div
                className="w-72 h-12 px-2 pt-2 rounded-sm border drop-shadow-sm text-center text-xl text-gray-700 font-semibold bg-green-100 hover:bg-green-200 transition-all duration-150"
                onClick={() => {
                  handleAddQuizQuestion();
                }}
              >
                Add Quiz Question
              </div>
            </form>
          </div>
        </div>
        <div className=" flex flex-col gap-2 pt-1">
          <div className="w-72 h-12 px-4 pt-2 rounded-sm border drop-shadow-sm ring-offset-0 ring-0 outline-0 text-xl text-gray-700 font-semibold">
            {`name: ${quizName}`}
          </div>
          <div className="w-72 h-20 px-4 pt-2 rounded-sm border drop-shadow-sm ring-offset-0 ring-0 outline-0 text-xl text-gray-700 font-semibold overflow-scroll">
            {`description: ${description}`}
          </div>
          <div className="w-72 h-12 px-4 pt-2 rounded-sm border drop-shadow-sm ring-offset-0 ring-0 outline-0 text-xl text-gray-700 font-semibold">
            {`Type: ${isPaid === false ? "Free" : "Paid"}`}
          </div>
          <div className="w-72 h-12 px-4 pt-2 rounded-sm border drop-shadow-sm ring-offset-0 ring-0 outline-0 text-xl text-gray-700 font-semibold">
            {`Duration: ${duration}`}
          </div>
          <div className="w-72 h-12 px-4 pt-2 rounded-sm border drop-shadow-sm ring-offset-0 ring-0 outline-0 text-xl text-gray-700 font-semibold">
            {`Quiz Fee: ${courseFee}`}
          </div>
          <div className="px-4 h-56 mt-7 pt-2 rounded-sm border drop-shadow-sm ring-offset-0 ring-0 outline-0 text-xl text-gray-700 font-semibold overflow-scroll">
            {questions.map((items, i) => {
              return (
                <div key={i}>
                  Question {i + 1}
                  <div>Name: {items.question}</div>
                  <div>
                    {items.correctAnswer.map((item, id) => {
                      return (
                        <div key={id} className="pt-1">
                          Correct Answer: {item}
                        </div>
                      );
                    })}
                  </div>
                  <div>
                    {items.incorrectAnswer.map((item, id) => {
                      return (
                        <div key={id} className="pt-1">
                          Incorrect Answer: {item}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <button
              type="submit"
              disabled={!(quizName && duration && courseFee)}
              onClick={(event) => {
                event.preventDefault();
                handleSubmit();
              }}
              className={`w-72 h-12 px-4 py-2 text-center text-xl text-gray-700 bg-green-400 font-bold rounded-sm ring-offset-0 ring-0 outline-0 shadow-md cursor-pointer duration-200 disabled:bg-green-300`}
            >
              Submit Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateQuiz;
