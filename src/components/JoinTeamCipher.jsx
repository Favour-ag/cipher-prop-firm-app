import NewsLetter from "./NewsLetter";

const JoinTeamCipher = () => {
  return (
    <div className="container mx-auto">
      <div className=" flex flex-col justify-center items-center pt-4 md:pt-0 md:p-20">
        <p className="text-xl lg:text-4xl font-semibold ">
          Join our Team at Cipher
        </p>
        <div className="lg:w-[1000px] lg:py-3 px-4 lg:px-12 text-center mt-1 lg:mt-0">
          <p className="text-sm md:text-xl md:text-center text-slate-300">
            The industry's most affordable option with advanced technology to
            help you achieve your trading goals. We believe in your potential
            and are here to support your success. Additionally, join our
            platform to learn more about our academy and further enhance your
            trading skills.
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
      </div>
      {/* NewsLetter */}
      <NewsLetter />
    </div>
  );
};

export default JoinTeamCipher;
