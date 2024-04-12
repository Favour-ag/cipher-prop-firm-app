import downArrow from "../assets/downArrow.svg";
import { useState } from "react";

const Accordion = ({ title, content }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div className="border p-2 cursor-pointer">
      <div
        className="flex w-full justify-between px-2 lg:px-4 mb-2 text-lg items-center"
        onClick={() => setAccordionOpen(!accordionOpen)}
      >
        {title}
        <div>
          {accordionOpen ? (
            "-"
          ) : (
            <div className="border rounded-full p-2 h-7 flex items-center">
              <img src={downArrow} alt="rightArrow" className="w-2.5" />
            </div>
          )}
        </div>
      </div>
      {accordionOpen && (
        <div className="px-2 lg:px-4 text-lg text-slate-300">{content}</div>
      )}
    </div>
  );
};

export default Accordion;
