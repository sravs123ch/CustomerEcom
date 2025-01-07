import React, { createContext, useState } from 'react';

// Create a context object for Wishlist
const WishlistContext = createContext();

// Create a provider component
const WishlistProvider = ({ children }) => {
  // Initialize wishlist items from local storage or empty array
  const [wishlistItems, setWishlistItems] = useState(
    JSON.parse(localStorage.getItem('wishlist')) || []
  );

  // const products = [
  //   {
  //     id: 1,
  //     name: 'Navy and Orange Striped Polo T-Shirt For Men',
  //     mainImage: require('../assets/product_images/1.jpg'),
  //     images: [
  //       require('../assets/product_images/5.jpg'),
  //       require('../assets/product_images/2.jpg'),
  //       require('../assets/product_images/3.jpg'),
  //       require('../assets/product_images/4.jpg')
  //     ],
  //     price: '799',
  //     discountPrice: '1999',
  //     description: 'Solid Polos',
  //     colors: ['#173F5F', '#F6D55C'],
  //     sizes: ['S', 'M', 'L', 'XL', 'XXL']
  //   },
  //   {
  //     id: 2,
  //     name: 'Navy and Orange Striped Polo T-Shirt For Men',
  //     mainImage: require('../assets/product_images/2.jpg'),
  //     images: [
  //       require('../assets/product_images/Product_cat/pro_2.3.jpg'),
  //       require('../assets/product_images/Product_cat/Pro_2.jpg'),
  //       require('../assets/product_images/Product_cat/Pro_3.jpg'),
  //       require('../assets/product_images/Product_cat/Pro_2.jpg')
  //     ],
  //     price: '799',
  //     discountPrice: '1999',
  //     description: 'Solid Polos',
  //     colors: ['#173F5F', '#F6D55C'],
  //     sizes: ['S', 'M', 'L', 'XL', 'XXL']
  //   },
  //   {
  //     id: 3,
  //     name: 'Navy and Orange Striped Polo T-Shirt For Men',
  //     mainImage: require('../assets/product_images/2.jpg'),
  //     images: [
  //       require('../assets/product_images/Product_cat/pro_2.3.jpg'),
  //       require('../assets/product_images/Product_cat/Pro_2.jpg'),
  //       require('../assets/product_images/Product_cat/Pro_3.jpg'),
  //       require('../assets/product_images/Product_cat/Pro_2.jpg')
  //     ],
  //     price: '799',
  //     discountPrice: '1999',
  //     description: 'Solid Polos',
  //     colors: ['#173F5F', '#F6D55C'],
  //     sizes: ['S', 'M', 'L', 'XL', 'XXL']
  //   },
  //   {
  //     id: 4,
  //     name: 'Navy and Orange Striped Polo T-Shirt For Men',
  //     mainImage: require('../assets/product_images/2.jpg'),
  //     images: [
  //       require('../assets/product_images/Product_cat/pro_2.3.jpg'),
  //       require('../assets/product_images/Product_cat/Pro_2.jpg'),
  //       require('../assets/product_images/Product_cat/Pro_3.jpg'),
  //       require('../assets/product_images/Product_cat/Pro_2.jpg')
  //     ],
  //     price: '799',
  //     discountPrice: '1999',
  //     description: 'Solid Polos',
  //     colors: ['#173F5F', '#F6D55C'],
  //     sizes: ['S', 'M', 'L', 'XL', 'XXL']
  //   },
  //   {
  //     id: 5,
  //     name: 'Navy and Orange Striped Polo T-Shirt For Men',
  //     mainImage: require('../assets/product_images/2.jpg'),
  //     images: [
  //       require('../assets/product_images/Product_cat/pro_2.3.jpg'),
  //       require('../assets/product_images/Product_cat/Pro_2.jpg'),
  //       require('../assets/product_images/Product_cat/Pro_3.jpg'),
  //       require('../assets/product_images/Product_cat/Pro_2.jpg')
  //     ],
  //     price: '799',
  //     discountPrice: '1999',
  //     description: 'Solid Polos',
  //     colors: ['#173F5F', '#F6D55C'],
  //     sizes: ['S', 'M', 'L', 'XL', 'XXL']
  //   },
  //   {
  //     id: 6,
  //     name: 'Navy and Orange Striped Polo T-Shirt For Men',
  //     mainImage: require('../assets/product_images/2.jpg'),
  //     images: [
  //       require('../assets/product_images/Product_cat/pro_2.3.jpg'),
  //       require('../assets/product_images/Product_cat/Pro_2.jpg'),
  //       require('../assets/product_images/Product_cat/Pro_3.jpg'),
  //       require('../assets/product_images/Product_cat/Pro_2.jpg')
  //     ],
  //     price: '799',
  //     discountPrice: '1999',
  //     description: 'Solid Polos',
  //     colors: ['#173F5F', '#F6D55C'],
  //     sizes: ['S', 'M', 'L', 'XL', 'XXL']
  //   },
  //   {
  //     id: 7,
  //     name: 'Navy and Orange Striped Polo T-Shirt For Men',
  //     mainImage: require('../assets/product_images/2.jpg'),
  //     images: [
  //       require('../assets/product_images/Product_cat/pro_2.3.jpg'),
  //       require('../assets/product_images/Product_cat/Pro_2.jpg'),
  //       require('../assets/product_images/Product_cat/Pro_3.jpg'),
  //       require('../assets/product_images/Product_cat/Pro_2.jpg')
  //     ],
  //     price: '799',
  //     discountPrice: '1999',
  //     description: 'Solid Polos',
  //     colors: ['#173F5F', '#F6D55C'],
  //     sizes: ['S', 'M', 'L', 'XL', 'XXL']
  //   },
  //     {
  //       id: 8,
  //       name: 'Navy and Orange Striped Polo T-Shirt For Men',
  //       mainImage: require('../assets/product_images/2.jpg'),
  //       images: [
  //         require('../assets/product_images/Product_cat/pro_2.3.jpg'),
  //         require('../assets/product_images/Product_cat/Pro_2.jpg'),
  //         require('../assets/product_images/Product_cat/Pro_3.jpg'),
  //         require('../assets/product_images/Product_cat/Pro_2.jpg')
  //       ],
  //       price: '799',
  //       discountPrice: '1999',
  //       description: 'Solid Polos',
  //       colors: ['#173F5F', '#F6D55C'],
  //       sizes: ['S', 'M', 'L', 'XL', 'XXL']
  //     },
  //   {
  //     id: 9,
  //     name: 'Navy and Orange Striped Polo T-Shirt For Men',
  //     mainImage: require('../assets/product_images/2.jpg'),
  //     images: [
  //       require('../assets/product_images/Product_cat/pro_2.3.jpg'),
  //       require('../assets/product_images/Product_cat/Pro_2.jpg'),
  //       require('../assets/product_images/Product_cat/Pro_3.jpg'),
  //       require('../assets/product_images/Product_cat/Pro_2.jpg')
  //     ],
  //     price: '799',
  //     discountPrice: '1999',
  //     description: 'Solid Polos',
  //     colors: ['#173F5F', '#F6D55C'],
  //     sizes: ['S', 'M', 'L', 'XL', 'XXL']
  //   },
  //   {
  //     id: 10,
  //     name: 'Navy and Orange Striped Polo T-Shirt For Men',
  //     mainImage: require('../assets/product_images/1.jpg'),
  //     images: [
  //       require('../assets/product_images/5.jpg'),
  //       require('../assets/product_images/2.jpg'),
  //       require('../assets/product_images/3.jpg'),
  //       require('../assets/product_images/4.jpg')
  //     ],
  //     price: '799',
  //     discountPrice: '1999',
  //     description: 'Solid Polos',
  //     colors: ['#173F5F', '#F6D55C'],
  //     sizes: ['S', 'M', 'L', 'XL', 'XXL']
  //   },
  //   {
  //     id: 11,
  //     name: 'Navy and Orange Striped Polo T-Shirt For Men',
  //     mainImage: require('../assets/product_images/1.jpg'),
  //     images: [
  //       require('../assets/product_images/5.jpg'),
  //       require('../assets/product_images/2.jpg'),
  //       require('../assets/product_images/3.jpg'),
  //       require('../assets/product_images/4.jpg')
  //     ],
  //     price: '799',
  //     discountPrice: '1999',
  //     description: 'Solid Polos',
  //     colors: ['#173F5F', '#F6D55C'],
  //     sizes: ['S', 'M', 'L', 'XL', 'XXL']
  //   },
  //   {
  //     id: 12,
  //     name: 'Navy and Orange Striped Polo T-Shirt For Men',
  //     mainImage: require('../assets/product_images/1.jpg'),
  //     images: [
  //       require('../assets/product_images/5.jpg'),
  //       require('../assets/product_images/2.jpg'),
  //       require('../assets/product_images/3.jpg'),
  //       require('../assets/product_images/4.jpg')
  //     ],
  //     price: '799',
  //     discountPrice: '1999',
  //     description: 'Solid Polos',
  //     colors: ['#173F5F', '#F6D55C'],
  //     sizes: ['S', 'M', 'L', 'XL', 'XXL']
  //   },
  // ];

  // Add a product to the wishlist
  const addToWishlist = (product) => {
    const isProductInWishlist = wishlistItems.some((item) => item.id === product.id);
    if (!isProductInWishlist) {
      const updatedWishlist = [...wishlistItems, product];
      setWishlistItems(updatedWishlist);
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    }
  };

  // Remove a product from the wishlist
  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlistItems.filter((item) => item.id !== productId);
    setWishlistItems(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  // Clear all items from the wishlist
  const clearWishlist = () => {
    setWishlistItems([]);
    localStorage.removeItem('wishlist');
  };

  // Provide wishlist items and related functions to child components
  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
        products,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export { WishlistContext, WishlistProvider };
