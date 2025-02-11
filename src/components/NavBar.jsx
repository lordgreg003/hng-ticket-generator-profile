import { FaArrowRightLong } from "react-icons/fa6";
import { assets } from "../assets/assets";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between bg-[#05252C] border border-[#197686] text-white py-4 px-8 shadow-md rounded-b-2xl">
    
      <div className="flex flex-row gap-2 items-center justify-center ">
        <img src={assets.thumb} alt="thumb" />
        <img className="h-7" src={assets.ticz} alt="ticz" />
      </div>

      
      <ul className="hidden md:flex space-x-8 text-lg">
        <li className="hover:text-cyan-300 cursor-pointer">Events</li>
        <li className="hover:text-cyan-300 cursor-pointer">My Tickets</li>
        <li className="hover:text-cyan-300 cursor-pointer">About Project</li>
      </ul>

      {/* MY TICKETS Button */}
      <div className="bg-white flex items-center flex-row gap-2 text-black px-4 py-2 rounded-lg cursor-pointer">
        <p>MY TICKETS</p>
        <FaArrowRightLong />
      </div>
    </nav>
  );
};

export default NavBar;
