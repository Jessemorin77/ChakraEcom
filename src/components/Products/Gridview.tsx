import React from "react";
import { Grid } from "@chakra-ui/react";
import Product from "./Product";

const Gridview = ({ products }) => {
  return (
    <Grid templateColumns={{base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)"}} gap={6} mt={10}>
      {products.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </Grid>
  );
};

export default Gridview;
