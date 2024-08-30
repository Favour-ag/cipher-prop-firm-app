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
        y: 60,
      },
      {
        y: 0,
        repeat: -1,
        yoyo: true,
        duration: 2,

        ease: "power1.inOut",
      }
    );
  }, []);

  return (
    <div className="container mx-auto">
      {/* Blur Background */}
      <div className="block w-[100px] h-[200px] md:h-[400px] bg-[#eb26fd] rounded-full absolute top-[180px] md:top-[80%] md:left-20 md:translate-x-[-50%] md:translate-y-[-50%] blur-[100px]"></div>
      <div className="block w-[200px] md:w-[600px] h-[250px] md:h-[400px] bg-[#023564] rounded-full absolute top-[100px] md:top-[110%] right-0 md:translate-x-[-50%] md:translate-y-[-50%] blur-[100px]"></div>
      <div className="block absolute w-full lg:px-12">
        <img src={stars} alt="stars" />
      </div>
      <div className="block absolute  lg:pl-32 xl:pl-38 lg:mb-[450px]">
        <img src={polygon} alt="stars" className="w-[600px]" />
      </div>
      <div className="hidden lg:block absolute right-12 top-32">
        <img src={ellipse} alt="ellipse" />
      </div>
      <div className="hidden lg:block absolute left-[60%] top-52">
        <img src={ellipsesmall} alt="ellipse" />
      </div>
      <div className="block absolute top-[200px] md:top-[100%] right-4 md:left-[45%] ">
        <img src={ellipse} alt="ellipse" />
      </div>
      {/* ellipse mobile */}
      <div className="block absolute right-3 top-20">
        <img src={ellipsesmall} alt="ellipse" className="w-6" />
      </div>
      <div className="block absolute left-4 top-[70px]">
        <img src={ellipsesmall} alt="ellipse" className="w-4" />
      </div>
      <div className="block absolute left-4 top-[230px]">
        <img src={ellipsesmall} alt="ellipse" className="w-4" />
      </div>
      <div className="block absolute left-48 top-[70px]">
        <img src={ellipsesmall} alt="ellipse" className="w-4" />
      </div>
      {/* HERO SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:px-7">
        <div className="z-10 flex items-center justify-center">
          <div className=" flex flex-col  gap-3 p-5 lg:px-0 ">
            <h1 className="text-2xl text-center lg:text-start lg:text-5xl font-semibold pt-3 md:pt-0">
              Construct Your Edge and
              <span className="bg-gradient-to-t from-red-600 to-blue-600 inline-block text-transparent bg-clip-text">
                Decode
              </span>
              <span className="ml-1">the Markets.</span>
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
                  <Link to="/dashboard"> Dashboard </Link>
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
        {/* Astro Image */}
        <div className="z-10 h-full hidden lg:flex justify-center">
          <img
            src={Astro}
            alt="Astro"
            id="astro"
            className="w-[400px] h-[700px] ml-20 "
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
