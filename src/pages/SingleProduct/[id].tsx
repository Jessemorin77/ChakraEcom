import { useRouter } from "next/router";
import { useContext } from 'react';
import productsData from "~/components/Products/productData.json";
import { CartContext } from '~/components/context/CartContext'
import {
  Box,
  Text,
  Image,
  Heading,
  VStack,
  Flex,
  Button,
  useDisclosure,
  Accordion
} from "@chakra-ui/react";
import Navbar from '~/components/Navbar'
import CartDrawer from '~/components/DrawerCart';
import CustomAccordian from "~/components/ui/CustomAccordian"

function SingleProduct() {
  const router = useRouter();

  const { id } = router.query;
  
  const { addToCart } = useContext(CartContext);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const product = productsData.products.find(
    (product) => product.id === Number(id)
  );

  if (!product) {
    return <Text fontSize="2xl">Products not found</Text>;
  }

  const handleAddToCart = (product) => {
    addToCart(product);
    onOpen();
  };

  return (
    <Flex
      maxW="5xl"
      mx="auto"
      p={8}
      boxShadow="lg"
      borderRadius="md"
      spacing={8}
    >
      <Image
        src={product.image}
        borderRadius="md"
        objectFit="cover"
        w="full"
        h="500px"
        flex="1"
      />

      <VStack flex="2" spacing={2} alignItems="start" ml={8}>
        <Heading>{product.title}</Heading>

        <Text fontSize="xl" color="gray.600">
          ${product.price}
        </Text>

        <Text fontSize="lg" color="gray.500">
          Colors: {product.colors.join(", ")}
        </Text>

        <Text fontSize="lg">Category: {product.category}</Text>
        <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>
        
        <CartDrawer isOpen={isOpen} onClose={onClose} />

        <Accordion allowToggle>
          <CustomAccordian title="Description" content={product.description}/>
          <CustomAccordian title="Material" content={product.material} isMaterial/>
        </Accordion>
      </VStack>
    </Flex>
  );
}

export default SingleProduct;
