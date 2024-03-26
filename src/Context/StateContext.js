import React, { createContext, useContext, useState } from "react";
// import { product } from "../ProductArray";
// import { product } from "../ProductArray";
// import { product } from "../ProductArray";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

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
      // setTotalPrice(totalPrice + updateCartItems)
      setCartItems([...cartItems, product]);
      console.log(product.title + ":added to cart");
      console.log("Current item in Cart:" + product.title);
    }

    const totalQuantity = cartItems.reduce((total, item) => {
      return total + item.quantity;
    }, 1);
    setTotalQuantity(totalQuantity);

    const totalPrice = cartItems.reduce((total, item) => {
      if (item._id === product._id) {
        return item.price * item.quantity;
      } else {
        return total;
      }
    }, 0);
    console.log(totalPrice);
    setTotalPrice(totalPrice);
  };

  const incrementCartItem = (product) => {
    const updateCartItems = cartItems.map((item) => {
      if (item._id === product._id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
    setCartItems(updateCartItems);
    const totalQuantity = cartItems.reduce((total, item) => {
      return total + item.quantity;
    }, 1);

    setTotalQuantity(totalQuantity);
    const totalPrice = cartItems.reduce((total, item) => {
      if (item._id === product._id) {
        return total + (item?.price || 0);
      } else {
        return total;
      }
    }, 0);
    console.log("heyyyy" + totalPrice);

    setTotalPrice((prevTotalPrice) => prevTotalPrice + totalPrice);
  };

  const decrementCartItem = (product) => {
    const updateCartItems = cartItems
      .map((item) => {
        if (item._id === product._id) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return null;
          }
        }
        return item;
      })
      .filter(Boolean);
    //filter to remove item from the array
    setCartItems(updateCartItems);

    const totalQuantity = cartItems.reduce((total, item) => {
      return total + item.quantity;
    }, -1);
    setTotalQuantity(totalQuantity);

    setTotalQuantity(totalQuantity);
    const totalPrice = cartItems.reduce((total, item) => {
      if (item._id === product._id) {
        return total + item.price;
      } else {
        return total;
      }
    }, 0);
    console.log("heyyyy" + totalPrice);

    setTotalPrice((prevTotalPrice) => prevTotalPrice - totalPrice);
  };

  //create a function and pass in the parameter product
  function removeFromCart(product) {
    //this tells you that the product is being removed  along with the productId
    console.log("Removing item productId:", product._id);
    //created a new function called the updateCartItems by filtering out the cartItems array.
    const updatedCartItems = cartItems.filter(
      //the filter function filters out the product id to be removed
      (item) => item._id !== product._id
    );
    //this update the cart items with new array of cart items, update cart items and sets the state to filter the spacific product id to be removed
    setCartItems(updatedCartItems);
    //this logs a message to the console telling you that the array if the item you've selected is removed from cart
    console.log(product.title + ":removed from cart");
    //this also logs a mesaasge to the console to indicate that indeed the cart item has been removed
    console.log("Current cart items :", updatedCartItems);

    const removedProduct = cartItems.find((item) => item._id === product._id);

    if (removedProduct) {
      setTotalQuantity(
        (prevTotalQuantity) => prevTotalQuantity - removedProduct?.quantity
      );
    }
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
        totalQuantity,
        // subTotalPrice,
        totalPrice,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
