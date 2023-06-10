import { Center, SimpleGrid, Text } from "@chakra-ui/react";

export const BoxText = () => {
  return (
    <SimpleGrid bg={"gray.300"} row={2} gap={0} w={"100%"} h={250}>
      <Center>
        <Text>Multi Functional Styles</Text>
      </Center>
      <Center>
        <Text w="50%">
          Evolving the perception and useability of shapewear for women
          everywhere, we focus on diversity, body positivity, and true
          functionality with quality, accessible pieces.
        </Text>
      </Center>
    </SimpleGrid>
  );
};
