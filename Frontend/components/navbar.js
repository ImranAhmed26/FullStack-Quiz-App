import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [userName, setUserName] = useState(0);
  useEffect(() => {
    if (localStorage.getItem("token") && localStorage.getItem("type") === "user") {
      setUserName(localStorage.getItem("userName"));
    } else if (localStorage.getItem("token") && localStorage.getItem("type") === "admin") {
      setUserName(localStorage.getItem("userName"));
    }
  }, []);

  return (
    <div className=" bg-white sticky top-0 z-10">
      <div className="max-w-full">
        <div className=" mx-auto px-4 sm:px-12">
          <div className="flex justify-between items-center py-6">
            <div className="">
              <Link href={"/"} passHref>
                <a className="text-3xl font-extrabold pl-2 text-gray-700 drop-shadow-sm cursor-pointer hover:text-green-400 duration-200">
                  Quiz Tank
                </a>
              </Link>
            </div>
            <div className="items-center justify-end flex">
              {!userName.length && (
                <Link href={"/login"} passHref>
                  <a className="cursor-pointer px-3 py-2 border border-gray-800 rounded-sm text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white transition-all duration-150">
                    Login
                  </a>
                </Link>
              )}
              {userName.length && (
                <div className="cursor-pointer px-3 py-2 border border-gray-800 rounded-sm text-base font-medium text-gray-700 ">
                  {`${userName || "User"} `}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
