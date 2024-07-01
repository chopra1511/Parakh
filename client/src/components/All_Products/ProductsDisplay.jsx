import React, { useEffect, useState } from "react";
import "@flaticon/flaticon-uicons/css/all/all.css";
import NavBar from "../NavBar/NavBar";
import FooterNav from "../NavBar/FooterNav";
import { Button, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getUserCart } from "../../store/reducers/cartSlice";
import { useNavigate } from "react-router";
import { addToWishlist, getUserWishlist, removeFromWishlist } from "../../store/reducers/productSlice";

const ProductsDisplay = ({ categoryType, category, emoteImg, products }) => {
  const [isInWishlist, setIsInWishlist] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { wishlist } = useSelector((state) => state.products);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    // useEffect(() => {
    //   dispatch(getUserWishlist());
    // }, [dispatch]);
  
  // useEffect(() => {
  //   products.map((product) => {
  //     if (wishlist.some((item) => item.product === product._id)) {
  //       setIsInWishlist(true);
  //     } else {
  //       setIsInWishlist(false);
  //     }
  //   })
  //   }, [wishlist, products]);

  const addCartHandler = (id) => {
    products.map((product) => {
      if (product._id === id) {
        dispatch(addToCart(product))
          .then(() => {
            dispatch(getUserCart());
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  const wishlistHandler = (id) => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(id));
    } else {
      dispatch(addToWishlist(id));
    }
  };

  return (
    <div className="bg-[#f4f4f4]">
      <div className="fixed top-0 right-0 left-0 z-20">
        <NavBar />
      </div>

      <div className={`${products.length === 0 ? "h-screen" : ""}`}>
        <div className="flex items-center relative px-5 mt-14 py-10 lg:px-20 lg:py-20 overflow-hidden">
          <div className="w-full flex justify-center items-center text-center">
            <div className="z-10 relative py-10 lg:py-20 px-10 lg:px-20">
              <h1 className="text-2xl md:text-3xl font-Cursive font-bold text-[#f2707f]">
                {categoryType}
              </h1>
              <h1 className="text-4xl md:text-5xl font-Poppins font-semibold">
                {category}
              </h1>
              {products.length === 0 ? (
                <div>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => navigate("/all-products")}
                    className="button-shiny-effect"
                    sx={{
                      marginTop: 5,
                      borderRadius: 10,
                      fontFamily: "Poppins",
                      textTransform: "capitalize",
                      backgroundColor: "#f2707f",
                      ":hover": {
                        backgroundColor: "#F7475C",
                      },
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    Add Now
                  </Button>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="absolute rotate-45 -top-20 -right-20 lg:-top-44 lg:-right-44 z-0">
              <div className="p-10 lg:p-20 rounded-full bg-white/40">
                <div className="p-10 lg:p-20 rounded-full bg-white">
                  <img
                    src={emoteImg}
                    alt="Emote"
                    className="w-24 lg:w-56 opacity-50"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 pb-40 py-5 px-5 lg:px-40">
          {products.map((product, index) => (
            <div key={index} className="drop-shadow-xl w-full cursor-pointer">
              <div className="relative w-full flex flex-col justify-center items-center h-56 md:h-72 bg-gradient-to-b from-[#ffdde1] to-[#ee9ca7] overflow-hidden group">
                <img
                  src={product.image}
                  alt=""
                  className="w-36 md:w-44 object-cover transition ease-in-out duration-700 group-hover:scale-110  md:group-hover:scale-150 mix-blend-darken"
                />
                <div className="w-full bg-[#ee9ca7] absolute bottom-0 py-2 flex justify-center gap-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <IconButton onClick={() => addCartHandler(product._id)}>
                    <i className="fi fi-sr-shopping-cart-add text-white text-xl pt-1 px-2 rounded-full"></i>
                  </IconButton>
                  <IconButton onClick={() => wishlistHandler(product._id)}>
                    <i
                      className={`fi fi-sr-heart  text-xl pt-1 px-2 rounded-full ${
                        isInWishlist ? "text-[#FF0000]" : "text-white"
                      }`}
                    ></i>
                  </IconButton>
                </div>
              </div>
              <div className="p-2 text-center">
                <h1 className="text-md font-Poppins font-semibold">
                  {product.name}
                </h1>
                <h1 className="text-sm font-Poppins font-medium">
                  ₹{product.price}
                  {product.discount ? (
                    <span className="pl-2 line-through text-slate-600 text-[12px]">
                      ₹{product.discount}{" "}
                    </span>
                  ) : (
                    ""
                  )}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 right-0 left-0 lg:hidden">
        <FooterNav />
      </div>
    </div>
  );
};

export default ProductsDisplay;
