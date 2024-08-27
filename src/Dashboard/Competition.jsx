import React, { useEffect, useState } from "react";
import { FaFilter, FaTrophy } from "react-icons/fa"; // Import the filter and trophy icons
import SideNav from "./SideNav";
import AccountInfo from "../components/AccountInfo";
import { motion } from "framer-motion";
import { IoPricetag } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import championCup from "../assets/championCup.svg";

const Competition = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [filterStatus, setFilterStatus] = useState("All"); // State to manage filter

  const competitions = [
    { month: "February", status: "Open", participants: 5000 },
    { month: "March", status: "Open", participants: 3409 },
    { month: "May", status: "Ended", participants: 5000 },
    { month: "July", status: "Open", participants: 5000 },
    { month: "August", status: "Open", participants: 3409 },
    { month: "September", status: "Ended", participants: 5000 },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Filter competitions based on the selected status
  const filteredCompetitions =
    filterStatus === "All"
      ? competitions
      : competitions.filter((comp) => comp.status === filterStatus);

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

            {/* Featured Competition */}
            <h1 className="text-3xl font-bold relative">
              Featured Competition
            </h1>
            <div className="relative bg-[#070D12] p-6 rounded-lg border mt-6 text-white overflow-hidden">
              {/* Background Image */}
              <img
                src={championCup}
                alt="Cup"
                className="absolute right-0 top-0 w-[30%] h-auto opacity-50"
              />

              {/* Content */}
              <p className="text-lg max-w-2xl  relative">
                Hello! from the fascinating world of Cipher competition! Prepare
                yourself for an adventure of strategy and financial expertise as
                traders from all over the world converge to display their
                skills.
              </p>
              <div className="mt-6 flex items-center  relative">
                <div className="text-lg space-x-4">
                  <span>MT5</span>
                  <button className="bg-[#1D9C0833] text-white p-2 rounded-lg font-semibold">
                    <p className="text-[#1D9C08]">Open</p>
                  </button>
                </div>
              </div>
              <div className="flex gap-5 items-center mt-4 relative">
                <div className="text-lg flex items-center space-x-2">
                  <IoPricetag />
                  <span>
                    <div className="text-sm text-gray-400">Entry</div>
                    Free
                  </span>
                </div>
                <div className="text-lg flex items-center space-x-2">
                  <FaUser />
                  <span>
                    <div className="text-sm text-gray-400">Participants</div>
                    5000
                  </span>
                </div>
              </div>
              <div className="flex gap-5 items-center mt-4  relative">
                <h3 className="text-2xl font-bold">June Competition</h3>
                <button className="bg-gradient-to-r from-red-500 to-blue-600 text-white px-6 py-2 rounded-3xl font-semibold">
                  View
                </button>
              </div>
            </div>

            {/* All Competitions */}
            <h2 className="text-2xl font-bold mt-8">All Competitions</h2>

            {/* Filter Dropdown with Icon */}
            <div className="mt-4 flex items-center">
              <FaFilter className="mr-2 text-lg" /> {/* Filter Icon */}
              <label htmlFor="filter" className="mr-2">
                Filter by Status:
              </label>
              <select
                id="filter"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="bg-[#161d2e] text-white p-2 rounded-lg"
              >
                <option value="All">All</option>
                <option value="Open">Open</option>
                <option value="Ended">Ended</option>
              </select>
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              {filteredCompetitions.map((comp, idx) => (
                <div key={idx} className="bg-[#070D12] p-4 rounded-lg w-72">
                  {/* Trophy Icon */}
                  <div className="flex items-center mt-2">
                    <FaTrophy className="text-yellow-500 text-4xl" />
                    <div className="ml-2 text-lg">
                      <h3 className="text-xl font-bold">
                        {comp.month} Competition
                      </h3>
                      <p>MT5</p>
                      <div className="flex  items-center">
                        <span
                          className={`text-white px-3 py-1 rounded ${
                            comp.status === "Ended"
                              ? "bg-[#FF000033] text-[#FF0000]"
                              : "bg-[#1D9C0833] text-[#1D9C08]"
                          }`}
                        >
                          {comp.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-5 items-center mt-4 z-10 relative">
                    <div className="text-lg">
                      <div className="text-sm text-gray-400">Entry</div>
                      Free
                    </div>
                    <div className="text-lg">
                      <div className="text-sm text-gray-400">Participants</div>
                      {comp.participants}
                    </div>
                  </div>

                  <button className="mt-4 bg-gradient-to-r from-red-500 to-blue-600 text-white px-4 py-2 rounded-3xl">
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Competition;
