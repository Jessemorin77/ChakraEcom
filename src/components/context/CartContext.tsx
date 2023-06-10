import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Load cart from local storage once we are client-side
  useEffect(() => {
    const cart = window.localStorage.getItem("cart");
    if (cart) {
      setCart(JSON.parse(cart));
    }
  }, []);

  // When the cart changes, save to localStorage
  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((oldCart) => {
      return [...oldCart, item];
    });
  };

  const removeFromCart = (itemId) => {
    setCart((oldCart) => {
      return oldCart.filter((item) => item.id !== itemId);
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
