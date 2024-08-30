import React, { useEffect, useState } from "react";
import SideNav from "./SideNav";
import AccountInfo from "./AccountInfo";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import PayoutForm from "./PayoutForm";

const Payout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#0E1B2E] text-white">
      <SideNav isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {/* Menu button for mobile */}
      <button
        onClick={toggleSidebar}
        className="p-4 bg-[#0C2E4E] text-white lg:hidden fixed top-0 left-0 z-20"
      >
        ☰
      </button>
      {/* Main Content */}
      <div className="flex-1 p-6 lg:p-8 xl:p-4 2xl:p-16 lg:ml-0 [background:radial-gradient(100%_125%_at_50%_100%,#0072D8_0%,#000_70%)]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-screen-xl mx-auto">
            {/* Account Section */}
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-4 lg:space-y-0">
              <AccountInfo />

              <div className="mt-4 lg:mt-0 flex items-center lg:pb-4 space-x-3">
                <img
                  src="/path-to-profile-pic.jpg"
                  alt="Profile"
                  className="w-16 h-16 rounded-full"
                />
                <p className="mt-2 text-center lg:text-left">Sophomore</p>
              </div>
            </div>

            {/* Payout */}
            <div className="mt-8">
              <PayoutForm /> {/* Embed the PayoutForm component */}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Payout;
