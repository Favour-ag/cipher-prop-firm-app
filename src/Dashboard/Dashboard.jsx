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
  detailStatistics,
  summaryForTheDay,
  accountAnalysis,
  Symbols,
  Type,
  OpenDate,
  Open,
  ClosedDate,
  Close,
  TP,
  SL,
  LotsTradingHistory,
  Commission,
  Profit,
  dates,
  trades,
  lots,
  results,
} from "../constants";
import Chart from "../components/Chart";
import Calender from "../components/Calender";
const Dashboard = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div className="flex bg-inherit w-full h-full [background:radial-gradient(100%_125%_at_50%_100%,#0072D8_0%,#000_70%)] ">
      <div className="fixed left-0 top-0 h-full">
        <SideNav />
      </div>
      <div className="ml-52 w-full h-screen p-3 px-8 pt-4 space-y-12 overflow-y-auto">
        <div className="flex flex-col lg:flex-row justify-around items-center lg:items-start space-y-4 lg:space-y-0">
          <AccountInfo />
          <div className="mt-4 lg:mt-0 flex flex-col items-center lg:items-start">
            <img src="" alt="" className="w-16 h-16 rounded-full" />
            <p className="mt-2 text-center lg:text-left">Sophomore</p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <div className="w-full h-full flex justify-center items-center space-x-5">
            <div className="w-[55%] h-full space-y-3">
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
            <div className="w-[45%] h-100 bg-inherit ">
              <div className="rounded-xl w-full h-full space-y-3">
                {/* ACCOUNT STATUS */}
                <div className="border p-4 rounded-xl bg-[#01192F]">
                  <h1 className="font-semibold text-lg text-center">
                    Account Status
                  </h1>
                  <div className="flex justify-between">
                    <p>Status</p>
                    <p className="font-semibold bg-[#1D9C0833] px-1 rounded-md text-[#1D9C08]">
                      +Active
                    </p>
                  </div>
                  <div>
                    {accountStatus.map((status, index) => (
                      <div
                        key={index}
                        className="flex justify-between mt-1.5  p-1"
                        style={{ backgroundColor: status.color }}
                      >
                        <div className="flex gap-2 ">
                          <p>{status.title}</p>
                        </div>
                        <p>{status.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* DETAIL STATISTICS */}
                <div className="border p-4 rounded-xl  bg-[#01192F]">
                  <h1 className="font-semibold text-lg text-center">
                    Detail Statistics
                  </h1>
                  <div>
                    {detailStatistics.map((detail, index) => (
                      <div
                        key={index}
                        className="flex justify-between mt-1.5  p-1"
                        style={{ backgroundColor: detail.color }}
                      >
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
                <div className="border p-4 rounded-xl  bg-[#01192F]">
                  <h1 className="font-semibold text-lg text-center">
                    Account Analysis
                  </h1>
                  <div>
                    {accountAnalysis.map((analysis, index) => (
                      <div
                        key={index}
                        className="flex justify-between mt-1.5  p-1"
                        style={{
                          color: analysis.color,
                          backgroundColor: analysis.backgroundColor,
                        }}
                      >
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
        {/* Daily Summary */}
        <div className="w-full flex ">
          <div className="pl-5 w-[55%] ">
            <h1 className="text-4xl font-semibold mb-3">Daily Summary</h1>
            <div className="flex space-x-16">
              {/* dates */}
              <div>
                <h3 className="font-semibold text-xl">Dates</h3>
                <div>
                  {dates.map((date, index) => (
                    <div key={index} className="flex items-center text-xl">
                      <p className="text-neutral-300 hover:text-white  md:mt-5">
                        {date.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              {/* trades */}
              <div>
                <h3 className="font-semibold text-xl">Trades</h3>
                <div>
                  {trades.map((trade, index) => (
                    <div key={index} className="flex items-center text-xl">
                      <p className="text-neutral-300 hover:text-white  md:mt-5">
                        {trade.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              {/* lots */}
              <div>
                <h3 className="font-semibold text-xl">Lots</h3>
                <div>
                  {lots.map((lot, index) => (
                    <div key={index} className="flex items-center text-xl">
                      <p className="text-neutral-300 hover:text-white  md:mt-5">
                        {lot.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              {/* results */}
              <div>
                <h3 className="font-semibold text-xl">Results</h3>
                <div>
                  {results.map((result, index) => (
                    <div key={index} className="flex items-center text-xl">
                      <p
                        className="text-neutral-300 hover:text-white md:mt-5 "
                        style={{ color: result.color }}
                      >
                        {result.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Win Ratio and Profit Factor divs */}
          <div className="w-[45%] h-full pl-2  py-4 space-y-3">
            <div className="bg-[#01192F] border w-full rounded-lg  h-[80px] p-2">
              <div>
                {profitTargetDashboard.map((profit, index) => (
                  <div key={index} className="flex flex-col">
                    <div className="flex justify-between">
                      <p>Win Ratio</p>
                      <img
                        src={profit.icon2}
                        alt="profitTarget"
                        className="w-4 h-4 "
                      />
                    </div>
                    <div>
                      <p>0.00%</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#01192F] border w-full rounded-lg  h-[80px] p-2">
              <div>
                {profitTargetDashboard.map((profit, index) => (
                  <div key={index} className="flex flex-col">
                    <div className="flex justify-between">
                      <p>Profit Factor</p>
                      <img
                        src={profit.icon2}
                        alt="profitTarget"
                        className="w-4 h-4 "
                      />
                    </div>
                    <div>
                      <p>0.0</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Calendar div */}
        <div className="w-full flex">
          <div className="pl-5 w-[55%] ">
            <Calender />
          </div>
          {/* Account Analysis*/}
          <div className="w-[45%] h-full pl-2  space-y-3">
            <div className="bg-[#01192F] border w-full rounded-lg  h-[350px] p-2">
              <div className="p-3">
                <h1 className="font-semibold text-center text-lg">
                  Account Analysis
                </h1>
                <div>
                  {summaryForTheDay.map((summary, index) => (
                    <div
                      key={index}
                      className="flex justify-between mt-3.5  p-1"
                      style={{ backgroundColor: summary.color }}
                    >
                      <p>{summary.title}</p>
                      <p>{summary.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pl-5">
          {/* Trades History*/}
          <h1 className="text-4xl font-semibold mb-4">Trade History</h1>
          <div className="flex space-x-10  overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide cursor-pointer mb-5">
            {/* Symbol */}
            <div>
              <h3 className="font-semibold text-xl">Symbol</h3>
              <div>
                {Symbols.map((symbol, index) => (
                  <div key={index} className="flex items-center text-xl">
                    <p className="text-neutral-300 hover:text-white  md:mt-5">
                      {symbol.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/* Type */}
            <div>
              <h3 className="font-semibold text-xl">Type</h3>
              <div>
                {Type.map((type, index) => (
                  <div key={index} className="flex items-center text-xl">
                    <p
                      className="text-neutral-300 hover:text-white  md:mt-5"
                      style={{ color: type.color }}
                    >
                      {type.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/* OpenDate */}
            <div>
              <h3 className="font-semibold text-xl">Open Date</h3>
              <div>
                {OpenDate.map((opendate, index) => (
                  <div key={index} className="flex items-center text-xl">
                    <p className="text-neutral-300 hover:text-white  md:mt-5">
                      {opendate.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/* Open */}
            <div>
              <h3 className="font-semibold text-xl">Open</h3>
              <div>
                {Open.map((open, index) => (
                  <div key={index} className="flex items-center text-xl">
                    <p className="text-neutral-300 hover:text-white  md:mt-5">
                      {open.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/* Closed Date */}
            <div>
              <h3 className="font-semibold text-xl">Closed Date</h3>
              <div>
                {ClosedDate.map((closedate, index) => (
                  <div key={index} className="flex items-center text-xl">
                    <p className="text-neutral-300 hover:text-white  md:mt-5">
                      {closedate.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/* Close */}
            <div>
              <h3 className="font-semibold text-xl">Close</h3>
              <div>
                {Close.map((close, index) => (
                  <div key={index} className="flex items-center text-xl">
                    <p className="text-neutral-300 hover:text-white  md:mt-5">
                      {close.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/* TP*/}
            <div>
              <h3 className="font-semibold text-xl">TP</h3>
              <div>
                {TP.map((tp, index) => (
                  <div key={index} className="flex items-center text-xl">
                    <p className="text-neutral-300 hover:text-white  md:mt-5">
                      {tp.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/* SL */}
            <div>
              <h3 className="font-semibold text-xl">SL</h3>
              <div>
                {SL.map((sl, index) => (
                  <div key={index} className="flex items-center text-xl">
                    <p className="text-neutral-300 hover:text-white  md:mt-5">
                      {sl.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/* Lots */}
            <div>
              <h3 className="font-semibold text-xl">Lots</h3>
              <div>
                {LotsTradingHistory.map((lotstradinghistory, index) => (
                  <div key={index} className="flex items-center text-xl">
                    <p className="text-neutral-300 hover:text-white  md:mt-5">
                      {lotstradinghistory.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/* Commission */}
            <div>
              <h3 className="font-semibold text-xl">Commission</h3>
              <div>
                {Commission.map((commission, index) => (
                  <div key={index} className="flex items-center text-xl">
                    <p className="text-neutral-300 hover:text-white  md:mt-5">
                      {commission.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/* Profit */}
            <div>
              <h3 className="font-semibold text-xl">Profit</h3>
              <div>
                {Profit.map((profit, index) => (
                  <div key={index} className="flex items-center text-xl">
                    <p
                      className="text-neutral-300 hover:text-white  md:mt-5"
                      style={{ color: profit.color }}
                    >
                      {profit.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
