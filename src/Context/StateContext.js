import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  console.log({ cartItems });

  const addToCart = (product) => {
    let currentArray = [...cartItems];
    if (currentArray.includes(product))
      console.log(product + "is already in cart");
    else {
      currentArray.push(product);
      console.log(product + "added to cart");
      console.log("Current cart item:", currentArray);
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
