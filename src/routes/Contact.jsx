import { motion } from "framer-motion";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  useEffect(() => {}, []);
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto min-h-screen flex justify-center md:mb-6"
      >
        <div className="w-full flex flex-col p-6 ">
          <p className="text-4xl text-center mb-12">Contact Us</p>
          <div className="px-3 flex flex-col md:flex-row gap-3 md:gap-8">
            <div className="w-full md:w-1/2">
              <p>First Name *</p>
              <input
                type="text"
                placeholder="First Name"
                className="bg-inherit border placeholder:text-slate-500 rounded-md p-2 md:py-4 w-full"
              />
            </div>
            <div className="w-full md:w-1/2">
              <p>Last Name *</p>
              <input
                type="text"
                placeholder="Last Name"
                className="bg-inherit border placeholder:text-slate-500 rounded-md p-2 w-full md:py-4"
              />
            </div>
          </div>
          <div className="flex px-3 flex-col  gap-3 md:gap-8 pt-3">
            <div className="w-full">
              <p>Email *</p>
              <input
                type="text"
                placeholder="Email"
                className="bg-inherit border placeholder:text-slate-500 rounded-md p-2 w-full md:py-4"
              />
            </div>
            <div className="w-full">
              <p>Subject *</p>
              <input
                type="text"
                placeholder="Subject"
                className="bg-inherit border placeholder:text-slate-500 rounded-md p-2 w-full md:py-4"
              />
            </div>
          </div>
          <div className="pt-4 px-3 ">
            <p>Message *</p>
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              className="bg-inherit border rounded-md placeholder:text-slate-500 px-2 py-4 w-full h-full"
            ></textarea>
          </div>
          <div className="mt-10  pl-3 ">
            <a
              href="#"
              className="py-3 px-4  bg-gradient-to-r from-red-500 to-blue-600 rounded-3xl"
            >
              Submit
            </a>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default Contact;
