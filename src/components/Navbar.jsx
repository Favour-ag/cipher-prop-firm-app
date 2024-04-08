import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/cipher.png";
import { navigation } from "../constants";
import { socials } from "../constants";

const Navbar = () => {
  const pathname = useLocation();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#010f1c]">
      <div className="container px-3 py-3 lg:py-0 lg:px-20 mx-auto relative lg:text-sm">
        {/* DESKTOP VIEW */}
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <div className="flex items-center flex-shrink-0">
            <img className="h-14 w-20 mr-2" src={logo} alt="Logo" />
          </div>
          {/* NAVLIST */}
          <ul className="hidden lg:flex ml-14">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={toggleNavbar}
                className={`block relative font-code text-2xl  text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-sm lg:font-semibold hover:text-slate-300 ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-6`}
              >
                {item.title}
              </a>
            ))}
          </ul>
          <div className="flex flex-end gap-3">
            {/* BUTTONS */}
            <div className="hidden lg:flex justify-center space-x-6 items-center">
              <a
                href="#login"
                className="py-3 px-4   bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl"
              >
                Login/Register
              </a>
              <div className="py-3 px-0.5  bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl">
                <a
                  href="#cipherchallenge"
                  className="py-3 px-3  bg-[#010f1c] rounded-3xl"
                >
                  Select An Account
                </a>
              </div>
            </div>
            {/* SELECT ACCOUNT BUTTON */}
            <div className="block lg:hidden">
              <div className="py-[3px] px-0.5  bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl">
                <a
                  href="#cipherchallenge"
                  className="py-1 px-1.5  bg-[#010f1c] rounded-3xl text-sm"
                >
                  Select An Account
                </a>
              </div>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
        {/* MOBILE MENU */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-[#010f1c] w-full h-full flex flex-col items-center text-center lg:hidden gap-3">
            <div className=" w-[400px] h-[400px] bg-[#023564] rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] blur-[100px]"></div>
            <ul className="mt-12 z-10">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={toggleNavbar}
                  className={`block text-2xl    hover:text-slate-200 ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-2.5 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                    item.url === pathname.hash
                      ? "z-2 lg:text-n-1"
                      : "lg:text-n-1/50"
                  } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                >
                  {item.title}
                </a>
              ))}
            </ul>
            <div className="z-10">
              <p className="text-2xl">Follow us on social media</p>
              {/* SOCIAL MEDIA  */}
              <div>
                <ul className="flex items-center justify-center gap-2">
                  {socials.map((social) => (
                    <a key={social.id} href={social.url}>
                      <img src={social.icon} alt="SocialMedia" />
                    </a>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col text-center space-y-3 w-[90%] mt-8 z-10">
              <a
                href="#"
                className="py-2 px-6 bg-gradient-to-r from-red-500 to-blue-600 text-slate-200 text-2xl"
              >
                Dashboard
              </a>
              <div className="py-0.5 px-0.5  bg-gradient-to-r from-red-500 to-blue-600">
                <div className="py-2 px-0.5 bg-[#010f1c] text-2xl">
                  <a href="#">Select An Account</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
