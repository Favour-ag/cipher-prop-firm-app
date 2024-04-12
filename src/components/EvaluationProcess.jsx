import evaluationIcon1 from "../assets/evaluationIcon1.svg";
import evaluationIcon2 from "../assets/evaluationIcon2.svg";
import evaluationIcon3 from "../assets/evaluationIcon3.svg";
import evaluationEclipse from "../assets/evaluationeclipse.svg";
import walletSvg from "../assets/walletSvg.svg";
import bitcoin from "../assets/bitcoin.svg";

const EvaluationProcess = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center mt-6 lg:mt-10 ">
      <h1 className="text-xl  lg:text-5xl text-center tracking-wide z-10">
        Our Evaluation Process
      </h1>
      <div className="flex lg:mt-8 justify-center px-0 lg:px-14 lg:gap-14 z-10">
        <div className="rounded-lg lg:w-1/2  mx-2 my-4 flex flex-col space-y-4 items-center z-10">
          <div className="border w-[350px] md:w-[600px] rounded-lg flex flex-col md:flex-row lg:justify-around px-6 lg:px-8 py-6 space-x-0 lg:space-x-8">
            <div className="w-full flex justify-center lg:align-middle z-10">
              <img
                src={evaluationIcon1}
                alt="01"
                className="w-[100px] lg:w-[300px] z-10"
              />
            </div>
            <div className="z-10">
              <p className="text-3xl lg:text-6xl">01</p>
              <p className="text-xl lg:text-4xl">CIPHER CHALLENGE</p>
              <p className="text-justify">
                Please choose your preferred trading challenge from our
                selection of cipher options, each designed with unique
                objectives and goals in mind. Embark on Phase 1, where you'll
                strive to meet the specified criteria, refining and testing your
                trading skills along the way.
              </p>
            </div>
          </div>
          <div className="border w-[350px] md:w-[600px] rounded-lg flex flex-col md:flex-row lg:justify-around px-6 lg:px-8 py-6 space-x-0 lg:space-x-8">
            <div className=" flex justify-center lg:align-middle">
              <img
                src={evaluationIcon2}
                alt="21"
                className="w-[110px] lg:w-[300px]"
              />
            </div>
            <div>
              <p className="text-3xl lg:text-6xl">02</p>
              <p className="text-xl lg:text-4xl">GET VERIFIED</p>
              <p className="text-justify">
                Upon completing Phase 1 successfully, you'll proceed to Phase 2,
                where you'll demonstrate your trading prowess and reach the
                designated milestones.
              </p>
            </div>
          </div>
          <div className="border w-[350px] md:w-[600px] rounded-lg flex flex-col md:flex-row lg:justify-around px-6 lg:px-8 py-6 space-x-0 lg:space-x-8">
            <div className="w-full flex justify-center lg:align-middle">
              <img
                src={evaluationIcon3}
                alt="03"
                className="w-[110px] lg:w-[400px]"
              />
            </div>
            <div>
              <p className="text-3xl lg:text-6xl">03</p>
              <p className="text-xl lg:text-4xl">GET FUNDED</p>
              <p className="text-justify">
                Congratulations! You've secured funding and officially become a
                Cipher trader, ready to dive into the world of profitable
                trading with our prop firm. It's time to unleash your trading
                prowess and start generating some serious profits!
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block rounded-lg w-1/2  mx-2 my-4">
          <div className="flex justify-center">
            <img src={bitcoin} alt="bitcoin" className="z-10 relative top-40" />
          </div>
          <div className="flex items-center relative top-[20%]">
            <img src={evaluationEclipse} alt="eclipse" />
            <img
              src={walletSvg}
              alt="wallet"
              className="relative right-96 z-10"
            />
          </div>
        </div>
      </div>
      <div className="hidden lg:block w-[600px] h-[400px] bg-[#023564]  border absolute  translate-x-[-50%] translate-y-[-50%] blur-[100px] top-[260%] right-[-290px]"></div>
    </div>
  );
};

export default EvaluationProcess;
