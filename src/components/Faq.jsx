import Accordion from "./Accordion";
import { accordionData } from "../constants";

const Faq = () => {
  return (
    <div className="w-full flex flex-col md:flex-row lg:py-10 lg:pb-24 mb-12 lg:mb- px-1">
      <div className="lg:w-1/2 h-full lg:px-24 flex justify-center items-start flex-col space-y-2 lg:space-y-0 lg:gap-4 p-4">
        <p className="text-xl lg:text-5xl font-semibold ">
          Frequently Asked Questions
        </p>
        <a
          href="#"
          className="py-3 px-4 bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl text-sm md:text-base"
        >
          See all FAQs
        </a>
      </div>
      <div className="lg:w-1/2 h-full flex justify-center items-start flex-col px-4 lg:px-6 lg:pr-24 ">
        <div className="w-full">
          <div className="space-y-4">
            {accordionData.map(({ title, content }) => (
              <Accordion key={title} title={title} content={content} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
