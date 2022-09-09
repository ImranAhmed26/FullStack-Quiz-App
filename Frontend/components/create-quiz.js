import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const CreateQuiz = () => {
  const [quizName, setQuizName] = useState("");
  const [description, setDescription] = useState("");
  const [isPaid, setIsPaid] = useState(false);
  const [duration, setDuration] = useState(0);
  const [courseFee, setCourseFee] = useState(0);
  const [question, setQuestion] = useState(0);
  const [incorrectAnswer, setIncorrectAnswer] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState([]);
  const [questions, setQuestions] = useState([]);

  const questionBody = {
    question,
    incorrectAnswer: [],
    correctAnswer: [],
  };

  const router = useRouter();

  useEffect(() => {}, []);
  return (
    <div>
      <div className="text-left text-xl text-gray-700 font-semibold py-1">
        <div className="w-72 h-12 px-4 pt-2 rounded-sm border drop-shadow-sm ring-offset-0 ring-0 outline-0 text-center text-xl text-gray-700 font-semibold">
          Please add quiz below.
        </div>
      </div>
      <div className="bg-gray-100 w-full h-full flex">
        <div className="w-1/3 ">
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
                  className="w-72 h-12 px-4 rounded-sm border drop-shadow-sm ring-offset-0 ring-0 outline-0 text-center text-xl text-gray-700 font-semibold"
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
                    setCourseFee(event.target.value || "");
                  }}
                  value={question || ""}
                  className="w-72 h-12 px-4 rounded-sm border drop-shadow-sm ring-offset-0 ring-0 outline-0 text-center text-xl text-gray-700 font-semibold"
                  type="text"
                  name="question"
                  id="question"
                  placeholder="Question"
                />
              </div>
              <div className="py-1">
                <input
                  onChange={(event) => {
                    setCourseFee(event.target.value || "");
                  }}
                  value={correctAnswer || ""}
                  className="w-72 h-12 px-4 rounded-sm border drop-shadow-sm ring-offset-0 ring-0 outline-0 text-center text-xl text-gray-700 font-semibold"
                  type="text"
                  name="correctAnswer"
                  id="correctAnswer"
                  placeholder="Correct Answer(s)"
                />
              </div>
              <div className="py-1">
                <input
                  onChange={(event) => {
                    setCourseFee(event.target.value || "");
                  }}
                  value={incorrectAnswer || ""}
                  className="w-72 h-12 px-4 rounded-sm border drop-shadow-sm ring-offset-0 ring-0 outline-0 text-center text-xl text-gray-700 font-semibold"
                  type="text"
                  name="incorrectAnswer"
                  id="incorrectAnswer"
                  placeholder="Incorrect Answer"
                />
              </div>
              {/* <div>
                <button
                  type="submit"
                  disabled={!(quizName && isPaid && duration && courseFee && password)}
                  onClick={(event) => {
                    event.preventDefault();
                    handleSubmit();
                  }}
                  className={`w-72 h-12 px-4 py-2 mt-4 text-center text-xl text-gray-700 bg-green-400 font-bold rounded-sm ring-offset-0 ring-0 outline-0 shadow-md cursor-pointer duration-200 disabled:bg-green-300`}
                >
                  Add Quiz
                </button>
              </div> */}
            </form>
          </div>
        </div>
        <div className="w-2/3 flex flex-col gap-2 pt-1">
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
        </div>
      </div>
    </div>
  );
};

export default CreateQuiz;