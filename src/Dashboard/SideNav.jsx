import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  dashboardSideNavListTop,
  dashboardSideNavListBottom,
} from "../constants"; // Consolidated imports
import Logo from "../assets/logonew.webp";

function SideNav({ isSidebarOpen, toggleSidebar }) {
  const location = useLocation();

  return (
    <div
      className={`bg-inherit fixed left-0 top-0 min-h-screen w-56 px-8 py-3 border-r transform transition-transform lg:static ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 z-10`}
    >
      <div className="w-full h-full flex flex-col">
        <div className="mb-8 flex justify-between items-center lg:hidden">
          <h1 className="text-2xl font-bold">CIPHER</h1>
          <button
            onClick={toggleSidebar}
            className="text-white focus:outline-none"
          >
            ✕
          </button>
        </div>
        <Link to="/">
          <img src={Logo} alt="logo" className="w-12 pb-3" />
        </Link>
        <div className="flex-1 flex flex-col justify-between">
          <div>
            {dashboardSideNavListTop.map((dashboard, index) => (
              <Link
                className={`flex items-center gap-3 py-2 transition-colors duration-200 ${
                  location.pathname === dashboard.url
                    ? "text-pink-500"
                    : "text-gray-400"
                }`}
                key={index}
                to={dashboard.url}
              >
                <img
                  src={dashboard.icon}
                  alt={dashboard.title}
                  className="w-5 h-5"
                />
                <span>{dashboard.title}</span>
              </Link>
            ))}
          </div>
          <div>
            {dashboardSideNavListBottom.map((dashboard, index) => (
              <Link
                className={`flex items-center gap-3 py-2 transition-colors duration-200 ${
                  location.pathname === dashboard.url
                    ? "text-pink-500"
                    : "text-gray-400"
                }`}
                key={index}
                to={dashboard.url}
              >
                <img
                  src={dashboard.icon}
                  alt={dashboard.title}
                  className="w-5 h-5"
                />
                <span>{dashboard.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
