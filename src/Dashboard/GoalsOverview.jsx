import {
  maximumLossDashboard,
  profitTargetDashboard,
  dailyLossLimitDashboard,
  netProfitLossDashboard,
  minTradingDaysDashboard,
} from "../constants";

const GoalsOverview = () => {
  return (
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
                <div class="font-medium flex justify-end text-xs">80%</div>
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
                  <img src={maxLoss.icon2} alt="maxLoss" className="w-4 h-4 " />
                </div>
              </div>
              <p className="text-xl ">{`${maxLoss.amt} left`}</p>
              <div>
                <div class="font-medium flex justify-end text-xs">100%</div>
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
                <div class="font-medium flex justify-end text-xs">72.43%</div>
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
                <div class="font-medium flex justify-end text-xs">80%</div>
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
                <div class="font-medium flex justify-end text-xs">100%</div>
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
  );
};

export default GoalsOverview;
