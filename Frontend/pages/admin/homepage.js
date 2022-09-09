import { useRouter } from "next/router.js";
import React, { useEffect } from "react";

import Navbar from "../../components/navbar.js";
import Sidebar from "../../components/sidebar.js";
import UserQuizList from "../../components/user-quiz-list.js";
import Layout from "../../lib/layout.js";

const HomePage = () => {
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("type") !== "admin") {
      router.push(`/login`);
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
        <div className="w-full ">
          <Layout>
            <UserQuizList />
          </Layout>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
