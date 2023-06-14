import { Box, SimpleGrid, Image } from "@chakra-ui/react";

export const ImageGrid = () => {
  const images = [
    "https://cdn.shopify.com/s/files/1/0607/2398/6608/files/1_75cb9807-2579-45c3-8b4d-ba39c3879808_180x@2x.png?v=1681908081",
    "https://cdn.shopify.com/s/files/1/0607/2398/6608/files/1_8390fa26-c9e8-4498-84ea-c6e440ab6c07_180x@2x.png?v=1678353839",
    "https://cdn.shopify.com/s/files/1/0607/2398/6608/files/4_4c0637cd-79fa-4c3b-af31-9626cab30cf5_300x@2x.png?v=1681908081",
    "https://cdn.shopify.com/s/files/1/0607/2398/6608/files/2_7ac5290d-2d4c-4fa5-8311-6b291da3ff8b_180x@2x.png?v=1681908081",
    "https://cdn.shopify.com/s/files/1/0607/2398/6608/files/Honest_Brand_Reviews_Logo_7e3f8ab849_2_300x@2x.png?v=1681908088"
  ];

  return (
    <Box p={5} d="flex" justifyContent="center">
      <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 5 }} spacing={10}>
        {images.map((src, index) => (
          <Box key={index} h="100px" d="flex" alignItems="center" justifyContent="center" _hover={{ transform: "scale(1.05)" }} transition="0.3s">
            <Image src={src} objectFit="contain" h="80%" />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};
