import React, { useEffect, useState } from "react";
import SideNav from "./SideNav";
import AccountInfo from "../components/AccountInfo";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Key from "../assets/key.svg";
import { withdrawalTable } from "../constants";

const Withdrawal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col lg:flex-row bg-inherit w-full h-full [background:radial-gradient(100%_125%_at_50%_100%,#0072D8_0%,#000_70%)]">
      <div className="fixed lg:relative left-0 top-0 h-full lg:h-auto">
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden">
            <SideNav />
          </div>
        )}
        <div className="hidden lg:block">
          <SideNav />
        </div>
      </div>
      <div className="lg:ml-52 w-full lg:w-auto h-screen p-3 px-4 lg:px-8 pt-4 space-y-12 overflow-y-auto">
        <div className="flex flex-col lg:flex-row justify-around items-center lg:items-start space-y-4 lg:space-y-0">
          <AccountInfo />
          <div className="mt-4 lg:mt-0 flex flex-col items-center lg:items-start">
            <img src="" alt="" className="w-16 h-16 rounded-full" />
            <p className="mt-2 text-center lg:text-left">Sophomore</p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="space-y-5"
        >
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
                to="/"
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
        </motion.div>
      </div>
    </div>
  );
};

export default Withdrawal;
