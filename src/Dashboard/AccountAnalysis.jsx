import { accountAnalysis } from "../constants";

const AccountAnalysis = () => {
  return (
    <div className="border p-4 rounded-xl  bg-[#01192F]">
      <h1 className="font-semibold text-lg text-center">Account Analysis</h1>
      <div>
        {accountAnalysis.map((analysis, index) => (
          <div
            key={index}
            className="flex justify-between mt-1.5  p-1"
            style={{
              color: analysis.color,
              backgroundColor: analysis.backgroundColor,
            }}
          >
            <p>{analysis.title}</p>
            <p>{analysis.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountAnalysis;
