import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import affiliateFrameStep1 from "../assets/affiliateFrameStep1.svg";
import affiliateFrameStep2 from "../assets/affiliateFrameStep2.svg";
import affiliateFrameStep3 from "../assets/affiliateFrameStep3.svg";
import affiliateFrameStep4 from "../assets/affiliateFrameStep4.svg";
import affiliateFrameStep5 from "../assets/affiliateFrameStep5.svg";

const AffliateProgram = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-full lg:h-[550px] bg-[#010f1c] lg:px-20 flex flex-col lg:flex-row lg:pt-4 gap-2 lg:gap-0">
        <div className="w-full lg:w-1/2 z-10 p-2 lg:p-0">
          <div className="lg:min-w-full lg:h-screen flex flex-col  gap-3  lg:relative pt-2 lg:pt-32">
            <h1 className=" text-4xl text-start lg:text-7xl font-semibold">
              Affiliate
              <span className="bg-gradient-to-t from-red-600 to-blue-600 inline-block text-transparent bg-clip-text lg:p-1 pl-1 ">
                Program
              </span>
            </h1>
            <p className=" text-left">
              Explore skilled traders globally to come alongside us on journey,
              and enjoy the fantastic advantages we offer you for every
              recommendation.
            </p>
            <div className="lg:mt-3">
              <a
                href="#"
                className="py-3 px-4  bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl "
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
        <div className="p-5 lg:p-6 block h-[350px] lg:h-full lg:w-1/2 z-10 ">
          <div>
            <img
              src={affiliateFrameStep1}
              alt="step1"
              className="w-[135px] lg:w-52"
            />
          </div>
          <div className="relative top-[-78px] lg:top-[-120px] left-[100px] lg:left-[156px]">
            <img
              src={affiliateFrameStep2}
              alt="step2"
              className="w-[135px] lg:w-52"
            />
          </div>
          <div className="relative top-[-154px] lg:top-[-240px] left-[202px] lg:left-[310px]">
            <img
              src={affiliateFrameStep3}
              alt="step3"
              className="w-[135px] lg:w-52"
            />
          </div>
          <div className="relative top-[-231px] lg:top-[-358px] left-[100px] lg:left-[155px]">
            <img
              src={affiliateFrameStep4}
              alt="step4"
              className="w-[135px] lg:w-52"
            />
          </div>
          <div className="relative top-[-424px] lg:top-[-653px] left-[1px]">
            <img
              src={affiliateFrameStep5}
              alt="step5"
              className="w-[135px] lg:w-52"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AffliateProgram;
