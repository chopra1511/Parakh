import pearls from "../../assets/pearls.png";
import heart from "../../assets/heart.png";
import "@flaticon/flaticon-uicons/css/all/all.css";
import ProductsDisplay from "./ProductsDisplay";

const AllNecklace = () => {
    return (
      <ProductsDisplay
        categoryType="New Arrivals"
        category="Pearl Necklaces"
        emoteImg={heart}
        productImg={pearls}
        itemName="Item Name"
        itemPrice="200"
      />
    );
};

export default AllNecklace;
