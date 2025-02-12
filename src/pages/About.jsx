const About = () => {
  return (
    <section className="w-full  px-6 md:px-20 py-6 text-white flex  justify-center">
      <div className="border border-[#0E464F] rounded-4xl w-[70%] py-8">
        <div className="max-w-xl mx-auto   p-8 rounded-lg shadow-lg">
          {/* Header */}
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Event Ticket Booking UI – Open Source Practice Project 🎟️
          </h2>

          {/* Overview */}
          <p className="text-gray-300 text-sm md:text-base mb-6">
            This is a beginner-friendly yet practical Event Ticket Booking UI
            designed for developers to clone, explore, and build upon. The
            design focuses on a seamless, login-free ticket reservation flow,
            allowing users to book event tickets quickly and efficiently.
          </p>

          {/* Flow & Features */}
          <div className="space-y-6 text-gray-300 text-sm">
            {/* Ticket Selection */}
            <div>
              <h3 className="text-lg font-semibold mb-2">
                🎫 Ticket Selection
              </h3>
              <ul className="space-y-1">
                <li>• Users can browse available tickets (Free & Paid).</li>
                <li>• Ticket options are displayed in a list or card view.</li>
                <li>
                  • Free Tickets → Clicking &quot;Get Free Ticket&quot; proceeds
                  to attendee details.
                </li>
                <li>
                  • Paid Tickets → Clicking &quot;Purchase Ticket&quot; opens a
                  payment modal.
                </li>
              </ul>
            </div>

            {/* Attendee Details */}
            <div>
              <h3 className="text-lg font-semibold mb-2">
                📝 Attendee Details Form
              </h3>
              <ul className="space-y-1">
                <li>
                  • Users input their Name, Email, and optional Phone Number.
                </li>
                <li>• Profile picture upload with preview functionality.</li>
                <li>• Ticket summary is visible before submission.</li>
              </ul>
            </div>

            {/* Payment / Success */}
            <div>
              <h3 className="text-lg font-semibold mb-2">
                💳 Payment or Success Page
              </h3>
              <ul className="space-y-1">
                <li>
                  • If the ticket is free, the user is taken directly to the
                  Ticket Confirmation Page.
                </li>
                <li>
                  • If the ticket is paid, developers can integrate Stripe,
                  Paystack, or Flutterwave to process payments before showing
                  the confirmation page.
                </li>
                <li>• Upon successful booking, users should receive:</li>
                <li>• A visual ticket preview with a unique QR Code.</li>
                <li>
                  • • An option to download the ticket as PDF or save it to
                  their device.
                </li>
                <li>• An email confirmation containing ticket details.</li>
                <li>• How to Build This 🚀</li>
              </ul>
            </div>
            <h3>This UI can be implemented using:</h3>
            {/* ------front-end------ */}
            <div>
              <h3 className="text-lg font-semibold mb-2">
                📌 Frontend (Next.js or React)
              </h3>
              <ul className="space-y-1">
                <li>• Component Breakdown:</li>
                <li>• TicketCard.tsx → Displays ticket details</li>
                <li>• AttendeeForm.tsx → Captures user details</li>
                <li>• PaymentModal.tsx → Handles payment processing</li>
                <li>• SuccessScreen.tsx → Shows the final ticket preview</li>
                <li>
                  • State Management: React’s Context API, Zustand, or Redux (if
                  needed).
                </li>
                <li>
                  • File Handling: Users should be able to upload images
                  (profile picture for ticket) using Firebase Storage,
                  Cloudinary, or local preview with URL.createObjectURL().
                </li>
              </ul>
            </div>
            {/* ------back-end------ */}
            <div>
              <h3 className="text-lg font-semibold mb-2">
                📌 Backend (Optional)
              </h3>
              <ul className="space-y-1">
                <li>
                  • If persistence is required, a backend can be built using:
                </li>
                <li>• Node.js & Express or Firebase Functions</li>
                <li>
                  • Database: MongoDB, PostgreSQL, or Firebase Firestore to
                  store ticket records
                </li>
              </ul>
            </div>
            {/* ------payment------ */}
            <div>
              <h3 className="text-lg font-semibold mb-2">
                📌 Payment Integration
              </h3>
              <ul className="space-y-1">
                <li> • For paid events, developers should integrate:</li>
                <li> • Stripe Checkout (for international transactions)</li>
                <li> • Paystack or Flutterwave (for African users)</li>
                <li>What You’ll Learn 🧑‍💻</li>
                <li>
                  {" "}
                  • File handling & validation (profile picture uploads).
                </li>
                <li>• Dynamic UI updates based on ticket selection.</li>
                <li>• Persisting bookings using local state or a backend.</li>
                <li> • Integrating payment gateways for ticket purchases.</li>
                <li>
                  • Generating & validating QR Codes for event check-in
                  (Advanced).
                </li>
                <li>Need Help? Reach Out! 💬</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-xl mx-auto flex items-center justify-center my-8 px-4">
          <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            💛 Enjoy
          </p>
        </div>

        <div className="max-w-md border border-[#24A0B5] rounded-2xl mx-auto flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center p-2 items-center">
          <a
            className="border rounded-lg border-[#24A0B5] w-full sm:max-w-[150px] px-6 sm:px-8 md:px-10 py-2 sm:py-3 text-[#24A0B5] text-sm sm:text-base text-center text-nowrap"
            href=""
          >
            Design File
          </a>
          <a
            className="rounded-lg bg-[#24A0B5] text-white w-full sm:max-w-[150px] px-6 sm:px-8 md:px-10 py-2 sm:py-3 text-sm sm:text-base text-center text-nowrap"
            href=""
          >
            Github Code
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
