import React, { useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import empty from "../../assets/empty.gif";
import Button from "@mui/material/Button";
import diamond from "../../assets/diamond.png";
import { useNavigate } from "react-router";
import { IconButton } from "@mui/material";
import EmptyCart from "./EmptyCart";
import FooterNav from "../NavBar/FooterNav";
import Footer from "../HomePage/Footer";
import YourCart from "./YourCart";
import { useDispatch, useSelector } from "react-redux";
// import { addItemToCart } from "../../store/reducers/cartSlice";
import { getUserCart } from "../../store/reducers/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart, billDetails } = useSelector((state) => state.cart);
  const { products } = useSelector((state) => state.products);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(getUserCart());
  }, [dispatch]);

  // const cartHandler = (id) => {
  //   products.map((product) => {
  //     if (product.id === id) {
  //       dispatch(addItemToCart(product));
  //     }
  //   });
  // };

  const wishlistHandler = (id) => {
    console.log(id);
  };

  return (
    <>
      <div className="fixed top-0 right-0 left-0 z-10">
        <NavBar cart={cart} />
      </div>

      <div
        className={`pt-20 ${cart.length === 0 ? "bg-white" : "bg-[#f4f4f4]"}`}
      >
        {cart.length === 0 ? (
          <EmptyCart cart={cart} />
        ) : (
          <YourCart cart={cart} products={products} billDetails={billDetails} />
        )}

        <div>
          <div className=" mt-10 flex justify-center text-center">
            <div className="p-5">
              <h1 className="text-xl md:text-2xl font-Cursive font-bold text-[#f2707f]">
                More to explore
              </h1>
              <h1 className="text-2xl md:text-3xl font-Poppins font-medium">
                You may also like
              </h1>
            </div>
          </div>

          <div className="flex gap-5 md:gap-10 overflow-x-auto py-10 px-5 lg:px-20 hide-scrollbar z-0">
            {products.slice(0, 5).map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 drop-shadow-xl cursor-pointer"
              >
                <div className="relative w-48 h-48 md:w-60 md:h-60 flex justify-center items-center bg-gradient-to-b from-[#ffdde1] to-[#ee9ca7] overflow-hidden group">
                  <img
                    src={item.image}
                    alt=""
                    className="w-44 md:w-44 transition ease-in-out duration-700 group-hover:scale-110 md:group-hover:scale-150 mix-blend-darken"
                  />
                  <div className="w-full bg-[#ee9ca7] absolute bottom-0 py-2 flex justify-center gap-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <IconButton>
                      <i className="fi fi-sr-shopping-cart-add text-white text-xl pt-1 px-2 rounded-full"></i>
                    </IconButton>
                    <IconButton onClick={() => wishlistHandler(item.id)}>
                      <i
                        className={`fi fi-sr-heart  text-xl pt-1 px-2 rounded-full ${
                          item.wishlist ? "text-[#FF0000]" : "text-white"
                        }`}
                      ></i>
                    </IconButton>
                  </div>
                </div>
                <div className="p-2 text-center">
                  <h1 className="text-md lg:text-md font-Poppins font-semibold">
                    {item.name}
                  </h1>
                  <h1 className="text-sm lg:text-md font-Poppins font-medium">
                    ₹{item.price}
                    {item.discount ? (
                      <span className="pl-2 line-through text-slate-600 text-[12px]">
                        ₹{item.discount}
                      </span>
                    ) : (
                      ""
                    )}
                  </h1>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pb-20">
            <Button
              variant="contained"
              size="large"
              type="submit"
              className="button-shiny-effect"
              onClick={() => {
                navigate("/all-products");
              }}
              sx={{
                borderRadius: 10,
                fontFamily: "Poppins",
                textTransform: "capitalize",
                backgroundColor: "#f2707f",
                ":hover": {
                  backgroundColor: "#F7475C",
                },
              }}
            >
              View All
            </Button>
          </div>
        </div>

        <Footer />

        <div className="fixed bottom-0 right-0 left-0 lg:hidden drop-shadow-[0_15px_40px_rgba(0,0,0,0.25)]">
          <FooterNav cart={cart} />
        </div>
      </div>
    </>
  );
};

export default Cart;
