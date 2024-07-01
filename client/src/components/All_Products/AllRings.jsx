import ring from "/assets/ring.png";
import heart from "/assets/heart.png";
import "@flaticon/flaticon-uicons/css/all/all.css";
import ProductsDisplay from "./ProductsDisplay";


const AllRings = () => {
  return (
    <ProductsDisplay
      categoryType="Beautiful"
      category="Wedding Rings"
      emoteImg={heart}
      productImg={ring}
      itemName="Item Name"
      itemPrice="200"
    />
  );
};

export default AllRings;
