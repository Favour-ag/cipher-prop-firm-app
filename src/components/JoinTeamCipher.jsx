import discordLogo from "../assets/discordLogo.svg";

const JoinTeamCipher = () => {
  return (
    <div className=" w-full h-screen flex flex-col justify-center items-center">
      <p className="text-3xl lg:text-4xl font-semibold mt-96">
        Join our Team at Cipher
      </p>
      <div className=" lg:w-[1000px] lg:py-3 px-4 lg:px-12 text-center mt-3 lg:mt-0">
        <p className="lg:text-xl text-justify text-slate-300">
          The industry's most affordable option with advanced technology to help
          you achieve your trading goals. We believe in your potential and are
          here to support your success. Additionally, join our platform to learn
          more about our academy and further enhance your trading skills.
        </p>
      </div>
      {/* BUTTONS */}
      <div className="flex justify-start mt-2 lg:mt-0 space-x-3 lg:space-x-6 items-start">
        <div className="py-3 px-0.5  bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl">
          <a href="#" className="py-3 px-3  bg-[#010f1c] rounded-3xl">
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
        <div className="lg:w-1/2 lg:space-y-3 mt-3 lg:mt-7">
          <p className="lg:text-[26px] leading-1">
            Stay ahead of the curve with exclusive access to promotions,
            discounts, and our newsletter.
          </p>
          <p className="mt-1 lg:mt-0">
            Get instant access to weekly newsletter
          </p>
          <div className="flex gap-3 mt-1 lg:mt-0">
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
        <div className="lg:w-1/2 mt-[-20px] lg:mt-0">
          <div className="py-0.5 px-0.5  bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl lg:w-[400px] relative lg:left-20">
            <div className="bg-[#010f1c] py-16 px-0.5 rounded-3xl h-[200px]">
              <div className="px-4 lg:px-12 mt-[-36px]">
                <p className="lg:text-base text-center">
                  For more Information about our Academy join our community on
                  Discord
                </p>
              </div>
              <div className="text-center mt-4">
                <a
                  href="#"
                  className="py-2.5 px-3   bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl"
                >
                  Join The Community
                </a>
              </div>
              <div className=" ml-0">
                <img src={discordLogo} alt="" className="w-24 rounded-bl-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinTeamCipher;
