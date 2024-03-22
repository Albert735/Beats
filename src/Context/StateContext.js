import React, { createContext, useContext, useState } from "react";
// import { product } from "../ProductArray";
// import { product } from "../ProductArray";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  // const [count, setCount] = useState;

  console.log({ cartItems });

  const addToCart = (product) => {
    const isSelectedProductInCart = cartItems.findIndex(
      (item) => item._id === product._id
    );

    let isInCart;
    if (isSelectedProductInCart >= 0) {
      isInCart = true;
    } else {
      isInCart = false;
    }
    console.log({ isSelectedProductInCart });
    console.log({ isInCart });

    if (isSelectedProductInCart >= 0) {
      const updateCartItems = cartItems.map((item) => {
        if (item._id === product._id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCartItems(updateCartItems);
    } else {
      setCartItems([...cartItems, product]);
      console.log(product.title + ":added to cart");
      console.log("Current item in Cart:" + product.title);
    }
  };

  // const incrementCartItem = (product) => {
  //   setCartItems(
  //     cartItems.map((item) =>
  //       item._id === product._id
  //         ? { ...item, quantity: item.quantity + 1 }
  //         : item
  //     )
  //   );
  // };

  // const decrementCartItem = (product) => {
  //   const updateCartItems = cartItems
  //     .map((item) => {
  //       if (item._id === product._id) {
  //         if (item.quantity > 1) {
  //           return { ...item, quantity: item.quantity - 1 };
  //         } else {
  //           return null;
  //         }
  //       }
  //       return item;
  //     })
  //     .filter(Boolean);
  //   //filter to remove itme from the array
  //   setCartItems(updateCartItems);
  // };

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
    console.log(product + "removed from cart");
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
        incrementCartItem,
        decrementCartItem,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
