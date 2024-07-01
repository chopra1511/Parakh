import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import SideNav from "./SideNav";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  const [sideNav, setSideNav] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/home") {
      const handleScroll = () => {
        if (window.scrollY > 350) {
          setShowNav(true);
        } else {
          setShowNav(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      setShowNav(true); // Show the navbar on other pages
    }
  }, [location.pathname]);

  const { products } = useSelector((state) => state.products);
  const { cart } = useSelector((state) => state.cart);
  const items = products.filter((item) => item.wishlist === true);

  return (
    <>
      <div
        className={`w-full fixed top-0 left-0 right-0 z-10 transition-transform duration-700 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="flex justify-between drop-shadow-xl bg-white items-center px-5 lg:px-10 py-3">
          <div>
            <ul className="hidden sm:hidden md:hidden lg:flex gap-10 font-Poppins">
              <li
                className="hover:text-[#ee9ca7] hover:cursor-pointer"
                onClick={() => navigate("/home")}
              >
                Home
              </li>
              <li
                className="hover:text-[#ee9ca7] hover:cursor-pointer"
                onClick={() => navigate("/all-products")}
              >
                Store
              </li>
              <li className="hover:text-[#ee9ca7] hover:cursor-pointer">
                About Us
              </li>
              <li
                className="hover:text-[#ee9ca7] hover:cursor-pointer"
                onClick={() => navigate("/contact-us")}
              >
                Contact Us
              </li>
            </ul>
            <div
              className="lg:hidden"
              onClick={() => {
                setSideNav(true);
              }}
            >
              <i className="fi fi-rr-menu-burger text-black text-xl hover:cursor-pointer"></i>
            </div>
          </div>

          <div className="lg:pr-36">
            <h1
              className="text-3xl font-musky hover:cursor-pointer"
              onClick={() => navigate("/home")}
            >
              Parakh
            </h1>
          </div>

          <div>
            <ul className="flex gap-10 items-center">
              <li>
                <i className="fi fi-rr-search text-black text-xl hover:text-[#ee9ca7] hover:cursor-pointer"></i>
              </li>
              <li
                className="hidden lg:block"
                onClick={() => navigate("/account")}
              >
                <i className="fi fi-rr-circle-user text-black text-xl hover:text-[#ee9ca7] hover:cursor-pointer"></i>
              </li>
              <li
                className="hidden lg:block"
                onClick={() => navigate("/wishlist")}
              >
                <Badge badgeContent={items.length}>
                  <i className="fi fi-rr-heart text-black text-xl hover:text-[#ee9ca7] hover:cursor-pointer"></i>
                </Badge>
              </li>
              <li className="hidden lg:block" onClick={() => navigate("/cart")}>
                <Badge badgeContent={cart.length}>
                  <i className="fi fi-rr-shopping-cart text-black text-xl hover:text-[#ee9ca7] hover:cursor-pointer"></i>
                </Badge>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {sideNav && <SideNav setSideNav={setSideNav} />}
    </>
  );
};

export default NavBar;
