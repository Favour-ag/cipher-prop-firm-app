import { Link } from "react-router-dom";
import Astro from "../assets/Astro.png";
import { socials } from "../constants";
import stars from "../assets/stars.svg";
import polygon from "../assets/polygon.svg";
import ellipse from "../assets/Ellipse.svg";
import ellipsesmall from "../assets/Ellipsesmall.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HeroSection = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#astro",
      {
        y: 0,
      },
      {
        y: 60,
        repeat: -1,
        yoyo: true,
        duration: 1,
      }
    );
  }, []);

  return (
    <div className="w-full h-full flex mt-0 items-center">
      {/* Blur Background */}
      <div className="hidden lg:block w-[100px] h-[400px] bg-[#eb26fd] rounded-full absolute top-[80%] left-20 translate-x-[-50%] translate-y-[-50%] blur-[100px]"></div>
      <div className="hidden lg:block w-[600px] h-[400px] bg-[#023564] rounded-full absolute top-[110%] right-0 translate-x-[-50%] translate-y-[-50%] blur-[100px]"></div>
      <div className="hidden lg:block absolute w-full lg:px-12">
        <img src={stars} alt="stars" />
      </div>
      <div className="hidden lg:block absolute  lg:pl-32 xl:pl-38 lg:mb-[450px]">
        <img src={polygon} alt="stars" className="w-[600px]" />
      </div>
      <div className="hidden lg:block absolute right-12 top-32">
        <img src={ellipse} alt="ellipse" />
      </div>
      <div className="hidden lg:block absolute left-[60%] top-52">
        <img src={ellipsesmall} alt="ellipse" />
      </div>
      <div className="hidden lg:block absolute top-[100%] left-[45%] ">
        <img src={ellipse} alt="ellipse" />
      </div>
      <div className="lg:w-1/2 z-10 lg:pl-8 ">
        <div className="lg:min-w-full lg:h-screen flex flex-col  gap-3 p-5 lg:p-0 lg:relative lg:ml-16 lg:justify-center z-10">
          <h1 className=" text-2xl text-center lg:text-start lg:text-5xl font-semibold">
            Construct Your Edge and
            <span className="bg-gradient-to-t from-red-600 to-blue-600 inline-block text-transparent bg-clip-text mr-2">
              Decode
            </span>
            the Markets.
          </h1>
          <div>
            <div className="hidden lg:flex justify-start space-x-6 items-start z-10">
              <div className="py-3 px-0.5  bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl">
                <a
                  href="#cipherchallenge"
                  className="py-3 px-3  bg-[#010f1c] rounded-3xl"
                >
                  Select An Account
                </a>
              </div>
              <p className="py-3 px-4   bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl">
                <Link to="/login"> Dashboard </Link>
              </p>
            </div>
            <p className="lg:mt-3 text-sm md:text-2xl mt-[-12px] md:mt-0 text-center lg:text-left">
              Unleash Potential for Success and Fund Your Future
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
        </div>
      </div>
      <div className="p-6 hidden lg:block w-1/2 z-10">
        <img
          src={Astro}
          alt="Astro"
          id="astro"
          className="w-[400px] h-[700px] ml-20 "
        />
      </div>
    </div>
  );
};

export default HeroSection;
