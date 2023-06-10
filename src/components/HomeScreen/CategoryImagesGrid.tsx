import { Box, Grid, Image, SimpleGrid, Center } from "@chakra-ui/react";

export const CategoryImagesGrid = () => {
  return (
    <Box>
      <Center>
        <SimpleGrid columns={2} pl={32}>
          <Image
            src="https://cdn.shopify.com/s/files/1/0607/2398/6608/products/popilush-built-in-shapewear-long-sleeve-modal-midi-dress-bodycon-short-dress-black-s-sy220007-bk1p-s-32764498706608_540x@2x.webp?v=1672903423"
            w="80%"
          />
          <Image
            src="https://cdn.shopify.com/s/files/1/0607/2398/6608/products/popilush-scoop-neck-snap-gusset-brief-bodysuit-tops-body-shaper-jumpsuit-32928045334704_540x@2x.jpg?v=1677469117"
            w="80%"
          />
        </SimpleGrid>
      </Center>
      <SimpleGrid columns={2} pl={32}>
        <Image
          src="https://cdn.shopify.com/s/files/1/0607/2398/6608/products/popilush-yd220081-33032556249264_540x@2x.jpg?v=1685936553"
          w="80%"
        />
        <Image
          src="https://cdn.shopify.com/s/files/1/0607/2398/6608/files/popilush-cloudsense-soft-high-cut-thong-bodysuit-tops-body-shaper-jumpsuit-tank-33050879492272_540x@2x.jpg?v=1682652211"
          w="80%"
        />
      </SimpleGrid>
    </Box>
  );
};
