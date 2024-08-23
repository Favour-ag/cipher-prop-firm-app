import {
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
} from "../constants";

const TradeHistory = () => {
  return (
    <div>
      <div className="">
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
  );
};

export default TradeHistory;
