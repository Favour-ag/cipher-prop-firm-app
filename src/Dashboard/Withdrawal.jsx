import React from "react";
import SideNav from "./SideNav";
import AccountInfo from "../components/AccountInfo";

const Withdrawal = () => {
  return (
    <div className="flex bg-inherit w-full h-full">
      <SideNav />
      <div className="w-full h-screen p-3">
        <AccountInfo />
        <div className="flex flex-col w-full justify-center items-center h-full">
          <p className="text-4xl">Nothing here...</p>
        </div>
      </div>
    </div>
  );
};

export default Withdrawal;
