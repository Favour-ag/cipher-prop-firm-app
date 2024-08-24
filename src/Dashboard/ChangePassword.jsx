import React from "react";

const ChangePassword = () => {
  return (
    <div className="bg-[#0F1F3D] p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Change Password</h2>
      <form className="space-y-4">
        <div>
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="old-password"
          >
            Old Password*
          </label>
          <input
            id="old-password"
            name="old-password"
            type="password"
            className="w-full px-4 py-2 border rounded-md bg-[#0E1B2E] border-gray-700 text-white focus:outline-none"
            placeholder="Old Password"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="new-password"
          >
            Password*
          </label>
          <input
            id="new-password"
            name="new-password"
            type="password"
            className="w-full px-4 py-2 border rounded-md bg-[#0E1B2E] border-gray-700 text-white focus:outline-none"
            placeholder="Password"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="confirm-password"
          >
            Confirm Password*
          </label>
          <input
            id="confirm-password"
            name="confirm-password"
            type="password"
            className="w-full px-4 py-2 border rounded-md bg-[#0E1B2E] border-gray-700 text-white focus:outline-none"
            placeholder="Confirm Password"
          />
        </div>
        <button
          type="submit"
          className="mt-4 w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
