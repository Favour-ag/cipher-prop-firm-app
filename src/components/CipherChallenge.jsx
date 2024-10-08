import { rules, phase1, phase2, phase3, phase4 } from "../constants";
import rightArrowPointed from "../assets/rightArrowPointed.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const CipherChallenge = () => {
  const [isActive, setIsActive] = useState({
    id: "stepTwo",
  });

  const hideShowDiv = (e) => {
    setIsActive({
      id: e.target.id,
    });
  };

  const [priceButton, setPriceButton] = useState({
    id: "priceBtnOne",
  });

  const hideShowPriceButton = (e) => {
    setPriceButton({
      id: e.target.id,
    });
  };

  const [selectedOption, setSelectedOption] = useState("mt4");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [feeButton, setFeeButton] = useState({
    id: "fee1",
  });

  return (
    <div
      id="cipherchallenge"
      className="container mx-auto flex flex-col items-center mt-6 md:mt-20 z-10 lg:mb-8 "
    >
      <h1 className="text-xl md:text-5xl text-center tracking-wide z-10">
        Choose Your Cipher Challenge
      </h1>
      <div className="flex space-x-6 z-10 mt-3 text-2xl ">
        <div className="flex justify-center items-center">
          <button>
            <a
              id="stepOne"
              className={
                isActive.id === "stepOne"
                  ? `stepOne cursor-pointer py-2 px-6 bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl`
                  : "cursor-pointer"
              }
              onClick={(e) => {
                hideShowDiv(e);
              }}
            >
              1 Step
            </a>
          </button>
        </div>
        <button>
          <a
            id="stepTwo"
            className={
              isActive.id === "stepTwo"
                ? `stepTwo cursor-pointer py-2 px-6 bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl`
                : "cursor-pointer"
            }
            onClick={(e) => {
              hideShowDiv(e);
            }}
          >
            2 Step
          </a>
        </button>
      </div>
      {/* RADIO BUTTON */}
      <div className="z-10 flex mt-7 space-x-2 md:space-x-6 text-sm md:text-xl">
        <label htmlFor="mt4" className="space-x-3">
          <input
            type="radio"
            name="tradingPlatform"
            id="mt4"
            value="mt4"
            checked={selectedOption === "mt4"}
            onChange={handleOptionChange}
            className="mr-1.5"
          />
          MT-4
        </label>
        <label htmlFor="mt5" className="space-x-3">
          <input
            type="radio"
            name="tradingPlatform"
            id="mt5"
            value="mt5"
            checked={selectedOption === "mt5"}
            onChange={handleOptionChange}
            className="mr-1.5"
          />
          MT-5
        </label>
        <label htmlFor="dxtrade" className="space-x-3">
          <input
            type="radio"
            name="tradingPlatform"
            id="dxtrade"
            value="dxtrade"
            checked={selectedOption === "dxtrade"}
            onChange={handleOptionChange}
            className="mr-1.5"
          />
          DX TRADE
        </label>
        <label htmlFor="tradelocker" className="space-x-3">
          <input
            type="radio"
            name="tradingPlatform"
            id="tradelocker"
            value="tradelocker"
            checked={selectedOption === "tradelocker"}
            onChange={handleOptionChange}
            className="mr-1.5"
          />
          TRADE LOCKER
        </label>
      </div>

      <div className="flex z-10 border rounded-md w-[370px] md:w-[500px] p-2 mt-4 md:mt-7 bg-[#FFFFFF33] space-x-8 md:space-x-12 justify-center items-center lg:mb-4">
        <button>
          <a
            id="priceBtnOne"
            className={
              priceButton.id === "priceBtnOne"
                ? `stepOne cursor-pointer py-1 px-4  bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl`
                : " cursor-pointer "
            }
            onClick={(e) => {
              hideShowPriceButton(e);
            }}
          >
            $5K
          </a>
        </button>
        <button>
          <a
            id="priceBtnTwo"
            className={
              priceButton.id === "priceBtnTwo"
                ? `stepOne cursor-pointer py-1 px-4  bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl`
                : " cursor-pointer "
            }
            onClick={(e) => {
              hideShowPriceButton(e);
            }}
          >
            $10K
          </a>
        </button>
        <button>
          <a
            id="priceBtnThree"
            className={
              priceButton.id === "priceBtnThree"
                ? `stepOne cursor-pointer py-1 px-4  bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl`
                : " cursor-pointer "
            }
            onClick={(e) => {
              hideShowPriceButton(e);
            }}
          >
            $25K
          </a>
        </button>
        <button>
          <a
            id="priceBtnFour"
            className={
              priceButton.id === "priceBtnFour"
                ? `stepOne cursor-pointer py-1 px-4  bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl`
                : " cursor-pointer "
            }
            onClick={(e) => {
              hideShowPriceButton(e);
            }}
          >
            $50K
          </a>
        </button>
        <button>
          <a
            id="priceBtnFive"
            className={
              priceButton.id === "priceBtnFive"
                ? `stepTwo cursor-pointer py-1 px-4  bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl`
                : "cursor-pointer"
            }
            onClick={(e) => {
              hideShowPriceButton(e);
            }}
          >
            $100K
          </a>
        </button>
      </div>
      {/* background blur */}
      <div className="absolute w-[600px] h-[400px] bg-[#023564] rounded-full translate-x-[-50%] translate-y-[-50%] blur-[100px] mt-[500px] right-0"></div>
      {/* Table */}
      <div
        className={
          isActive.id === "stepTwo"
            ? `stepTwo w-full flex overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide md:grid md:grid-cols-4 gap-10 z-10  place-items-center px-8	 mb-5 md:mb-0 ease-in duration-900 text-sm md:text-base `
            : "flex lg:space-x-32 z-10"
        }
      >
        {/* Rules */}
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
                <p className="text-neutral-300 hover:text-white text-md md:text-xl mt-7 md:mt-5">
                  {rule.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Phase1 */}
        <div
          className={
            isActive.id === "stepTwo" ? `stepTwo space-y-4 ` : "stepTwo hidden"
          }
        >
          <h3 className="text-lg md:text-xl md:text-md font-semibold  md: text-slate-400">
            Evaluation
          </h3>
          <h3 className="text-md md:text-md font-semibold md:mb-4">Phase 1</h3>
          <div>
            {phase1.map((phase1, index) => (
              <div key={index} className="flex items-center">
                <p className="text-neutral-300 hover:text-white text-md  md:text-xl mt-[26px] md:mt-7">
                  {phase1.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Phase4 */}
        <div
          className={
            isActive.id === "stepOne" ? `stepOne space-y-4 ` : "stepOne hidden"
          }
        >
          <h3 className="text-lg md:text-xl md:text-md font-semibold  md: text-slate-400">
            Evaluation
          </h3>
          <h3 className="text-md md:text-md font-semibold md:mb-4">Phase 1</h3>
          <div>
            {phase4.map((phase4, index) => (
              <div key={index} className="flex items-center">
                <p className="text-neutral-300 hover:text-white text-md  md:text-xl mt-7">
                  {phase4.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Phase2 */}
        <div
          className={
            isActive.id === "stepTwo" ? `stepTwo space-y-4 ` : "stepTwo hidden"
          }
        >
          <h3 className="text-lg md:text-xl md:text-md font-semibold  md: text-slate-400">
            Verification
          </h3>
          <h3 className="text-md md:text-md font-semibold md:mb-4">Phase 2</h3>
          <div className="mt-[-8px] md:mt-0">
            {phase2.map((phase2, index) => (
              <div key={index} className="flex items-center">
                <p className="text-neutral-300 hover:text-white text-md  md:text-xl mt-[26px] md:mt-7">
                  {phase2.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Phase3 */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold  md: text-slate-400 mb-5 lg:mb-3">
            Get Funded
          </h3>
          <h3 className="text-md md:text-lg md:text-md md:text-md font-semibold md:mb-4 ">
            Cipher Trader
          </h3>
          <div className="mt-[-8px] md:mt-0">
            {phase3.map((phase3, index) => (
              <div key={index} className="flex items-center">
                <p className="text-neutral-300 hover:text-white text-md  md:text-xl mt-[28px] md:mt-7">
                  {phase3.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* FEE  */}
      <div className="flex flex-col items-center text-xl space-y-1 mt-5">
        <h3>Fee</h3>
        {/* step1 */}
        <div>
          <p
            id="fee1"
            className={
              isActive.id === "stepOne" && priceButton.id === "priceBtnOne"
                ? `fee1 font-semibold text-4xl`
                : "fee1 hidden"
            }
          >
            $39
          </p>
          <p
            id="fee2"
            className={
              isActive.id === "stepOne" && priceButton.id === "priceBtnTwo"
                ? `fee2 font-semibold text-4xl`
                : "fee2 hidden"
            }
          >
            $66
          </p>
          <p
            id="fee3"
            className={
              isActive.id === "stepOne" && priceButton.id === "priceBtnThree"
                ? `fee3 font-semibold text-4xl`
                : "fee3 hidden"
            }
          >
            $157
          </p>
          <p
            id="fee4"
            className={
              isActive.id === "stepOne" && priceButton.id === "priceBtnFour"
                ? `fee4 font-semibold text-4xl`
                : "fee4 hidden"
            }
          >
            $299
          </p>
          <p
            id="fee5"
            className={
              isActive.id === "stepOne" && priceButton.id === "priceBtnFive"
                ? `fee5 font-semibold text-4xl`
                : "fee5 hidden"
            }
          >
            $399
          </p>
        </div>
        {/* step2 */}
        <div>
          <p
            id="fee1"
            className={
              isActive.id === "stepTwo" && priceButton.id === "priceBtnOne"
                ? `fee1 font-semibold text-4xl`
                : "fee1 hidden"
            }
          >
            $29
          </p>
          <p
            id="fee2"
            className={
              isActive.id === "stepTwo" && priceButton.id === "priceBtnTwo"
                ? `fee2 font-semibold text-4xl`
                : "fee2 hidden"
            }
          >
            $57
          </p>
          <p
            id="fee3"
            className={
              isActive.id === "stepTwo" && priceButton.id === "priceBtnThree"
                ? `fee3 font-semibold text-4xl`
                : "fee3 hidden"
            }
          >
            $129
          </p>
          <p
            id="fee4"
            className={
              isActive.id === "stepTwo" && priceButton.id === "priceBtnFour"
                ? `fee4 font-semibold text-4xl`
                : "fee4 hidden"
            }
          >
            $229
          </p>
          <p
            id="fee5"
            className={
              isActive.id === "stepTwo" && priceButton.id === "priceBtnFive"
                ? `fee5 font-semibold text-4xl`
                : "fee5 hidden"
            }
          >
            $359
          </p>
        </div>
        <p className="py-3 px-4   bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl flex space-x-2 text-sm md:text-lg">
          <Link to="/payment"> Start Challenge </Link>
          <img
            src={rightArrowPointed}
            alt="rightArrow"
            className="w-4 mt-0.5"
          />
        </p>
      </div>
    </div>
  );
};

export default CipherChallenge;
