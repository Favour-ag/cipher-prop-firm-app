import Accordion from "./Accordion";
import { accordionData } from "../constants";

const Faq = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mb-12">
      {/* Left Side: FAQ Title and Button */}
      <div className=" ">
        <p className="text-2xl lg:text-5xl font-bold mb-4">
          Frequently Asked Questions
        </p>
        <a
          href="#"
          className="py-3 px-6 bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl text-sm md:text-base text-white hover:shadow-lg transition duration-300"
        >
          See all FAQs
        </a>
      </div>

      {/* Right Side: Accordion Sec tion */}
      <div className=" ">
        <div className="w-full">
          <div className="space-y-4">
            {accordionData.map(({ title, content }) => (
              <Accordion
                key={title}
                title={title}
                content={content}
                className="bg-[#12192B] p-4 rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
