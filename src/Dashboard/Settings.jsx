import React, { useEffect, useState } from "react";
import SideNav from "./SideNav";
import AccountInfo from "./AccountInfo";
import { motion } from "framer-motion";
import ProfileUpdate from "./ProfileUpdate";
import ChangePassword from "./ChangePassword";

const Leaderboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("Profile");

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
                <img src="" alt="" className="w-16 h-16 rounded-full" />
                <p className="mt-2 text-center lg:text-left">Sophomore</p>
              </div>
            </div>

            <div className="mb-4">
              <ul className="flex border-b">
                <li
                  className={`mr-4 cursor-pointer ${
                    activeTab === "Profile"
                      ? "text-blue-500 border-b font-semibold"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("Profile")}
                >
                  Profile
                </li>
                <li
                  className={`mr-4 cursor-pointer ${
                    activeTab === "Security"
                      ? "text-blue-500 border-b font-semibold"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("Security")}
                >
                  Security
                </li>
              </ul>
            </div>
            {activeTab === "Profile" && <ProfileUpdate />}
            {activeTab === "Security" && <ChangePassword />}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Leaderboard;
