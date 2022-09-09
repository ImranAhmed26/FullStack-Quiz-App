import { useRouter } from "next/router.js";
import React, { useEffect, useState } from "react";

import Navbar from "../../components/navbar.js";
import Sidebar from "../../components/sidebar.js";
import UserQuizList from "../../components/user-quiz-list.js";
import { GET } from "../../lib/api.js";
import Layout from "../../lib/layout.js";

const HomePage = () => {
  // For Quiz Submission
  const [quizName, setQuizName] = useState("");
  const [description, setDescription] = useState("");
  const [isPaid, setIsPaid] = useState(false);
  const [duration, setDuration] = useState(0);
  const [courseFee, setCourseFee] = useState(0);
  const [questions, setQuestions] = useState([]);


  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("token") && localStorage.getItem("type") !== "admin") {
      router.push(`/`);
    }

    GET("/quizes").then((data, status) => {
      if (status !== 200) {
        console.log(data);
      } else {
      }
    });
  }, []);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex ">
        <div>
          <Sidebar />
        </div>
        <div className="w-full ">
          <Layout>
            <div className="bg-gray-100 w-full h-full">
              <div className="w-full h-full">
                <div className="text-left text-xl text-gray-700 font-semibold p-2">Add A Quiz</div>
                <div className="h-1/4 w-full  ">
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
                        type="numebr"
                        name="courseFee"
                        id="courseFee"
                        placeholder="Quiz Fee"
                      />
                    </div>
                    <div>
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
                    </div>
                  </form>
                </div>
                <div className="h-3/4 w-full "></div>
              </div>
            </div>
          </Layout>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
