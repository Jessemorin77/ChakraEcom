// CartDrawer.jsx
import React from 'react'
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Text,
} from '@chakra-ui/react'
import { useContext } from 'react';
import { CartContext } from '~/components/context/CartContext'


const CartDrawer = ({ isOpen, onClose }) => {
  const { cart } = useContext(CartContext); // Use cart here, not cartItems
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Shopping Cart</DrawerHeader>

        <DrawerBody>
          {cart.map((item) => (  // Use cart here, not cartItems
            <Box key={item.id} mb={5}>
              <Text fontWeight="bold">{item.title}</Text>
              <Text>{item.price}</Text>
            </Box>
          ))}
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button colorScheme="blue">Checkout</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
export default CartDrawer

