import React from "react";
import SideNav from "./SideNav";

const Dashboard = () => {
  return (
    <div className="flex ">
      <div className="">
        <SideNav />
      </div>
      <div className="">
        <h1 className="text-4xl">Welcome to Dashboard</h1>
      </div>
    </div>
  );
};

export default Dashboard;
