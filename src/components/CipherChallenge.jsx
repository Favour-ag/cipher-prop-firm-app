import React from "react";

const CipherChallenge = () => {
  return (
    <div
      id="cipherchallenge"
      className="w-full min-h-screen flex flex-col items-center mt-6 lg:mt-20"
    >
      <h1 className="text-4xl sm:text-6xl lg:text-5xl text-center tracking-wide">
        Choose Your Cipher Challenge
      </h1>
      <div className="flex space-x-6">
        <a
          href="#"
          className="py-2 px-3 bg-gradient-to-r from-red-500 to-blue-600 rounded-md"
        >
          Sign In
        </a>
        <a href="#" className="py-2 px-3 rounded-md border">
          Create an account
        </a>
      </div>
    </div>
  );
};

export default CipherChallenge;
