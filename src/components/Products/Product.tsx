import React from "react";
import { Divider, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

const Product = ({ image, title, price, id }) => {
  return (
    <div className="flex flex-col items-center">
      <Link href={`/SingleProduct/${id}`}>
        <Image src={image} w={52} h={64} />
      </Link>
      <footer>
        <Text>{title}</Text>
        <p>{price}</p>
      </footer>
    </div>
  );
};

export default Product;
