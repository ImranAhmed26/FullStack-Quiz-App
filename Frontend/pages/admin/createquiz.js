import { useRouter } from "next/router.js";
import React, { useEffect } from "react";
import CreateQuiz from "../../components/create-quiz.js";

import Navbar from "../../components/navbar.js";
import Sidebar from "../../components/sidebar.js";

import Layout from "../../lib/layout.js";

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("token") && localStorage.getItem("type") !== "admin") {
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
        <div className="w-full ">
          <Layout>
            <CreateQuiz />
          </Layout>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
