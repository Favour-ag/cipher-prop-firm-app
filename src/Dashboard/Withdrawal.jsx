import React, { useEffect, useState } from "react";
import SideNav from "./SideNav";
import AccountInfo from "../components/AccountInfo";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Key from "../assets/key.svg";

const Withdrawal = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Sample data to display in the table
  const withdrawalTable = [
    {
      referenceId: "5590fhie45h",
      payoutType: "PAYOUT TYPE",
      requestedOn: "Aug 21, 2023 9:14 AM",
      method: "Crypto",
      status: "Requested",
      amount: "$0.00",
      adminNote: "--",
      certificate: "--",
      invoiceLink: "", // Replace with actual invoice link
    },
    {
      referenceId: "5590fhie45h",
      payoutType: "PAYOUT TYPE",
      requestedOn: "Aug 21, 2023 9:14 AM",
      method: "Crypto",
      status: "Requested",
      amount: "$0.00",
      adminNote: "--",
      certificate: "--",
      invoiceLink: "", // Replace with actual invoice link
    },
  ];

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

            {/* Withdrawal Section */}
            <div className="bg-[#070D12] w-full lg:w-auto h-auto p-4 flex flex-col lg:flex-row justify-between">
              <div className="lg:w-1/2 space-y-1">
                <p className="font-semibold text-xl lg:text-2xl">
                  Payout Section
                </p>
                <p className="font-semibold">
                  Do you want to request for your payout?
                </p>
                <p>
                  Please click the request payout button that will take you to
                  provide required information, we will reach out to you for
                  further advancements.
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

            {/* Withdrawal Table or No Payouts Message */}
            <div className="bg-[#070D12] w-full h-auto p-4 rounded-lg mt-8 overflow-x-auto">
              {withdrawalTable.length > 0 ? (
                <table className="w-full text-white">
                  <thead>
                    <tr className="text-gray-400">
                      <th className="text-left">REFERENCE ID</th>
                      <th className="text-left">PAYOUT TYPE</th>
                      <th className="text-left">REQUESTED ON</th>
                      <th className="text-left">METHOD</th>
                      <th className="text-left">STATUS</th>
                      <th className="text-left">AMOUNT</th>
                      <th className="text-left">ADMIN NOTE</th>
                      <th className="text-left">CERTIFICATE</th>
                      <th className="text-left">INVOICE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {withdrawalTable.map((withdrawal, index) => (
                      <tr key={index} className="bg-darkblue-700">
                        <td>{withdrawal.referenceId}</td>
                        <td>{withdrawal.payoutType}</td>
                        <td>{withdrawal.requestedOn}</td>
                        <td>{withdrawal.method}</td>
                        <td className="text-yellow-500">{withdrawal.status}</td>
                        <td>{withdrawal.amount}</td>
                        <td>{withdrawal.adminNote}</td>
                        <td>{withdrawal.certificate}</td>
                        <td className="text-blue-500 cursor-pointer">
                          <a href={withdrawal.invoiceLink}>Download</a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="text-center text-gray-400 font-semibold">
                  No Payouts
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Withdrawal;
