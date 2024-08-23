import { accountStatus } from "../constants";

const AccountStatus = () => {
  return (
    <div className="bg-[#01192F] p-6 rounded-lg mb-6 border ">
      <h1 className="font-semibold text-lg text-center">Account Status</h1>
      <div className="flex justify-between">
        <p>Status</p>
        <p className="font-semibold bg-[#1D9C0833] px-1 rounded-md text-[#1D9C08]">
          +Active
        </p>
      </div>
      <div>
        {accountStatus.map((status, index) => (
          <div
            key={index}
            className="flex justify-between mt-1.5  p-1"
            style={{ backgroundColor: status.color }}
          >
            <div className="flex gap-2 ">
              <p>{status.title}</p>
            </div>
            <p>{status.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountStatus;
