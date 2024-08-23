import React, { useEffect, useState } from "react";
import SideNav from "./SideNav";
import AccountInfo from "../components/AccountInfo";
import { motion } from "framer-motion";
import noticeIcon from "../assets/icons/dashboardIcons/noticeIcon.svg";

const Affiliate = () => {
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

            <div className="bg-[#E00E5D] flex justify-center p-3">
              <img src={noticeIcon} alt="noticeIcon" />
              <p>
                To be able to use an affiliate link, you must purchase an
                account.
              </p>
            </div>
            <h1 className="text-4xl p-4">Affiliate</h1>
            <div className="bg-[#070D12] w-full h-full flex gap-6 items-center p-4">
              <div className="border rounded-md h-full w-1/2 flex flex-col justify-center items-center space-y-6">
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
              <div className="border rounded-md h-full w-1/2 flex flex-col justify-center items-center space-y-6">
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
            <div className="flex justify-between bg-[#070D12] p-4  mt-4">
              <p>USERS REFERRED</p>
              <p>AMOUNT PURCHASED</p>
              <p>DATE</p>
              <p>STATUS</p>
              <p>EARNINGS PER REFERRAL</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Affiliate;
