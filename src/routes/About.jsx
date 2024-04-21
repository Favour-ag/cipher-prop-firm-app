import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutFrame1 from "../assets/AboutFrame1.svg";
import AboutFrame2 from "../assets/AboutFrame2.svg";
import AboutFrame3 from "../assets/AboutFrame3.svg";
import discordLogoBlack from "../assets/discordLogoBlack.svg";
import discord from "../assets/discord.svg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#F8F8FF] h-[2400px] md:h-[1800px] flex flex-col w-full items-center text-black">
        <div className="w-[90%]">
          <div className="flex flex-col-reverse  md:flex-row lg:gap-12 mt-8 lg:mt-24 lg:px-12">
            <div className="lg:w-1/2  flex items-center mt-5 md:mt-0">
              <div className="space-y-5 ">
                <p>
                  At Cipher, we're more than traders; we're visionaries,
                  pioneers, and tacticians. Our firm stands as a leading force
                  in proprietary trading, fueled by a fervor for financial
                  markets and a dedication to excellence.
                </p>
                <p>
                  Built upon the pillars of cutting-edge technology,
                  quantitative analysis, and risk mitigation, Cipher unites a
                  team of elite traders, developers, and researchers to unlock
                  the full potential of global financial markets.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div>
                <img src={AboutFrame1} alt="" />
              </div>
            </div>
          </div>
          {/* OUR APPROACH */}
          <div className="flex flex-col lg:gap-8 lg:mt-24 lg:px-12">
            <div className="text-center mt-8 md:mt-0">
              <p className="bg-gradient-to-t from-red-600 to-blue-600 inline-block text-transparent bg-clip-text font-semibold text-4xl ">
                Our Approach
              </p>
            </div>
            <div className="flex lg:gap-12 flex-col md:flex-row">
              <div className="lg:w-1/2 flex items-center mt-5">
                <div>
                  <img src={AboutFrame2} alt="" />
                </div>
              </div>
              <div className="lg:w-1/2 mt-2">
                <div className="space-y-4 ">
                  <p>
                    <span className="font-semibold">
                      Quantitative Proficiency:{" "}
                    </span>
                    Employing advanced algorithms and quantitative models, we
                    meticulously scrutinize extensive data to pinpoint trading
                    prospects with accuracy and efficiency.
                  </p>
                  <p>
                    <span className="font-semibold">
                      Technological Advancement:
                    </span>{" "}
                    Harnessing the latest technological advancements, from
                    artificial intelligence and machine learning to
                    high-frequency trading platforms, we continually stay ahead
                    of market trends to capitalize on inefficiencies.
                  </p>
                  <p>
                    <span className="font-semibold"> Risk Control:</span> With a
                    steadfast focus on risk management and asset preservation,
                    we implement robust strategies and safeguards to ensure
                    sustainable profitability and enduring success.{" "}
                  </p>
                  <p>
                    <span className="font-semibold">
                      Collaborative Environment:
                    </span>{" "}
                    Nurturing a culture of collaboration and inclusivity, we
                    foster an atmosphere where ideas flourish, ingenuity
                    thrives, and continual growth is celebrated. Our team is
                    fueled by a spirit of curiosity, camaraderie, and a shared
                    commitment to excellence.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* OUR MISSION */}
          <div className="flex flex-col lg:gap-8 lg:mt-24 lg:px-12">
            <div className="text-center">
              <p className="bg-gradient-to-t from-red-600 to-blue-600 inline-block text-transparent bg-clip-text text-4xl font-semibold">
                Our Mission
              </p>
            </div>
            <div className="flex flex-col-reverse md:flex-row lg:gap-12">
              <div className="lg:w-1/2  flex items-center">
                <div className="space-y-4 mt-5 md:mt-0">
                  <p>
                    To redefine the landscape of proprietary trading through
                    innovation, technology, and an unwavering pursuit of trading
                    supremacy. We are steadfast in our mission to deliver
                    exceptional returns for our traders while upholding the
                    highest standards of honesty, transparency, and
                    professionalism.
                  </p>
                  <p>
                    Join us at Cipher and become part of a dynamic team shaping
                    the future of financial markets.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 mt-2 md:mt-0">
                <div>
                  <img src={AboutFrame3} alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* NewsLetter */}
          <div className=" w-full min-h-screen  mt-7 lg:mt-20 flex flex-col md:flex-row lg:px-32 xl:px-12 gap-8 ">
            <div className="lg:w-1/2 lg:space-y-3 mt-3 lg:mt-7 text-black text-sm md:text-base px-1 md:px-0">
              <p className="lg:text-[26px] leading-1 font-semibold">
                Stay ahead of the curve with exclusive access to promotions,
                discounts, and our newsletter.
              </p>
              <p className="mt-1 lg:mt-0">
                Get instant access to weekly newsletter
              </p>
              <div className="flex gap-3 mt-1 lg:mt-0 ">
                <input
                  className="placeholder:italic placeholder:text-black block bg-slate-300 w-full border border-slate-300 rounded-md py-2 pl-4 lg:pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm text-black"
                  placeholder="youremail@example.com..."
                  type="text"
                />
                <a
                  href="#"
                  className="py-2 px-3   bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl text-white"
                >
                  Subscribe
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 lg:mt-0">
              <div className="py-0.5 px-0.5  bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl h-[180px] lg:w-[400px]  relative lg:left-20">
                <div className="bg-[#F8F8FF] py-16 px-0.5 rounded-3xl h-full">
                  <div className="px-2 lg:px-12 mt-[-45px]">
                    <p className="text-black lg:text-base text-center">
                      For more Information about our Academy join our community
                      on Discord
                    </p>
                  </div>
                  <div className="text-center mt-1 text-sm md:text-base flex justify-center">
                    <p className="py-3 px-4   bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl flex space-x-2">
                      <img src={discord} alt="discord" className="w-5" />
                      <Link to="#" className="text-white">
                        {" "}
                        Join the Community{" "}
                      </Link>
                    </p>
                  </div>
                  <div className="absolute bottom-1">
                    <img
                      src={discordLogoBlack}
                      alt=""
                      className="w-24 rounded-bl-3xl lg:mt-[-20px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
