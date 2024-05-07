import React from "react";
import SideNav from "./SideNav";
import AccountInfo from "../components/AccountInfo";
import Faq from "../components/Faq";

const RulesandFaq = () => {
  return (
    <div className="flex bg-inherit w-full h-full">
      <SideNav />
      <div className="w-full h-full p-3">
        <AccountInfo />
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
                The maximum daily loss is 3% on stage 1 and also when you become
                a cipher trader.
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
                To not violate or breach your account via losses. Don’t loose
                more than your daily loss per day which is 3% and don’t loose
                more than 8% overall of the initial balance.
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
                The maximum daily loss is 5% on stage 1 and stage 2. This also
                continues when you become a cipher trader.
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
                To not violate or breach your account via losses. Don’t loose
                more than your daily loss per day which is 5% and don’t loose
                more than 10% overall of the initial balance.
              </p>
            </div>
            <div>
              <p>Can you hold trades overnights and the weekend?</p>
              <p>Yes you can do that on Cipher.</p>
            </div>
            <div>
              <p>What is the profit target?</p>
              <p>
                The profit target of 2Step is 7% on stage one and 5% on stage
                two.
              </p>
            </div>
            <div>
              <p>What is the daily maximum limit reset time?</p>
              <p>The maximum daily limit resets at 5pm EST at Cipher.</p>
            </div>
          </div>
          <Faq />
        </div>
      </div>
    </div>
  );
};

export default RulesandFaq;
