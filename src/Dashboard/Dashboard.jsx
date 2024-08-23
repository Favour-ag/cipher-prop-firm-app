import React, { useState } from "react";
import TradingHistory from "../Dashboard/TradeHistory";
import SideNav from "./SideNav";
import AccountInfo from "../components/AccountInfo";
import Chart from "./Chart";
import AccountStatus from "./AccountStatus";
import DetailStatus from "./DetailStatus";
import AccountAnalysis from "./AccountAnalysis";
import GoalsOverview from "./GoalsOverview";
import WinRatio from "./WinRatio";
import DailySummary from "./DailySummary";
import Calender from "./Calender";
import SummaryofTheDay from "./SummaryofTheDay";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#01192F] text-white">
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
        <div className="max-w-screen-xl mx-auto">
          {/* Account Section Div */}
          <div className="flex flex-col lg:flex-row justify-around items-center lg:items-start space-y-4 lg:space-y-0">
            <AccountInfo />
            <div className="mt-4 lg:mt-0 flex items-center lg:pb-4 space-x-3">
              <img src="" alt="" className="w-16 h-16 rounded-full" />
              <p className="mt-2 text-center lg:text-left">Sophomore</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="md:col-span-2 lg:col-span-1">
              <div className="bg-[#01192F] p-4 rounded-lg mb-6 border">
                <div className="flex justify-between">
                  <h2 className="text-2xl font-semibold">Account Balance</h2>
                  <div className=" text-2xl">$20,435.00</div>
                </div>
                <p className="text-sm text-gray-400 mb-4">Profit: $800.41</p>
                <div>
                  <h2 className="text-xl font-semibold">Statistics Overview</h2>
                  <Chart />
                </div>
              </div>
              <GoalsOverview />
            </div>
            <div className="lg:col-span-1">
              {/* Account Status and other widgets */}
              <AccountStatus />
              <DetailStatus />
              <AccountAnalysis />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <DailySummary />
            <WinRatio />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <Calender />
            <SummaryofTheDay />
          </div>
          <div className="grid grid-cols-1 ">
            <TradingHistory />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
