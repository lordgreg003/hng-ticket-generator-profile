import { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Tickets = () => {
  const [attendeeDetails, setAttendeeDetails] = useState(null);

  useEffect(() => {
    // Retrieve the data from localStorage
    const storedData = localStorage.getItem("finalTicketData");
    if (storedData) {
      setAttendeeDetails(JSON.parse(storedData));
    }
  }, []);

  if (!attendeeDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative border-1 border-[#24A0B5] h-[128vh] justify-center w-md flex mx-auto rounded-xl">
      <p className="absolute translate-y-8 text-white text-3xl font-bold">
        Your Ticket Is Booked!
      </p>
      <p className="absolute text-white text-lg translate-y-16">
        Check your email for a copy or you can download
      </p>
      <img className="absolute translate-y-28 " src={assets.ticket} alt="" />
      <div className="absolute h-[28.2rem] w-[16.5rem] translate-y-5 rounded-2xl justify-center items-center flex flex-col ">
        <div className="absolute  translate-y-16 border-[#24A0B5] border-3 rounded-xl w-[55%] h-[32.5%]">
          <img
            src={attendeeDetails.profilePhoto}
            alt="Profile"
            className="w-full h-full rounded-xl object-cover"
          />
        </div>
        <div className="absolute translate-y-[15.4rem]  w-[88.5%] h-[36%]">
          <div className=" w-full h-12 flex">
            <div className=" bg-[#08343C] p-1  w-1/2">
              <p className="text-[10px] text-white  ">Enter your name</p>
              <p className="text-xs px-1 text-white">{attendeeDetails.name}</p>
            </div>
            <div className="p-1 bg-[#08343C] w-1/2">
              <p className="text-[10px] text-white">Enter your email*</p>
              <p className="text-[10px] px-1 text-white">
                {attendeeDetails.email}
              </p>
            </div>
          </div>
          <div className=" w-full h-10 flex">
            <div className="p-1 bg-[#08343C] w-1/2">
              <p className="text-[10px] text-white ">Ticket Type:</p>
              <p className="text-[10px] px-1 text-white">
                {attendeeDetails.selectedTicket}
              </p>
            </div>
            <div className="p-1 bg-[#08343C] w-1/2">
              <p className="text-[10px] text-white ">Ticket for:</p>
              <p className="text-[10px] px-1 text-white">
                {attendeeDetails.ticketCount}
              </p>
            </div>
          </div>
          <div className=" w-full h-[4.3rem]">
            <h3></h3>
          </div>
        </div>
      </div>
      <div className="absolute translate-y-[38.4rem]  border-black border-2 h-[5rem] w-[16.5rem] "></div>
      <div className="absolute translate-y-[45rem]  flex flex-col sm:flex-row gap-4 justify-center items-center p-4">
        <Link to={"/"}>
          <button className="px-6 py-3 border-2 border-cyan-500 text-cyan-500 rounded-md hover:bg-cyan-500 hover:text-white transition duration-300">
            Book Another Ticket
          </button>
        </Link>
        <button className="px-6 py-3 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition duration-300">
          Download Ticket
        </button>
      </div>
    </div>
  );
};

export default Tickets;
