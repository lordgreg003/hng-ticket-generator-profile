import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TicketSelection = () => {
  const [selectedTicket, setSelectedTicket] = useState("");
  const [ticketCount, setTicketCount] = useState(1);
  const navigate = useNavigate();

  const handleNext = () => {
    if (selectedTicket) {
      navigate("/attendee-details", { state: { selectedTicket, ticketCount } });
    } else {
      alert("Please select a ticket type.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#05252C] text-white p-4">
      <div className="bg-[#05252C] border border-[#197686] p-6 rounded-xl shadow-lg w-full max-w-lg">
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
          <div className="border border-[#197686] p-4 rounded-lg mb-4 text-center">
            <h3 className="text-3xl font-semibold">Techember Fest &apos;25</h3>
            <p className="text-base">
              Join us for an unforgettable experience at
            </p>
            <p className="text-base">[Event Name] Secure your spot now.</p>
            <p className="text-base mt-1">
              📍[Event Location] || March 15, 2025 | 7:00 PM
            </p>
          </div>
          <hr className="bg-[#07373F] text-[#07373F] h-1 mb-3" />
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Select Ticket Type:</h4>
            <div className="flex w-full flex-wrap gap-2">
              {["REGULAR", "VIP", "VVIP"].map((type, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTicket(type)}
                  className={`p-3 w-[13.1 rem] rounded-lg border text-left ${
                    selectedTicket === type
                      ? "bg-[#197686] border-[#0E464F]"
                      : "bg-[#07373F] border-[#0E464F]"
                  }`}
                >
                  <div className="flex flex-row gap-2 text-nowrap items-center">
                    <span>{type} ACCESS</span>
                    <span className="border bg-[#0E464F] border-[#2BA4B9] p-3">
                      {type === "REGULAR"
                        ? "Free"
                        : type === "VIP"
                        ? "$50"
                        : "$150"}
                    </span>
                  </div>
                  <p className="text-xs text-gray-300">20 left!</p>
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

          <div className="flex bg-[#041E23] px-4 rounded-2xl justify-between gap-4">
            <button className="w-full p-1 bg-gray-700 rounded hover:bg-gray-600">
              Cancel
            </button>
            <button
              onClick={handleNext}
              className="w-full p-1 bg-blue-600 rounded hover:bg-blue-500"
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
