import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const PayoutForm = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add any form validation or submission logic
    // After submission, navigate to the withdrawal page
    navigate("/withdrawal"); // Replace '/withdrawal' with the correct path to your withdrawal page
  };

  return (
    <div className="bg-gray-800 text-white p-8 rounded-lg shadow-md w-full max-w-lg mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Request a New Payout</h1>
      <p className="text-red-500 mb-6">Note: Minimum withdrawal is 1%</p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="account">
            Choose Account Login ID*
          </label>
          <select
            id="account"
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
          >
            <option>Select Account</option>
            {/* Add your account options here */}
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-1" htmlFor="amount">
            Amount ($)*
          </label>
          <input
            type="text"
            id="amount"
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
            placeholder="Amount must be less than or equal to eligible amount"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1" htmlFor="paymentMethod">
            Preferred Payment Method*
          </label>
          <select
            id="paymentMethod"
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
          >
            <option>Select Payment Method</option>
            {/* Add your payment method options here */}
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-1" htmlFor="wallet">
            Wallet Details*
          </label>
          <input
            type="text"
            id="wallet"
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
            placeholder="Please input your wallet address"
          />
          <small className="text-gray-400">
            Please put in your wallet address, your payout will be sent to your
            wallet
          </small>
        </div>

        <div className="mb-6">
          <label className="block mb-1">
            I (the contractor) will be responsible for:
          </label>
          <ul className="text-gray-400">
            <li>
              <input type="checkbox" className="mr-2" /> Lorem ipsum dolor sit
              amet consectetur adipiscing elit.
            </li>
            <li>
              <input type="checkbox" className="mr-2" /> Lorem ipsum dolor sit
              amet consectetur adipiscing elit.
            </li>
            <li>
              <input type="checkbox" className="mr-2" /> Lorem ipsum dolor sit
              amet consectetur adipiscing elit.
            </li>
          </ul>
        </div>

        <div className="bg-gray-700 p-4 rounded-lg mb-4">
          <h2 className="text-lg font-bold mb-2">Payout Summary</h2>
          <div className="flex justify-between mb-1">
            <span>Total Account Profit</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between mb-1">
            <span>Eligible Amount</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between mb-1">
            <span>Payout Amount</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between mb-1">
            <span>Payout Percentage</span>
            <span>0%</span>
          </div>
          <div className="flex justify-between mb-1">
            <span>Your Profit Split</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between mb-1">
            <span>Our Profit Split</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between">
            <span>Account Balance</span>
            <span>$0.00</span>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg text-white font-bold hover:bg-gradient-to-l"
        >
          Request Payout
        </button>
      </form>
    </div>
  );
};

export default PayoutForm;
