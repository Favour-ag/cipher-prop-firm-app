import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import visaCreditCard from "../assets/visaCreditCard.svg";
import masterCard from "../assets/masterCard.svg";
import bitcoin from "../assets/icons/bitcoin.svg";
import ethereum from "../assets/icons/ethereum.svg";
import tether from "../assets/icons/tether.svg";
import usdc from "../assets/icons/usdc.svg";
import Accordion from "../components/Accordion";
import { accordionData } from "../constants";

const Payment = () => {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-[1100px] flex justify-center">
        <div className="w-full lg:w-[90%]  lg:space-y-5">
          <p className="pl-3 md:pl-0 text-left md:text-center text-xl lg:text-4xl pt-3 md:pt-12">
            Let’s begin with Cipher Challenge
          </p>
          <div className="flex flex-col md:flex-row lg:space-x-6">
            <div className="lg:w-1/2 mt-3 md:mt-0">
              <div className="px-3">
                <p className="lg:mb-5 text-xl lg:text-4xl">Checkout</p>
                <p className="text-slate-400 text-base">Got a coupon code?</p>
                <div className="bg-inherit border w-[100%]  rounded-md flex py-2 lg:px-3 ">
                  <input
                    type="text"
                    className="placeholder:text-white block bg-inherit rounded-md py-2    mx-2 shadow-sm focus:outline-none                active:bg-inherit 
                    sm:text-md text-white w-[450px]"
                    placeholder="Enter Your Email"
                  />
                  <div className="px-2 md:px-0">
                    <p className="py-2 px-6   bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl">
                      <Link to="/"> Apply </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col pt-6  ">
                <p className="hidden md:block text-3xl text-center mb-4">
                  Contact Us*
                </p>
                <p className="block md:hidden text-lg  md:mb-4 pl-3">
                  Billing Details*
                </p>
                <div className="px-3 flex flex-col md:flex-row gap-3 md:gap-3">
                  <div className="w-full md:w-1/2">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="bg-inherit border placeholder:text-slate-500 rounded-md p-2 md:py-4 w-full"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="bg-inherit border placeholder:text-slate-500 rounded-md p-2 w-full md:py-4"
                    />
                  </div>
                </div>
                <div className="flex px-3 flex-col md:flex-row gap-3 md:gap-3 pt-3">
                  <div className="md:w-1/2">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="bg-inherit border placeholder:text-slate-500 rounded-md p-2 w-full md:py-4"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <input
                      type="phone"
                      placeholder="Phone Number"
                      className="bg-inherit border placeholder:text-slate-500 rounded-md p-2 w-full md:py-4"
                    />
                  </div>
                </div>
                <div className="px-3 pt-3 space-y-3">
                  <div className="">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="bg-inherit border placeholder:text-slate-500 rounded-md p-2 w-full md:py-4"
                    />
                  </div>
                  <div className="">
                    <input
                      type="phone"
                      placeholder="Phone Number"
                      className="bg-inherit border placeholder:text-slate-500 rounded-md p-2 w-full md:py-4"
                    />
                  </div>
                </div>
                <div className="px-3 flex flex-col md:flex-row gap-3 mt-3">
                  <div className="w-full md:w-1/2">
                    <select className="bg-inherit border placeholder:text-slate-500 rounded-md p-2  px-2 md:py-4 w-full text-slate-400">
                      <option value="" className="mr-2">
                        Country
                      </option>
                      <option value="">1</option>
                      <option value="">1</option>
                      <option value="">1</option>
                    </select>
                  </div>
                  <div className="w-full md:w-1/2">
                    <select className="bg-inherit border placeholder:text-slate-500 rounded-md px-2 md:py-4 w-full text-slate-400 p-2">
                      <option value="" className="mr-2">
                        State
                      </option>
                      <option value="">1</option>
                      <option value="">1</option>
                      <option value="">1</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-5 px-3 md:px-0 mt-5 lg:mt-10">
              <div className="border rounded-2xl w-full md:w-[540px] h-[300px]">
                <div className="flex flex-col justify-center items-center py-8 px-8">
                  <p className="text-lg">Your Order</p>
                  <div className="space-y-6">
                    <div className="flex flex-col md:justify-between items-center">
                      <p>Steps</p>
                      <div className="flex space-x-8  text-sm">
                        <div className="flex justify-center items-center">
                          <p>1 Step</p>
                        </div>
                        <a
                          href="#"
                          className="py-2 px-3 bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl"
                        >
                          2 Step
                        </a>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mt-3">
                      <p>Platfrom</p>
                      <div className="z-10 flex space-x-2 lg:space-x-6 text-sm ">
                        <label htmlFor="mt4" className="space-x-3 flex">
                          <input
                            type="radio"
                            name="mt4"
                            id=""
                            className="mr-1"
                            checked
                          />
                          MT-4
                        </label>
                        <label htmlFor="mt5" className="flex">
                          <input
                            type="radio"
                            name="mt5"
                            id=""
                            className="mr-1"
                          />
                          MT-5
                        </label>
                        <label htmlFor="dxtrade">
                          <input
                            type="radio"
                            name="dxtrade"
                            id=""
                            className="mr-1"
                          />
                          DX TRADE
                        </label>
                        <label htmlFor="tradelocker">
                          <input
                            type="radio"
                            name="mt5"
                            id=""
                            className="mr-1"
                          />
                          TRADE LOCKER
                        </label>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mt-3 ">
                      <p>Account Size</p>
                      <div className="flex rounded-lg space-x-10  items-center text-base">
                        <a
                          href="#"
                          className="py-1 px-3 bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl"
                        >
                          $5K
                        </a>
                        <p>$10K</p>
                        <p>$25K</p>
                        <p>$50K</p>
                        <p>$100K</p>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <p>Total</p>
                      <p>$30</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border rounded-2xl md:w-[540px] h-[430px] md:h-[510px] text-sm md:text-base">
                <div className="flex flex-col py-4 md:py-8 px-3 md:px-8">
                  <p className="text-lg md:text-center">
                    Choose Payment Method
                  </p>
                  <div className="mt-5">
                    <p>
                      <span className="text-blue-400 pr-1 ">*</span>
                      Credit or Debit Card
                    </p>
                    <div className="border rounded-2xl md:w-[475px] h-[200px] md:h-[250px]">
                      <div className="p-3 md:p-5 ">
                        <p className="text-base">Card Number</p>
                        <div className="bg-inherit border w-[100%]  rounded-md flex py-2 px-1 md:px-3 ">
                          <input
                            type="text"
                            className="block bg-inherit rounded-md py-2  mx-2 shadow-sm focus:outline-none                active:bg-inherit 
                    sm:text-md text-white w-[450px] placeholder:text-slate-400"
                            placeholder="Credit or Debit Card"
                          />
                          <div className="flex mr-8 md:mr-0 w-[100px] space-x-1 cursor-pointer">
                            <img src={visaCreditCard} alt="visa" />
                            <img src={masterCard} alt="mastercard" />
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2 px-5">
                        <div className="w-full md:w-1/2">
                          <p>Expiry Date</p>
                          <input
                            type="text"
                            placeholder="MM / YY"
                            className="bg-inherit border placeholder:text-slate-500 rounded-md p-2 md:py-4 w-full"
                          />
                        </div>
                        <div className="w-full md:w-1/2">
                          <p>Expiry Date</p>
                          <input
                            type="text"
                            placeholder="CVC"
                            className="bg-inherit border placeholder:text-slate-500 rounded-md p-2 w-full md:py-4"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 ">
                    <div className="bg-inherit border w-[100%]  rounded-md flex py-2 px-3 justify-between">
                      <div className="flex items-center">
                        <input type="radio" className="mr-1" />
                        <p className="text-sm md:text-base">
                          Pay with cryptocurrencies
                        </p>
                      </div>
                      <div className="flex w-[100px] space-x-1 cursor-pointer">
                        <img src={bitcoin} alt="bitcoin" />
                        <img src={ethereum} alt="ethereum" />
                        <img src={tether} alt="tether" />
                        <img src={usdc} alt="usdc" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex px-3 md:px-8">
                  <p className="py-2 px-6   bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl">
                    <Link to="#"> Place Order </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row lg:py-10 lg:pb-24 mb-12 lg:mb-0">
            <div className="lg:w-1/2 h-full flex justify-center items-start flex-col space-y-2 lg:space-y-0 lg:gap-4 p-4">
              <p className="text-lg lg:text-5xl font-semibold">
                Frequently Asked Questions
              </p>
              {/* <a
                href="#"
                className="py-3 px-4 bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl"
              >
                See all FAQs
              </a> */}
              <p className="py-3 px-4 bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl text-sm md:text-base">
                <Link to="/faq"> See all FAQs </Link>
              </p>
            </div>
            <div className="lg:w-1/2 h-full flex justify-center items-start flex-col px-4 lg:px-6">
              <div className="w-full">
                <div className="space-y-4">
                  {accordionData.map(({ title, content }) => (
                    <Accordion key={title} title={title} content={content} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
