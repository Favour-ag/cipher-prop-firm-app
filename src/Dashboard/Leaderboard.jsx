import React, { useEffect, useState } from "react";
import SideNav from "./SideNav";
import AccountInfo from "../components/AccountInfo";
import { motion } from "framer-motion";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { IoPricetag } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

import championCup from "../assets/championCup.svg";

const Leaderboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const leaderboardData = [
    {
      rank: 1,
      name: "Matthew Perry",
      trades: 12,
      winRatio: 120,
      profit: "$12,000",
      gain: "103%",
    },
    {
      rank: 2,
      name: "Femi Adelaja",
      trades: 8,
      winRatio: 100,
      profit: "$10,000",
      gain: "90%",
    },
    {
      rank: 3,
      name: "Stacy Kime",
      trades: 12,
      winRatio: 89,
      profit: "$12,000",
      gain: "103%",
    },
    {
      rank: 4,
      name: "Dele Chike",
      trades: 12,
      winRatio: 120,
      profit: "$12,000",
      gain: "103%",
    },
    {
      rank: 5,
      name: "Godwin Akpabio",
      trades: 12,
      winRatio: 120,
      profit: "$12,000",
      gain: "103%",
    },
    {
      rank: 6,
      name: "Jonathan Tpain",
      trades: 12,
      winRatio: 120,
      profit: "$12,000",
      gain: "103%",
    },
    {
      rank: 7,
      name: "Christopher Maurice",
      trades: 12,
      winRatio: 120,
      profit: "$12,000",
      gain: "103%",
    },
    {
      rank: 8,
      name: "Bolu Bells",
      trades: 12,
      winRatio: 120,
      profit: "$12,000",
      gain: "103%",
    },
    {
      rank: 9,
      name: "Viano Omoti",
      trades: 12,
      winRatio: 120,
      profit: "$12,000",
      gain: "103%",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#0E1B2E] text-white">
      <SideNav isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <button
        onClick={toggleSidebar}
        className="p-4 bg-[#0C2E4E] text-white lg:hidden fixed top-0 left-0 z-20"
      >
        ☰
      </button>
      <div className="flex-1 p-6 lg:p-8 xl:p-4 2xl:p-16 lg:ml-0 [background:radial-gradient(100%_125%_at_50%_100%,#0072D8_0%,#000_70%)]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-4 lg:space-y-0">
              <AccountInfo />
              <div className="mt-4 lg:mt-0 flex items-center lg:pb-4 space-x-3">
                <img src="" alt="" className="w-16 h-16 rounded-full" />
                <p className="mt-2 text-center lg:text-left">Sophomore</p>
              </div>
            </div>
            <div className="relative bg-[#070D12] p-6 rounded-lg border mt-6 text-white overflow-hidden">
              <img
                src={championCup}
                alt="Cup"
                className="absolute right-0 top-0 w-[30%] h-auto opacity-50"
              />
              <div>
                <h3>Competition is still open</h3>
              </div>
              <div className="mt-6 flex items-center space-x-4 relative">
                <span className="text-lg flex items-center space-x-2">
                  <span>MT5</span>
                </span>
                <button className="bg-[#1D9C0833] text-white p-2 rounded-lg font-semibold">
                  <p className="text-[#1D9C08]">Open</p>
                </button>
                <button className="bg-[#505255] text-white p-2 rounded-lg font-semibold">
                  <p className="text-white">+ Join</p>
                </button>
              </div>
              <div className="flex gap-5 items-center mt-4 relative">
                <div className="text-lg flex items-center space-x-2">
                  <AiOutlineCalendar className="text-gray-400" />
                  <span>
                    <div className="text-sm text-gray-400">Starts</div>
                    June 1st 2024
                  </span>
                </div>
                <div className="text-lg flex items-center space-x-2">
                  <AiOutlineClockCircle className="text-gray-400" />
                  <span>
                    <div className="text-sm text-gray-400">Ends</div>
                    June 20th 2024
                  </span>
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
              <div className="flex gap-5 items-center mt-4 relative">
                <h3 className="text-2xl font-bold uppercase">
                  June Competition
                </h3>
              </div>
            </div>
            <div className="mt-8 overflow-x-auto">
              <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
              <div className="bg-[#11233B] p-6 rounded-lg">
                <table className="w-full min-w-[600px] text-left">
                  <thead>
                    <tr>
                      <th className="py-2">Rank</th>
                      <th className="py-2">Name</th>
                      <th className="py-2">Trades</th>
                      <th className="py-2">Win Ratio</th>
                      <th className="py-2">Profit</th>
                      <th className="py-2">Gain</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaderboardData.map((entry, index) => (
                      <tr
                        key={index}
                        className={`${
                          index === 0
                            ? "border border-yellow-500"
                            : index === 1 || index === 2
                            ? "border border-orange-500"
                            : "border-b border-gray-700"
                        }`}
                      >
                        <td className="py-2">{entry.rank}</td>
                        <td className="py-2">{entry.name}</td>
                        <td className="py-2">{entry.trades}</td>
                        <td className="py-2">{entry.winRatio}</td>
                        <td className="py-2 text-green-500">{entry.profit}</td>
                        <td className="py-2 text-green-500">{entry.gain}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Leaderboard;
