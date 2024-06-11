import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import default styles

function MyApp() {
  const [value, setValue] = useState(new Date());

  return (
    <div className="flex justify-center items-center pr-3">
      <div className=" text-white rounded-lg shadow-lg ">
        <Calendar
          onChange={setValue}
          value={value}
          className="react-calendar w-full text-lg bg-inherit"
        />
      </div>
    </div>
  );
}

export default MyApp;
