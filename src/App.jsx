import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import EvaluationProcess from "./components/EvaluationProcess";
import CipherChallenge from "./components/CipherChallenge";
import Payouts from "./components/Payouts";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <EvaluationProcess />
      <CipherChallenge />
      <Payouts />
    </>
  );
};

export default App;
