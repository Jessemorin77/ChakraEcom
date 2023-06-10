import { Box, Image, Text, Button } from "@chakra-ui/react";

export const ImageCard = () => {
  return (
    <Box position="relative" maxWidth="1300px" padding={15}>
      <Image
        src="https://cdn.shopify.com/s/files/1/0607/2398/6608/files/ki3Dl32t_1920x1920.webp?v=1681299809"
        alt="Image"
      />
      <Box
        position="absolute"
        bottom="52"
        left="10"
        right="10"
        p={4}
        display="flex column"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text color="white" fontWeight="bold" marginBottom={2}>
          Shape The Way You Wear
        </Text>
        <Button colorScheme="teal" size="sm">
          Our Mission
        </Button>
      </Box>
    </Box>
  );
};
