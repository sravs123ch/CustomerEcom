import React, { createContext, useState,useEffect } from 'react';
export const GlobalContext = createContext();
export const GlobalProvider = ({ children }) => {
  // const [cartItems, setCartItems] = useState([]);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem('cartItems')) || []
  );
  
  const [buyNow, setBuyNow] = useState(
    JSON.parse(localStorage.getItem('Buynow')) || []
  );
  // console.log(buyNow);

  const products = [
    { id: 1, name: 'Navy and Orange Striped Polo T-Shirt For Men' },
    { id: 2, name: 'Navy and Orange Striped Polo T-Shirt For Men' },
    { id: 3, name: 'Navy and Orange Striped Polo T-Shirt For Men' },
    { id: 4, name: 'Navy and Orange Striped Polo T-Shirt For Men' },
    { id: 5, name: 'Navy and Orange Striped Polo T-Shirt For Men' },
    { id: 6, name: 'Navy and Orange Striped Polo T-Shirt For Men' },
    { id: 8, name: 'Navy and Orange Striped Polo T-Shirt For Men' },
    { id: 9, name: 'Navy and Orange Striped Polo T-Shirt For Men' },
    { id: 10, name: 'Navy and Orange Striped Polo T-Shirt For Men' },
    { id: 11, name: 'Navy and Orange Striped Polo T-Shirt For Men' },
    { id: 12, name: 'Navy and Orange Striped Polo T-Shirt For Men' },
    // Add more products as needed
  ];

  // Function to get JWT token from local storage
  const getToken = () => {
    return localStorage.getItem('jwtToken');
  };

   // Load wishlist from localStorage on app start
   useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistItems(storedWishlist);
  }, []);

  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) =>
        cartItem.id === item.id &&
        cartItem.color === item.color &&
        cartItem.size === item.size
    );

    let updatedCartItems;

    if (existingItemIndex !== -1) {
      // Item with same id, color, and size exists, increase quantity
      updatedCartItems = cartItems.map((cartItem, index) =>
        index === existingItemIndex
          ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
          : cartItem
      );
    } else {
      // Item does not exist, add it to cart
      updatedCartItems = [...cartItems, item];
    }
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };
  const [wishlistItems, setWishlistItems] = useState(
    JSON.parse(localStorage.getItem('wishlist')) || []
  );
 
  const addToWishlist = (item) => {
    // Check if the item already exists in the wishlist based on the id
    const itemExists = wishlistItems.some((wishlistItem) => wishlistItem.id === item.id);
  
    if (!itemExists) {
      // If it doesn't exist, add the new item to the wishlist
      const updatedWishlist = [...wishlistItems, item];
      setWishlistItems(updatedWishlist);
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    } else {
      // Item already in wishlist, you can log or handle differently
      console.log('Item already in wishlist.');
    }
  };
  
   // Function to update wishlist items
   const updateWishlist = (updatedWishlist) => {
    setWishlistItems(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  const buyNowCheckout = (id) => {
    setBuyNow(id);
  };

  const updateCart = (newCart) => {
    setCartItems(newCart);
  };

  const getProductById = (id) => {
    return products.find(product => product.id === id);
  };

  return (
    <GlobalContext.Provider
      value={{
        cartItems,
        addToCart,
        updateCart,
        setCartItems,
        buyNow,
        buyNowCheckout,
        products,
        getProductById,
        getToken, // Expose the function to get JWT token
        wishlistItems,
        addToWishlist,updateWishlist 
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

