
// import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { FiHeart } from "react-icons/fi";

// const GetAllProducts = () => {
//   const location = useLocation();
//   const [products, setProducts] = useState([]);
//   const [wishlistItems, setWishlistItems] = useState(() => {
//     // Load wishlist items from localStorage on initial render
//     const savedWishlist = localStorage.getItem("wishlist");
//     return savedWishlist ? JSON.parse(savedWishlist) : [];
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const queryParams = new URLSearchParams(location.search);
//   const categoryID = queryParams.get("categoryID");

//   useEffect(() => {
//     const fetchProducts = async () => {
//       if (!categoryID) return;

//       try {
//         const response = await axios.get(
//           "https://electronic-ecommerce.onrender.com/api/getProductDetails",
//           { params: { categoryID } }
//         );

//         if (response.data.statusCode === "SUCCESS") {
//           setProducts(response.data.data);
//         } else {
//           setError("No products found for this category");
//         }
//         setLoading(false);
//       } catch (err) {
//         setError("Failed to fetch products");
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, [categoryID]);

//   const handleWishlistToggle = (product) => {
//     const productToAdd = { ...product };

//     setWishlistItems((prevItems) => {
//       const itemExists = prevItems.some(
//         (item) => item.productId === product.productId
//       );
//       const updatedWishlist = itemExists
//         ? prevItems.filter((item) => item.productId !== product.productId) // Remove if it exists
//         : [...prevItems, productToAdd]; // Add the product
//       localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
//       return updatedWishlist;
//     });
//   };

//   if (loading) return <p>Loading products...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="mt-32">
//       <div className="grid grid-cols-4 gap-4 relative">
//         {Array.isArray(products) && products.length > 0 ? (
//           products.map((product) => {
//             const productImage = product.variants?.[0]?.images?.[0];

//             return (
//               <div
//                 key={product.productId}
//                 className="border p-4 rounded-lg relative"
//               >
//                 {/* Wishlist toggle button */}
//                 <button
//                   onClick={() => handleWishlistToggle(product)}
//                   className="absolute top-2 right-2"
//                 >
//                   <FiHeart
//                     size={24}
//                     className={`${
//                       wishlistItems.some(
//                         (item) => item.productId === product.productId
//                       )
//                         ? "text-red-600"
//                         : "text-gray-300"
//                     }`}
//                     style={{
//                       fill: wishlistItems.some(
//                         (item) => item.productId === product.productId
//                       )
//                         ? "red"
//                         : "gray",
//                     }}
//                   />
//                 </button>

//                 {/* Link component to navigate to ProductDetails page */}
//                 <Link to={`/product/${product.productId}`}>
//                   <img
//                     src={productImage || "default-image.jpg"}
//                     alt={product.productName}
//                     className="w-full h-80 object-cover mb-4 rounded-lg"
//                   />
//                 </Link>
//                 <p className="text-center text-sm font-bold text-gray-600">
//                   {product.productName}
//                 </p>
//                 <p className="text-center text-sm text-gray-500">
//                   ${product.MRP}
//                 </p>
//               </div>
//             );
//           })
//         ) : (
//           <p>No products available in this category.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default GetAllProducts;


// import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { FiHeart } from "react-icons/fi";

// const GetAllProducts = () => {
//   const location = useLocation();
//   const [products, setProducts] = useState([]);
//   const [wishlistItems, setWishlistItems] = useState(() => {
//     // Load wishlist items from localStorage on initial render
//     const savedWishlist = localStorage.getItem("wishlist");
//     return savedWishlist ? JSON.parse(savedWishlist) : [];
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const [selectedPriceRange, setSelectedPriceRange] = useState("");
//   const [selectedColor, setSelectedColor] = useState("");

//   const queryParams = new URLSearchParams(location.search);
//   const categoryID = queryParams.get("categoryID");

//   useEffect(() => {
//     const fetchProducts = async () => {
//       if (!categoryID) return;

//       try {
//         const response = await axios.get(
//           "https://electronic-ecommerce.onrender.com/api/getProductDetails",
//           { params: { categoryID } }
//         );

//         if (response.data.statusCode === "SUCCESS") {
//           setProducts(response.data.data);
//         } else {
//           setError("No products found for this category");
//         }
//         setLoading(false);
//       } catch (err) {
//         setError("Failed to fetch products");
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, [categoryID]);

//   const handleWishlistToggle = (product) => {
//     const productToAdd = { ...product };

//     setWishlistItems((prevItems) => {
//       const itemExists = prevItems.some(
//         (item) => item.productId === product.productId
//       );
//       const updatedWishlist = itemExists
//         ? prevItems.filter((item) => item.productId !== product.productId) // Remove if it exists
//         : [...prevItems, productToAdd]; // Add the product
//       localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
//       return updatedWishlist;
//     });
//   };

//   const handlePriceFilterChange = (event) => {
//     setSelectedPriceRange(event.target.value);
//     console.log(event.target.value)
//   };

//   const handleColorFilterChange = (event) => {
//     setSelectedColor(event.target.value);
//   };

