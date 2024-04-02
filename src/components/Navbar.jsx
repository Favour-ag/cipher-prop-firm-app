import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/cipher.png";
import { navigation } from "../constants";

const Navbar = () => {
  const pathname = useLocation();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-1 bg-black">
      <div className="container px-6 lg:px-12 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-14 w-20 mr-2" src={logo} alt="Logo" />
            {/* <span className="text-xl tracking-tight">CIPHER</span> */}
          </div>
          <ul className="hidden lg:flex ml-14">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={toggleNavbar}
                className={`block relative font-code text-2xl  text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-sm lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-6`}
              >
                {item.title}
              </a>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-6 items-center">
            <a
              href="#"
              className="py-3 px-4  rounded-3xl bg-gradient-to-r from-red-500 to-blue-600"
            >
              Login/Register
            </a>
            <a href="#" className="py-2.5 px-3 rounded-3xl border">
              Select An Account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={toggleNavbar}
                  className={`block relative font-code text-2xl  text-n-1 transition-colors hover:text-color-1 ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                    item.url === pathname.hash
                      ? "z-2 lg:text-n-1"
                      : "lg:text-n-1/50"
                  } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                >
                  {item.title}
                </a>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a
                href="#"
                className="py-2 px-3 bg-gradient-to-r from-red-500 to-blue-600 rounded-md"
              >
                Sign In
              </a>
              <a href="#" className="py-2 px-3 rounded-md border">
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
