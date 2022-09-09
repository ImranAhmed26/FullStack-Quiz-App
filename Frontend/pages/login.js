import React from "react";
import Router, { useRouter } from "next/router";
import { useRef } from "react";
import { useEffect, useState } from "react";
import Image from "next/image";

import { POST } from "../lib/api";
import topicImage from "../public/assets/images/topic-banner.jpg";
import Navbar from "../components/navbar";

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("token") && localStorage.getItem("type") === "user") {
      router.push(`/user/homepage`);
    } else if (localStorage.getItem("token") && localStorage.getItem("type") === "admin") {
      router.push(`/admin/homepage`);
    }
  }, [router]);

  return (
    <div>
      <Navbar />
      <div className="flex justify-center gap-10">
        <div className="flex flex-col md:flex-row justify-between  max-w-7xl pt-40 md:pt-52 gap-16 md:gap-6 xl:gap-10 2xl:gap-16 px-10 md:divide-x-2 ">
          <div className="w-1/2 ">
            <div className="w-72 h-12 px-4 pt-2 drop-shadow text-center text-xl text-gray-700 font-semibold">
              Existing User !
            </div>
            <button
              onClick={() => {
                router.push("/login/signin");
              }}
              className={`w-72 h-12 px-4 py-2 mt-4 text-center text-xl text-gray-700 bg-green-400 font-bold rounded-sm ring-offset-0 ring-0 outline-0 shadow-md cursor-pointer duration-200 disabled:bg-green-300`}
            >
              Sign in
            </button>
          </div>

          <div className="w-1/2 md:pl-6 xl:pl-10 2xl:pl-16">
            <div className="w-72 h-12 px-4 pt-2 drop-shadow text-center text-xl text-gray-700 font-semibold">
              New User !
            </div>
            <button
              onClick={() => {
                router.push("/login/register");
              }}
              className={`w-72 h-12 px-4 py-2 mt-4 text-center text-xl text-gray-700 bg-green-400 font-bold rounded-sm ring-offset-0 ring-0 outline-0 shadow-md cursor-pointer duration-200 disabled:bg-green-300`}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
