import { rules, phase1, phase2, phase3 } from "../constants";

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
      {/*  */}
      <div className="absolute w-[600px] h-[400px] bg-[#023564] rounded-full translate-x-[-50%] translate-y-[-50%] blur-[100px] mt-[300px] right-0"></div>
      <div className="grid lg:grid-cols-4 gap-10 z-10  place-items-center	px-24">
        <div>
          <h3 className="text-md font-semibold lg:mt-8">Rules</h3>
          <h3 className="text-md font-semibold mb-4"></h3>
          <div className="space-y-2">
            {rules.map((rule, index) => (
              <div key={index} className="flex items-center gap-2.5">
                <img
                  src={rule.icon}
                  alt="profitTarget"
                  className="w-7 h-7 mt-5"
                />
                <p className="text-neutral-300 hover:text-white text-xl mt-5">
                  {rule.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-md font-semibold lg: text-slate-400">
            Evaluation
          </h3>
          <h3 className="text-md font-semibold mb-4">Phase 1</h3>
          <div className="space-y-2">
            {phase1.map((phase1, index) => (
              <div key={index} className="flex items-center">
                <p className="text-neutral-300 hover:text-white text-xl mt-5">
                  {phase1.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-md font-semibold lg: text-slate-400">
            Verification
          </h3>
          <h3 className="text-md font-semibold mb-4">Phase 2</h3>
          <div className="space-y-2">
            {phase2.map((phase2, index) => (
              <div key={index} className="flex items-center">
                <p className="text-neutral-300 hover:text-white text-xl mt-5">
                  {phase2.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-md font-semibold lg: text-slate-400">
            Get Funded
          </h3>
          <h3 className="text-md font-semibold mb-4">Cipher Trader</h3>
          <div className="space-y-2">
            {phase3.map((phase3, index) => (
              <div key={index} className="flex items-center">
                <p className="text-neutral-300 hover:text-white text-xl mt-5">
                  {phase3.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CipherChallenge;