//   // Filter products based on price and color
//   const filteredProducts = products.filter((product) => {
//     let priceMatch = true;
//     let colorMatch = true;

//     if (selectedPriceRange) {
//       const [minPrice, maxPrice] = selectedPriceRange.split("-").map(Number);
//       priceMatch =
//         product.MRP >= minPrice && product.MRP <= maxPrice;
//     }

//     if (selectedColor) {
//       colorMatch = product.variants?.some(variant => variant.color === selectedColor);
//     }

//     return priceMatch && colorMatch;
//   });

//   if (loading) return <p>Loading products...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="mt-32 flex">
//       {/* Left-side filter section */}
//       <div className="w-1/4 p-4 bg-gray-100">
//         <h2 className="text-lg font-bold mb-4">Filters</h2>

//         {/* Price Filter */}
//         <div className="mb-4">
//           <h3 className="font-semibold mb-2">Price Range</h3>
//           <select
//             value={selectedPriceRange}
//             onChange={handlePriceFilterChange}
//             className="w-full p-2 border rounded"
//           >
//             <option value="">Select Price Range</option>
//             <option value="0-50">Under $1000</option>
//             <option value="51-100">$1000 - $2000</option>
//             <option value="101-200">$2000 - $4000</option>
//             <option value="201-500">$4000 - $5000</option>
//           </select>
//         </div>

//         {/* Color Filter */}
//         <div>
//           <h3 className="font-semibold mb-2">Color</h3>
//           <select
//             value={selectedColor}
//             onChange={handleColorFilterChange}
//             className="w-full p-2 border rounded"
//           >
//             <option value="">Select Color</option>
//             <option value="Red">Red</option>
//             <option value="Blue">Blue</option>
//             <option value="Green">Green</option>
//             <option value="Black">Black</option>
//             <option value="White">White</option>
//           </select>
//         </div>
//       </div>

//       {/* Product Listing */}
//       <div className="w-3/4 p-4">
//         <div className="grid grid-cols-4 gap-4">
//           {filteredProducts.length > 0 ? (
//             filteredProducts.map((product) => {
//               const productImage = product.variants?.[0]?.images?.[0];

//               return (
//                 <div
//                   key={product.productId}
//                   className="border p-4 rounded-lg relative"
//                 >
//                   {/* Wishlist toggle button */}
//                   <button
//                     onClick={() => handleWishlistToggle(product)}
//                     className="absolute top-2 right-2"
//                   >
//                     <FiHeart
//                       size={24}
//                       className={`${
//                         wishlistItems.some(
//                           (item) => item.productId === product.productId
//                         )
//                           ? "text-red-600"
//                           : "text-gray-300"
//                       }`}
//                     />
//                   </button>

//                   {/* Link to product details page */}
//                   <Link to={`/product/${product.productId}`}>
//                     <img
//                       src={productImage || "default-image.jpg"}
//                       alt={product.productName}
//                       className="w-full h-80 object-cover mb-4 rounded-lg"
//                     />
//                   </Link>
//                   <p className="text-center text-sm font-bold text-gray-600">
//                     {product.productName}
//                   </p>
//                   <p className="text-center text-sm text-gray-500">
//                     ${product.MRP}
//                   </p>
//                 </div>
//               );
//             })
//           ) : (
//             <p>No products available in this category.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GetAllProducts;

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FiHeart } from "react-icons/fi";

