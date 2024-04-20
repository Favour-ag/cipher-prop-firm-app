import { Link } from "react-router-dom";
import Logo from "../assets/cipher-login-logo.svg";

const Login = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-screen bg-gradient-to-t from-blue-500 to-black flex flex-col items-center justify-center">
        <div className="w-[100px] flex flex-col items-center justify-center gap-6 mt-[-40px]">
          <img src={Logo} alt="" />
          <div className="bg-[#021220] w-[380px] md:w-[500px] md:h-[400px] rounded-3xl shadow-2xl shadow-black flex flex-col py-6 px-6 md:px-12 md:space-y-1.5">
            <p className="text-lg md:text-3xl text-center">Sign In</p>
            <h3 className="text-slate-400 text-md text-center">
              Hello! Please enter your details
            </h3>
            <div className="flex flex-col gap-3 text-white">
              <label htmlFor="email">
                Email
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 outline-none placeholder:text-slate-400 text-black"
                />
              </label>
              <label htmlFor="password">
                Password
                <input
                  type="password"
                  placeholder="**********"
                  className="w-full p-3 outline-none placeholder:text-slate-400 text-black"
                />
              </label>
            </div>
            <div className="flex justify-between text-[#0072D8] m-1">
              <label htmlFor="">
                <input type="radio" name="" id="" className="mr-1" />
                Remember me
              </label>
              <h3>
                <a href="/" className="text-[#0072D8] underline ml-1">
                  Forgot Password?
                </a>
              </h3>
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

export default Login;
