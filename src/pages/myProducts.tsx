import React from "react";
import ProductList from "../components/Products/ProductList";
import { type NextPage } from "next";
import { Divider, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar.tsx";
const myProducts: NextPage = () => {
  return (
    <div>
      <div>
        <Text className="p-10 text-center text-4xl">Products</Text>
      </div>
      <Divider pb={"10"} />
      <ProductList />
    </div>
  );
};

export default myProducts;
