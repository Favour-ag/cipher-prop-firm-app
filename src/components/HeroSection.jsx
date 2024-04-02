import Astro from "../assets/Astro.png";

const HeroSection = () => {
  return (
    <div className="w-full min-h-screen flex mt-2 gap-5 items-center">
      <div className="w-1/2 bg-blue-500 container px-14 min-h-full ">
        <div className="text-wrap space-y-5 min-w-full h-full bg-red-500">
          <h1 className="text-5xl font-grotesk font-semibold">
            Construct Your Edge and
            <p className="bg-gradient-to-t from-red-600 to-blue-600 inline-block text-transparent bg-clip-text">
              Decode
            </p>
            the Markets.
          </h1>
          <div>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
              >
                Create an account
              </a>
            </div>
            <p>Unleash Potential for Success and Fund Your Future</p>
          </div>
        </div>
      </div>

      <div className="	bg-blue-500 p-4">
        <img src={Astro} alt="Astro" className="hidden lg:block" />
      </div>
    </div>
  );
};

export default HeroSection;
