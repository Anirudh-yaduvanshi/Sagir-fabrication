import React from "react";
import Footer from "../Header-Footer/Footer";
import { Link, useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className=" min-h-screen   ">
      <div className="flex justify-center items-center flex-col gap-10  h-screen text text-wrap text-white bg-gray-900 text-center">
        yo page ni hai kuvh bhi dhoond re ho! jo home pe dikh ra voi sufficient
        hai.... ku faltu me matha marra...
        <Link
          className="text-white bg-black rounded-lg hover:bg-gray-600 font-semibold px-4 py-2  hover:scale-110"
          to="/"
        >
         Go Back to Home
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
