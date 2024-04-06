import Astro from "../assets/Astro.png";

const HeroSection = () => {
  return (
    <div className="w-full h-full flex mt-0 lg:mt-2 items-center">
      <div className="lg:w-[50%]">
        <div className="lg:min-w-full lg:h-screen flex flex-col justify-center items-center gap-3 p-5 lg:p-0">
          <h1 className="lg:pl-20 text-2xl text-center lg:text-5xl font-grotesk font-semibold">
            Construct Your Edge and
            <p className="bg-gradient-to-t from-red-600 to-blue-600 inline-block text-transparent bg-clip-text lg:mt-2">
              Decode
            </p>
            the Markets.
          </h1>
          <div>
            <div className="hidden lg:flex justify-start space-x-6 items-start">
              <div className="py-3 px-0.5  bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl">
                <a href="#" className="py-3 px-3  bg-[#010f1c] rounded-3xl">
                  Select An Account
                </a>
              </div>
              <a
                href="#"
                className="py-3 px-4   bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl"
              >
                Dashboard
              </a>
            </div>
            <p className="lg:mt-3 text-sm md:text-2xl mt-[-12px] md:mt-0">
              Unleash Potential for Success and Fund Your Future
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 hidden lg:block w-[50%]">
        <img src={Astro} alt="Astro" className="w-[400px] h-[700px] ml-20" />
      </div>
    </div>
  );
};

export default HeroSection;
