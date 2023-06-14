import { Box, GridItem, SimpleGrid, Image } from "@chakra-ui/react";

export const CategoryImagesGrid = () => {
  const images = [
    "https://cdn.shopify.com/s/files/1/0607/2398/6608/products/popilush-built-in-shapewear-long-sleeve-modal-midi-dress-bodycon-short-dress-black-s-sy220007-bk1p-s-32764498706608_540x@2x.webp?v=1672903423",
    "https://cdn.shopify.com/s/files/1/0607/2398/6608/products/popilush-scoop-neck-snap-gusset-brief-bodysuit-tops-body-shaper-jumpsuit-32928045334704_540x@2x.jpg?v=1677469117",
    "https://cdn.shopify.com/s/files/1/0607/2398/6608/products/popilush-yd220081-33032556249264_540x@2x.jpg?v=1685936553",
    "https://cdn.shopify.com/s/files/1/0607/2398/6608/files/popilush-cloudsense-soft-high-cut-thong-bodysuit-tops-body-shaper-jumpsuit-tank-33050879492272_540x@2x.jpg?v=1682652211",
  ];

  return (
    <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={5} mx="auto" maxW="container.xl" p={5}>
      {images.map((src, index) => (
        <GridItem key={index} _hover={{ transform: "scale(1.05)" }} transition="0.3s">
          <Image src={src} objectFit="cover" borderRadius="md" />
        </GridItem>
      ))}
    </SimpleGrid>
  );
};
