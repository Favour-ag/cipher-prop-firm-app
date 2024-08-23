import React, { useEffect, useState } from "react";
import SideNav from "./SideNav";
import AccountInfo from "../components/AccountInfo";
import { motion } from "framer-motion";

const Competition = () => {
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        {/* Main Content */}
        <div className="flex-1 p-6 lg:p-8 xl:p-4 2xl:p-16 lg:ml-0 [background:radial-gradient(100%_125%_at_50%_100%,#0E1B2E_0%,#000_70%)]">
          <div className="max-w-screen-xl mx-auto">
            {/* Account Section */}
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-4 lg:space-y-0">
              <AccountInfo />
              <div className="mt-4 lg:mt-0 flex items-center lg:pb-4 space-x-3">
                <img src="" alt="" className="w-16 h-16 rounded-full" />
                <p className="mt-2 text-center lg:text-left">Sophomore</p>
              </div>
            </div>

            {/* Featured Competition */}
            <div className="bg-[#11233B] p-6 rounded-lg border mt-6">
              <h1 className="text-3xl font-bold">Featured Competition</h1>
              <p className="mt-4">
                Hello! from the fascinating world of Cipher competition! Prepare
                yourself for an adventure of strategy and financial expertise as
                traders from all over the world converge to display their
                skills.
              </p>
              <div className="mt-4 flex justify-between items-center">
                <div className="text-lg">MT5</div>
                <span className="bg-green-600 text-white px-3 py-1 rounded">
                  Open
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-bold">June Competition</h3>
              <button className="mt-4 bg-pink-600 text-white px-4 py-2 rounded">
                View
              </button>
            </div>

            {/* All Competitions */}
            <h2 className="text-2xl font-bold mt-8">All Competitions</h2>
            <div className="flex flex-wrap gap-4 mt-4">
              {["February", "March", "May"].map((month, idx) => (
                <div key={idx} className="bg-[#161d2e] p-4 rounded-lg w-72">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold">{month} Competition</h3>
                    <span
                      className={`text-white px-3 py-1 rounded ${
                        month === "May" ? "bg-red-600" : "bg-green-600"
                      }`}
                    >
                      {month === "May" ? "Ended" : "Open"}
                    </span>
                  </div>
                  <div className="mt-2 text-lg">MT5</div>
                  <div className="mt-2 text-sm">
                    Participants: {month === "March" ? "3409" : "5000"}
                  </div>
                  <button className="mt-4 bg-pink-600 text-white px-4 py-2 rounded">
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Competition;
