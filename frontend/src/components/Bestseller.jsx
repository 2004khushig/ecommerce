import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const Bestseller = () => {
  const { products } = useContext(ShopContext);
  const [bestseller, setBestseller] = useState([]);

  useEffect(() => {
    if (Array.isArray(products)) {
      const bestProduct = products.filter((item) => item.bestseller);
      setBestseller(bestProduct.slice(0, 5));
    }
  }, [products]); 

  return (
    <div className="my-10 px-4">
      <div className="text-center py-8 text-4xl">
        <Title text1="BEST" text2="SELLERS" />
        <p className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto text-xs sm:text-sm md:text-base text-gray-600 mt-4">
          "What you wear is how you present yourself to the world, especially today when human contacts are so quick. Fashion is instant language."
          — Miuccia Prada
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestseller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Bestseller;
