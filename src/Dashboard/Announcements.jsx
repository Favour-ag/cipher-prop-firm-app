import React from "react";
import SideNav from "./SideNav";
import announcementBigo from "../assets/icons/dashboardIcons/announcementBigo.svg";
import AccountInfo from "../components/AccountInfo";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Announcements = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div className="flex bg-inherit w-full h-full [background:radial-gradient(100%_125%_at_50%_100%,#0072D8_0%,#000_70%)]">
      <div className="fixed left-0 top-0 h-full">
        <SideNav />
      </div>
      <div className="ml-56 w-full h-screen p-3">
        <AccountInfo />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col w-full justify-center items-center "
        >
          <img src={announcementBigo} alt="" />
          <p>You currently have no announcement</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Announcements;
