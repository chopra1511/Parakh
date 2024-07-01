/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import Badge from "@mui/material/Badge";
import { useLocation, useNavigate } from "react-router";
import { useSelector } from "react-redux";

const FooterNav = () => {
  const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/home") {
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const isVisible = currentScrollPos > 350; // Adjust this value as needed
        setIsVisible(isVisible);
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      setIsVisible(true); // Show the footer nav on other pages
    }
  }, [location.pathname]);

  const { products } = useSelector((state) => state.products);
  const { cart } = useSelector((state) => state.cart);
  const items = products.filter((item) => item.wishlist === true);

  return (
    <div className={`footer-nav ${isVisible ? "visible" : ""}`}>
      <nav className="bg-white items-center lg:px-10 py-3">
        <ul className="flex px-5 justify-between items-center">
          <li
            className="flex flex-col items-center"
            onClick={() => navigate("/home")}
          >
            <i className="fi fi-rr-home text-black text-xl hover:text-[#ee9ca7] hover:cursor-pointer"></i>
            <h1 className="text-[12px] font-Poppins">Home</h1>
          </li>
          <li
            className="flex flex-col items-center"
            onClick={() => navigate("/wishlist")}
          >
            <Badge badgeContent={items.length}>
              <i className="fi fi-rr-heart text-black text-xl hover:text-[#ee9ca7] hover:cursor-pointer"></i>
            </Badge>
            <h1 className="text-[12px] font-Poppins">Wishlist</h1>
          </li>
          <li className="flex flex-col items-center">
            <i className="fi fi-rr-apps text-black text-xl hover:text-[#ee9ca7] hover:cursor-pointer"></i>
            <h1 className="text-[12px] font-Poppins">Collections</h1>
          </li>
          <li
            className="flex flex-col items-center"
            onClick={() => navigate("/account")}
          >
            <i className="fi fi-rr-user text-black text-xl hover:text-[#ee9ca7] hover:cursor-pointer"></i>
            <h1 className="text-[12px] font-Poppins">Account</h1>
          </li>

          <li
            className="flex flex-col items-center"
            onClick={() => navigate("/cart")}
          >
            <Badge badgeContent={cart.length}>
              <i className="fi fi-rr-shopping-cart text-black text-xl hover:text-[#ee9ca7] hover:cursor-pointer"></i>
            </Badge>
            <h1 className="text-[12px] font-Poppins">Cart</h1>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default FooterNav;
