import React from "react";

const JoinTeamCipher = () => {
  return (
    <div>
      <p>Join our Team at Cipher</p>
      <p>
        The industry's most affordable option with advanced technology to help
        you achieve your trading goals. We believe in your potential and are
        here to support your success. Additionally, join our platform to learn
        more about our academy and further enhance your trading skills.
      </p>
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
          Affiliate Program
        </a>
      </div>
      <div>
        <div>
          <p>
            Stay ahead of the curve with exclusive access to promotions,
            discounts, and our newsletter.
          </p>
          <p>Get instant access to weekly newsletter</p>
        </div>
        <div>
          <p>
            For more Information about our Academy join our community on Discord
          </p>
          <a
            href="#"
            className="py-3 px-4   bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl"
          >
            Join The Community
          </a>
        </div>
      </div>
    </div>
  );
};

export default JoinTeamCipher;
