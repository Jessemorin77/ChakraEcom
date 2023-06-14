import React from "react";
import { Box, Flex, Image, Text, Link, LinkBox, LinkOverlay } from "@chakra-ui/react"
import { FaSearch } from 'react-icons/fa';
import NextLink from 'next/link'

const Product = ({image, title, price, id }) => {
    return(
        <Flex direction="row" alignItems="center" border="1px" borderColor="gray.200" borderRadius="lg" p={4} mb={4} boxShadow="lg">
            <LinkBox as="article">
                <NextLink href={`/SingleProduct/${id}`} passHref>
                    <LinkOverlay>
                        <Image src={image} width="200px" height="300px" objectFit="cover" borderRadius="lg" mb={2} />
                    </LinkOverlay>
                </NextLink>
                <Box as="footer" mt={2}>
                    <Text fontWeight="bold" fontSize="xl">{title}</Text>
                    <Text color="gray.500">{`$${price}`}</Text>
                </Box>
            </LinkBox>
        </Flex>
    )
}

export default Product;
