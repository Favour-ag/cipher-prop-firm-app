import React from "react";
import HeroSection from "../components/HeroSection";
import EvaluationProcess from "../components/EvaluationProcess";
import CipherChallenge from "../components/CipherChallenge";
import PayoutSystem from "../components/PayoutSystem";
import ChooseCipher from "../components/ChooseCipher";
import JoinTeamCipher from "../components/JoinTeamCipher";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <EvaluationProcess />
      <CipherChallenge />
      <PayoutSystem />
      <ChooseCipher />
      <JoinTeamCipher />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
