// CalendarComponent.js
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="bg-[#11233B] p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Daily Summary</h2>
      <Calendar
        onChange={setDate}
        value={date}
        className="bg-[#1C2F48] text-white rounded-lg border-none"
        tileClassName={({ date, view }) => {
          // Add custom classes for specific dates here
          return view === "month" && date.getDay() === 0 ? "text-red-500" : "";
        }}
        tileContent={({ date, view }) => {
          // Add custom content to tiles here, like trade results
          if (view === "month" && date.getDate() === 16) {
            return <p className="text-green-500">$200.00</p>;
          }
        }}
      />
      <div className="mt-4">
        <h3 className="text-lg font-bold">Summary for {date.toDateString()}</h3>
        {/* Display summary information here */}
        <p>Ending Balance: $9,083.84</p>
        <p>Trades Taken: 1</p>
        <p>Lots Used: 1.18</p>
        <p className="text-green-500">Profit: $2,000.01</p>
      </div>
    </div>
  );
};

export default CalendarComponent;
