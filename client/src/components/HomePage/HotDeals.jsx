import diamond from "../../assets/diamond.png";
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
// import { addItemToCart } from "../../store/reducers/cartSlice";


const HotDeals = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const items = products.filter((item) => item.discount !== null);

  //  const cartHandler = (id) => {
  //    products.map((product) => {
  //      if (product.id === id) {
  //        dispatch(addItemToCart(product));
  //      }
  //    });
  //  };

   const wishlistHandler = (id) => {
     console.log(id);
  };
  
  return (
    <>
      <div className="py-5 mt-10 text-center">
        <h1 className="text-xl md:text-2xl font-Cursive font-bold text-[#f2707f]">
          Grab All
        </h1>
        <h1 className="text-2xl md:text-3xl font-Poppins font-medium">
          Hot Deals!
        </h1>
      </div>

      <div className="flex gap-5 md:gap-10 overflow-x-auto py-10 px-5 lg:px-20 hide-scrollbar">
        {items.slice(0, 5).map((item, index) => (
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
                <IconButton >
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
                <span className="pl-2 line-through text-slate-600 text-[12px]">
                  ₹{item.discount}
                </span>
              </h1>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center text-white pb-20">
        <Button
          variant="contained"
          size="large"
          type="submit"
          className="button-shiny-effect"
          onClick={() => {
            navigate("/hot-deals");
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
    </>
  );
};

export default HotDeals;
