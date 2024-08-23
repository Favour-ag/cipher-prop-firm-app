import {
  profitTargetDashboard,
  trades,
  lots,
  results,
  dates,
} from "../constants";

const DailySummary = () => {
  return (
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
    </div>
  );
};

export default DailySummary;
