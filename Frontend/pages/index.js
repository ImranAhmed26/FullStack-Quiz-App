import Head from "next/head";

import Navbar from "../components/navbar";
import Home from "../components/home";

export default function MainPage() {
  return (
    <div className="">
      <Head>
        <title>Quiz Up</title>
        <meta name="description" content="Online Quiz App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <Navbar />
        <Home />
      </div>
    </div>
  );
}