const GetAllProducts = () => {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [wishlistItems, setWishlistItems] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedDiscount, setSelectedDiscount] = useState("");
  const queryParams = new URLSearchParams(location.search);
  const categoryID = queryParams.get("categoryID");

  useEffect(() => {
    const fetchProducts = async () => {
      if (!categoryID) return;

      try {
        const response = await axios.get(
          "https://electronic-ecommerce.onrender.com/api/getProductDetails",
          { params: { categoryID } }
        );

        if (response.data.statusCode === "SUCCESS") {
          setProducts(response.data.data);
        } else {
          setError("No products found for this category");
        }
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch products");
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryID]);

  const handleWishlistToggle = (product) => {
    const productToAdd = { ...product };

    setWishlistItems((prevItems) => {
      const itemExists = prevItems.some(
        (item) => item.productId === product.productId
      );
      const updatedWishlist = itemExists
        ? prevItems.filter((item) => item.productId !== product.productId) // Remove if it exists
        : [...prevItems, productToAdd]; // Add the product
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };

  const handlePriceFilterChange = (event) => {
    setSelectedPriceRange(event.target.value);
  };

  const handleColorFilterChange = (event) => {
    setSelectedColor(event.target.value);
  };
  const handleBrandFilterChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  // Handle discount change
  const handleDiscountFilterChange = (event) => {
    setSelectedDiscount(event.target.value); // Set selected discount
  };

  // Filter products based on price, color, brand, and discount
  const filteredProducts = products.filter((product) => {
    let priceMatch = true;
    let colorMatch = true;
    let brandMatch = true;
    let discountMatch = true; // New variable for discount filter

    // Check price range
    if (selectedPriceRange) {
      const [minPrice, maxPrice] = selectedPriceRange.split("-").map(Number);
      const productPrice = parseFloat(product.MRP.replace(/[^\d.-]/g, ''));
      priceMatch = !isNaN(productPrice) && productPrice >= minPrice && productPrice <= maxPrice;
    }

    // Check color
    if (selectedColor) {
      colorMatch = product.variants?.some(variant => variant.colorName?.toLowerCase() === selectedColor.toLowerCase());
    }

    // Check brand
    if (selectedBrand) {
      brandMatch = product.brandName?.toLowerCase() === selectedBrand.toLowerCase();
    }

    // Check discount
    if (selectedDiscount) {
      const discountPercentage = parseInt(product.productDiscount.replace('%', ''));
      const [minDiscount, maxDiscount] = selectedDiscount.split("-").map(Number);
      discountMatch = discountPercentage >= minDiscount && discountPercentage <= maxDiscount;
    }

    return priceMatch && colorMatch && brandMatch && discountMatch;
  });

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (


<div className="mt-32 flex flex-col md:flex-row">
  {/* Left-side filter section */}
  <div className="w-full md:w-1/5 p-4 bg-gray-100">
    <h2 className="text-lg font-bold mb-4">Filters</h2>

    {/* Price Filter */}
    <div className="mb-4">
      <h3 className="font-semibold mb-2">Price Range</h3>
      <select
        value={selectedPriceRange}
        onChange={handlePriceFilterChange}
        className="w-full p-2 border rounded"
      >
        <option value="">Select Price Range</option>
        <option value="0-1000">Under $1000</option>
        <option value="1001-2000">$1001 - $2000</option>
        <option value="2001-4000">$2001 - $4000</option>
        <option value="4001-5000">$4001 - $5000</option>
      </select>
    </div>

    {/* Color Filter */}
    <div className="mb-4">
      <h3 className="font-semibold mb-2">Color</h3>
      <select
        value={selectedColor}
        onChange={handleColorFilterChange}
        className="w-full p-2 border rounded"
      >
        <option value="">Select Color</option>
        <option value="Red">Red</option>
        <option value="Blue">Blue</option>
        <option value="Green">Green</option>
        <option value="Black">Black</option>
        <option value="White">White</option>
      </select>
    </div>

    {/* Brand Filter */}
    <div className="mb-4">
      <h3 className="font-semibold mb-2">Brand</h3>
      <select
        value={selectedBrand}
        onChange={handleBrandFilterChange}
        className="w-full p-2 border rounded"
      >
        <option value="">Select Brand</option>
        <option value="Nike">Nike</option>
        <option value="Adidas">Adidas</option>
        <option value="Puma">Puma</option>
        <option value="Reebok">Reebok</option>
        <option value="Under Armour">Under Armour</option>
        <option value="New Balance">New Balance</option>
      </select>
    </div>

    {/* Discount Filter */}
    <div className="mb-4">
      <h3 className="font-semibold mb-2">Select Discount</h3>
      <select
        value={selectedDiscount}
        onChange={handleDiscountFilterChange}
        className="w-full p-2 border rounded"
      >
        <option value="">Select Discount</option>
        <option value="0-10">0% - 10%</option>
        <option value="11-20">11% - 20%</option>
        <option value="21-30">21% - 30%</option>
        <option value="31-50">31% - 50%</option>
      </select>
    </div>
  </div>

  {/* Product Listing */}
  <div className="w-full md:w-4/5 p-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => {
          const productImage = product.variants?.[0]?.images?.[0];

          return (
            <div
              key={product.productId}
              className="border p-4 rounded-lg relative"
            >
              {/* Wishlist toggle button */}
              <button
                onClick={() => handleWishlistToggle(product)}
                className="absolute top-2 right-2"
              >
                <FiHeart
                  size={24}
                  className={`${
                    wishlistItems.some(
                      (item) => item.productId === product.productId
                    )
                      ? "text-red-600"
                      : "text-gray-300"
                  }`}
                  style={{
                    stroke: wishlistItems.some(
                      (item) => item.productId === product.productId
                    )
                      ? "red"
                      : "gray", // Default to gray stroke
                    fill: wishlistItems.some(
                      (item) => item.productId === product.productId
                    )
                      ? "red"
                      : "none", // Ensure red fill when active
                  }}
                />
              </button>

              {/* Link to product details page */}
              <Link to={`/product/${product.productId}`}>
                <img
                  src={productImage || "default-image.jpg"}
                  alt={product.productName}
                  className="w-full h-60 sm:h-72 md:h-80 object-cover mb-4 rounded-lg"
                />
              </Link>
              <p className="text-center text-sm font-bold text-gray-600">
                {product.productName}
              </p>
              <p className="text-center text-sm text-gray-500">
                ${product.MRP}
              </p>
            </div>
          );
        })
      ) : (
        <p>No products available in this category.</p>
      )}
    </div>
  </div>
</div>

  );
};

export default GetAllProducts;
