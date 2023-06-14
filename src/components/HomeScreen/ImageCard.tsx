import { Flex, Image, Text, Button, Box } from "@chakra-ui/react";

export const ImageCard = () => {
  return (
    <Flex justifyContent="center" alignItems="center" height="100vh">
      <Box position="relative" maxWidth="1300px" padding={15}>
        <Image
          src="https://cdn.shopify.com/s/files/1/0607/2398/6608/files/ki3Dl32t_1920x1920.webp?v=1681299809"
          alt="Image"
        />
        <Flex
          position="absolute"
          bottom="5%"  // adjust positioning
          left="5%"    // adjust positioning
          right="5%"   // adjust positioning
          p={4}
          direction="column"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Text color="white" fontWeight="bold" marginBottom={2} shadow="md"> 
            Shape The Way You Wear
          </Text>
          <Button colorScheme="blue" size="sm"> 
            Our Mission
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};
