import React from "react";
import { Link } from "react-router-dom";

const AccountInfo = () => {
  return (
    <div className="bg-inherit flex w-full space-x-3">
      <select
        name="accountID"
        id="accountid"
        className="bg-[#575757] border border-white rounded-md px-1"
      >
        <option value="Account 1 - #45b650">Account 1 - #45b650</option>
        <option value="Account 1 - #45b650">Account 2 - #45b651</option>
      </select>
      <div>
        <p className="py-2 px-4   bg-gradient-to-r from-red-500 to-blue-600 rounded-md">
          <Link to="/"> New Evaluation </Link>
        </p>
      </div>
    </div>
  );
};

export default AccountInfo;
