import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutFrame1 from "../assets/AboutFrame1.svg";
import AboutFrame2 from "../assets/AboutFrame2.svg";
import AboutFrame3 from "../assets/AboutFrame3.svg";
import NewsLetter from "../components/NewsLetter";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible to true after the component mounts to trigger the fade-in animation
    setIsVisible(true);
  }, []);

  return (
    <div className="container mx-auto mt-4 ">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="bg-[#010f1c] text-white md:mt-8 p-4 md:mx-0"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:px-7 lg:space-x-16 lg:mb-12 ">
          <div className="flex items-center mt-5 md:mt-0 order-last md:order-first">
            <div className="space-y-5 ">
              <p>
                At Cipher, we're more than traders; we're visionaries, pioneers,
                and tacticians. Our firm stands as a leading force in
                proprietary trading, fueled by a fervor for financial markets
                and a dedication to excellence.
              </p>
              <p>
                Built upon the pillars of cutting-edge technology, quantitative
                analysis, and risk mitigation, Cipher unites a team of elite
                traders, developers, and researchers to unlock the full
                potential of global financial markets.
              </p>
            </div>
          </div>
          {/* About Frame 1 */}
          <div>
            <img src={AboutFrame1} alt="aboutframe1" />
          </div>
        </div>
        {/* OUR APPROACH */}
        <div className="flex flex-col lg:gap-8 lg:pt-8 lg:mb-12">
          <div className="text-center mt-8 md:mt-0 mb-3 md:mb-0">
            <p className="bg-gradient-to-t from-red-600 to-blue-600 inline-block text-transparent bg-clip-text font-semibold text-4xl ">
              Our Approach
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:px-7 lg:space-x-16">
            {/* About Frame 2 */}
            <div className="flex justify-center h-full items-center pb-3 md:pb-0">
              <img src={AboutFrame2} alt="aboutframe2" />
            </div>
            <div className="flex justify-center h-full items-center">
              <div className="space-y-4 ">
                <p>
                  <span className="font-semibold">
                    Quantitative Proficiency:
                  </span>{" "}
                  Employing advanced algorithms and quantitative models, we
                  meticulously scrutinize extensive data to pinpoint trading
                  prospects with accuracy and efficiency.
                </p>
                <p>
                  <span className="font-semibold">
                    Technological Advancement:
                  </span>{" "}
                  Harnessing the latest technological advancements, from
                  artificial intelligence and machine learning to high-frequency
                  trading platforms, we continually stay ahead of market trends
                  to capitalize on inefficiencies.
                </p>
                <p>
                  <span className="font-semibold"> Risk Control:</span> With a
                  steadfast focus on risk management and asset preservation, we
                  implement robust strategies and safeguards to ensure
                  sustainable profitability and enduring success.{" "}
                </p>
                <p>
                  <span className="font-semibold">
                    Collaborative Environment:
                  </span>{" "}
                  Nurturing a culture of collaboration and inclusivity, we
                  foster an atmosphere where ideas flourish, ingenuity thrives,
                  and continual growth is celebrated. Our team is fueled by a
                  spirit of curiosity, camaraderie, and a shared commitment to
                  excellence.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* OUR GOAL */}
        <div className="flex flex-col lg:gap-8 lg:pt-8 lg:mb-12">
          <div className="text-center py-3">
            <p className="bg-gradient-to-t from-red-600 to-blue-600 inline-block text-transparent bg-clip-text text-4xl font-semibold mt-5 md:mt-0">
              Our Goal
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:px-7 lg:space-x-16">
            <div className="flex justify-center h-full items-center">
              <div className="space-y-4">
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
            <div className="flex justify-center h-full items-center py-4 md:py-0 ">
              <img src={AboutFrame3} alt="aboutframe3" />
            </div>
          </div>
        </div>
        {/* NewsLetter */}
        <NewsLetter />
      </motion.div>
      <Footer />
    </div>
  );
};

export default About;
