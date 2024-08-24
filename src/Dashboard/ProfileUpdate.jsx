import React from "react";

const ProfileUpdate = () => {
  return (
    <div className="bg-[#0F1F3D] p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">
        Update Profile and Address
      </h2>
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="first-name"
            >
              First Name*
            </label>
            <input
              id="first-name"
              name="first-name"
              type="text"
              className="w-full px-4 py-2 border rounded-md bg-[#0E1B2E] border-gray-700 text-white focus:outline-none"
              placeholder="First Name"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="last-name"
            >
              Last Name*
            </label>
            <input
              id="last-name"
              name="last-name"
              type="text"
              className="w-full px-4 py-2 border rounded-md bg-[#0E1B2E] border-gray-700 text-white focus:outline-none"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email*
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full px-4 py-2 border rounded-md bg-[#0E1B2E] border-gray-700 text-white focus:outline-none"
            placeholder="Email Address"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="street-address"
          >
            Street Address*
          </label>
          <input
            id="street-address"
            name="street-address"
            type="text"
            className="w-full px-4 py-2 border rounded-md bg-[#0E1B2E] border-gray-700 text-white focus:outline-none"
            placeholder="Address"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="postal-code"
            >
              Postal Code*
            </label>
            <input
              id="postal-code"
              name="postal-code"
              type="text"
              className="w-full px-4 py-2 border rounded-md bg-[#0E1B2E] border-gray-700 text-white focus:outline-none"
              placeholder="Postal code"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="city">
              City*
            </label>
            <input
              id="city"
              name="city"
              type="text"
              className="w-full px-4 py-2 border rounded-md bg-[#0E1B2E] border-gray-700 text-white focus:outline-none"
              placeholder="City"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="country">
            Country*
          </label>
          <input
            id="country"
            name="country"
            type="text"
            className="w-full px-4 py-2 border rounded-md bg-[#0E1B2E] border-gray-700 text-white focus:outline-none"
            placeholder="Country"
          />
        </div>
        <button
          type="submit"
          className="mt-4 w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default ProfileUpdate;
