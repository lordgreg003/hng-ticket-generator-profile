import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TicketSelection = () => {
  const [selectedTicket, setSelectedTicket] = useState("");
  const [ticketCount, setTicketCount] = useState(1);
  const navigate = useNavigate();

  const handleNext = () => {
    if (selectedTicket) {
      const ticketData = { selectedTicket, ticketCount };
      localStorage.setItem("ticketData", JSON.stringify(ticketData));

      navigate("/attendee-details");
    } else {
      alert("Please select a ticket type.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#05252C] text-white p-4">
      {/* maindiv */}
      <div className="bg-[#05252C] border border-[#197686] p-6 rounded-xl shadow-lg w-[99%] sm:w-full max-w-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Ticket Selection</h2>
          <span className="text-sm">Step 1/3</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
          <div
            className="bg-[#197686] h-2 rounded-full"
            style={{ width: "33%" }}
          ></div>
        </div>

        <div className="border-[#197686] border bg-[#08252B] p-4 rounded-lg">
          <div className="border bg-[#07373F] border-[#197686] p-4 rounded-lg mb-4 text-center">
            <h3 className="text-3xl font-semibold">Techember Fest &apos;25</h3>
            <p className="text-base">
              Join us for an unforgettable experience at
            </p>
            <p className="text-base">[Event Name] Secure your spot now.</p>
            <p className="text-base mt-1">
              📍[Event Location] || March 15, 2025 | 7:00 PM
            </p>
          </div>
          <hr className="text-[#07373F] h-1 mb-3" />

          <div className="mb-4">
            <h4 className="font-semibold mb-2">Select Ticket Type:</h4>
            <div className="flex flex-col md:flex-row w-full justify-between gap-4">
              {["REGULAR", "VIP", "VVIP"].map((type, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTicket(type)}
                  className={`p-4 w-full md:w-[10rem] h-[6rem] rounded-lg border flex flex-col justify-between text-nowrap ${
                    selectedTicket === type
                      ? "bg-[#197686] border-[#2BA4B9]" // Highlight when selected
                      : "bg-[#07373F] border-[#0E464F]"
                  }`}
                >
                  <span className="text-lg font-semibold">
                    {type === "REGULAR" ? "Free" : "$150"}
                  </span>
                  <p className="text-sm">{type} ACCESS</p>
                  <span className="text-xs text-gray-300">20/52</span>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2">Number of Tickets:</label>
            <select
              className="w-full p-2 rounded bg-[#08252B] border border-[#197686] focus:outline-none"
              value={ticketCount}
              onChange={(e) => setTicketCount(parseInt(e.target.value))}
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          <div className="flex-col sm:flex sm:flex-row bg-[#05252C] px-4 py-3 sm:py-0 rounded-2xl justify-between gap-4 mt-4 sm:h-14 h-24 space-y-2 sm:space-y-0 items-center">
            <button className="w-full p-1 border-[#24A0B5] rounded border">
              Cancel
            </button>
            <button
              onClick={handleNext}
              className="w-full p-1 bg-[#24A0B5] rounded"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketSelection;
