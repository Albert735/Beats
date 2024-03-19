import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  console.log({ cartItems });

  const addToCart = (product) => {
    //create a variable to check if the item you are selecting is equal to the item in the cart
    const isProductInCart = cartItems.find((item) => item._id === product._id);
    //if the item you selected is already in cart it logs in message in the console that its already in cart
    if (isProductInCart) {
      console.log(product.title + " is already in the cart");
    } //else if its not in cart it therefor adds the cart item in the prodcut array to cart
    else {
      setCartItems([...cartItems, product]);
      //so here we kog the message the product title and added to cart string to the console
      console.log(product.title + " added to cart");
      //the current cart items logs a message to the console indicating the current item that is being logged to the console
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
