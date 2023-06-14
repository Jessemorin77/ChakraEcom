import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  // Initialize cart from local storage if available, else empty array
  const [cart, setCart] = useState(() => {
    if (typeof window !== "undefined") {
      const localCart = window.localStorage.getItem("cart");
      return localCart ? JSON.parse(localCart) : [];
    }
    return [];
  });

  // When the cart changes, save to localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("cart", JSON.stringify(cart));
    }
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
