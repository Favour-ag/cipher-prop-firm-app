import { chooseCipher } from "../constants";

const ChooseCipher = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-xl leading-10 sm:text-5xl lg:text-5xl text-center mt-10 lg:my-20">
        Why Choose Cipher?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-3 md:gap-8 p-4 md:p-0 lg:px-7">
        {chooseCipher.map((chooseCipher, index) => (
          <div key={index} className=" flex justify-center ">
            <div
              className="[background:radial-gradient(125%_125%_at_50%_10%,#0072D8_20%,#000_70%)] rounded-2xl p-6 text-md border border-neutral-800 font-thin lg:h-[300px]
            w-full  space-y-2"
            >
              <div className="flex justify-center lg:justify-start  text-center">
                <img
                  className="w-[80px] h-[100px] mr-6   border-neutral-300"
                  src={chooseCipher.icon}
                  alt="Icon"
                />
              </div>
              <p className="text-center text-sm lg:text-lg text-slate-200">
                {chooseCipher.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseCipher;
