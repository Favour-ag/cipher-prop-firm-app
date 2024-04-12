import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex justify-center">
        <div className="w-full flex flex-col   pt-10">
          <p className="text-4xl">Contact Us</p>
          <div className=" gap-3">
            <label htmlFor="Name">
              First Name
              <input type="text" />
            </label>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
