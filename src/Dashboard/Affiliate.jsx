import React, { useEffect, useState } from "react";
import SideNav from "./SideNav";
import AccountInfo from "../components/AccountInfo";
import { motion } from "framer-motion";
import noticeIcon from "../assets/icons/dashboardIcons/noticeIcon.svg";

const Affiliate = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div className="flex bg-inherit w-full h-full [background:radial-gradient(100%_125%_at_50%_100%,#0072D8_0%,#000_70%)]">
      <div className="fixed left-0 top-0 h-full">
        <SideNav />
      </div>
      <div className="ml-56 w-full h-screen p-3 px-20 pt-4 space-y-12 overflow-y-auto">
        {/* Set overflow-y-auto to enable scrolling for the content */}
        <AccountInfo />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="space-y-5"
        >
          <div className="bg-[#E00E5D] flex justify-center p-3">
            <img src={noticeIcon} alt="noticeIcon" />
            <p>
              To be able to use an affiliate link, you must purchase an account.
            </p>
          </div>
          <h1 className="text-4xl">Affiliate</h1>
          <div className="bg-[#070D12] w-full h-[300px] flex flex-col items-center">
            <div className="border h-full w-1/2 flex flex-col justify-center items-center space-y-6">
              <div>
                <h4>Total Earnings</h4>
                <p className="text-2xl">$0.00</p>
              </div>
              <div>
                <h4>Total Purchased</h4>
                <p className="text-2xl">$0.00</p>
              </div>
              <div>
                <h4>Total Paid Out</h4>
                <p className="text-2xl">$0.00</p>
              </div>
            </div>
          </div>
          <div className="flex bg-[#070D12] p-4 justify-center gap-24">
            <p>USERS REFERRED</p>
            <p>AMOUNT PURCHASED</p>
            <p>DATE</p>
            <p>STATUS</p>
            <p>EARNINGS PER REFERRAL</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Affiliate;
