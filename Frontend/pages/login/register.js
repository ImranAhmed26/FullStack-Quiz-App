import React from "react";
import Router, { useRouter } from "next/router";
import { useRef } from "react";
import { useEffect, useState } from "react";
import Image from "next/image";

import { POST } from "../../lib/api";
import topicImage from "../../public/assets/images/topic-banner.jpg";
import Navbar from "../../components/navbar";

const Login = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [password, setPassword] = useState("");

  const router = useRouter();
  const ref = useRef();

  useEffect(() => {
    if (localStorage.getItem("token") && localStorage.getItem("type") === "user") {
      router.push(`/user/homepage`);
    } else if (localStorage.getItem("token") && localStorage.getItem("type") === "isAdmin") {
      router.push(`/`);
    }
  }, [router]);

  const body = {
    name: name,
    userName: userName,
    email: email,
    phone: phone,
    password: password,
  };

  const handleSubmit = () => {
    POST(`${"/auth/register"}`, body).then(({ data, status }) => {
      if (status !== 200) {
        console.log(status);
      } else if (status === 200) {
        localStorage.clear();
        Router.push("/login/signin");
      }
    });
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center gap-10">
        <div className="flex flex-col md:flex-row justify-center items-center max-w-5xl pt-10 md:pt-28  px-10">
          <div className="flex justify-center w-1/2">
            <form className="" ref={ref}>
              <div className="py-1">
                <input
                  onChange={(event) => {
                    setName(event.target.value || "");
                  }}
                  value={name || ""}
                  className="w-72 h-12 px-4 rounded-sm border drop-shadow-sm ring-offset-0 ring-0 outline-0 text-center text-xl text-gray-700 font-semibold"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                />
              </div>
              <div className="py-1">
                <input
                  onChange={(event) => {
                    setUserName(event.target.value || "");
                  }}
                  value={userName || ""}
                  className="w-72 h-12 px-4 rounded-sm border drop-shadow-sm ring-offset-0 ring-0 outline-0 text-center text-xl text-gray-700 font-semibold"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Username"
                />
              </div>
              <div className="py-1">
                <input
                  onChange={(event) => {
                    setEmail(event.target.value || "");
                  }}
                  value={email || ""}
                  className="w-72 h-12 px-4 rounded-sm border drop-shadow-sm ring-offset-0 ring-0 outline-0 text-center text-xl text-gray-700 font-semibold"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email@example.com"
                />
              </div>
              <div className="py-1">
                <input
                  onChange={(event) => {
                    setPhone(event.target.value || "");
                  }}
                  value={phone || ""}
                  className="w-72 h-12 px-4 rounded-sm border drop-shadow-sm ring-offset-0 ring-0 outline-0 text-center text-xl text-gray-700 font-semibold"
                  type="phone"
                  name="phone"
                  id="phone"
                  placeholder="Phone Number"
                />
              </div>
              <div className="py-1">
                <input
                  onChange={(event) => {
                    setPassword(event.target.value || "");
                  }}
                  value={password || ""}
                  className="w-72 h-12 px-4 rounded-sm border drop-shadow-sm ring-offset-0 ring-0 outline-0 text-center text-xl text-gray-700 font-semibold"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div>
                <button
                  type="submit"
                  disabled={!(name && userName && email && phone && password)}
                  onKeyDown={(e) => something(e)}
                  onClick={(event) => {
                    event.preventDefault();
                    handleSubmit();
                  }}
                  className={`w-72 h-12 px-4 py-2 mt-4 text-center text-xl text-gray-700 bg-green-400 font-bold rounded-sm ring-offset-0 ring-0 outline-0 shadow-md cursor-pointer duration-200 disabled:bg-green-300`}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
          <div className="w-1/2 ">
            <div className="">
              <Image className="" src={topicImage} alt="topic image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
