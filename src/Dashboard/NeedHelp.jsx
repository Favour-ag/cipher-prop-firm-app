import React, { useEffect, useState } from "react";
import SideNav from "./SideNav";
import AccountInfo from "./AccountInfo";
import { motion } from "framer-motion";

const NeedHelp = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#0E1B2E] text-white">
      <SideNav isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {/* Menu button for mobile */}
      <button
        onClick={toggleSidebar}
        className="p-4 bg-[#0C2E4E] text-white lg:hidden fixed top-0 left-0 z-20"
      >
        ☰
      </button>
      {/* Main Content */}
      <div className="flex-1 p-6 lg:p-8 xl:p-4 2xl:p-16 lg:ml-0 [background:radial-gradient(100%_125%_at_50%_100%,#0072D8_0%,#000_70%)]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-screen-xl mx-auto">
            {/* Account Section */}
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-4 lg:space-y-0">
              <AccountInfo />

              <div className="mt-4 lg:mt-0 flex items-center lg:pb-4 space-x-3">
                <img src="" alt="" className="w-16 h-16 rounded-full" />
                <p className="mt-2 text-center lg:text-left">Sophomore</p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="w-full h-screen md:h-[750px] flex justify-center"
            >
              <div className="w-full flex flex-col pt-6   md:w-[70%]">
                <p className="text-4xl text-center mb-12">Contact Us</p>
                <div className="px-3 flex flex-col md:flex-row gap-3 md:gap-8">
                  <div className="w-full md:w-1/2">
                    <p>First Name *</p>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="bg-inherit border placeholder:text-slate-500 rounded-md p-2 md:py-4 w-full"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <p>Last Name *</p>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="bg-inherit border placeholder:text-slate-500 rounded-md p-2 w-full md:py-4"
                    />
                  </div>
                </div>
                <div className="flex px-3 flex-col  gap-3 md:gap-8 pt-3">
                  <div className="w-full">
                    <p>Email *</p>
                    <input
                      type="text"
                      placeholder="Email"
                      className="bg-inherit border placeholder:text-slate-500 rounded-md p-2 w-full md:py-4"
                    />
                  </div>
                  <div className="w-full">
                    <p>Subject *</p>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="bg-inherit border placeholder:text-slate-500 rounded-md p-2 w-full md:py-4"
                    />
                  </div>
                </div>
                <div className="pt-4 px-3 ">
                  <p>Message *</p>
                  <textarea
                    name="message"
                    rows="7"
                    placeholder="Your Message"
                    className="bg-inherit border rounded-md placeholder:text-slate-500 px-2 py-4 w-full h-full"
                  ></textarea>
                </div>
                <div className="mt-10  pl-3 ">
                  <a
                    href="#"
                    className="py-3 px-4  bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl"
                  >
                    Submit
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NeedHelp;
