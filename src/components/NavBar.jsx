import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <nav className="flex items-center justify-between bg-[#05252C] border border-[#197686] text-white py-4 px-8 shadow-md rounded-b-2xl">
      {/* Logo */}
      <Link to={"/"}>
        <div className="flex flex-row gap-2 items-center justify-center ">
          <img src={assets.thumb} alt="thumb" />
          <img className="h-7" src={assets.ticz} alt="ticz" />
        </div>
      </Link>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#05252C] z-50 transform transition-transform duration-300 ease-in-out ${
          isNavVisible ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:w-auto md:h-auto md:bg-transparent`}
      >
        <ul className="flex flex-col space-y-4 p-4 md:flex-row md:space-x-8 md:space-y-0 md:p-0">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "text-white" : "text-gray-400"
            }
          >
            <li className="hover:text-cyan-300 cursor-pointer">Events</li>
          </NavLink>
          <NavLink
            to={"/tickets"}
            className={({ isActive }) =>
              isActive ? "text-white" : "text-gray-400"
            }
          >
            <li className="hover:text-cyan-300 cursor-pointer">My Tickets</li>
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive ? "text-white" : "text-gray-400"
            }
          >
            <li className="hover:text-cyan-300 cursor-pointer">
              About Project
            </li>
          </NavLink>
        </ul>
      </div>

      <div className="">
        <button
          onClick={toggleNav}
          className="bg-white flex items-center flex-row gap-2 text-black px-4 py-2 rounded-lg cursor-pointer"
        >
          <p>MY TICKETS</p>
          <FaArrowRightLong />
        </button>
      </div>

      {isNavVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleNav}
        ></div>
      )}
    </nav>
  );
};

export default NavBar;
