import React from "react";
import SideNav from "./SideNav";
import AccountInfo from "../components/AccountInfo";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { accountStatus } from "../constants";
import { detailStatistics } from "../constants";
import { accountAnalysis } from "../constants";
import Chart from "../components/Chart";

const RulesandFaq = () => {
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
        <div className="flex justify-around">
          <AccountInfo />
          <div>
            <img src="" alt="" />
            <p>Sophomore</p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <div className="w-full h-screen flex justify-center items-center space-x-8">
            <div className="w-[60%] h-full space-y-3">
              <div className="w-full h-[50%] ">
                <Chart />
              </div>
              <div className="w-full h-[50%] bg-red-400">1</div>
            </div>
            <div className="w-[40%] h-full bg-inherit">
              <div className="border rounded-xl w-full h-full px-6 py-3 space-y-3">
                {/* ACCOUNT STATUS */}
                <div>
                  <h1 className="font-semibold">Account Status</h1>
                  <div className="flex justify-between">
                    <p>Status</p>
                    <p className="font-semibold bg-green-200 px-1 rounded-md text-green-600">
                      +Active
                    </p>
                  </div>
                  <div>
                    {accountStatus.map((status, index) => (
                      <div key={index} className="flex justify-between mt-1">
                        <p>{status.title}</p>
                        <p>{status.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* DETAIL STATISTICS */}
                <div>
                  <h1 className="font-semibold">Detail Statistics</h1>
                  <div>
                    {detailStatistics.map((detail, index) => (
                      <div key={index} className="flex justify-between mt-1">
                        <div className="flex gap-2 ">
                          <img src={detail.icon} alt="" />
                          <p>{detail.title}</p>
                        </div>
                        <p>{detail.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* ACCOUNT ANALYSIS */}
                <div>
                  <h1 className="font-semibold">Account Analysis</h1>
                  <div>
                    {accountAnalysis.map((analysis, index) => (
                      <div key={index} className="flex justify-between mt-1">
                        <p>{analysis.title}</p>
                        <p>{analysis.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RulesandFaq;
