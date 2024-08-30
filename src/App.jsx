import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import EvaluationProcess from "./components/EvaluationProcess";
import CipherChallenge from "./components/CipherChallenge";
import PayoutSystem from "./components/PayoutSystem";
import ChooseCipher from "./components/ChooseCipher";
import JoinTeamCipher from "./components/JoinTeamCipher";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="max-w-screen-3xl mx-auto">
      <Navbar />
      <HeroSection />
      <EvaluationProcess />
      <CipherChallenge />
      <PayoutSystem />
      <ChooseCipher />
      <JoinTeamCipher />
      <Faq />
      <Footer />
    </div>
  );
};

export default App;
