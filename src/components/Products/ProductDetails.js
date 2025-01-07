
import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Comments from '../comments';
import { GlobalContext } from '../../context/GlobalContext' ; 
import { FiHeart } from "react-icons/fi";
import axios from 'axios';
// Sample products array

const products = [
  {
    id: 1,
    name: 'Navy and Orange Striped Polo T-Shirt For Men',
    mainImage: require('../../assets/product_images/1.jpg'),
    images: [
      require('../../assets/product_images/5.jpg'),
      require('../../assets/product_images/2.jpg'),
      require('../../assets/product_images/3.jpg'),
      require('../../assets/product_images/4.jpg')
    ],
    price: '799',
    discountPrice: '1999',
    description: 'Solid Polos',
    colors: ['#173F5F', '#F6D55C'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 2,
    name: 'Navy and Orange Striped Polo T-Shirt For Men',
    mainImage: require('../../assets/product_images/2.jpg'),
    images: [
      require('../../assets/product_images/Product_cat/pro_2.3.jpg'),
      require('../../assets/product_images/Product_cat/Pro_2.jpg'),
      require('../../assets/product_images/Product_cat/Pro_3.jpg'),
      require('../../assets/product_images/Product_cat/Pro_2.jpg')
    ],
    price: '799',
    discountPrice: '1999',
    description: 'Solid Polos',
    colors: ['#173F5F', '#F6D55C'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 3,
    name: 'Navy and Orange Striped Polo T-Shirt For Men',
    mainImage: require('../../assets/product_images/2.jpg'),
    images: [
      require('../../assets/product_images/Product_cat/pro_2.3.jpg'),
      require('../../assets/product_images/Product_cat/Pro_2.jpg'),
      require('../../assets/product_images/Product_cat/Pro_3.jpg'),
      require('../../assets/product_images/Product_cat/Pro_2.jpg')
    ],
    price: '799',
    discountPrice: '1999',
    description: 'Solid Polos',
    colors: ['#173F5F', '#F6D55C'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 4,
    name: 'Navy and Orange Striped Polo T-Shirt For Men',
    mainImage: require('../../assets/product_images/2.jpg'),
    images: [
      require('../../assets/product_images/Product_cat/pro_2.3.jpg'),
      require('../../assets/product_images/Product_cat/Pro_2.jpg'),
      require('../../assets/product_images/Product_cat/Pro_3.jpg'),
      require('../../assets/product_images/Product_cat/Pro_2.jpg')
    ],
    price: '799',
    discountPrice: '1999',
    description: 'Solid Polos',
    colors: ['#173F5F', '#F6D55C'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 5,
    name: 'Navy and Orange Striped Polo T-Shirt For Men',
    mainImage: require('../../assets/product_images/2.jpg'),
    images: [
      require('../../assets/product_images/Product_cat/pro_2.3.jpg'),
      require('../../assets/product_images/Product_cat/Pro_2.jpg'),
      require('../../assets/product_images/Product_cat/Pro_3.jpg'),
      require('../../assets/product_images/Product_cat/Pro_2.jpg')
    ],
    price: '799',
    discountPrice: '1999',
    description: 'Solid Polos',
    colors: ['#173F5F', '#F6D55C'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 6,
    name: 'Navy and Orange Striped Polo T-Shirt For Men',
    mainImage: require('../../assets/product_images/2.jpg'),
    images: [
      require('../../assets/product_images/Product_cat/pro_2.3.jpg'),
      require('../../assets/product_images/Product_cat/Pro_2.jpg'),
      require('../../assets/product_images/Product_cat/Pro_3.jpg'),
      require('../../assets/product_images/Product_cat/Pro_2.jpg')
    ],
    price: '799',
    discountPrice: '1999',
    description: 'Solid Polos',
    colors: ['#173F5F', '#F6D55C'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 7,
    name: 'Navy and Orange Striped Polo T-Shirt For Men',
    mainImage: require('../../assets/product_images/2.jpg'),
    images: [
      require('../../assets/product_images/Product_cat/pro_2.3.jpg'),
      require('../../assets/product_images/Product_cat/Pro_2.jpg'),
      require('../../assets/product_images/Product_cat/Pro_3.jpg'),
      require('../../assets/product_images/Product_cat/Pro_2.jpg')
    ],
    price: '799',
    discountPrice: '1999',
    description: 'Solid Polos',
    colors: ['#173F5F', '#F6D55C'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
    {
      id: 8,
      name: 'Navy and Orange Striped Polo T-Shirt For Men',
      mainImage: require('../../assets/product_images/2.jpg'),
      images: [
        require('../../assets/product_images/Product_cat/pro_2.3.jpg'),
        require('../../assets/product_images/Product_cat/Pro_2.jpg'),
        require('../../assets/product_images/Product_cat/Pro_3.jpg'),
        require('../../assets/product_images/Product_cat/Pro_2.jpg')
      ],
      price: '799',
      discountPrice: '1999',
      description: 'Solid Polos',
      colors: ['#173F5F', '#F6D55C'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
  {
    id: 9,
    name: 'Navy and Orange Striped Polo T-Shirt For Men',
    mainImage: require('../../assets/product_images/2.jpg'),
    images: [
      require('../../assets/product_images/Product_cat/pro_2.3.jpg'),
      require('../../assets/product_images/Product_cat/Pro_2.jpg'),
      require('../../assets/product_images/Product_cat/Pro_3.jpg'),
      require('../../assets/product_images/Product_cat/Pro_2.jpg')
    ],
    price: '799',
    discountPrice: '1999',
    description: 'Solid Polos',
    colors: ['#173F5F', '#F6D55C'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 10,
    name: 'Navy and Orange Striped Polo T-Shirt For Men',
    mainImage: require('../../assets/product_images/1.jpg'),
    images: [
      require('../../assets/product_images/5.jpg'),
      require('../../assets/product_images/2.jpg'),
      require('../../assets/product_images/3.jpg'),
      require('../../assets/product_images/4.jpg')
    ],
    price: '799',
    discountPrice: '1999',
    description: 'Solid Polos',
    colors: ['#173F5F', '#F6D55C'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 11,
    name: 'Navy and Orange Striped Polo T-Shirt For Men',
    mainImage: require('../../assets/product_images/1.jpg'),
    images: [
      require('../../assets/product_images/5.jpg'),
      require('../../assets/product_images/2.jpg'),
      require('../../assets/product_images/3.jpg'),
      require('../../assets/product_images/4.jpg')
    ],
    price: '799',
    discountPrice: '1999',
    description: 'Solid Polos',
    colors: ['#173F5F', '#F6D55C'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 12,
    name: 'Navy and Orange Striped Polo T-Shirt For Men',
    mainImage: require('../../assets/product_images/1.jpg'),
    images: [
      require('../../assets/product_images/5.jpg'),
      require('../../assets/product_images/2.jpg'),
      require('../../assets/product_images/3.jpg'),
      require('../../assets/product_images/4.jpg')
    ],
    price: '799',
    discountPrice: '1999',
    description: 'Solid Polos',
    colors: ['#173F5F', '#F6D55C'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 13,
    name: 'Navy and Orange Striped Polo T-Shirt For Men',
    mainImage: require('../../assets/product_images/1.jpg'),
    images: [
      require('../../assets/product_images/5.jpg'),
      require('../../assets/product_images/2.jpg'),
      require('../../assets/product_images/3.jpg'),
      require('../../assets/product_images/4.jpg')
    ],
    price: '799',
    discountPrice: '1999',
    description: 'Solid Polos',
    colors: ['#173F5F', '#F6D55C'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 14,
    name: 'Navy and Orange Striped Polo T-Shirt For Men',
    mainImage: require('../../assets/product_images/1.jpg'),
    images: [
      require('../../assets/product_images/5.jpg'),
      require('../../assets/product_images/2.jpg'),
      require('../../assets/product_images/3.jpg'),
      require('../../assets/product_images/4.jpg')
    ],
    price: '799',
    discountPrice: '1999',
    description: 'Solid Polos',
    colors: ['#173F5F', '#F6D55C'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 15,
    name: 'Navy and Orange Striped Polo T-Shirt For Men',
    mainImage: require('../../assets/product_images/1.jpg'),
    images: [
      require('../../assets/product_images/5.jpg'),
      require('../../assets/product_images/2.jpg'),
      require('../../assets/product_images/3.jpg'),
      require('../../assets/product_images/4.jpg')
    ],
    price: '799',
    discountPrice: '1999',
    description: 'Solid Polos',
    colors: ['#173F5F', '#F6D55C'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 16,
    name: 'Navy and Orange Striped Polo T-Shirt For Men',
    mainImage: require('../../assets/product_images/1.jpg'),
    images: [
      require('../../assets/product_images/5.jpg'),
      require('../../assets/product_images/2.jpg'),
      require('../../assets/product_images/3.jpg'),
      require('../../assets/product_images/4.jpg')
    ],
    price: '799',
    discountPrice: '1999',
    description: 'Solid Polos',
    colors: ['#173F5F', '#F6D55C'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
];


const responsive = {
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(GlobalContext); 
  const { buyNowCheckout } = useContext(GlobalContext);
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(productId));
    setProduct(foundProduct);
    if (foundProduct) {
      setSelectedImage(foundProduct.mainImage);
      setSelectedColor(foundProduct.colors[0]);
      setSelectedSize(foundProduct.sizes[0]);
    }
  }, [productId]);

 
  useEffect(() => {
    axios
      .get(`https://electronic-ecommerce.onrender.com/api/getProductById/${productId}`)
      .then((response) => {
        setProduct(response.data.data);
        setSelectedImage(response.data.data.variants[0].images[0]); // Set default selected image
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
      });
  }, [productId]);
  useEffect(() => {
    if (product?.variants?.length > 0) {
      setSelectedColor(product.variants[0].colorName);  // Set first color by default
    }
  }, [product?.variants]);
  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    const productToAdd = { 
      ...product, 
      quantity, 
      color: selectedColor, 
      size: selectedSize
    };
    console.log('Product to add to cart:', productToAdd); // Debugging line
    addToCart(productToAdd);
  };
  

  // const handleBuyNow = (id) => {
  //   console.log('Product ID:', id);
  //   console.log('Product:', product);
  //   buyNowCheckout(id)
  //   localStorage.setItem('Buynow', JSON.stringify([product]));
  //   navigate('/checkout/buynow');
  // };
  const handleBuyNow = (id) => {
    const productToAdd = {
      ...product,
      quantity,
      color: selectedColor,
      size: selectedSize,
    };
  
    // Retrieve the current buy-now items from localStorage
    const currentBuyNowItems = JSON.parse(localStorage.getItem("Buynow")) || [];
  
    // Check if an item with the same id, color, and size already exists
    const existingItemIndex = currentBuyNowItems.findIndex(
      (item) =>
        item.id === product.id &&
        item.color === selectedColor &&
        item.size === selectedSize
    );
  
    if (existingItemIndex !== -1) {
      // If the item exists, increase its quantity
      currentBuyNowItems[existingItemIndex].quantity += quantity;
    } else {
      // If the item does not exist, add it to the list
      currentBuyNowItems.push(productToAdd);
    }
  
    // Update localStorage and navigate
    localStorage.setItem("Buynow", JSON.stringify(currentBuyNowItems));
    navigate("/checkout/buynow");
  };
  
  
  const handleWishlistToggle = () => {
    const productToAdd = {
      ...product,
      quantity,
      color: selectedColor,
      size: selectedSize,
    };
  
    setWishlistItems((prevItems) => {
      const itemExists = Array.isArray(prevItems) && prevItems.some((item) => item.id === product.id);
      const updatedWishlist = itemExists
        ? prevItems.filter((item) => item.id !== product.id) // Remove if it exists
        : [...prevItems, productToAdd]; // Add the product with details
      
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };
  
  const handleColorChange = (colorName) => {
    setSelectedColor(colorName);
    const selectedVariant = product?.variants?.find(variant => variant.colorName === colorName);
    if (selectedVariant && selectedVariant.images.length > 0) {
      setSelectedImage(selectedVariant.images[0]); // Set the first image of the selected color
    }
  };
  
  return (
//     <div>
// <div className="container mx-auto p-4 mt-24 flex justify-center">
//           <div className="flex flex-col items-center md:flex-row max-w-4xl w-full">
//       <div className="block md:hidden w-full">
//         <Carousel responsive={responsive}>
//           {product.images.map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt={`${product.name} ${index + 1}`}
//               className="w-full object-cover rounded-md mb-2"
//               onClick={() => setSelectedImage(image)}
//             />
//           ))}
//         </Carousel>
//       </div>

//       <div className="hidden md:flex flex-col md:flex-row items-center">
//         <div className="flex flex-col items-end mr-2 md:w-1/4 md:mt-2 lg:w-1/4 lg:mb-16 md:mb-16">
//           {product.images.map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt={`${product.name} ${index + 1}`}
//               className={`w-16 md:w-[75px] lg:w-20 object-cover rounded-md mb-2 cursor-pointer ${
//                 selectedImage === image ? 'border-2 border-blue-500' : 'border'
//               }`}
//               onClick={() => setSelectedImage(image)}
//             />
//           ))}
//         </div>
//         <div className="relative w-full md:w-3/4 lg:w-2/3">
//   <img
//     src={selectedImage}
//     alt={product.name}
//     className="w-full h-auto object-contain rounded-md mb-16"
//   />
//   <button
//     onClick={handleWishlistToggle}
//     className="absolute top-2 right-2 text-white"
//   >
//     <FiHeart
//       size={24}
//       className={`${
//         wishlistItems.some((item) => item.id === product.id)
//           ? 'text-red-600'
//           : 'text-gray-300'
//       }`}
//       style={{
//         fill: wishlistItems.some((item) => item.id === product.id)
//           ? 'red'
//           : 'gray',
//       }}
//     />
//   </button>
// </div>

//       </div>

//       {/* Product Details */}
//       <div className="md:ml-8 text-center md:text-left">
//         <h1 className="text-2xl font-bold">{product.name}</h1>
//         <div className="flex items-center justify-center md:justify-start mt-2">
//           <span className="text-2xl font-bold text-green-600">{product.price}</span>
//           <span className="text-xl text-gray-400 line-through ml-2">{product.discountPrice}</span>
//         </div>
//         <div className="mt-4">
//           <h3 className="text-lg font-bold">Color:</h3>
//           <div className="flex justify-center md:justify-start mt-2">
//             {product.colors && product.colors.length > 0 ? product.colors.map((color, index) => (
//               <div
//                 key={index}
//                 className={`w-8 h-8 rounded-full mr-2 ${selectedColor === color ? 'border-4 border-blue-600' : 'border'} cursor-pointer`}
//                 style={{ backgroundColor: color }}
//                 onClick={() => setSelectedColor(color)}
//               ></div>
//             )) : <div>No colors available</div>}
//           </div>
//         </div>
//         <div className="mt-4">
//           <h3 className="text-lg font-bold">Size:</h3>
//           <div className="flex justify-center md:justify-start mt-2">
//             {product.sizes && product.sizes.length > 0 ? product.sizes.map((size, index) => (
//               <div
//                 key={index}
//                 className={`rounded p-3 border mr-4 cursor-pointer ${selectedSize === size ? 'border-blue-600' : 'border-gray-300'}`}
//                 onClick={() => setSelectedSize(size)}
//               >
//                 {size}
//               </div>
//             )) : <div>No sizes available</div>}
//           </div>
//         </div>
//         <div className="mt-4">
//           <h3 className="text-lg font-bold">Qty:</h3>
//           <div className="flex items-center justify-center md:justify-start mt-2">
//             <button onClick={() => setQuantity(quantity - 1)} disabled={quantity === 1} className="p-2 border">-</button>
//             <span className="mx-2">{quantity}</span>
//             <button onClick={() => setQuantity(quantity + 1)} className="p-2 border">+</button>
//           </div>
//         </div>
//         <div className="mt-4 flex justify-center md:justify-start space-x-4">
//           <button onClick={handleAddToCart} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
//             Add to Cart
//           </button>
//           <button onClick={() => handleBuyNow(product.id)} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
//             Buy Now
//           </button>
//         </div>
//       </div>
//     </div>
      
//       </div>
//       <div className='w-full'>
//         <Comments />
//       </div>
//     </div>

/* <div className="container mx-auto p-4 mt-24 flex justify-center">
<div className="flex flex-col items-center md:flex-row max-w-4xl w-full">
  <div className="block md:hidden w-full">
    <Carousel responsive={responsive}>
      {product?.variants?.[0]?.images && product?.variants[0]?.images.length > 0 ? (
        product.variants[0].images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${product.productName} ${index + 1}`}
            className="w-full object-cover rounded-md mb-2"
            onClick={() => setSelectedImage(image)}
          />
        ))
      ) : (
        <div>No images available</div>
      )}
    </Carousel>
  </div>

  <div className="hidden md:flex flex-col md:flex-row items-center">
    <div className="flex flex-col items-end mr-2 md:w-1/4 md:mt-2 lg:w-1/4 lg:mb-16 md:mb-16">
      {product?.variants?.[0]?.images && product?.variants[0]?.images.length > 0 ? (
        product.variants[0].images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${product.productName} ${index + 1}`}
            className={`w-16 md:w-[75px] lg:w-20 object-cover rounded-md mb-2 cursor-pointer ${
              selectedImage === image ? "border-2 border-blue-500" : "border"
            }`}
            onClick={() => setSelectedImage(image)}
          />
        ))
      ) : (
        <div>No images available</div>
      )}
    </div>
    <div className="relative w-full md:w-3/4 lg:w-2/3">
      <img
        src={selectedImage || (product?.variants?.[0]?.images && product?.variants[0].images[0])}
        alt={product.productName}
        className="w-full h-auto object-contain rounded-md mb-16"
      />
      <button
        onClick={handleWishlistToggle}
        className="absolute top-2 right-2 text-white"
      >
        <FiHeart
          size={24}
          className={`${
            wishlistItems.some((item) => item.productId === product.productId)
              ? "text-red-600"
              : "text-gray-300"
          }`}
          style={{
            fill: wishlistItems.some((item) => item.productId === product.productId)
              ? "red"
              : "gray",
          }}
        />
      </button>
    </div>
  </div>

  <div className="md:ml-8 text-center md:text-left">
    <h1 className="text-2xl font-bold">{product.productName}</h1>
    <div className="flex items-center justify-center md:justify-start mt-2">
      <span className="text-2xl font-bold text-green-600">{product.MRP}</span>
      <span className="text-xl text-gray-400 line-through ml-2">{product.productDiscount}</span>
    </div>
    <div className="mt-4">
      <h3 className="text-lg font-bold">Color:</h3>
      <div className="flex justify-center md:justify-start mt-2">
        {product?.variants?.map((variant, index) => (
          <div
            key={index}
            className={`w-8 h-8 rounded-full mr-2 ${selectedColor === variant.colorName ? "border-4 border-blue-600" : "border"} cursor-pointer`}
            style={{ backgroundColor: variant.colorHexCode }}
            onClick={() => setSelectedColor(variant.colorName)}
          ></div>
        ))}
      </div>
    </div>
    <div className="mt-4">
      <h3 className="text-lg font-bold">Size:</h3>
      <div className="flex justify-center md:justify-start mt-2">
       
            {selectedColor && product?.variants?.length > 0 &&
  product?.variants
    .filter((variant) => variant.colorName === selectedColor)
    .map((variant, index) => (
      variant?.sizes?.length > 0 && (
        variant.sizes.map((size, sizeIndex) => (
          <div
            key={sizeIndex}
            className={`rounded p-3 border mr-4 cursor-pointer ${
              selectedSize === size.sizeLabel ? "border-blue-600" : "border-gray-300"
            }`}
            onClick={() => setSelectedSize(size.sizeLabel)}
          >
            {size.sizeLabel}
          </div>
        ))
      )
    ))
}

      </div>
    </div>
    <div className="mt-4">
      <h3 className="text-lg font-bold">Qty:</h3>
      <div className="flex items-center justify-center md:justify-start mt-2">
        <button onClick={() => setQuantity(quantity - 1)} disabled={quantity === 1} className="p-2 border">-</button>
        <span className="mx-2">{quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)} className="p-2 border">+</button>
      </div>
    </div>
    <div className="mt-4 flex justify-center md:justify-start space-x-4">
      <button onClick={handleAddToCart} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
        Add to Cart
      </button>
      <button onClick={() => handleBuyNow(product.productId)} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
        Buy Now
      </button>
    </div>
  </div>
</div>

</div> */
<div className="container mx-auto p-4 mt-24 flex justify-center">
<div className="flex flex-col items-center md:flex-row max-w-4xl w-full">
  <div className="block md:hidden w-full">
    <Carousel responsive={responsive}>
      {product?.variants?.[0]?.images && product?.variants[0]?.images.length > 0 ? (
        product.variants[0].images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${product.productName} ${index + 1}`}
            className="w-full object-cover rounded-md mb-2"
            onClick={() => setSelectedImage(image)}
          />
        ))
      ) : (
        <div>No images available</div>
      )}
    </Carousel>
  </div>

  {/* <div className="hidden md:flex flex-col md:flex-row items-center">
    <div className="flex flex-col items-end mr-2 md:w-1/4 md:mt-2 lg:w-1/4 lg:mb-16 md:mb-16">
      {product?.variants?.find(variant => variant.colorName === selectedColor)?.images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`${product.productName} ${index + 1}`}
          className={`w-16 md:w-[75px] lg:w-20 object-cover rounded-md mb-2 cursor-pointer ${
            selectedImage === image ? "border-2 border-blue-500" : "border"
          }`}
          onClick={() => setSelectedImage(image)}
        />
      ))}
    </div>
    <div className="relative w-full md:w-3/4 lg:w-2/3">
      <img
        src={selectedImage || (product?.variants?.[0]?.images && product?.variants[0]?.images[0])}
        alt={product.productName}
        className="w-full h-auto object-contain rounded-md mb-16"
      />
      <button
        onClick={handleWishlistToggle}
        className="absolute top-2 right-2 text-white"
      >
        <FiHeart
          size={24}
          className={`${
            wishlistItems.some((item) => item.productId === product.productId)
              ? "text-red-600"
              : "text-gray-300"
          }`}
          style={{
            fill: wishlistItems.some((item) => item.productId === product.productId)
              ? "red"
              : "gray",
          }}
        />
      </button>
    </div>
  </div> */}
  <div className="hidden md:flex flex-col md:flex-row items-center">
  <div className="flex flex-col items-end mr-2 md:w-1/4 md:mt-2 lg:w-1/4 lg:mb-16 md:mb-16">
    {product?.variants?.find(variant => variant.colorName === selectedColor)?.images.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`${product.productName} ${index + 1}`}
        className={`w-16 md:w-[75px] lg:w-20 object-cover rounded-md mb-2 cursor-pointer ${
          selectedImage === image ? "border-2 border-blue-500" : "border"
        }`}
        onClick={() => setSelectedImage(image)}
      />
    ))}
  </div>
  <div className="relative w-full md:w-3/4 lg:w-2/3">
    <img
      src={selectedImage || (product?.variants?.[0]?.images && product?.variants[0]?.images[0])}
      alt={product.productName}
      className="w-[400px] h-[450px] object-contain rounded-md mb-16" // Set fixed width and height
    />
    <button
      onClick={handleWishlistToggle}
      className="absolute top-2 right-2 text-white"
    >
      <FiHeart
        size={24}
        className={`${
          wishlistItems.some((item) => item.productId === product.productId)
            ? "text-red-600"
            : "text-gray-300"
        }`}
        style={{
          fill: wishlistItems.some((item) => item.productId === product.productId)
            ? "red"
            : "gray",
        }}
      />
    </button>
  </div>
</div>


  {/* Product Details */}
  <div className="md:ml-8 text-center md:text-left">
    <h1 className="text-2xl font-bold">{product.productName}</h1>
    <div className="flex items-center justify-center md:justify-start mt-2">
      <span className="text-2xl font-bold text-green-600">{product.MRP}</span>
      <span className="text-xl text-gray-400 line-through ml-2">{product.productDiscount}</span>
    </div>
    <div className="mt-4">
      <h3 className="text-lg font-bold">Color:</h3>
      <div className="flex justify-center md:justify-start mt-2">
        {product?.variants?.map((variant, index) => (
          <div
            key={index}
            className={`w-8 h-8 rounded-full mr-2 ${selectedColor === variant.colorName ? "border-4 border-blue-600" : "border"} cursor-pointer`}
            style={{ backgroundColor: variant.colorHexCode }}
            onClick={() => handleColorChange(variant.colorName)}
          ></div>
        ))}
      </div>
    </div>
    <div className="mt-4">
      <h3 className="text-lg font-bold">Size:</h3>
      <div className="flex justify-center md:justify-start mt-2">
        {selectedColor && product?.variants?.length > 0 &&
          product?.variants
            .filter((variant) => variant.colorName === selectedColor)
            .map((variant, index) => (
              variant?.sizes?.length > 0 && (
                variant.sizes.map((size, sizeIndex) => (
                  <div
                    key={sizeIndex}
                    className={`rounded p-3 border mr-4 cursor-pointer ${
                      selectedSize === size.sizeLabel ? "border-blue-600" : "border-gray-300"
                    }`}
                    onClick={() => setSelectedSize(size.sizeLabel)}
                  >
                    {size.sizeLabel}
                  </div>
                ))
              )
            ))
        }
      </div>
    </div>
    <div className="mt-4">
      <h3 className="text-lg font-bold">Qty:</h3>
      <div className="flex items-center justify-center md:justify-start mt-2">
        <button onClick={() => setQuantity(quantity - 1)} disabled={quantity === 1} className="p-2 border">-</button>
        <span className="mx-2">{quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)} className="p-2 border">+</button>
      </div>
    </div>
    <div className="mt-4 flex justify-center md:justify-start space-x-4">
      <button onClick={handleAddToCart} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
        Add to Cart
      </button>
      <button onClick={() => handleBuyNow(product.productId)} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
        Buy Now
      </button>
    </div>
  </div>
</div>
</div>

  );
};

export default ProductDetails;
