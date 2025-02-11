import { useState } from "react";
import {  useNavigate } from "react-router-dom";

const AttendeeDetails = () => {
     
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [about, setAbout] = useState("");
    const [profilePhoto, setProfilePhoto] = useState(null);
  
    const handleFileUpload = (event) => {
      setProfilePhoto(event.target.files[0]);
    };
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#05252C] text-white p-4">
        <div className="bg-[#05252C] border border-[#197686] p-6 rounded-xl shadow-lg w-full max-w-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Attendee Details</h2>
          <p className="text-center text-sm mb-4">Step 2/3</p>
          <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
            <div className="bg-[#197686] h-2 rounded-full" style={{ width: "66%" }}></div>
          </div>
  
          <div className="border border-[#197686] bg-[#08252B] p-4 rounded-lg">
            <div className="border border-[#197686] p-4 rounded-lg mb-4 text-center">
              <label className="block mb-2 text-sm">Upload Profile Photo</label>
              <div className="border border-dashed border-gray-500 p-6 rounded-lg cursor-pointer text-center">
                <input type="file" className="hidden" onChange={handleFileUpload} />
                {profilePhoto ? <p>{profilePhoto.name}</p> : <p>Drag & drop or click to upload</p>}
              </div>
            </div>
  
            <label className="block mb-2">Enter your name</label>
            <input type="text" className="w-full p-2 rounded bg-[#08252B] border border-[#197686] focus:outline-none" value={name} onChange={(e) => setName(e.target.value)} />
            
            <label className="block mt-4 mb-2">Enter your email *</label>
            <input type="email" className="w-full p-2 rounded bg-[#08252B] border border-[#197686] focus:outline-none" value={email} onChange={(e) => setEmail(e.target.value)} />
            
            <label className="block mt-4 mb-2">About the project</label>
            <textarea className="w-full p-2 rounded bg-[#08252B] border border-[#197686] focus:outline-none" value={about} onChange={(e) => setAbout(e.target.value)}></textarea>
  
            <div className="flex bg-[#041E23] px-4 rounded-2xl justify-between gap-4 mt-4">
              <button onClick={() => navigate(-1)} className="w-full p-1 bg-gray-700 rounded hover:bg-gray-600">Back</button>
              <button className="w-full p-1 bg-blue-600 rounded hover:bg-blue-500">Get My Free Ticket</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AttendeeDetails;
  