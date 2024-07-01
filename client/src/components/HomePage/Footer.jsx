import React, { useState } from "react";
import { useNavigate } from "react-router";

const Footer = () => {
  const [isQuickLinksOpen, setQuickLinksOpen] = useState(false);
  const [isStorePolicyOpen, setStorePolicyOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="px-5 py-10 lg:px-20 lg:pt-20 bg-gradient-to-b from-[#ffdde1] to-[#ee9ca7]">
      <div className="flex flex-col gap-10 lg:flex-row justify-between">
        <div className="lg:w-1/3 text-center lg:text-left">
          <h1 className="text-3xl font-musky lg:pl-5 drop-shadow-md">Parakh</h1>
          <h1 className="text-xl tracking-wider font-Cursive font-bold text-[#f2707f]">
            Let's find the best
          </h1>
          <p className="mt-5 font-Quicksand font-semibold">
            Parakh is one of the best sellers with the widest range of Fashion
            Jewellery.
          </p>
          <div className="mt-10 lg:w-12 cursor-pointer transition ease-in-out duration-700 hover:text-[#f2707f] hover:drop-shadow-xl">
            <a
              href="https://www.instagram.com/_parakh._/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fi fi-brands-instagram text-3xl pt-2 px-2"></i>
            </a>
          </div>
        </div>

        <div className="lg:flex lg:justify-between">
          <div className="lg:px-5">
            <div className="flex justify-between pb-1 border-b-2 border-[#f2707f]">
              <h1 className="font-Poppins font-medium">Quick Links</h1>
              <button
                className="lg:hidden hover:text-[#f2707f]"
                onClick={() => setQuickLinksOpen(!isQuickLinksOpen)}
              >
                {isQuickLinksOpen ? (
                  <i className="fi fi-rr-angle-small-up"></i>
                ) : (
                  <i className="fi fi-rr-angle-small-down"></i>
                )}
              </button>
            </div>

            <ul
              className={`mt-2 text-sm font-Poppins transition-all duration-700 ease-in-out overflow-hidden ${
                isQuickLinksOpen
                  ? "max-h-screen opacity-100"
                  : "max-h-0 opacity-0"
              } lg:max-h-screen lg:opacity-100`}
            >
              <li className="leading-loose hover:text-[#f2707f] cursor-pointer hover:translate-x-2">
                Search
              </li>
              <li className="leading-loose hover:text-[#f2707f] cursor-pointer hover:translate-x-2">
                Blogs
              </li>
              <li className="leading-loose hover:text-[#f2707f] cursor-pointer hover:translate-x-2">
                About Us
              </li>
              <li className="leading-loose hover:text-[#f2707f] cursor-pointer hover:translate-x-2">
                Contact Us
              </li>
            </ul>
          </div>

          <div className="mt-10 lg:mt-0 lg:ml-10 lg:px-5">
            <div className="flex justify-between pb-1 border-b-2 border-[#f2707f]">
              <h1 className="font-Poppins font-medium">Store Policy</h1>
              <button
                className="lg:hidden hover:text-[#f2707f]"
                onClick={() => setStorePolicyOpen(!isStorePolicyOpen)}
              >
                {isStorePolicyOpen ? (
                  <i className="fi fi-rr-angle-small-up"></i>
                ) : (
                  <i className="fi fi-rr-angle-small-down"></i>
                )}
              </button>
            </div>
            <ul
              className={`mt-2 text-sm font-Poppins transition-all duration-700 ease-in-out overflow-hidden ${
                isStorePolicyOpen
                  ? "max-h-screen opacity-100"
                  : "max-h-0 opacity-0"
              } lg:max-h-screen lg:opacity-100`}
            >
              <li className="leading-loose hover:text-[#f2707f] cursor-pointer hover:translate-x-2">
                Terms of Service
              </li>
              <li className="leading-loose hover:text-[#f2707f] cursor-pointer hover:translate-x-2">
                Shipping Policy
              </li>
              <li className="leading-loose hover:text-[#f2707f] cursor-pointer hover:translate-x-2">
                Refund Policy
              </li>
              <li className="leading-loose hover:text-[#f2707f] cursor-pointer hover:translate-x-2">
                Privacy Policy
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:w-1/3 text-center lg:text-left mt-10 lg:mt-0">
          <h1 className="text-2xl font-Cursive font-bold text-[#f2707f]">
            Sign Up to Newsletter
          </h1>
          <p className="mt-5 font-Quicksand font-semibold">
            Enter your Email ID to get latest updates on sales and offers.
          </p>
          <div>
            <input
              type="text"
              className="bg-transparent px-5 py-3 outline-none text-center font-Poppins border-b-2 border-[#f2707f]"
            />
            <button className="mt-5 bg-white text-[#f2707f] hover:text-white px-5 lg:px-10 border-2 border-[#f2707f] transition ease-in-out duration-700 hover:bg-[#f2707f] hover:drop-shadow-xl py-3 font-Poppins font-medium rounded-full">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="mt-20 pb-10 text-center text-white">
        <h1 className="mb-2">
          Ⓒ<span className="font-Poppins">Parakh</span>
        </h1>
        <h1 className="font-Poppins text-sm">
          'Let's Find The Best' with Parakh
        </h1>
      </div>
    </div>
  );
};

export default Footer;
