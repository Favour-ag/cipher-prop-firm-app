import React, { useState } from "react";
import rightArrow from "../assets/rightArrow.svg";
import { dashboardSideNavListTop } from "../constants";
import { dashboardSideNavListBottom } from "../constants";
import Logo from "../assets/logo.svg";

function SideNav() {
  const [open, setOpen] = useState(true);
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (url) => {
    setActiveLink(url);
  };

  return (
    <div
      className={`bg-inherit w-100 fixed left-0 top-0 h-full ${
        open ? "w-56 px-8 py-3" : "w-20 py-3 px-5"
      } duration-300 relative border-r`}
    >
      <div
        className={`rounded-full absolute -right-3 top-9 border border-white cursor-pointer w-8 h-8  flex justify-center items-center ${
          open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      >
        <img src={rightArrow} alt="" className="w-4 h-4 text-black" />
      </div>

      <div className="w-full h-full flex flex-col ">
        <a href="/">
          <img
            src={Logo}
            alt="logo"
            className="lg:w-24 pb-3 relative  lg:right-3"
          />
        </a>
        <div className="w-full h-full flex flex-col justify-between">
          <div>
            {dashboardSideNavListTop.map((dashboard, index) => (
              <a
                className={`flex gap-3 py-2 ${
                  activeLink === dashboard.url ? "text-blue-500" : ""
                }`}
                key={index}
                href={dashboard.url}
                onClick={() => handleLinkClick(dashboard.url)}
              >
                <img src={dashboard.icon} alt="SideNav" />
                <span className={`${!open && "hidden"}`}>
                  {dashboard.title}
                </span>
              </a>
            ))}
          </div>
          <div>
            {dashboardSideNavListBottom.map((dashboard) => (
              <a
                className={`flex gap-3 py-2 ${
                  activeLink === dashboard.url ? "text-blue-500" : ""
                }`}
                key={dashboard.title}
                href={dashboard.url}
                onClick={() => handleLinkClick(dashboard.url)}
              >
                <img src={dashboard.icon} alt="SideNav" />
                <span className={`${!open && "hidden"}`}>
                  {dashboard.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
