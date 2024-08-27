// SummaryofTheDay.js
import React from "react";
import { FaCalendarDay } from "react-icons/fa";

const SummaryofTheDay = () => {
  return (
    <div className="bg-[#01192F] p-6 rounded-lg mb-6 border border-gray-700  text-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <FaCalendarDay className="text-white" />
          <h3 className="text-lg font-bold">Summary for the day</h3>
        </div>
      </div>

      {/* Summary Rows */}
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Date</span>
          <span className="font-semibold">Thu 2 May</span>
        </div>
        <div className="flex justify-between">
          <span>Ending Balance</span>
          <span className="font-semibold">$9,083.84</span>
        </div>
        <div className="flex justify-between">
          <span>Trades Taken</span>
          <span className="font-semibold">1</span>
        </div>
        <div className="flex justify-between">
          <span>Lots used</span>
          <span className="font-semibold">1.18</span>
        </div>
        <div className="flex justify-between bg-green-600 p-2 rounded-md">
          <span className="font-semibold">Profit</span>
          <span className="font-semibold">$2,000.01</span>
        </div>
      </div>
    </div>
  );
};

export default SummaryofTheDay;
