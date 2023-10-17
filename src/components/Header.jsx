import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { GiBrain } from 'react-icons/Gi';
import {AiOutlineFundProjectionScreen } from 'react-icons/ai';

// import { BsCardChecklist } from 'react-icons/Bs'; 



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-green-50 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="inline-flex items-center text-xl">
          <span className="ml-2 space-x-1 tracking-wider  font-bold  text-gray-800 flex ">
          masum.dev
          </span>
        </Link>

        {/* Nav Items Section */}
        <ul className="items-center hidden space-x-8 lg:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
            Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
        About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/experience"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
            Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
            {/* {BsCardChecklist} */}
          Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
           Contact
            </NavLink>
          </li>
        </ul>
        <div>
          <button className="px-5 py-2 rounded-lg bg-blue-400 text-white  "> Hire Me </button>
        </div>

        {/* Mobile Navbar Section */}
        <div className="lg:hidden">
          {/* Dropdown Open Button */}
          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3BottomRightIcon className="w-5 text-gray-600" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                {/* Logo & Button section */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" className="inline-flex items-center">
                      <span className="ml-2 text-2xl font-bold tracking-wide text-gray-800 ">
                        JobHub
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className="w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link to="/" className="default">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/chart"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                      >
                        Statistics
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/applied"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400 "
                      >
                        Applied Jobs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
