import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import Navbar from "../Header-Footer/Navbar";
const Home = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".naam",
      { color: "black", y: 250, opacity: 0.4, duration: 2, scale: 0.3 },
      { color: "white", y: 0, opacity: 1, duration: 2, scale: 1 }
    );

    gsap.fromTo(
      ".dialog",
      { color: "black", y: -250, opacity: 0.4, duration: 2, scale: 0.3 },
      { color: "white", y: 0, opacity: 1, duration: 2, scale: 1 }
    );
  });
  return (
    <>
      <div className=" ghar ">
        <Navbar />
        <div className=" w-full h-3/4   flex justify-center items-center">
          <div className="w-3/4 text-center flex gap-3 flex-col  hover:text-white mx-auto">
            <p className="md:text-8xl heading text-3xl naam font-semibold">
              SAGEER FABRICATION
            </p>
            <p className="md:text-2xl heading text-lg dialog md:font-bold">
              From Concept to Creation
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
