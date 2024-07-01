import React, { useEffect } from "react";
import diamond from "/assets/diamond.png";
import heart from "/assets/heart.png";
import "@flaticon/flaticon-uicons/css/all/all.css";
import ProductsDisplay from "./ProductsDisplay";
import { useSelector } from "react-redux";


const AllMostLoved = () => {
  
  const { products } = useSelector((state) => state.products);
  const items = products.filter((item) => item.mostLoved === true);

  return (
    <ProductsDisplay
      categoryType="Customer's choice"
      category="Most Loved"
      emoteImg={heart}
      products={items} 
    />
  );
};

export default AllMostLoved;
