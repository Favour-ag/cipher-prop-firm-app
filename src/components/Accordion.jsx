import { useState } from "react";

const Accordion = ({ title, content }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    // <div className="py-2">
    //   <button
    //     onClick={() => setAccordionOpen(!accordionOpen)}
    //     className="flex justify-between w-full p-4 bg-red-400"
    //   >
    //     <span>This is the title</span>
    //     {accordionOpen ? <span>-</span> : <span>+</span>}
    //   </button>
    //   <div
    //     className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
    //       accordionOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr"
    //     } opacity-0`}
    //   >
    //     <div className="overflow-hidden">THis is the answer</div>
    //   </div>
    // </div>
    <div className="border p-2 cursor-pointer">
      <div
        className="flex w-full justify-between px-4 mb-2 text-lg "
        onClick={() => setAccordionOpen(!accordionOpen)}
      >
        {title}
        <div>{accordionOpen ? "-" : "+"}</div>
      </div>
      {accordionOpen && <div className="px-4  text-lg">{content}</div>}
    </div>
  );
};

export default Accordion;
