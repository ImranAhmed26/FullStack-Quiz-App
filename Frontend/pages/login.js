import React from "react";
import Router, { useRouter } from "next/router";
import { useRef } from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

import { POST } from "../lib/api";
import topicImage from "../public/assets/images/topic-banner.jpg";
import Navbar from "../components/navbar";

const Login = () => {
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const ref = useRef();

  const body = {
    userName: name,
    password: password,
  };
  // username: "sani01",
  // password: "123123",

  const handleSubmit = () => {
    POST(`${"/auth/login"}`, body).then(({ data, status }) => {
      if (status !== 200) {
        console.log(data);
      }
      localStorage.clear();
      console.log(data);
    });
    // Router.push({
    //   pathname: "/user/homepage",
    //   // query: { id: selectedTopic }
    // });
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
              <div className="py-2">
                <input
                  onChange={(event) => {
                    setName(event.target.value || "");
                  }}
                  value={name || ""}
                  className="w-72 h-12 px-4 rounded-sm border drop-shadow-sm ring-offset-0 ring-0 outline-0 text-center text-xl text-gray-700 font-semibold"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your Username"
                />
              </div>
              <div>
                <input
                  onChange={(event) => {
                    setPassword(event.target.value || "");
                  }}
                  value={password || ""}
                  className="w-72 h-12 px-4 rounded-sm border drop-shadow-sm ring-offset-0 ring-0 outline-0 text-center text-xl text-gray-700 font-semibold"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your Password"
                />
              </div>
              {/* <div className="w-68 h-12 px-4 py-2 mt-10 ring-offset-0 ring-0 outline-0 text-center text-xl text-gray-700 font-bold border rounded-sm cursor-default">
                <h1>Select a Topic</h1>
              </div> */}

              <button
                type="submit"
                disabled={!(name && password)}
                onKeyDown={(e) => something(e)}
                onClick={(event) => {
                  event.preventDefault();
                  handleSubmit();
                }}
                className={`w-72 h-12 px-4 py-2 mt-4 text-center text-xl text-gray-700 bg-green-400 font-bold rounded-sm ring-offset-0 ring-0 outline-0 shadow-md cursor-pointer duration-200 disabled:bg-green-300`}
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
