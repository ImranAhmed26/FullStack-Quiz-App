import React, { Children } from "react";

const Layout = ({ children }) => {
  return (
    <div className="w-full ">
      <div
        className="w-[96%] min-w-[20rem] xl:h-[45rem] h-[42.5rem] 2xl:h-[50rem] bg-gray-100 rounded-md  mx-4 drop-shadow-md text-gray-700 overflow-y-scroll cursor-default "
        id="scroller"
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
