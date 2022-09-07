import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className=" bg-white sticky top-0 z-10">
      <div className="max-w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-12">
          <div className="flex justify-between items-center py-6">
            <div className="">
              <Link href={"/"} passHref>
                <a className="text-3xl font-extrabold pl-2 text-gray-700 drop-shadow-sm cursor-pointer hover:text-green-400 duration-200">
                  Quiz Tank
                </a>
              </Link>
            </div>
            <div className="items-center justify-end flex">
              <Link href={"/login"} passHref>
                <a className="cursor-pointer px-3 py-2 border border-gray-800 rounded-sm text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white transition-all duration-150">
                  Sign In
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
