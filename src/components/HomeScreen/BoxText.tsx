import { Box, Center, SimpleGrid, Text, useBreakpointValue } from "@chakra-ui/react";

export const BoxText = () => {
  const fontSizeTitle = useBreakpointValue({ base: 'lg', md: '2xl' });
  const fontSizeBody = useBreakpointValue({ base: 'sm', md: 'md' });
  const widthBody = useBreakpointValue({ base: '80%', md: '50%' });

  return (
    <SimpleGrid
      bg={"gray.200"}
      rows={2}
      gap={6}
      w={"100%"}
      p={4}
      mb={4}
    >
      <Center>
        <Text fontSize={fontSizeTitle} fontWeight="bold" color="gray.700">
          Multi Functional Styles
        </Text>
      </Center>
      <Center pt={2}>
        <Box w={widthBody} textAlign="center">
          <Text fontSize={fontSizeBody} color="gray.700">
            Evolving the perception and useability of shapewear for women
            everywhere, we focus on diversity, body positivity, and true
            functionality with quality, accessible pieces.
          </Text>
        </Box>
      </Center>
    </SimpleGrid>
  );
};
