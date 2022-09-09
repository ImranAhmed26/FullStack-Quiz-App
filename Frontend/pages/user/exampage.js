import { useRouter } from "next/router";
import React, { useEffect } from "react";

import Navbar from "../../components/navbar";
import Quiz from "../../components/questions";
import Sidebar from "../../components/sidebar";
import Layout from "../../lib/layout";

const Exampage = () => {
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
          <Layout>
            <Quiz />
          </Layout>
        </div>
      </div>
    </div>
  );
};

export default Exampage;
