import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Sidebar = () => {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/");
    localStorage.clear();
  };

  const [user, setUser] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token") && localStorage.getItem("type")) {
      setUser(localStorage.getItem("type"));
    }
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-2 bg-green-200 to-green-200 w-60 h-[42.5rem] xl:h-[45rem] 2xl:h-[50rem] mx-4 rounded-md text-xl text-gray-700 drop-shadow-md transition-all">
        <button
          className="p-4 bg-green-100 hover:bg-green-50 duration-300 rounded-md mx-4 mt-8 font-semibold drop-shadow-md"
          onClick={() => {
            router.push(`/${user === "admin" ? "admin" : "user"}/homepage`);
          }}
        >
          Quizes
        </button>
        <button
          className="p-4 bg-green-100 hover:bg-green-50 duration-300 rounded-md mx-4 font-semibold drop-shadow-md"
          onClick={() => {
            router.push(`/${user === "admin" ? "admin" : "user"}/resultpage`);
          }}
        >
          Results
        </button>
        <button
          className="p-4 bg-green-100 hover:bg-green-50 duration-300 rounded-md mx-4 font-semibold drop-shadow-md"
          onClick={() => {
            router.push(`${user === "admin" ? "/admin/createquiz" : ""}`);
          }}
        >
          {`${user === "admin" ? "Create Quiz" : "Profile"}`}
        </button>
        <button
          className="p-4 bg-green-100 hover:bg-green-50 duration-300 rounded-md mx-4 font-semibold drop-shadow-md"
          onClick={() => {
            handleLogout();
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
