import React, { createContext, useContext, useState } from "react";
const Context = createContext();

export const StateContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  // const [totalTax, setTotalTax] = useState(0);

  // console.log({ cartItems });

  const addToCart = (product) => {
    const isSelectedProductInCart = cartItems.findIndex(
      (item) => item._id === product._id
    );
    //check if item is in the cart
    let isInCart;
    if (isSelectedProductInCart >= 0) {
      isInCart = true;
    } else {
      isInCart = false;
    }
    console.log({ isSelectedProductInCart });
    console.log({ isInCart });
    // if item is not there then its supposed to add it
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
    ///////Total Quantity///////////////
    setTotalQuantity((prev) => prev + product?.quantity);
    console.log(totalQuantity);

    /////////totalPrice/////////
    const totalPrice = cartItems.reduce((total, item) => {
      if (item._id === product._id) {
        return (total += item?.price);
      } else {
        return total;
      }
    }, 0);
    console.log(totalPrice);
    setTotalPrice((prev) => prev + product?.price);
  };

  ///////////////////increment sign//////////////////////////
  const incrementCartItem = (product) => {
    const updateCartItems = cartItems.map((item) => {
      if (item._id === product._id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    }, 0);
    setCartItems(updateCartItems);
    setTotalQuantity((prev) => prev + 1);

    const totalPrice = cartItems.reduce((total, item) => {
      if (item._id === product._id) {
        return (total += item?.price);
      } else {
        return total;
      }
    }, 0);
    console.log(totalPrice);
    setTotalPrice((prev) => prev + product?.price);
  };

  //////////////////////decrement sign///////////////////////
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
    setCartItems(updateCartItems);
    setTotalQuantity((prev) => prev - 1);

    const totalPrice = cartItems.reduce((total, item) => {
      if (item._id === product._id) {
        return (total -= item?.price);
      } else {
        return total;
      }
    }, 0);
    console.log(totalPrice);
    setTotalPrice((prev) => prev - product?.price);
  };

  ////////////removeFromCart///////
  function removeFromCart(product) {
    console.log("removing from cart product id", product._id);
    const updateCartItems = cartItems.filter(
      (item) => item._id !== product._id
    );
    setCartItems(updateCartItems);

    const removedFromCart = cartItems.find((item) => item._id === product._id);
    setTotalQuantity((prev) => prev - removedFromCart.quantity);
    console.log(removedFromCart.quantity, product.title + ":has been removed");

    const totalPrice = cartItems.reduce((total, item) => {
      if (item._id === product._id) {
        return total + item?.price;
      } else {
        return total;
      }
    }, 0);
    console.log(totalPrice);
    setTotalPrice((prev) => prev - product?.price * product.quantity);
  }


  const [step, setStep] = useState(1);

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
        totalPrice,
        step,
        setStep,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
