// CalendarComponent.js
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  // Example trade data (normally fetched from an API)
  const tradeData = {
    "2024-05-02": 2000.01,
    "2024-05-06": -456.34,
    "2024-05-08": -234.21,
    "2024-05-13": -156.66,
    "2024-05-14": -800.0,
    "2024-05-15": -102.65,
    "2024-05-16": 3000.54,
    "2024-05-17": 2453.65,
    "2024-05-18": 1000.0,
    "2024-05-28": 2930.54,
    "2024-05-31": 6054.54,
  };

  const formatDate = (date) => date.toISOString().split("T")[0];

  return (
    <div className=" gap-3 pr-0 lg:pr-4 mb-5 font-sans">
      <div className="text-white ">
        {/* <h2 className="text-2xl font-bold text-center">May 2024</h2> */}
      </div>
      <Calendar
        onChange={setDate}
        value={date}
        className="bg-[#1C2F48] text-white rounded-lg  w-full font-sans"
        tileClassName={({ date, view }) => {
          const tradeAmount = tradeData[formatDate(date)];
          if (view === "month" && tradeAmount) {
            return tradeAmount > 0
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white";
          }
          return "bg-[#1C2F48] text-white";
        }}
        tileContent={({ date, view }) => {
          const tradeAmount = tradeData[formatDate(date)];
          if (view === "month" && tradeAmount) {
            return <p>{`$${tradeAmount.toFixed(2)}`}</p>;
          }
          return <p>$0.00</p>;
        }}
        prevLabel={<FaArrowLeft className="text-white" />}
        nextLabel={<FaArrowRight className="text-white" />}
      />
    </div>
  );
};

export default CalendarComponent;
