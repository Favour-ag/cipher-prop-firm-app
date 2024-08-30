import Iphone from "../assets/iphone15r.png";

const PayoutSystem = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
      <div className="h-full flex flex-col justify-center p-4 md:p-0 lg:pl-7">
        <p className="text-xl lg:text-5xl">Payout System</p>
        <p className="mt-3 md:mt-5 leading-12  md:text-justify lg:text-start text-slate-300 text-sm md:text-base">
          Take advantage of our profitable payout system, allowing you to retain
          up to 80% of your trading profits, which rises to 90% after your fifth
          payout. Rest assured, Cipher's efficient payout process ensures prompt
          and smooth transactions once you fulfill the requirements (Bi-weekly
          for the 1-step and 2-step challenge).
        </p>
      </div>
      <div className="rounded-lg   mx-2 h-full flex justify-center">
        <img src={Iphone} alt="Iphone" />
      </div>
    </div>
  );
};

export default PayoutSystem;
