import Accordion from "./Accordion";
import { accordionData } from "../constants";

const Faq = () => {
  return (
    <div className="w-full flex flex-col md:flex-row lg:py-10 lg:pb-24 mb-12 px-1">
      {/* Left Side: FAQ Title and Button */}
      <div className="lg:w-1/2 h-full lg:px-24 flex justify-center items-start flex-col space-y-4 lg:gap-4 p-4">
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

      {/* Right Side: Accordion Section */}
      <div className="lg:w-1/2 h-full flex justify-center items-start flex-col px-4 lg:px-6 lg:pr-24">
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
