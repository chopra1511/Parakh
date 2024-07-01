import floral from "../../assets/floral.png";
import heart from "../../assets/heart.png";
import "@flaticon/flaticon-uicons/css/all/all.css";
import ProductsDisplay from "./ProductsDisplay";

const AllEarrings = () => {
    return (
      <ProductsDisplay
        categoryType="Grab All"
        category="Hot Deals"
        emoteImg={heart}
        productImg={floral}
        itemName="Item Name"
        itemPrice="200"
      />
    );
};

export default AllEarrings;
