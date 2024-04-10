import { useLocation } from "react-router-dom";
import cipher from "../assets/cipher.png";
import { socials } from "../constants";
import rightArrowUp from "../assets/rightArrowUp.svg";
import { navigation } from "../constants";
const Footer = () => {
  const pathname = useLocation();
  return (
    <div className="bg-[#0E1419] w-full h-full flex flex-col md:flex-row justify-center lg:px-24 lg:gap-12 lg:pt-10">
      <div className="lg:w-1/2 lg:p-4 space-y-5 leading-7 mt-4">
        {/* logo */}
        <div>
          <img src={cipher} alt="cipher-logo" className="w-[100px]" />
        </div>
        <p className="text-justify text-md px-4 lg:px-0 ">
          All information disseminated by Cipher and its affiliates (hereafter
          referred to as the Company) is intended as general guidance. None of
          the data provided by the Company should be construed as investment
          advice, nor should it be considered an offer or solicitation to buy or
          sell securities, companies, or funds. Cipher does not operate as a
          broker or custodian. Participation in our programs is voluntary, and
          program fees contribute to operational expenses such as staff and
          technology.
        </p>

        <p className="text-jusify text-lg px-4 lg:px-0">
          The Company does not engage in soliciting futures, options, or forex
          transactions. Past performance is not necessarily indicative of future
          outcomes. This information is governed by Nigerian law.
        </p>

        <div className="mt-4">
          <ul className="flex items-center justify-center lg:justify-start gap-2">
            {socials.map((social) => (
              <a key={social.id} href={social.url}>
                <img src={social.icon} alt="SocialMedia" />
              </a>
            ))}
          </ul>
        </div>
      </div>
      <div className="lg:w-1/2 flex flex-col items-center ">
        <div className="bg-[#FFFFFF33] w-[90%] mt-8 rounded-md flex items-center py-2 justify-between px-2 flex-col md:flex-row">
          <p className="font-semibold">Newsletter Group</p>
          <div className="py-0.5 px-0.5 w-[300px] bg-gradient-to-r from-red-500 to-blue-600">
            <div className="bg-[#010F1C] px-2 flex items-center">
              <input
                type="text"
                className="placeholder:text-white block bg-[#010F1C] w-[90%] rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none sm:text-md text-white"
                placeholder="Enter Your Email"
              />
              <div className="bg-[#0072D8] w-[30.14px] h-[30.14px] flex justify-center items-center rounded-lg cursor-pointer">
                <a href="/">
                  <img src={rightArrowUp} alt="rightArrowUp" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-6 w-full px-8">
          <div className="w-1/2">
            <h3 className="text-md font-semibold lg:mb-2 text-[#0072D8]">
              LEGAL
            </h3>
            <div className="flex flex-col">
              <a href="">Privacy Policy</a>
              <a href="">Terms & Conditions</a>
            </div>
          </div>
          <div className="w-1/2 mt-4 lg:mt-0 mb-4">
            <h3 className="text-md font-semibold lg:mb-2 text-[#0072D8]">
              QUICK LINKS
            </h3>

            <ul className="space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  className={`flex text-md hover:text-slate-200  lg:text-base ${
                    item.url === pathname.hash
                  }`}
                >
                  {item.title}
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
