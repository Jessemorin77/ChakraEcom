import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Skeleton,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link';

export const Hero = () => (
  <Box
    maxW="7xl"
    mx="auto"
    px={{ base: "0", lg: "12" }}
    py={{ base: "0", lg: "12" }}
  >
    <Stack
      direction={{ base: "column-reverse", lg: "row" }}
      spacing={{ base: "0", lg: "20" }}
    >
      <Box
        width={{ lg: "sm" }}
        transform={{ base: "translateY(-50%)", lg: "none" }}
        bg={{
          base: useColorModeValue("red.50", "gray.700"),
          lg: "transparent",
        }}
        mx={{ base: "6", md: "8", lg: "0" }}
        px={{ base: "6", md: "8", lg: "0" }}
        py={{ base: "6", md: "8", lg: "12" }}
      >
        <Stack spacing={{ base: "8", lg: "10" }}>
          <Stack spacing={{ base: "2", lg: "4" }}>
            <Heading size="xl" color={useColorModeValue("red.500", "red.300")}>
              BellAire
            </Heading>
            <Heading size="xl" fontWeight="normal">
              Refresh your wardrobe
            </Heading>
          </Stack>
          <HStack spacing="3">
            <Link href="/shop"
              color={useColorModeValue("red.500", "red.300")}
              fontWeight="bold"
              fontSize="lg"
          >
    Discover now
  
</Link>
            <Icon
              color={useColorModeValue("red.500", "red.300")}
              as={FaArrowRight}
              pt={1}
            />
          </HStack>
        </Stack>
      </Box>
      <Flex flex="1" overflow="hidden">
        <Image
          src="https://cdn.shopify.com/s/files/1/0607/2398/6608/files/popilush-built-in-shapewear-sexy-lace-slip-split-maxi-dress-bodycon-summer-dress-33114665320624_540x@2x.jpg?v=1685619297"
          alt="Lovely Image"
          fallback={<Skeleton />}
          maxH="500px"
          minW="300px"
          objectFit="cover"
          flex="1"
        />
        <Image
          display={{ base: "none", sm: "initial" }}
          src="https://cdn.shopify.com/s/files/1/0607/2398/6608/products/popilush-eco-friendly-seamless-shapewear-bodysuits-long-sleeve-thong-black-xs-s-32891034042544_540x@2x.jpg?v=1682308814"
          alt="Lovely Image"
          fallback={<Skeleton />}
          maxH="500px"
          objectFit="cover"
        />
      </Flex>
    </Stack>
  </Box>
);
