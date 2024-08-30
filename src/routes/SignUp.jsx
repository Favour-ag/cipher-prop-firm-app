import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logonew.webp";
import { z } from "zod";

// Define the Zod schema for form validation
const signUpSchema = z
  .object({
    firstName: z.string().min(1, { message: "First Name is required" }),
    lastName: z.string().min(1, { message: "Last Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    referralCode: z.string().optional(),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Confirm Password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    referralCode: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      // Validate the form data using Zod schema
      signUpSchema.parse(formData);

      // If validation passes, submit the form
      console.log("Form Submitted", formData);
      // Perform your form submission logic here (e.g., API call)
    } catch (err) {
      // If validation fails, set errors
      const formattedErrors = {};
      err.errors.forEach((error) => {
        formattedErrors[error.path[0]] = error.message;
      });
      setErrors(formattedErrors);
    }
  };

  return (
    <div className="w-full h-full">
      <div className="w-full min-h-screen bg-gradient-to-t from-blue-500 to-black flex flex-col items-center ">
        <div className="w-[100px] flex flex-col items-center justify-center gap-6">
          <form
            className="bg-[#021220] w-[385px] md:w-[500px] md:h-[800px] md:rounded-3xl shadow-2xl shadow-black flex flex-col py-6 px-6 md:px-12 space-y-1.5"
            onSubmit={handleSubmit}
          >
            <div className="flex justify-center">
              <img src={Logo} alt="Logo" className="w-16" />
            </div>
            <div className="flex flex-col gap-3 text-white">
              <label htmlFor="firstName">
                First Name*
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-3 outline-none placeholder:text-slate-400 text-black"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName}</p>
                )}
              </label>
              <label htmlFor="lastName">
                Last Name*
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-3 outline-none placeholder:text-slate-400 text-black"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName}</p>
                )}
              </label>
              <label htmlFor="email">
                Email*
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 outline-none placeholder:text-slate-400 text-black"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </label>
              <label htmlFor="referralCode">
                Referral Code (Optional)
                <input
                  type="text"
                  name="referralCode"
                  placeholder="Referral Code"
                  value={formData.referralCode}
                  onChange={handleChange}
                  className="w-full p-3 outline-none placeholder:text-slate-400 text-black"
                />
              </label>
              <label htmlFor="password">
                Password*
                <input
                  type="password"
                  name="password"
                  placeholder="**********"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-3 outline-none placeholder:text-slate-400 text-black"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
              </label>
              <label htmlFor="confirmPassword">
                Confirm Password*
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="**********"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full p-3 outline-none placeholder:text-slate-400 text-black"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">
                    {errors.confirmPassword}
                  </p>
                )}
              </label>
            </div>
            <div className="text-center">
              <label>
                <input
                  type="radio"
                  name="ageConsent"
                  className="mr-1"
                  required
                />
                I certify that I am 18 years of age or older, agree to the{" "}
                <span className="underline text-[#0072D8] pr-1">
                  <Link to="/user-agreement">User Agreement</Link>
                </span>
                and acknowledge the{" "}
                <span className="underline text-[#0072D8]">
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </span>
              </label>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="p-2 bg-gradient-to-r from-red-500 to-blue-600 rounded-sm text-sm md:text-lg"
              >
                Sign Up
              </button>
            </div>
            <p className="text-center">
              Have an account?
              <Link to="/login" className="text-[#0072D8] ml-1">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
