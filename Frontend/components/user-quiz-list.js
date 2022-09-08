import Image from "next/image";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { GET } from "../lib/api";

import QuizImage from "../public/assets/images/banner-image.jpg";

const UserQuizList = () => {
  const [data, setData] = useState();
  useEffect(() => {
    GET("/quizes/").then(({ data, status }) => {
      if (!status === 200) {
        console.log(status);
      } else {
        setData(data);
        // console.log(data);
      }
    });
  }, []);

  const handleClick = (id, isPaid) => {
    console.log("is is ", id);
    if (isPaid === true) {
      Router.push({ pathname: "/questions", query: { id: id } });
    } else if (isPaid !== true) {
      Router.push({
        pathname: "/questions",
        query: { id: id },
      });
    }
  };
  return (
    <div className="w-full ">
      <div
        className="w-[96%] h-[40rem] min-w-[20rem] xl:h-[45rem] 2xl:h-[50rem] bg-gray-100 rounded-md  mx-4 drop-shadow-md text-gray-700 overflow-y-scroll cursor-default"
        id="scroller"
      >
        <div className="p-4 gap-4 flex flex-col">
          {data?.map((item) => {
            return (
              <div key={item.id} className="bg-green-200 w-full  rounded-md p-4 gap-4 flex ">
                <div className=" w-3/4">
                  <div className="text-2xl font-bold ">{item.name}</div>
                  <div className="text-xl font-normal">{item.description}</div>
                  <div className="text-xl font-normal">
                    Paid Course: {item.isPaid === true ? "Yes" : "No"}
                  </div>
                  <div className="text-xl font-normal">
                    Course Fee: {`${item.isPaid === true ? item?.courseFee : "Free"} `}
                  </div>
                  <div className="text-xl font-normal">Duration: {item.duration}</div>
                  <div className="text-xl font-normal">
                    Number of Questions: {item.questions.length}
                  </div>
                  <button
                    className="text-xl font-medium text-gray-600 bg-green-100 hover:bg-green-50 py-1 px-16 mt-1 rounded-md transition-all duration-75"
                    onClick={() => {
                      handleClick(item._id, item.isPaid);
                    }}
                  >
                    {`${item.isPaid === true ? "Buy Quiz" : "Start Quiz"}`}
                  </button>
                </div>
                <div className=" w-1/4 text-2xl font-bold text-gray-700 hidden md:block">
                  <div className="w-full h-full flex justify-end items-center rounded-md ">
                    <Image
                      src={QuizImage}
                      width={200}
                      height={200}
                      alt={"quiz img"}
                      className="rounded-md "
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserQuizList;
