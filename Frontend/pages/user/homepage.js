import { useRouter } from "next/router.js";
import React, { useEffect } from "react";

import Navbar from "../../components/navbar.js";
import Sidebar from "../../components/sidebar.js";
import UserQuizList from "../../components/user-quiz-list.js";

const HomePage = () => {
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("type") !== "user") {
      router.push(`/login`);
    } else if (localStorage.getItem("token") && localStorage.getItem("type") === "isAdmin") {
      router.push(`/`);
    }
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
        <div className="w-full">
          <UserQuizList />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
