import React, { createContext, useContext, useState } from "react";
// import { product } from "../ProductArray";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  console.log({ cartItems });

  const addToCart = (product) => {
    //create a variable to check if the item you are selecting is equal or id the same to the item in the cart
    const isProductInCart = cartItems.find((item) => item._id === product._id)
      ? true
      : false;
    console.log({ isProductInCart });
    //if the item you selected is already in cart it logs in message in the console that its already in cart
    if (isProductInCart) {
      // Update quantity of existing product
      const updatedCartItems = cartItems.map((item) =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatedCartItems);
      // Update total quantity
      setTotalQuantity(totalQuantity + 1);

      console.log(
        `${product.title} quantity updated to ${item.quantity + 1} in cart.`
      ); // Inside the map callback
    } //else if its not in cart it therefor adds the cart item in the prodcut array  to cart
    else {
      setCartItems([...cartItems, product]);
      //so here we log the message the product title and added to cart string to the console
      console.log(product.title + " added to cart");
      //the current cart items logs a message to the console indicating the current item that is being logged to the console
      console.log("Current cart items:", [...cartItems, product]);
    }
  };

  //create a function and pass in the parameter productId
  function removeFromCart(product) {
    //this tells you that the product is being removed  alog with the productId
    console.log("Removing item productId:", product._id);
    //this line creates a new array called the updateCartItems by filtering the cartItems array.
    //It  keeps the product which id matches the product to be passed
    const updatedCartItems = cartItems.filter(
      (item) => item._id === product._id
    );
    //this update the cart items with new array of cart items, update cart items and sets the state to filter the spacific product id to be removed
    setCartItems(updatedCartItems);
    //this logs a message to the console telling you that the array if the item you've selected is removed from cart
    console.log("Item removed from cart" + product._id);
    //this also logs a mesaasge to the console to indicate that indeed the cart item has been removed
    console.log("Current cart items:", updatedCartItems);
  }

  return (
    <Context.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
