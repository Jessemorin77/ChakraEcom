import React from "react";
import Gridview from "./Gridview";
import productData from "./productData.json";

interface Product {
  id: number;
  image: string;
  title: string;
  price: string;
  colors: string[];
  description: string;
  material: string;
  category?: string;
}

interface ProductData {
  products: Product[];
}

const ProductList: React.FC = () => {
  const products: Product[] = (productData as ProductData).products;

  if (products.length < 1) {
    return <h5>Sorry, no products matched your search</h5>;
  }

  return <Gridview products={products}>product list</Gridview>;
};

export default ProductList;
