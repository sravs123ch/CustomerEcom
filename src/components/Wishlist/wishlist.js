import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { wishlistItems = [], updateWishlist } = useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Reload wishlist from localStorage in case of stale data
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (storedWishlist.length !== wishlistItems.length) {
      updateWishlist(storedWishlist);
    }
  }, [wishlistItems, updateWishlist]);

  const onRemove = (productId) => {
    const updatedWishlist = wishlistItems.filter((item) => item.productId !== productId);
    updateWishlist(updatedWishlist);
  };

  return (
//     <div className="bg-white mt-20">
//   <h1 className="text-2xl font-bold mb-6">Your Wishlist</h1>
//   {wishlistItems.length === 0 ? (
//     <p>No items in your wishlist</p>
//   ) : (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//       {wishlistItems.map((product) => (
//         <div key={product.productId} className="border p-4 rounded-lg shadow-md">
//           <div className="w-full h-48 flex justify-center items-center bg-gray-100 rounded mb-4">
//             <img
//               src={product?.variants?.[0]?.images?.[0] || '/path/to/placeholder.jpg'}
//               alt={product.productName}
//               className="w-full h-full object-contain rounded"
//             />
//           </div>
//           <h3 className="text-xl font-semibold">{product.productName}</h3>
//           <p className="text-lg text-green-600">₹ {product.MRP}</p>
//           <p className="text-md text-gray-700">{product.category?.categoryName}</p>
//           <button
//             onClick={() => navigate(`/product/${product.productId}`)}
//             className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-600 transition-colors"
//           >
//             View Product
//           </button>
//           <button
//             onClick={() => onRemove(product.productId)}
//             className="bg-red-500 text-white px-4 py-2 rounded-md mt-2 ml-2 hover:bg-red-600 transition-colors"
//           >
//             Remove
//           </button>
//         </div>
//       ))}
//     </div>
//   )}
// </div>
<div className="bg-white mt-20">
  <h1 className="text-2xl font-bold mb-6">Your Wishlist</h1>
  {wishlistItems.length === 0 ? (
    <p>No items in your wishlist</p>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {wishlistItems.map((product) => (
        <div key={product.productId} className="border p-4 rounded-lg shadow-md">
          <Link to={`/product/${product.productId}`}>
            <img
              src={product?.variants?.[0]?.images?.[0] || "default-image.jpg"}
              alt={product.productName}
              className="w-full h-60 sm:h-72 md:h-80 object-cover mb-4 rounded-lg"
            />
          </Link>
          <h3 className="text-xl font-semibold">{product.productName}</h3>
          <p className="text-lg text-green-600">₹ {product.MRP}</p>
          <p className="text-md text-gray-700">{product.category?.categoryName}</p>
          <button
            onClick={() => navigate(`/product/${product.productId}`)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-600 transition-colors"
          >
            View Product
          </button>
          <button
            onClick={() => onRemove(product.productId)}
            className="bg-red-500 text-white px-4 py-2 rounded-md mt-2 ml-2 hover:bg-red-600 transition-colors"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  )}
</div>

  );
};

export default Wishlist;
