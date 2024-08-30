import discordLogo from "../assets/discordLogo.svg";
import discord from "../assets/discord.svg";
import { Link } from "react-router-dom";

const NewsLetter = () => {
  return (
    <div className="container mx-auto  grid grid-cols-1 md:grid-cols-2 lg:gap-8 lg:px-7 lg:mb-12 p-4 md:p-0">
      <div className="text-slate-300 text-sm md:text-base h-full space-y-3 md:flex  md:justify-center md:flex-col pb-4 md:pb-0">
        <p className="lg:text-[26px] leading-1 ">
          Stay ahead of the curve with exclusive access to promotions,
          discounts, and our newsletter.
        </p>
        <p className="mt-1 ">Get instant access to weekly newsletter</p>
        <div className="flex gap-3 mt-1">
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-slate-300 w-full border border-slate-300 rounded-md py-2 pl-4 lg:pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm text-black"
            placeholder="youremail@example.com..."
            type="text"
          />
          <a
            href="#"
            className="py-2 px-3   bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl"
          >
            Subscribe
          </a>
        </div>
      </div>
      <div className="h-full flex justify-center items-center lg:px-5">
        <div className="py-0.5 px-0.5  bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl h-[220px]">
          <div className="bg-[#010f1c] pt-8  px-0.5 rounded-3xl h-[216px]">
            <div className="px-2 lg:space-y-12">
              <p className="text-slate-300 lg:text-base text-center">
                For more Information about our Academy join our community on
                Discord
              </p>
            </div>
            <div className="text-center mt-1 text-sm md:text-base flex justify-center">
              <p className="py-3 px-4   bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl flex space-x-2">
                <img src={discord} alt="discord" className="w-5" />
                <Link to="#"> Join the Community </Link>
              </p>
            </div>
            <div className="">
              <img src={discordLogo} alt="" className="w-24 rounded-bl-3xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
