import React, { useEffect, useState } from "react";
import SideNav from "./SideNav";
import AccountInfo from "../components/AccountInfo";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Key from "../assets/key.svg";

const withdrawal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div className="flex bg-inherit w-full h-full [background:radial-gradient(100%_125%_at_50%_100%,#0072D8_0%,#000_70%)]">
      <div className="fixed left-0 top-0 h-full">
        <SideNav />
      </div>
      <div className="ml-52 w-full h-screen p-3 px-8 pt-4 space-y-12 overflow-y-auto">
        <div className="flex justify-around">
          <AccountInfo />
          <div>
            <img src="" alt="" />
            <p>Sophomore</p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <div className="bg-[#070D12] w-full h-[187px] flex justify-between ">
            <div className="w-[50%]">
              <div className="p-3 space-y-1">
                <p className="font-semibold text-2xl">Payout Session</p>
                <p className="font-semibold">
                  Do you want to request for your payout?
                </p>
                <p>
                  Please click the request payout button that will take you to
                  provide required information, we will reach out to you for
                  further advancements
                </p>
              </div>
            </div>
            <div className="w-[50%] flex justify-end items-center">
              <p className="py-2 px-4  bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl cursor-pointer flex gap-1">
                <img src={Key} alt="key" />
                <Link to="/"> Request Payout </Link>
              </p>
            </div>
          </div>
        </motion.div>

        <div className="w-full flex "></div>
      </div>
    </div>
  );
};

export default withdrawal;
