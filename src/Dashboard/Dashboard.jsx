import React from "react";
import SideNav from "./SideNav";
import AccountInfo from "../components/AccountInfo";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  accountStatus,
  maximumLossDashboard,
  profitTargetDashboard,
  dailyLossLimitDashboard,
  netProfitLossDashboard,
  minTradingDaysDashboard,
} from "../constants";
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
      <div className="ml-52 w-full h-screen p-3 px-8 pt-4 space-y-12 overflow-y-auto">
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
          <div className="w-full h-screen flex justify-center items-center space-x-5">
            <div className="w-[65%] h-full space-y-3">
              <div className="w-full h-[50%] ">
                <Chart />
              </div>
              <div className="w-full h-[50%]">
                <div class="grid grid-cols-3 gap-4">
                  <div className="bg-[#01192F] border rounded-lg h-[150px] p-2">
                    <div>
                      {profitTargetDashboard.map((profit, index) => (
                        <div key={index} className="flex flex-col">
                          <div className="flex justify-between">
                            <div className="flex space-x-1">
                              <img
                                src={profit.icon}
                                alt="profitTarget"
                                className="w-4 h-4 "
                              />
                              <p className="text-sm">{profit.text}</p>
                            </div>
                            <div>
                              <img
                                src={profit.icon2}
                                alt="profitTarget"
                                className="w-4 h-4 "
                              />
                            </div>
                          </div>
                          <p className="text-xl ">{`${profit.amt} left`}</p>
                          <div>
                            <div class="font-medium flex justify-end text-xs">
                              80%
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-1.5  dark:bg-gray-700">
                              <div class="bg-[#E00E5D] h-1.5 rounded-full w-[80%]"></div>
                            </div>
                          </div>
                          <p className="text-xs">{`${profit.profitTargetDashboard}`}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-[#01192F] border rounded-lg h-[150px] p-2">
                    <div>
                      {maximumLossDashboard.map((maxLoss, index) => (
                        <div key={index} className="flex flex-col">
                          <div className="flex justify-between">
                            <div className="flex space-x-1">
                              <img
                                src={maxLoss.icon}
                                alt="profitTarget"
                                className="w-4 h-4 "
                              />
                              <p className="text-sm">{maxLoss.text}</p>
                            </div>
                            <div>
                              <img
                                src={maxLoss.icon2}
                                alt="maxLoss"
                                className="w-4 h-4 "
                              />
                            </div>
                          </div>
                          <p className="text-xl ">{`${maxLoss.amt} left`}</p>
                          <div>
                            <div class="font-medium flex justify-end text-xs">
                              100%
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-1.5  dark:bg-gray-700">
                              <div class="bg-[#0072D8] h-1.5 rounded-full w-[100%]"></div>
                            </div>
                          </div>
                          <p className="text-xs">{`Maximum ${maxLoss.maximumLossDashboard} loss`}</p>
                          <p className="text-xs">{`Threshold at: ${maxLoss.maximumLossDashboard}`}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-[#01192F] border rounded-lg h-[150px] p-2">
                    <div>
                      {dailyLossLimitDashboard.map((dailyLossLimit, index) => (
                        <div key={index} className="flex flex-col">
                          <div className="flex justify-between">
                            <div className="flex space-x-1">
                              <img
                                src={dailyLossLimit.icon}
                                alt="profitTarget"
                                className="w-4 h-4 "
                              />
                              <p className="text-sm">{dailyLossLimit.text}</p>
                            </div>
                            <div>
                              <img
                                src={dailyLossLimit.icon2}
                                alt="maxLoss"
                                className="w-4 h-4 "
                              />
                            </div>
                          </div>
                          <p className="text-xl ">{`${dailyLossLimit.amt} left`}</p>
                          <div>
                            <div class="font-medium flex justify-end text-xs">
                              72.43%
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-1.5  dark:bg-gray-700">
                              <div class="bg-[#E00E5D] h-1.5 rounded-full w-[72%]"></div>
                            </div>
                          </div>
                          <p className="text-xs">{`Maximum ${dailyLossLimit.dailyLossLimitDashboard} loss`}</p>
                          <p className="text-xs">{`Today's starting balance/equity ${dailyLossLimit.todayStartingBalance} `}</p>
                          <p className="text-xs">{`Threshold at: ${dailyLossLimit.dailyLossLimitDashboard}`}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-[#01192F] border rounded-lg h-[150px] p-2">
                    <div>
                      {netProfitLossDashboard.map((netProfitLoss, index) => (
                        <div key={index} className="flex flex-col">
                          <div className="flex justify-between">
                            <div className="flex space-x-1">
                              <img
                                src={netProfitLoss.icon}
                                alt="profitTarget"
                                className="w-4 h-4 "
                              />
                              <p className="text-sm">{netProfitLoss.text}</p>
                            </div>
                            <div>
                              <img
                                src={netProfitLoss.icon2}
                                alt="profitTarget"
                                className="w-4 h-4 "
                              />
                            </div>
                          </div>
                          <p className="text-xl ">{`${netProfitLoss.amt} left`}</p>
                          <div>
                            <div class="font-medium flex justify-end text-xs">
                              80%
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-1.5  dark:bg-gray-700">
                              <div class="bg-[#E00E5D] h-1.5 rounded-full w-[80%]"></div>
                            </div>
                          </div>
                          <p className="text-xs">{`${netProfitLoss.netProfitLossDashboard}`}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-[#01192F] border rounded-lg h-[150px] p-2">
                    <div>
                      {dailyLossLimitDashboard.map((dailyLossLimit, index) => (
                        <div key={index} className="flex flex-col">
                          <div className="flex justify-between">
                            <div className="flex space-x-1">
                              <img
                                src={dailyLossLimit.icon}
                                alt="profitTarget"
                                className="w-4 h-4 "
                              />
                              <p className="text-sm">{dailyLossLimit.text}</p>
                            </div>
                            <div>
                              <img
                                src={dailyLossLimit.icon2}
                                alt="maxLoss"
                                className="w-4 h-4 "
                              />
                            </div>
                          </div>
                          <p className="text-xl ">{`${dailyLossLimit.amt} left`}</p>
                          <div>
                            <div class="font-medium flex justify-end text-xs">
                              72.43%
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-1.5  dark:bg-gray-700">
                              <div class="bg-[#E00E5D] h-1.5 rounded-full w-[72%]"></div>
                            </div>
                          </div>
                          <p className="text-xs">{`Maximum ${dailyLossLimit.dailyLossLimitDashboard} loss`}</p>
                          <p className="text-xs">{`Today's starting balance/equity ${dailyLossLimit.todayStartingBalance} `}</p>
                          <p className="text-xs">{`Threshold at: ${dailyLossLimit.dailyLossLimitDashboard}`}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-[#01192F] border rounded-lg h-[150px] p-2">
                    <div>
                      {minTradingDaysDashboard.map((minTradingDay, index) => (
                        <div key={index} className="flex flex-col">
                          <div className="flex justify-between">
                            <div className="flex space-x-1">
                              <img
                                src={minTradingDay.icon}
                                alt="profitTarget"
                                className="w-4 h-4 "
                              />
                              <p className="text-sm">{minTradingDay.text}</p>
                            </div>
                            <div>
                              <img
                                src={minTradingDay.icon2}
                                alt="maxLoss"
                                className="w-4 h-4 "
                              />
                            </div>
                          </div>
                          <p className="text-xl ">{`${minTradingDay.amt} left`}</p>
                          <div>
                            <div class="font-medium flex justify-end text-xs">
                              100%
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-1.5  dark:bg-gray-700">
                              <div class="bg-[#0072D8] h-1.5 rounded-full w-[100%]"></div>
                            </div>
                          </div>
                          <p className="text-xs">{`Maximum ${minTradingDay.minTradingDaysDashboard} loss`}</p>
                          <p className="text-xs">{`Threshold at: ${minTradingDay.minTradingDaysDashboard}`}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[35%] h-full bg-inherit">
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
        <div>
          <h1 className="text-4xl font-semibold">Trade History</h1>
        </div>
      </div>
    </div>
  );
};

export default RulesandFaq;
