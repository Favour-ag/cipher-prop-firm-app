import Iphone from "../assets/iPhone15.png";

const PayoutSystem = () => {
  return (
    <div className="w-full min-h-screen flex flex-col-reverse md:flex-row items-center mt-6 lg:mt-20 gap-10">
      <div className="lg:w-1/2 px-5 lg:px-20   lg:ml-12 lg:py-5">
        <p className="text-4xl lg:text-5xl">Payout System</p>
        <p className="mt-5 leading-12 text-justify lg:text-start">
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
