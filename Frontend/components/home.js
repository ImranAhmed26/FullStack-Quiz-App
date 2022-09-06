import Link from "next/link";
import Image from "next/image";

import bannerImage from "../public/assets/images/banner-image.jpg";

export default function Home() {
  return (
    <div className=" py-10 md:py-28 ">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-between items-center">
        <div className="text-center md:w-1/2 order-last flex flex-col items-center justify-center">
          <p className="md:mt-16 mb-2 text-5xl font-bold tracking-tight text-green-400 drop-shadow-lg sm:text-5xl md:text-7xl lg:text-8xl">
            Quiz Tank
          </p>
          <h2 className="text-gray-600 font-bold tracking-wide text-base sm:text-lg md:text-xl lg:text-2xl">
            Expand Your General Knowledge
          </h2>
          <p className="mt-8 max-w-2xl text-xl text-gray-400 md:mx-auto">
            Please click the button to start a quiz
          </p>

          <Link
            href={"/topic"}
            type="text"
            name="admin_name"
            id="admin_name"
            className=" mt-6"
            passHref
          >
            <div className="  w-64 h-12 px-4 py-2 mt-2 md:mx-auto text-center text-xl text-gray-700 bg-green-400 font-bold rounded-sm ring-offset-0 ring-0 outline-0 shadow-md cursor-pointer hover:bg-green-300 hover:text-gray-800 duration-200">
              Take a Quiz
            </div>
          </Link>
        </div>

        <div className="w-2/3 max-w-[34rem] item-center justify-center mx-auto md:order-last">
          <div className="">
            <Image className="" src={bannerImage} alt="banner image" />
          </div>
        </div>
      </div>
    </div>
  );
}
