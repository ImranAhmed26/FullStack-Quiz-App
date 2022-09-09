import React from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import Layout from "../../lib/layout";

const ResultPage = () => {
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
            <div className="p-6 pt-24 text-center text-2xl font-semibold text-gray-600">
              This will be the user dashboard containing all user stats, quiz results and info.
            </div>
          </Layout>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
