import { rules, phase1, phase2, phase3 } from "../constants";
import rightArrow from "../assets/rightArrow.svg";

const CipherChallenge = () => {
  return (
    <div
      id="cipherchallenge"
      className="w-full min-h-screen flex flex-col items-center mt-6 lg:mt-20 z-10 "
    >
      <h1 className="text-4xl lg:text-5xl text-center tracking-wide z-10">
        Choose Your Cipher Challenge
      </h1>
      <div className="flex space-x-6 z-10 mt-3 text-2xl ">
        <div className="flex justify-center items-center">
          <p>1 Step</p>
        </div>
        <a
          href="#"
          className="py-2 px-6 bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl"
        >
          2 Step
        </a>
      </div>
      <div className="z-10 flex mt-7 space-x-2 lg:space-x-6 text-md lg:text-xl">
        <label htmlFor="mt4" className="space-x-3">
          <input type="radio" name="mt4" id="" checked />
          MT-4
        </label>
        <label htmlFor="mt5">
          <input type="radio" name="mt5" id="" />
          MT-5
        </label>
        <label htmlFor="dxtrade">
          <input type="radio" name="dxtrade" id="" />
          DX TRADE
        </label>
        <label htmlFor="tradelocker">
          <input type="radio" name="mt5" id="" />
          TRADE LOCKER
        </label>
      </div>

      <div className="flex z-10 border rounded-lg w-[370px] lg:w-[450px] p-2 mt-4 lg:mt-7 bg-[#FFFFFF33] space-x-8 lg:space-x-12 items-center">
        <a
          href="#"
          className="py-1 px-3 lg:px-6 bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl"
        >
          $5K
        </a>
        <p>$10K</p>
        <p>$25K</p>
        <p>$50K</p>
        <p>$100K</p>
      </div>
      {/* background blur */}
      <div className="absolute w-[600px] h-[400px] bg-[#023564] rounded-full translate-x-[-50%] translate-y-[-50%] blur-[100px] mt-[300px] right-0"></div>
      {/* Table */}
      <div className="w-full flex overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide lg:grid lg:grid-cols-4 gap-10 z-10  place-items-center px-8	lg:px-24 mb-5 lg:mb-0 ease-in duration-900">
        <div>
          <h3 className="text-xl lg:text-md font-semibold mt-9 lg:mt-16">
            Rules
          </h3>
          <div className="lg:space-y-2">
            {rules.map((rule, index) => (
              <div key={index} className="flex items-center gap-2.5">
                <img
                  src={rule.icon}
                  alt="profitTarget"
                  className="w-7 h-7 mt-5"
                />
                <p className="text-neutral-300 hover:text-white text-lg lg:text-xl mt-5">
                  {rule.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl lg:text-md font-semibold mt-4 lg: text-slate-400">
            Evaluation
          </h3>
          <h3 className="text-lg lg:text-md font-semibold lg:mb-4">Phase 1</h3>
          <div className="mt-[-8px] lg:mt-0">
            {phase1.map((phase1, index) => (
              <div key={index} className="flex items-center">
                <p className="text-neutral-300 hover:text-white text-lg  lg:text-xl mt-5">
                  {phase1.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl lg:text-md font-semibold mt-4 lg: text-slate-400">
            Verification
          </h3>
          <h3 className="text-lg lg:text-md font-semibold lg:mb-4">Phase 2</h3>
          <div className="mt-[-8px] lg:mt-0">
            {phase2.map((phase2, index) => (
              <div key={index} className="flex items-center">
                <p className="text-neutral-300 hover:text-white text-lg  lg:text-xl mt-5">
                  {phase2.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl lg:text-md font-semibold mt-4 lg: text-slate-400">
            Get Funded
          </h3>
          <h3 className="text-lg lg:text-md font-semibold lg:mb-4">
            Cipher Trader
          </h3>
          <div className="mt-[-8px] lg:mt-0">
            {phase3.map((phase3, index) => (
              <div key={index} className="flex items-center">
                <p className="text-neutral-300 hover:text-white text-lg  lg:text-xl mt-5">
                  {phase3.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-xl ">
        <h3>Fee</h3>
        <p className="font-semibold text-2xl">$29</p>
        <a
          href="#"
          className=" flex gap-2 py-2 px-4 bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl mt-3"
        >
          Start Challenge
          <img src={rightArrow} alt="rightArrow" className="w-2 mt-0.5" />
        </a>
      </div>
    </div>
  );
};

export default CipherChallenge;
