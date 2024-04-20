import { Link } from "react-router-dom";
import Logo from "../assets/cipher-login-logo.svg";

const SignUp = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full min-h-screen bg-gradient-to-t from-blue-500 to-black flex flex-col items-center ">
        <div className="w-[100px] flex flex-col items-center justify-center gap-6">
          <div className="bg-[#021220] w-[385px] md:w-[500px] md:h-[800px] md:rounded-3xl shadow-2xl shadow-black flex flex-col py-6  px-6 md:px-12 space-y-1.5">
            <div className="flex justify-center">
              <img src={Logo} alt="" className="w-16" />
            </div>
            <div className="flex flex-col gap-3 text-white">
              <label htmlFor="name">
                First Name*
                <input
                  type="email"
                  placeholder="First Name"
                  className="w-full p-3 outline-none placeholder:text-slate-400 text-black"
                />
              </label>
              <label htmlFor="name">
                Last Name*
                <input
                  type="name"
                  placeholder="Last Name"
                  className="w-full p-3 outline-none placeholder:text-slate-400 text-black"
                />
              </label>
              <label htmlFor="email">
                Email*
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 outline-none placeholder:text-slate-400 text-black"
                />
              </label>
              <label htmlFor="number">
                Referral Code (Optional)
                <input
                  type="number"
                  placeholder="Referral Code"
                  className="w-full p-3 outline-none placeholder:text-slate-400 text-black"
                />
              </label>
              <label htmlFor="password">
                Password*
                <input
                  type="password"
                  placeholder="**********"
                  className="w-full p-3 outline-none placeholder:text-slate-400 text-black"
                />
              </label>
              <label htmlFor="password">
                Confirm Password*
                <input
                  type="password"
                  placeholder="**********"
                  className="w-full p-3 outline-none placeholder:text-slate-400 text-black"
                />
              </label>
            </div>
            <div className="text-center">
              <label htmlFor="">
                <input type="radio" name="" id="" className="mr-1" />I certify
                that I am 18 years of age or older, agree to the{" "}
                <span className="underline text-[#0072D8] pr-1">
                  <a href="/" className="">
                    User Agreement
                  </a>
                </span>
                and acknowledge the{" "}
                <span className="underline text-[#0072D8]">
                  <a href="/" className="">
                    Privacy Policy
                  </a>
                </span>
              </label>
            </div>
            <div className="text-center">
              <p className="p-2  bg-gradient-to-r from-red-500 to-blue-600 rounded-sm  text-sm md:text-lg ">
                <Link to="/"> Sign Up </Link>
              </p>
            </div>
            <p className="text-center">
              Have an account?
              <a href="/login" className="text-[#0072D8] ml-1">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
