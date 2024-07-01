import diamond from "/assets/diamond.png";
import heart from "/assets/heart.png";
import "@flaticon/flaticon-uicons/css/all/all.css";
import ProductsDisplay from "./ProductsDisplay";
import { useSelector } from "react-redux";

const AllRings = () => {
  const { products } = useSelector((state) => state.products);
  return (
    <ProductsDisplay
      categoryType="Have a look"
      category="All Products"
      emoteImg={heart}
      products={products}
    />
  );
};

export default AllRings;
