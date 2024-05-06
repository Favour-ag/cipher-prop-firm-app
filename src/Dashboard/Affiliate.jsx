import React from "react";
import SideNav from "./SideNav";

const Affiliate = () => {
  return (
    <div className="flex text-white">
      <div className="">
        <SideNav />
      </div>
      <div className="">
        <h1>Affiliate</h1>
        <div className="[#070D12] w-full h-full">
          <div className="border">
            <div>
              <h4>Total Earnings</h4>
              <p>$0.00</p>
            </div>
            <div>
              <h4>Total Purchased</h4>
              <p>$0.00</p>
            </div>
            <div>
              <h4>Total Paid Out</h4>
              <p>$0.00</p>
            </div>
          </div>
          <div className="flex">
            <p>USERS REFERRED</p>
            <p>AMOUNT PURCHASED</p>
            <p>DATE</p>
            <p>STATUS</p>
            <p>EARNINGS PER REFERRAL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Affiliate;
