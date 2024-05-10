import React, { useEffect, useState } from "react";
import SideNav from "./SideNav";
import AccountInfo from "../components/AccountInfo";
import { motion } from "framer-motion";

const settings = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div className="flex bg-inherit w-full h-full [background:radial-gradient(100%_125%_at_50%_100%,#0072D8_0%,#000_70%)]">
      <div className="fixed left-0 top-0 h-full">
        <SideNav />
      </div>
      <div className="ml-56 w-full h-screen p-3 px-8 pt-4 space-y-12 overflow-y-auto">
        {/* Set overflow-y-auto to enable scrolling for the content */}
        <AccountInfo />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="w-full flex flex-col justify-center items-center h-full"
        >
          <p className="text-4xl">Settings...</p>
        </motion.div>
      </div>
    </div>
  );
};

export default settings;
