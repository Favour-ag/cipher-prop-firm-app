import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import searchIcon from "../assets/searchIcon.svg";
import Accordion from "../components/Accordion";
import { accordionData1 } from "../constants";
import { accordionData2 } from "../constants";
// import rightArrow from "../assets/rightArrow.svg";
import discordLogo from "../assets/discordLogo.svg";
import rightPointedArrow from "../assets/rightPointedArrow.svg";

const FAQ = () => {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-full  bg-[#010f1c] flex flex-col items-center lg:mt-4 lg:space-y-7">
        <div className=" w-full flex flex-col items-center">
          <div className=" lg:w-[50%] flex flex-col items-center gap-4 mt-8">
            <p className="text-4xl lg:text-6xl text-center font-semibold">
              Frequently Asked{" "}
              <span className="bg-gradient-to-t from-red-600 to-blue-600 inline-block text-transparent bg-clip-text mr-2">
                Questions
              </span>
            </p>
            <div className="hidden  w-full md:flex flex-col items-center">
              <div className="py-0.5 px-0.5 border bg-[#FFFFFF33] w-[80%] rounded-lg ">
                <div className="flex  w-full rounded-lg items-center justify-start">
                  <div className="w-[30.14px] h-[30.14px] flex justify-center items-center rounded-lg cursor-pointer absolute ml-2">
                    <img src={searchIcon} alt="search" />
                  </div>
                  <input
                    type="text"
                    className="placeholder:text-white block bg-[#FFFFFF33] w-[100%] rounded-md py-2 pl-12 pr-3 shadow-sm focus:outline-none sm:text-md text-white "
                    placeholder="Search keywords... (trade, account)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full min-h-full flex flex-col md:flex-row lg:px-16 pt-6 lg:pt-14">
          <div className="lg:w-[40%]">
            <div className="w-full h-full flex justify-center items-start flex-col px-3 lg:px-6 lg:pr-24">
              <div className="w-full">
                <div className="space-y-4">
                  {accordionData1.map(({ title, content }) => (
                    <Accordion key={title} title={title} content={content} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="pt-12 md:pt-0">
            <div className="w-full h-full flex justify-center items-start flex-col px-3 lg:px-6 lg:pr-24">
              <div className="w-full">
                <div className="space-y-4 ">
                  {accordionData2.map(({ title, content }) => (
                    <Accordion key={title} title={title} content={content} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full h-screen flex flex-col justify-center items-center">
          <div className="mt-60 flex flex-col md:flex-row justify-center items-center space-x-4 space-y-2 lg:space-y-0">
            <p className="text-3xl lg:text-4xl font-semibold">
              Still not satisfied?
            </p>
            <a
              href="#"
              className=" flex gap-2 py-3 px-4 bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl"
            >
              Contact Us
              <img src={rightPointedArrow} alt="rightArrow" className="w-4" />
            </a>
          </div>

          {/* NewsLetter */}
          <div className=" w-full min-h-screen px-4 mt-7 lg:mt-24 flex flex-col md:flex-row lg:px-24 xl:px-32 gap-8 ">
            <div className="lg:w-1/2 lg:space-y-3 mt-3 ">
              <p className="lg:text-3xl font-semibold">
                Join our Team at Cipher
              </p>
              <p className="text-md">
                The industry's most affordable option with advanced technology
                to help you achieve your trading goals. We believe in your
                potential and are here to support your success. Additionally,
                join our platform to learn more about our academy and further
                enhance your trading skills.
              </p>
              {/* BUTTONS */}
              <div className="flex justify-start mt-2 lg:mt-0 space-x-3 lg:space-x-6 items-start">
                <div className="py-3 px-0.5  bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl">
                  <a href="#" className="py-3 px-3  bg-[#010f1c] rounded-3xl">
                    Select An Account
                  </a>
                </div>
                <a
                  href="#"
                  className="py-3 px-4   bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl"
                >
                  Affiliate Program
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 mt-[-20px] lg:mt-0">
              <div className="py-0.5 px-0.5  bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl lg:w-[400px] relative lg:left-20">
                <div className="bg-[#010f1c] py-16 px-0.5 rounded-3xl h-[200px]">
                  <div className="px-4 lg:px-12 mt-[-36px]">
                    <p className="lg:text-base text-center">
                      For more Information about our Academy join our community
                      on Discord
                    </p>
                  </div>
                  <div className="text-center mt-4">
                    <a
                      href="#"
                      className="py-2.5 px-3   bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl"
                    >
                      Join The Community
                    </a>
                  </div>
                  <div className="">
                    <img
                      src={discordLogo}
                      alt=""
                      className="w-24 rounded-bl-3xl lg:mt-[-20px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
