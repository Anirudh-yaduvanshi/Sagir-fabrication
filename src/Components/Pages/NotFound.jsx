import React from "react";
import Footer from "../Header-Footer/Footer";
import { Link, useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className=" min-h-screen   ">
      <div className="flex justify-center items-center flex-col gap-10  h-screen text text-wrap text-white bg-gray-900 text-center">
        yo page ni hai kuvh bhi dhoond re ho! jo home pe dikh ra voi sufficient
        hai.... ku faltu me matha mar rhe ho...
        <Link
          className="  w-fit hover:bg-gray-600 hover:scale-110 bg-white rounded-lg"
          to="/"
        >
          <span className=" hover:bg-gray-600  px-3 hover:text-white  text-black font-semibold bg-white rounded-lg ">
            Go Back to Home...
          </span>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
