import React from "react";
import SideNav from "./SideNav";
import announcementBigo from "../assets/icons/dashboardIcons/announcementBigo.svg";

const Announcements = () => {
  return (
    <div className="text-white w-full min-h-screen flex">
      <SideNav />
      <div>
        <img src={announcementBigo} alt="" />
        <p>You currently have no announcement</p>
      </div>
    </div>
  );
};

export default Announcements;
