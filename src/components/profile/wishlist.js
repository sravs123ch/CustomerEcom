// import React from "react";
// import { BsTrash } from "react-icons/bs";
// const product1Image = require("../../assets/product_images/1.jpg");
// const product2Image = require("../../assets/product_images/2.jpg");
// const product3Image = require("../../assets/product_images/3.jpg");
// const WishlistPage = () => {
//   const wishlistItems = [
//     {
//       id: 1,
//       name: "Product 1",
//       price: "$20.00",
//       stockStatus: "In Stock",
//       //   image: 'https://via.placeholder.com/150',
//       image: product1Image,
//     },
//     {
//       id: 2,
//       name: "Product 2",
//       price: "$35.00",
//       stockStatus: "Out of Stock",
//       //   image: 'https://via.placeholder.com/150',
//       image: product2Image,
//     },
//     {
//       id: 3,
//       name: "Product 3",
//       price: "$50.00",
//       stockStatus: "In Stock",
//       //   image: 'https://via.placeholder.com/150',
//       image: product3Image,
//     },
//     // Add more items as needed
//   ];
//   return (
//     <div className="container mx-auto p-4 mt-0">
//       <h1 className="text-2xl font-bold mb-4">My Wishlist</h1>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 border-b text-left">Product</th>
//               <th className="py-2 px-4 border-b text-left">Price</th>
//               <th className="py-2 px-4 border-b text-left">Stock Status</th>
//               <th className="py-2 px-4 border-b text-left">Action</th>
//               <th className="py-2 px-4 border-b text-left">Remove</th>
//             </tr>
//           </thead>
//           <tbody>
//             {wishlistItems.map((item) => (
//               <tr key={item.id} className="align-middle">
//                 <td className="py-4 px-4 border-b flex items-center">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-16 h-16 object-cover mr-4"
//                   />
//                   <span>{item.name}</span>
//                 </td>
//                 <td className="py-4 px-4 border-b align-middle">
//                   {item.price}
//                 </td>
//                 <td className="py-4 px-4 border-b align-middle">
//                   {item.stockStatus}
//                 </td>
//                 <td className="py-4 px-4 border-b align-middle">
//                   <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
//                     Move to Cart
//                   </button>
//                 </td>
//                 <td className="py-4 px-4 align-middle">
//                   <button className="text-black hover:text-red-500 p-2 rounded">
//                     <BsTrash className="text-lg" />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default WishlistPage;

import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';
import { BsTrash } from 'react-icons/bs';

const WishlistPage = () => {
  const { wishlistItems = [], updateWishlist } = useContext(GlobalContext); // Get wishlist items from GlobalContext
  const navigate = useNavigate();

  useEffect(() => {
    // Reload wishlist from localStorage if available, ensuring latest data is loaded
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (storedWishlist.length !== wishlistItems.length) {
      updateWishlist(storedWishlist);
    }
  }, [wishlistItems, updateWishlist]);

  // Handle the removal of an item from the wishlist
  const onRemove = (productId) => {
    const updatedWishlist = wishlistItems.filter((item) => item.productId !== productId);
    updateWishlist(updatedWishlist); // Update the wishlist in GlobalContext
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist)); // Store the updated wishlist in localStorage
  };

  return (
    <div className="container mx-auto p-4 mt-0">
      <h1 className="text-2xl font-bold mb-4">My Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <p>No items in your wishlist</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">Product</th>
                <th className="py-2 px-4 border-b text-left">Price</th>
                <th className="py-2 px-4 border-b text-left">Stock Status</th>
                <th className="py-2 px-4 border-b text-left">Action</th>
                <th className="py-2 px-4 border-b text-left">Remove</th>
              </tr>
            </thead>
            <tbody>
              {wishlistItems.map((item) => (
                <tr key={item.productId} className="align-middle">
                  <td className="py-4 px-4 border-b flex items-center">
                    <img
                      src={item?.variants?.[0]?.images?.[0] || '/path/to/placeholder.jpg'} // Fallback to placeholder image
                      alt={item.productName}
                      className="w-16 h-16 object-cover mr-4"
                    />
                    <span>{item.productName}</span>
                  </td>
                  <td className="py-4 px-4 border-b">{item.MRP}</td>
                  <td className="py-4 px-4 border-b">{item.stockStatus}</td>
                  <td className="py-4 px-4 border-b">
                    <button
                      onClick={() => navigate(`/product/${item.productId}`)}
                      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                      View Product
                    </button>
                  </td>
                  <td className="py-4 px-4 border-b">
                    <button
                      onClick={() => onRemove(item.productId)}
                      className="text-black hover:text-red-500 p-2 rounded"
                    >
                      <BsTrash className="text-lg" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
