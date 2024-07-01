import wishlist from "../../assets/wishlist.png";
import pinkHeart from "../../assets/pinkHeart.png";
import "@flaticon/flaticon-uicons/css/all/all.css";
import ProductsDisplay from "../All_Products/ProductsDisplay";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const { products } = useSelector((state) => state.products);
  const items = products.filter((item) => item.wishlist === true);

  return (
    <>
      <ProductsDisplay
        categoryType={`${
          items.length === 0 ? "It seems notthing in here." : "Your"
        }`}
        category={`${items.length === 0 ? "Make a Wish!" : "Wishlist"}`}
        emoteImg={pinkHeart}
        products={items}
        image={wishlist}
      />
    </>
  );
};

export default Wishlist;
