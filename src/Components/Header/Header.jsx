/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-scroll";
import "../Header/Header.css";
import pdf from "../../pdf/resume.pdf";

const Header = () => {
  return (
    <>
      <div className="absolute h-10 w-full bg-black" id="home"></div>
      <div className="headerDiv justify-between w-full flex h-16 items-center px-5 text-slate-400 border-slate-50 sticky top-0 bg-gray-800 ">
        <div className="logo text-cyan-400 mr-36">PIYUSH KUMAR</div>
        <div className="nav hidden lg:block">
          <ul className="navButtons flex items-center text-lg rounded-2xl font-semibold overflow-hidden h-10">
            <li className="">
              <Link
              className="link l1 py-4 px-8"
                to="home"
                smooth="easeOutQuad"
                duration={1000}
                isDynamic={true}>
                Home
              </Link>
            </li>
            <li>
              <Link
              className="link l2 py-4 px-8"
                to="about"
                smooth="easeOutQuad"
                duration={1000}
                isDynamic={true}>
                About
              </Link>
            </li>
            <li>
              <Link className="link l3 px-8 py-4" to="skills" smooth="easeOutQuad" duration={1000}>
                Skills
              </Link>
            </li>
            <li>
              <Link className="link l4 px-8 py-4" to="project" smooth="easeOutQuad" duration={1000}>
                Projects
              </Link>
            </li>
            <li>
              <Link
              className="link l5 px-8 py-4"
                to="contact"
                smooth="easeOutQuad"
                duration={1000}
                isDynamic={true}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <button></button>
        <a href={pdf} download="resume.pdf">
          <div className="resume button px-3 py-2 border-cyan-200 border-2 font-medium text-white">
            Resume
          </div>
        </a>
      </div>
    </>
  );
};

export default Header;
