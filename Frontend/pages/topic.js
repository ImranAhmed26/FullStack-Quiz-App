import Router from "next/router";
import React from "react";
import { useRef } from "react";
import { useEffect, useState } from "react";
import Image from "next/image";

import topicImage from "../public/assets/images/topic-banner.jpg";
import topicData from "../constants/topic-names";
import Navbar from "../components/navbar";

const FirstQuiz = () => {
  const [name, setName] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");

  const ref = useRef();
  function handleKeyUp(event) {
    if (event.keyCode === 13) {
      handleSubmit();
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("userName");
    setName(user);

    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const handleSubmit = () => {
    localStorage.setItem("userName", name);
    localStorage.setItem("selectedTopic", selectedTopic);
    Router.push({ pathname: "/questions", query: { id: selectedTopic } });
  };

  const something = (event) => {
    if (event.keyCode === 13) {
      console.log("enter");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center gap-10">
        <div className="flex flex-col md:flex-row justify-center items-center max-w-5xl pt-10 md:pt-28  px-10">
          <div className="w-1/2 ">
            <div className="">
              <Image className="" src={topicImage} alt="topic image" />
            </div>
          </div>

          <div className="flex justify-center w-1/2">
            <form className="" ref={ref}>
              <div>
                <input
                  onChange={(event) => {
                    setName(event.target.value || "");
                  }}
                  value={name || ""}
                  className="w-72 h-12 px-4 rounded-sm border drop-shadow-sm ring-offset-0 ring-0 outline-0 text-center text-xl text-gray-700 font-semibold"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="w-68 h-12 px-4 py-2 mt-10 ring-offset-0 ring-0 outline-0 text-center text-xl text-gray-700 font-bold border rounded-sm cursor-default">
                <h1>Select a Topic</h1>
              </div>
              <div>
                {topicData.map((item) => {
                  return (
                    <div
                      key={item.id}
                      onClick={() => {
                        setSelectedTopic(item.id);
                      }}
                      className={`w-72 h-12 px-4 py-2 mt-2 text-center text-xl text-gray-700 bg-green-300 font-bold rounded-sm ring-offset-0 ring-0 outline-0 shadow-md cursor-pointer hover:text-gray-800 duration-200 ${
                        selectedTopic === item.id && "bg-green-400"
                      }`}
                    >
                      {item.name}
                    </div>
                  );
                })}
              </div>
              <button
                type="submit"
                disabled={!(name && selectedTopic)}
                onKeyDown={(e) => something(e)}
                onClick={(event) => {
                  event.preventDefault();
                  handleSubmit();
                }}
                className={`w-72 h-12 px-4 py-2 mt-10 text-center text-xl text-gray-700 bg-green-400 font-bold rounded-sm ring-offset-0 ring-0 outline-0 shadow-md cursor-pointer duration-200 disabled:bg-green-300`}
              >
                Start Quiz
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstQuiz;
