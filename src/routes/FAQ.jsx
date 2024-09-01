import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import searchIcon from "../assets/searchIcon.svg";
import Accordion from "../components/Accordion";
import { accordionData2 } from "../constants";
import { accordionData3 } from "../constants";
import { accordionData4 } from "../constants";
import { accordionData5 } from "../constants";
import rightArrow from "../assets/rightArrow.svg";
import NewsLetter from "../components/NewsLetter";

const FAQ = () => {
  useEffect(() => {}, []);

  const [isActive, setIsActive] = useState({ id: "divOne" });
  const [searchValue, setSearchValue] = useState("");

  const hideShowDiv = (e) => {
    setIsActive({
      id: e.target.id,
    });
  };

  const clearSearch = () => {
    setSearchValue("");
  };

  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto  bg-[#010f1c] flex flex-col items-center lg:mt-4 lg:space-y-7"
      >
        <div className=" w-full flex flex-col items-center">
          <div className=" lg:w-[50%] flex flex-col items-center gap-4 mt-8">
            <p className="text-4xl lg:text-6xl text-center font-semibold">
              Frequently Asked{" "}
              <span className="bg-gradient-to-t from-red-600 to-blue-600 inline-block text-transparent bg-clip-text mr-2">
                Questions
              </span>
            </p>
            <div className="hidden w-full md:flex flex-col items-center relative">
              <div className="py-0.5 px-0.5 border bg-[#FFFFFF33] w-[80%] rounded-lg relative">
                <div className="flex w-full rounded-lg items-center justify-start">
                  <div className="w-[30.14px] h-[30.14px] flex justify-center items-center rounded-lg cursor-pointer absolute ml-2">
                    <img src={searchIcon} alt="search" />
                  </div>
                  <input
                    type="text"
                    className="placeholder:text-white block bg-[#FFFFFF33] w-[100%] rounded-md py-2 pl-12 pr-8 shadow-sm focus:outline-none sm:text-md text-white font-sans"
                    placeholder="Search keywords... (trade, account)"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                  {/* Render 'x' button inside the input if input is active and has content */}
                  {isActive && searchValue && (
                    <div
                      className="absolute top-0 right-0 h-full flex items-center pr-4 text-white cursor-pointer"
                      onClick={clearSearch}
                    >
                      <p className="text-xl">{"x"}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full md:min-h-screen justify-center mt-5 md:mt-0">
          <div className="lg:w-[40%] flex flex-col justify-center">
            <div className="px-4 md:px-32">
              <div className="w-full">
                <div className="space-y-4">
                  {/* div1 */}
                  <div
                    id="divOne"
                    className={
                      isActive.id === "divOne"
                        ? `bg-gradient-to-r from-red-500 to-blue-600 p-[2px] w-full h-full`
                        : ""
                    }
                  >
                    <div
                      id="divOne"
                      className={
                        isActive.id === "divOne"
                          ? `divOne cursor-pointer  flex justify-between p-5 bg-[#010f1c]`
                          : " border-2 border-white divOne cursor-pointer  flex justify-between p-5"
                      }
                      onClick={(e) => {
                        hideShowDiv(e);
                      }}
                    >
                      <p>Trading Rules</p>
                      <img src={rightArrow} alt="" className="w-[10px]" />
                    </div>
                  </div>
                  {/* div2 */}
                  <div
                    id="divTwo"
                    className={
                      isActive.id === "divTwo"
                        ? `bg-gradient-to-r from-red-500 to-blue-600 p-[2px] w-full h-full`
                        : " "
                    }
                  >
                    <div
                      id="divTwo"
                      className={
                        isActive.id === "divTwo"
                          ? `divTwo cursor-pointer  flex justify-between p-5 bg-[#010f1c]`
                          : " border-2 border-white divTwo cursor-pointer  flex justify-between p-5 "
                      }
                      onClick={(e) => {
                        hideShowDiv(e);
                      }}
                    >
                      <p>Trading Platform</p>
                      <img src={rightArrow} alt="" className="w-[10px]" />
                    </div>
                  </div>
                  {/* div3 */}
                  <div
                    id="divThree"
                    className={
                      isActive.id === "divThree"
                        ? `bg-gradient-to-r from-red-500 to-blue-600 p-[2px] w-full h-full`
                        : " "
                    }
                  >
                    <div
                      id="divThree"
                      className={
                        isActive.id === "divThree"
                          ? `divOne cursor-pointer  flex justify-between p-5 bg-[#010f1c]`
                          : " border-2 border-white divThree cursor-pointer  flex justify-between p-5 "
                      }
                      onClick={(e) => {
                        hideShowDiv(e);
                      }}
                    >
                      <p>Challenge Questions</p>
                      <img src={rightArrow} alt="" className="w-[10px]" />
                    </div>
                  </div>
                  {/* div4 */}
                  <div
                    id="divFour"
                    className={
                      isActive.id === "divFour"
                        ? `bg-gradient-to-r from-red-500 to-blue-600 p-[2px] w-full h-full`
                        : " "
                    }
                  >
                    <div
                      id="divFour"
                      className={
                        isActive.id === "divFour"
                          ? `divOne cursor-pointer  flex justify-between p-5 bg-[#010f1c]`
                          : " border-2 border-white divFour cursor-pointer  flex justify-between p-5 "
                      }
                      onClick={(e) => {
                        hideShowDiv(e);
                      }}
                    >
                      <p>Withdrawals</p>
                      <img src={rightArrow} alt="" className="w-[10px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 md:mt-0 lg:w-[60%] ">
            <div className="w-full  h-full flex justify-center items-start flex-col px-4 lg:px-3  lg:pr-24">
              {/* div1 */}
              <div className="w-full ">
                <div
                  className={
                    isActive.id === "divOne"
                      ? `divOne space-y-4 `
                      : "divOne hidden"
                  }
                >
                  {accordionData2.map(({ title, content }) => (
                    <Accordion key={title} title={title} content={content} />
                  ))}
                </div>
              </div>
              {/* div2 */}
              <div className="w-full">
                <div
                  className={
                    isActive.id === "divTwo"
                      ? `divTwo space-y-4`
                      : "divTwo hidden"
                  }
                >
                  {accordionData3.map(({ title, content }) => (
                    <Accordion key={title} title={title} content={content} />
                  ))}
                </div>
              </div>
              {/* div3 */}
              <div className="w-full">
                <div
                  className={
                    isActive.id === "divThree"
                      ? `divThree space-y-4`
                      : "divThree hidden"
                  }
                >
                  {accordionData4.map(({ title, content }) => (
                    <Accordion key={title} title={title} content={content} />
                  ))}
                </div>
              </div>
              {/* div4 */}
              <div className="w-full">
                <div
                  className={
                    isActive.id === "divFour"
                      ? `divFour space-y-4`
                      : "divFour hidden"
                  }
                >
                  {accordionData5.map(({ title, content }) => (
                    <Accordion key={title} title={title} content={content} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Newsletter */}
        <div className="mb-4">
          <NewsLetter />
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default FAQ;
