import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  console.log({ cartItems });

  const addToCart = (product) => {
    const isProductInCart = cartItems.find(item => item._id === product._id);
    if (isProductInCart) {
        console.log(product.title + " is already in the cart");
    } else {
        setCartItems([...cartItems, product]);
        console.log(product.title + " added to cart");
        console.log("Current cart items:", [...cartItems, product]);
    }
};

  return (
    <Context.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
