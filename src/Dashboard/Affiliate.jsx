import React, { useEffect, useState } from "react";
import SideNav from "./SideNav";
import AccountInfo from "../components/AccountInfo";
import { motion } from "framer-motion";
import { FaCopy } from "react-icons/fa";
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

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
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
              <p className="text-center lg:text-left">
                To be able to use an affiliate link, you must purchase an
                account.
              </p>
            </div>
            <h1 className="text-4xl p-4 text-center lg:text-left">Affiliate</h1>

            {/* Affiliate Earnings and Referrals Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 p-4 bg-black gap-6">
              {/* Earnings Section */}
              <div className="border border-white rounded-md p-4 ">
                <div className="space-y-6 text-center ">
                  <div>
                    <h4 className="text-lg">Total Earnings</h4>
                    <p className="text-2xl">$0.00</p>
                  </div>
                  <div>
                    <h4 className="text-lg">Total Purchased</h4>
                    <p className="text-2xl">$0.00</p>
                  </div>
                  <div>
                    <h4 className="text-lg">Total Paid Out</h4>
                    <p className="text-2xl">$0.00</p>
                  </div>
                </div>
              </div>

              {/* Referral Link Section */}
              <div className="border border-white rounded-md p-4 ">
                <div className="space-y-2 text-center lg:text-left">
                  <h4 className="text-lg">Share your referral link</h4>
                  <p className="text-sm text-gray-400">
                    You can share your referral link by copying and sending it
                    to your friends or sharing it on social media.
                  </p>
                </div>

                {/* Invitation Code */}
                <div className="flex items-center space-x-2 mt-4">
                  <input
                    type="text"
                    value="CipherTkql"
                    readOnly
                    className="bg-transparent border border-gray-600 p-2 w-full rounded"
                  />
                  <FaCopy
                    className="cursor-pointer"
                    onClick={() => handleCopy("CipherTkql")}
                  />
                </div>

                {/* Invitation Link */}
                <div className="flex items-center space-x-2 mt-4">
                  <input
                    type="text"
                    value="cipher-ui.com/?ref=594204"
                    readOnly
                    className="bg-transparent border border-gray-600 p-2 w-full rounded"
                  />
                  <FaCopy
                    className="cursor-pointer"
                    onClick={() => handleCopy("cipher-ui.com/?ref=594204")}
                  />
                </div>
              </div>
            </div>

            {/* Users Referred Section */}
            <div className="overflow-x-auto mt-4">
              <table className="min-w-full bg-[#070D12]">
                <thead>
                  <tr>
                    <th className="p-4 text-left">USERS REFERRED</th>
                    <th className="p-4 text-left">AMOUNT PURCHASED</th>
                    <th className="p-4 text-left">DATE</th>
                    <th className="p-4 text-left">STATUS</th>
                    <th className="p-4 text-left">EARNINGS PER REFERRAL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4">User 1</td>
                    <td className="px-4">$50.00</td>
                    <td className="px-4">2024-08-01</td>
                    <td className="px-4">Active</td>
                    <td className="px-4">$5.00</td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Affiliate;
