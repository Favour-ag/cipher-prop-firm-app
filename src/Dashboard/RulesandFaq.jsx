import React from "react";
import SideNav from "./SideNav";
import AccountInfo from "../components/AccountInfo";
import Faq from "../components/Faq";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const RulesandFaq = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#0E1B2E] text-white">
      <SideNav isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {/* Menu button for mobile */}
      <button
        onClick={toggleSidebar}
        className="p-4 bg-[#0C2E4E] text-white lg:hidden fixed top-0 left-0 z-20"
      >
        ☰
      </button>
      {/* Main Content */}
      <div className="flex-1 p-6 lg:p-8 xl:p-4 2xl:p-16 lg:ml-0 [background:radial-gradient(100%_125%_at_50%_100%,#0072D8_0%,#000_70%)]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-screen-xl mx-auto">
            {/* Account Section */}
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-4 lg:space-y-0">
              <AccountInfo />

              <div className="mt-4 lg:mt-0 flex items-center lg:pb-4 space-x-3">
                <img src="" alt="" className="w-16 h-16 rounded-full" />
                <p className="mt-2 text-center lg:text-left">Sophomore</p>
              </div>
            </div>

            {/* Rules and FAQ */}
            <div>
              <h1>Trading Rules</h1>
              {/* Step1 */}
              <div>
                <h2>1STEP</h2>
                <div>
                  <p>Do you have any hidden rules?</p>
                  <p>No there are no hidden rules at Cipher.</p>
                </div>
                <div>
                  <p>What is the maximum daily loss?</p>
                  <p>
                    The maximum daily loss is 3% on stage 1 and also when you
                    become a cipher trader.
                  </p>
                </div>
                <div>
                  <p>What is the overall maximum loss?</p>
                  <p>
                    The overall maximum loss is 8% on stage 1 and also when you
                    become a cipher trader.
                  </p>
                </div>
                <div>
                  <p>Are the maximum drawdowns trailing or static?</p>
                  <p>
                    To not violate or breach your account via losses. Don’t
                    loose more than your daily loss per day which is 3% and
                    don’t loose more than 8% overall of the initial balance.
                  </p>
                </div>
                <div>
                  <p>Can you hold trades overnights and the weekend?</p>
                  <p>Yes you can do that on Cipher.</p>
                </div>
                <div>
                  <p>What is the profit target?</p>
                  <p>The profit target of 1Step is 10%. </p>
                </div>
                <div>
                  <p>What is the daily maximum limit reset time?</p>
                  <p>The maximum daily limit resets at 5pm EST at Cipher. </p>
                </div>
              </div>
              {/* Step2 */}
              <div>
                <h2>2STEP</h2>
                <div>
                  <p>Do you have any hidden rules?</p>
                  <p>No there are no hidden rules at Cipher.</p>
                </div>
                <div>
                  <p>What is the maximum daily loss?</p>
                  <p>
                    The maximum daily loss is 5% on stage 1 and stage 2. This
                    also continues when you become a cipher trader.
                  </p>
                </div>
                <div>
                  <p>What is the overall maximum loss?</p>
                  <p>
                    The overall maximum loss is 10% on stage 1 and stage 2. This
                    also continues when you become a cipher trader.
                  </p>
                </div>
                <div>
                  <p>Are the maximum drawdowns trailing or static?</p>
                  <p>
                    To not violate or breach your account via losses. Don’t
                    loose more than your daily loss per day which is 5% and
                    don’t loose more than 10% overall of the initial balance.
                  </p>
                </div>
                <div>
                  <p>Can you hold trades overnights and the weekend?</p>
                  <p>Yes you can do that on Cipher.</p>
                </div>
                <div>
                  <p>What is the profit target?</p>
                  <p>
                    The profit target of 2Step is 7% on stage one and 5% on
                    stage two.
                  </p>
                </div>
                <div>
                  <p>What is the daily maximum limit reset time?</p>
                  <p>The maximum daily limit resets at 5pm EST at Cipher.</p>
                </div>
              </div>
            </div>
            <Faq />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RulesandFaq;
