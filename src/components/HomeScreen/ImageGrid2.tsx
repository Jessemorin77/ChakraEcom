import { Grid, SimpleGrid, Image } from "@chakra-ui/react";

export const ImageGrid2 = () => {
  return (
    <SimpleGrid columns={3} gap={0}>
      <Image
        src="https://cdn.shopify.com/s/files/1/0607/2398/6608/products/popilush-built-in-shapewear-long-sleeve-modal-midi-dress-bodycon-short-dress-black-s-sy220007-bk1p-s-32764498706608_540x@2x.webp?v=1672903423"
        height="500px"
      />
      <Image
        src="https://cdn.shopify.com/s/files/1/0607/2398/6608/products/popilush-soft-modal-loungewear-8-in-1-built-in-shapewear-maxi-dress-shaping-slip-dress-grey-s-sy220002-gy1p-s-32920072290480_540x@2x.jpg?v=1684237797"
        height="500px"
      />
      <Image
        src="https://cdn.shopify.com/s/files/1/0607/2398/6608/products/popilush-yd220088-black-s-yd220088-bk1p-s-33030075646128_540x@2x.jpg?v=1685936619"
        height="500px"
      />
    </SimpleGrid>
  );
};
