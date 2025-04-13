import React, { useRef } from "react";
import logo from "/logo.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "../../App.css";
import { Link, NavLink, useNavigate } from "react-router";

const Navbar = () => {
  const part1 = useRef();
  const part3 = useRef();
  
  const expand = useRef();
  const navigate = useNavigate(); // Use useNavigate hook

  useGSAP(() => {
    gsap.from(part1.current, {
      y: -80,
      scale: 0.5,
      duration: 1,
      opacity: 0,
      stagger: 0.3,
      
    });
    gsap.from(".part2 li ", {
      delay: 0.2,
      y: -80,

      opacity: 0,
      stagger: 0.2,
    });
    gsap.from(part3.current, {
      delay: 0.2,
      y: -80,
      duration: 1,
      opacity: 0,
    });
     gsap.from(".expand  ", {
       delay: 0.2,
       y: -80,
       opacity: 0,
       stagger: 0.2,
     });
  });

  const Handlemenu = () => {
    if (expand.current.classList.contains("hife")) {
      expand.current.classList.remove("hife");
    } else {
      expand.current.classList.add("hife");
    }

    gsap.to(expand.current, {
      duration: 1,
      opacity: 1,
      x: 0,
      zIndex: 10,
    });
  };

  const handlebnd = () => {
    gsap.to(expand.current, {
      duration: 0.5,
      opacity: 1,
      zIndex: 0,
      x: 155,
      onStart: () => {
        if (expand.current.classList.contains("hife")) {
          expand.current.classList.remove("hife");
        } else {
          expand.current.classList.add("hife");
        }
      },
    });
  };

  return (
    <>
      <header>
        <nav className=" w-screen h-36 flex  items-center justify-between">
          <div
            className="part1 md:w-2/12 w-5/12  h-full  flex items-center justify-center "
            ref={part1}
          >
            <img
              src={logo}
              onClick={() => {
                navigate("/");
              }}
              alt="sagir-fabrication"
              className="bg-center h-full bg-cover  cursor-pointer"
            />
          </div>
          <div className="part2 md:flex justify-evenly items-center hidden   w-1/2 h-full">
            <ul className="flex w-full justify-evenly items-center">
              <li>
                <NavLink
                  className="text-white font-semibold no-underline"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-white font-semibold no-underline"
                  to="/about"
                >
                  About Us
                </NavLink>
              </li>
         
              <li>
                <NavLink
                  className="text-white font-semibold no-underline"
                  to="/gallery"
                >
                  Our Gallery
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-white font-semibold no-underline"
                  to="/Contact"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div
            className="part3 cursor-pointer  font-xl w-1/4 h-full  flex justify-center items-center font-bolder md:hidden responsive"
            ref={part3}
            onClick={Handlemenu}
          >
            <i className=" text-3xl cursor-pointer text-white ri-menu-fill"></i>
          </div>
        </nav>

        <div className="expand absolute hife top-0 z-20  " ref={expand}>
          <i
            onClick={handlebnd}
            className="cursor-pointer block  relative top-3 z-20 left-3 ri-close-large-line"
          ></i>
          <Link
            onClick={handlebnd}
            className=" mx-auto a rounded-lg no-underline font-semibold flex justify-center items-center  bg-gray-400 mb-1 active:bg-gray-600 "
            to="/"
          >
            Home{" "}
          </Link>
          <Link
            onClick={handlebnd}
            className=" mx-auto a rounded-lg no-underline font-semibold flex justify-center items-center  bg-gray-400 mb-1 active:bg-gray-600 "
            to="/about"
          >
            About Us
          </Link>


          <Link
            onClick={handlebnd}
            className=" mx-auto a rounded-lg no-underline font-semibold flex justify-center items-center  bg-gray-400 mb-1 active:bg-gray-600 "
            to="/gallery"
          >
            Our Gallery
          </Link>

          <Link
            onClick={handlebnd}
            className=" mx-auto  a rounded-lg no-underline font-semibold flex justify-center items-center  bg-gray-400 mb-1 active:bg-gray-600 "
            to="/contact"
          >
            Contact Us
          </Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;
