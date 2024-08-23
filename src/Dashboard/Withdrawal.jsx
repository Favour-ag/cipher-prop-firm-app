import React, { useEffect, useState } from "react";
import SideNav from "./SideNav";
import AccountInfo from "../components/AccountInfo";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Key from "../assets/key.svg";
import { withdrawalTable } from "../constants";
import Payout from "./Payout";

const Withdrawal = () => {
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
                <img src="" alt="" className="w-16 h-16 rounded-full" />
                <p className="mt-2 text-center lg:text-left">Sophomore</p>
              </div>
            </div>

            {/* Withdrawl */}
            <div className="bg-[#070D12] w-full lg:w-auto h-auto p-4 flex flex-col lg:flex-row justify-between">
              <div className="lg:w-1/2 space-y-1">
                <p className="font-semibold text-xl lg:text-2xl">
                  Payout Session
                </p>
                <p className="font-semibold">
                  Do you want to request for your payout?
                </p>
                <p>
                  Please click the request payout button that will take you to
                  provide required information, we will reach out to you for
                  further advancements
                </p>
              </div>
              <div className="lg:w-1/2 flex justify-end items-center mt-4 lg:mt-0">
                <Link
                  to="/payout"
                  className="py-2 px-4 bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl cursor-pointer flex gap-1"
                >
                  <img src={Key} alt="key" />
                  Request Payout
                </Link>
              </div>
            </div>
            <div className="bg-[#070D12] w-full h-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-6 font-semibold space-y-4 lg:space-y-0">
              {withdrawalTable.map((withdrawal, index) => (
                <div key={index} className="text-sm lg:text-base">
                  <p>{withdrawal.title}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Withdrawal;
