import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import TicketSelection from "./components/TicketSelection";
import AttendeeDetails from "./components/AttendeeDetails";

function App() {
  return (
    <div className="px-4 sm:px-[5vw] bg-[#05252C] md:px-[7vw] lg:px-[9vw]">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ticket-selection" element={<TicketSelection />} />
        <Route path="/attendee-details" element={<AttendeeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
