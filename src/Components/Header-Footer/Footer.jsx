import React from "react";

const Footer = () => {
  return (
    <div className="w-screen bg-gray-900 text-xl text-white gap-2 flex items-center justify-evenly  p-4 h-22 bottom-0 static">
      <div className="rights mx-auto w-1/4  text-center  ">
        {" "}
        <i className="ri-copyright-line"></i>2025 All rights reserved{" "}
      </div>
      <div className="w-1/2 h-1/3   flex gap-2  justify-center items-center  ">
        <div className="grid grid-cols-4 md:w-1/4 w-full mx-auto  gap-4  ">
          <a
            className="rounded-full  hover:text-white hover:scale-125 hover:bg-blue-500 text-center bg-gray-400 "
            href="/"
          >
            <i className="ri-facebook-fill  p-2 "></i>
          </a>
          <a
            className="rounded-full   hover:text- text-center hover:text-white hover:scale-125 hover:bg-indigo-700 bg-gray-400 "
            href="/"
          >
            <i className="ri-instagram-fill p-2 "></i>
          </a>
          <a
            className="rounded-full   hover:text- text-center hover:text-white hover:scale-125 hover:bg-red-600 bg-gray-400 "
            href="/"
          >
            <i className="ri-youtube-fill p-2 "></i>
          </a>
                
          
          
          <a className="rounded-full   hover:text-white hover:scale-125 hover:bg-orange-600 text-center bg-gray-400 " href="mailto:">
            <i className="ri-mail-fill p-2 "></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
