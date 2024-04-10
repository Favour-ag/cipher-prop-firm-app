import { chooseCipher } from "../constants";

const ChooseCipher = () => {
  return (
    <div className="">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        Why Choose Cipher?
      </h2>
      <div className="flex flex-wrap justify-center mt-[-50px] lg:mr-32">
        {chooseCipher.map((chooseCipher, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 px-4 lg:px-20 py-3"
          >
            <div className="[background:radial-gradient(125%_125%_at_50%_10%,#0072D8_20%,#000_70%)] rounded-2xl p-6 text-md border border-neutral-800 font-thin lg:h-[300px] lg:w-[350px] space-y-2">
              <div className="flex justify-center lg:justify-start  text-center">
                <img
                  className="w-[100px] h-[100px] mr-6 rounded-full border border-neutral-300"
                  src={chooseCipher.icon}
                  alt="Icon"
                />
              </div>
              <p className="lg:text-lg">{chooseCipher.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseCipher;
