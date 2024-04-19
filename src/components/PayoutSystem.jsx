import Iphone from "../assets/iphone15r.png";

const PayoutSystem = () => {
  return (
    <div className="w-full min-h-screen flex flex-col-reverse md:flex-row items-center mt-20 gap-10 mb-20 md:mb-0">
      <div className="lg:w-1/2 px-6 lg:px-20   lg:ml-12 lg:py-5">
        <p className="text-xl lg:text-5xl">Payout System</p>
        <p className="mt-3 md:mt-5 leading-12 md:text-justify lg:text-start text-slate-300 text-sm md:text-base">
          Take advantage of our profitable payout system, allowing you to retain
          up to 80% of your trading profits, which rises to 90% after your fifth
          payout. Rest assured, Cipher's efficient payout process ensures prompt
          and smooth transactions once you fulfill the requirements (Bi-weekly
          for the 1-step and 2-step challenge).
        </p>
      </div>
      <div className="rounded-lg lg:w-1/2  mx-2 my-4 ">
        <img src={Iphone} alt="Iphone" />
      </div>
    </div>
  );
};

export default PayoutSystem;
