import { FaArrowRightLong } from "react-icons/fa6";
import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between bg-[#05252C] border border-[#197686] text-white py-4 px-8 shadow-md rounded-b-2xl">
      <Link to={"/"}>
        <div className="flex flex-row gap-2 items-center justify-center ">
          <img src={assets.thumb} alt="thumb" />
          <img className="h-7" src={assets.ticz} alt="ticz" />
        </div>
      </Link>

      <ul className="hidden md:flex space-x-8 text-lg">
        <NavLink to={"/"}>
          <li className="hover:text-cyan-300 cursor-pointer">Events</li>
        </NavLink>
        <NavLink to={"/tickets"}>
          <li className="hover:text-cyan-300 cursor-pointer">My Tickets</li>
        </NavLink>
        <NavLink to={"/about"}>
          <li className="hover:text-cyan-300 cursor-pointer">About Project</li>
        </NavLink>
      </ul>

      <NavLink to={"/tickets"}>
        <div className="bg-white flex items-center flex-row gap-2 text-black px-4 py-2 rounded-lg cursor-pointer">
          <p>MY TICKETS</p>
          <FaArrowRightLong />
        </div>
      </NavLink>
    </nav>
  );
};

export default NavBar;
