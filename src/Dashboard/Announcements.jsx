import React from "react";
import SideNav from "./SideNav";
import announcementBigo from "../assets/icons/dashboardIcons/announcementBigo.svg";
import AccountInfo from "../components/AccountInfo";

const Announcements = () => {
  return (
    <div className="flex bg-inherit w-full h-full">
      <SideNav />
      <div className="w-full h-screen p-3">
        <AccountInfo />
        <div className="flex flex-col w-full justify-center items-center ">
          <img src={announcementBigo} alt="" />
          <p>You currently have no announcement</p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
