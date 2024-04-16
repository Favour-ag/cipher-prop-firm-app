import { rules, phase1, phase2, phase3 } from "../constants";
import rightArrow from "../assets/rightArrow.svg";
import { Link } from "react-router-dom";

const CipherChallenge = () => {
  return (
    <div
      id="cipherchallenge"
      className="w-full min-h-screen flex flex-col items-center mt-6 md:mt-20 z-10 "
    >
      <h1 className="text-4xl md:text-5xl text-center tracking-wide z-10">
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
      <div className="z-10 flex mt-7 space-x-2 md:space-x-6 text-md md:text-xl">
        <label htmlFor="mt4" className="space-x-3">
          <input type="radio" name="mt4" id="" checked className="mr-1.5" />
          MT-4
        </label>
        <label htmlFor="mt5">
          <input type="radio" name="mt5" id="" className="mr-1.5" />
          MT-5
        </label>
        <label htmlFor="dxtrade">
          <input type="radio" name="dxtrade" id="" className="mr-1.5" />
          DX TRADE
        </label>
        <label htmlFor="tradelocker ">
          <input type="radio" name="mt5" id="" className="mr-1.5" />
          TRADE LOCKER
        </label>
      </div>

      <div className="flex z-10 border rounded-md w-[370px] md:w-[500px] p-2 mt-4 md:mt-7 bg-[#FFFFFF33] space-x-8 md:space-x-14 items-center">
        <a
          href="#"
          className="py-1 px-3 md:px-6 bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl"
        >
          $5K
        </a>
        <p>$10K</p>
        <p>$25K</p>
        <p>$50K</p>
        <p>$100K</p>
      </div>
      {/* background blur */}
      <div className="absolute w-[600px] h-[400px] bg-[#023564] rounded-full translate-x-[-50%] translate-y-[-50%] blur-[100px] mt-[500px] right-0"></div>
      {/* Table */}
      <div className="w-full flex overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide md:grid md:grid-cols-4 gap-10 z-10  place-items-center px-8	md:px-24 mb-5 md:mb-0 ease-in duration-900">
        <div>
          <h3 className="text-xl md:text-md font-semibold mt-9 md:mt-16">
            Rules
          </h3>
          <div className="md:space-y-2">
            {rules.map((rule, index) => (
              <div key={index} className="flex items-center gap-2.5">
                <img
                  src={rule.icon}
                  alt="profitTarget"
                  className="w-7 h-7 mt-5"
                />
                <p className="text-neutral-300 hover:text-white text-md md:text-xl mt-5">
                  {rule.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl md:text-md font-semibold mt-4 md: text-slate-400">
            Evaluation
          </h3>
          <h3 className="text-md md:text-md font-semibold md:mb-4">Phase 1</h3>
          <div>
            {phase1.map((phase1, index) => (
              <div key={index} className="flex items-center">
                <p className="text-neutral-300 hover:text-white text-md  md:text-xl mt-7">
                  {phase1.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl md:text-md font-semibold mt-4 md: text-slate-400">
            Verification
          </h3>
          <h3 className="text-md md:text-md font-semibold md:mb-4">Phase 2</h3>
          <div className="mt-[-8px] md:mt-0">
            {phase2.map((phase2, index) => (
              <div key={index} className="flex items-center">
                <p className="text-neutral-300 hover:text-white text-md  md:text-xl mt-7">
                  {phase2.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl md:text-md font-semibold mt-4 md: text-slate-400">
            Get Funded
          </h3>
          <h3 className="text-md md:text-md font-semibold md:mb-4">
            Cipher Trader
          </h3>
          <div className="mt-[-8px] md:mt-0">
            {phase3.map((phase3, index) => (
              <div key={index} className="flex items-center">
                <p className="text-neutral-300 hover:text-white text-md  md:text-xl mt-7">
                  {phase3.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-xl space-y-1">
        <h3>Fee</h3>
        <p className="font-semibold text-4xl">$29</p>
        <p className="py-3 px-4   bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl flex space-x-2">
          <Link to="/payment"> Start Challenge </Link>
          <img src={rightArrow} alt="rightArrow" className="w-2 mt-0.5" />
        </p>
      </div>
    </div>
  );
};

export default CipherChallenge;
