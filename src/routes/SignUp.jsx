import { Link } from "react-router-dom";
import Logo from "../assets/cipher-login-logo.svg";

const SignUp = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-screen bg-gradient-to-t from-blue-500 to-black flex flex-col items-center justify-center">
        <div className="w-[100px] flex flex-col items-center justify-center gap-6">
          <img src={Logo} alt="" />
          <div className="bg-[#021220] w-[500px] h-[360px] rounded-3xl shadow-2xl shadow-black flex flex-col py-6 px-12 space-y-1.5">
            <p className="text-3xl text-center">Sign Up</p>
            <h3 className="text-slate-400 text-md text-center">
              Hello! Please enter your details
            </h3>
            <div className="flex flex-col gap-3 text-black">
              <label htmlFor="email">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 outline-none placeholder:text-slate-400"
                />
              </label>
              <label htmlFor="password">
                <input
                  type="password"
                  placeholder="**********"
                  className="w-full p-3 outline-none placeholder:text-slate-400"
                />
              </label>
            </div>
            <div className="flex justify-between text-[#0072D8]">
              <label htmlFor="">
                <input type="radio" name="" id="" className="mr-1" />
                Remember me
              </label>
              <h3>Forget Password?</h3>
            </div>
            <div className="text-center">
              <p className="p-2  bg-gradient-to-r from-red-500 to-blue-600 rounded-sm  text-sm md:text-lg ">
                <Link to="/"> Sign In </Link>
              </p>
            </div>
            <p className="text-center">
              First time here?
              <a href="/signup" className="text-[#0072D8] ml-1">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
