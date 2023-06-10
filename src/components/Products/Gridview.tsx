import React from "react";
import Product from "./Product";

const Gridview = ({ products }) => {
  return (
    <div>
      {products.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </div>
  );
};

export default Gridview;
