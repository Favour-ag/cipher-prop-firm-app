import Astro from "../assets/Astro.png";

const HeroSection = () => {
  return (
    <div className="flex justify-center mt-5 gap-5">
      <div className="flex flex-col ">
        <h1>Construct Your Edge and Decode the Markets.</h1>
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
      <div className="bg-blue-500 p-4">
        <img src={Astro} alt="Astro" className="hidden lg:block" />
      </div>
    </div>
  );
};

export default HeroSection;
