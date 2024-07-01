import diamond from "/assets/diamond.png";
import hot from "/assets/hot.png";
// import hot1 from "/assets/hot1.gif";
import "@flaticon/flaticon-uicons/css/all/all.css";
import ProductsDisplay from "./ProductsDisplay";
import { useDispatch, useSelector } from "react-redux";



const AllHotDeals = () => {
  
const { products } = useSelector((state) => state.products);
const items = products.filter((item) => item.discount !== null);

   return (
     <ProductsDisplay
       categoryType="Grab All"
       category="Hot Deals"
       emoteImg={hot}
       products={items}
     />
   );
};

export default AllHotDeals;
