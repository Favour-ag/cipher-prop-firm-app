import discordLogo from "../assets/discordLogo.svg";
import discord from "../assets/discord.svg";
import { Link } from "react-router-dom";

const JoinTeamCipher = () => {
  return (
    <div className=" w-full h-screen flex flex-col justify-center items-center">
      <p className="text-xl lg:text-4xl font-semibold mt-96">
        Join our Team at Cipher
      </p>
      <div className="lg:w-[1000px] lg:py-3 px-4 lg:px-12 text-center mt-1 lg:mt-0">
        <p className="text-sm md:text-xl md:text-center text-slate-300">
          The industry's most affordable option with advanced technology to help
          you achieve your trading goals. We believe in your potential and are
          here to support your success. Additionally, join our platform to learn
          more about our academy and further enhance your trading skills.
        </p>
      </div>
      {/* BUTTONS */}
      <div className="flex justify-start mt-6 lg:mt-0 space-x-3 lg:space-x-6 items-start text-sm md-text-base">
        <div className="py-3 px-0.5  bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl">
          <a
            href="#cipherchallenge"
            className="py-3 px-3  bg-[#010f1c] rounded-3xl"
          >
            Select An Account
          </a>
        </div>
        <a
          href="#"
          className="py-3 px-4   bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl"
        >
          Affiliate Program
        </a>
      </div>
      {/* NewsLetter */}
      <div className=" w-full min-h-screen px-4 mt-7 lg:mt-20 flex flex-col md:flex-row lg:px-24 xl:px-32 gap-8 ">
        <div className="lg:w-1/2 lg:space-y-3 mt-3 lg:mt-7 text-slate-300 text-sm md:text-base px-1 md:px-0">
          <p className="lg:text-[26px] leading-1">
            Stay ahead of the curve with exclusive access to promotions,
            discounts, and our newsletter.
          </p>
          <p className="mt-1 lg:mt-0">
            Get instant access to weekly newsletter
          </p>
          <div className="flex gap-3 mt-1 lg:mt-0 ">
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
        <div className="lg:w-1/2 lg:mt-0">
          <div className="py-0.5 px-0.5  bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl h-[180px] lg:w-[400px]  relative lg:left-20">
            <div className="bg-[#010f1c] py-16 px-0.5 rounded-3xl h-full">
              <div className="px-2 lg:px-12 mt-[-45px]">
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
              <div className="absolute bottom-1">
                <img
                  src={discordLogo}
                  alt=""
                  className="w-24 rounded-bl-3xl lg:mt-[-20px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinTeamCipher;
