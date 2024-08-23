import { profitTargetDashboard } from "../constants";

const WinRatio = () => {
  return (
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
  );
};

export default WinRatio;
