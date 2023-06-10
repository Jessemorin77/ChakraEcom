import { Box, Center, Grid, Image, SimpleGrid } from "@chakra-ui/react";

export const ImageGrid = () => {
  return (
    <Box alignItems="center">
      <Center>
        <SimpleGrid columns={5} height="100px" spacing={12}>
          <Image
            src="https://cdn.shopify.com/s/files/1/0607/2398/6608/files/1_75cb9807-2579-45c3-8b4d-ba39c3879808_180x@2x.png?v=1681908081"
            alignSelf="center"
          />
          <Image
            src="https://cdn.shopify.com/s/files/1/0607/2398/6608/files/1_8390fa26-c9e8-4498-84ea-c6e440ab6c07_180x@2x.png?v=1678353839"
            alignSelf="center"
          />
          <Image
            src="https://cdn.shopify.com/s/files/1/0607/2398/6608/files/4_4c0637cd-79fa-4c3b-af31-9626cab30cf5_300x@2x.png?v=1681908081"
            alignSelf="center"
          />
          <Image
            src="https://cdn.shopify.com/s/files/1/0607/2398/6608/files/2_7ac5290d-2d4c-4fa5-8311-6b291da3ff8b_180x@2x.png?v=1681908081"
            alignSelf="center"
          />
          <Image
            src="https://cdn.shopify.com/s/files/1/0607/2398/6608/files/Honest_Brand_Reviews_Logo_7e3f8ab849_2_300x@2x.png?v=1681908088"
            alignSelf="center"
          />
        </SimpleGrid>
      </Center>
    </Box>
  );
};
