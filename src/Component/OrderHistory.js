

// import React, { useEffect, useState } from "react";
// import {
//   Menu,
//   MenuButton,
//   MenuItem,
//   MenuItems,
// } from "@headlessui/react";
// import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
// import axios from "axios";

// export default function Example() {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const customerId = localStorage.getItem("customerId") || "2";
//         const response = await axios.get(
//           `https://electronic-ecommerce.onrender.com/api/getOrdersByCustomerId/${customerId}`
//         );

//         if (response.data?.data) {
//           setOrders(response.data.data);
//         } else {
//           throw new Error("Unexpected API response structure.");
//         }
//       } catch (err) {
//         setError(err.message || "Failed to fetch orders.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, []);

//   if (loading) {
//     return <p className="text-center text-gray-500">Loading orders...</p>;
//   }

//   if (error) {
//     return <p className="text-center text-red-500">Error: {error}</p>;
//   }

//   if (!orders.length) {
//     return <p className="text-center text-gray-500">No orders found.</p>;
//   }

//   return (
//     <div className="bg-gray-50">
//       <main className="py-0">
//         <div className="mx-auto max-w-7xl sm:px-2 lg:px-8">
//           <div className="mx-auto max-w-2xl px-4 lg:max-w-4xl lg:px-0">
//             <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mt-10">
//               Order history
//             </h1>
//             <p className="mt-2 text-sm text-gray-500">
//               Check the status of recent orders, manage returns, and discover similar products.
//             </p>
//           </div>
//         </div>

//         <section aria-labelledby="recent-heading" className="mt-16">
//           <h2 id="recent-heading" className="sr-only">
//             Recent orders
//           </h2>
//           <div className="mx-auto max-w-7xl sm:px-2 lg:px-8">
//             <div className="mx-auto max-w-2xl space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
//               {orders.map((order) => (
//                 <div
//                   key={order.orderId}
//                   className="border-b border-t border-gray-200 bg-white shadow-sm sm:rounded-lg sm:border"
//                 >
//                   <div className="flex items-center border-b border-gray-200 p-4 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:p-6">
//                     <dl className="grid flex-1 grid-cols-2 gap-x-6 text-sm sm:col-span-3 sm:grid-cols-3 lg:col-span-2">
//                       <div>
//                         <dt className="font-medium text-gray-900">Order number</dt>
//                         <dd className="mt-1 text-gray-500">{order.orderId}</dd>
//                       </div>
//                       <div className="hidden sm:block">
//                         <dt className="font-medium text-gray-900">Date placed</dt>
//                         <dd className="mt-1 text-gray-500">
//                           {new Date(order.orderDate).toLocaleDateString()}
//                         </dd>
//                       </div>
//                       <div>
//                         <dt className="font-medium text-gray-900">Total amount</dt>
//                         <dd className="mt-1 font-medium text-gray-900">{order.totalAmount}</dd>
//                       </div>
//                     </dl>

//                     <Menu as="div" className="relative flex justify-end lg:hidden">
//                       <MenuButton className="-m-2 flex items-center p-2 text-gray-400 hover:text-gray-500">
//                         <span className="sr-only">Options for order {order.orderId}</span>
//                         <EllipsisVerticalIcon aria-hidden="true" className="h-6 w-6" />
//                       </MenuButton>
//                       <MenuItems
//                         className="absolute right-0 z-10 mt-2 w-40 origin-bottom-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none"
//                       >
//                         <MenuItem>
//                           <a
//                             href="#"
//                             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                           >
//                             View
//                           </a>
//                         </MenuItem>
//                         <MenuItem>
//                           <a
//                             href="#"
//                             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                           >
//                             Invoice
//                           </a>
//                         </MenuItem>
//                       </MenuItems>
//                     </Menu>
//                   </div>

//                   {/* Order Items */}
//                   <div className="p-4 sm:p-6">
//                     {order.orderItems.map((item) => (
//                       <div
//                         key={item.orderItemId}
//                         className="flex space-x-4 border-b border-gray-200 pb-4"
//                       >
//                         <img
//                           src={item.product.images[0]}
//                           alt={item.product.productName}
//                           className="h-20 w-20 rounded object-cover"
//                         />
//                         <div>
//                           <h3 className="font-medium text-gray-900">{item.product.productName}</h3>
//                           <p className="text-gray-500">{item.product.brandName}</p>
//                           <p className="text-gray-500">Quantity: {item.quantity}</p>
//                           <p className="text-gray-500">Price: ₹{item.price}</p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }




import React, { useEffect, useState } from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { Link} from "react-router-dom";

export default function Example() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const customerId = localStorage.getItem("customerId") || "2";
        const response = await axios.get(
          `https://electronic-ecommerce.onrender.com/api/getOrdersByCustomerId/${customerId}`
        );

        if (response.data?.data) {
          setOrders(response.data.data);
        } else {
          throw new Error("Unexpected API response structure.");
        }
      } catch (err) {
        setError(err.message || "Failed to fetch orders.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading orders...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  if (!orders.length) {
    return <p className="text-center text-gray-500">No orders found.</p>;
  }

  return (
    <div className="bg-gray-50 -mt-30">
      <main className="py-0">
        <div className="mx-auto max-w-7xl sm:px-2 lg:px-8">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-4xl lg:px-0">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mt-10">
              Order history
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Check the status of recent orders, manage returns, and discover similar products.
            </p>
          </div>
        </div>

        <section aria-labelledby="recent-heading" className="mt-16">
          <h2 id="recent-heading" className="sr-only">
            Recent orders
          </h2>
          <div className="mx-auto max-w-7xl sm:px-2 lg:px-8">
            <div className="mx-auto max-w-2xl space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
              {orders.map((order) => (
                <div
                  key={order.orderId}
                  className="border-b border-t border-gray-200 bg-white shadow-sm sm:rounded-lg sm:border"
                >
                  <div className="flex items-center border-b border-gray-200 p-4 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:p-6">
                    {/* <dl className="grid flex-1 grid-cols-2 gap-x-6 text-sm sm:col-span-3 sm:grid-cols-3 lg:col-span-2">
                      <div>
                        <dt className="font-medium text-gray-900">Order number</dt>
                        <dd className="mt-1 text-gray-500">{order.orderId}</dd>
                      </div>
                      <div className="hidden sm:block">
                        <dt className="font-medium text-gray-900">Date placed</dt>
                        <dd className="mt-1 text-gray-500">
                          {new Date(order.orderDate).toLocaleDateString()}
                        </dd>
                      </div>
                      <div>
                        <dt className="font-medium text-gray-900">Total amount</dt>
                        <dd className="mt-1 font-medium text-gray-900">{order.totalAmount}</dd>
                      </div>
                    </dl> */}
                   {/* <dl className="grid flex-1 grid-cols-2 gap-x-6 text-sm sm:col-span-3 sm:grid-cols-3 lg:col-span-2">
  <div>
    <dt className="font-medium text-gray-900">Order number</dt>
    <dd className="mt-1 text-gray-500">{order.orderId}</dd>
  </div>
  <div className="hidden sm:block">
    <dt className="font-medium text-gray-900">Date placed</dt>
    <dd className="mt-1 text-gray-500">
      {new Date(order.orderDate).toLocaleDateString()}
    </dd>
  </div>
  <div className="flex items-center space-x-4">
    <div>
      <dt className="font-medium text-gray-900">Total amount</dt>
      <dd className="mt-1 font-medium text-gray-900">{order.totalAmount}</dd>
    </div>
    <Link
      to={`/order/${order.orderId}`}
      className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
    >
      View Order
    </Link>
    <Link
      to={`/invoice/${order.orderId}`}
      className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
    >
      View Invoice
    </Link>
  </div>
</dl> */}

<dl className="grid flex-1 grid-cols-2 gap-x-6 text-sm sm:col-span-3 sm:grid-cols-3 lg:col-span-2">
  <div>
    <dt className="font-medium text-gray-900">Order number</dt>
    <dd className="mt-1 text-gray-500">{order.orderId}</dd>
  </div>
  <div className="hidden sm:block">
    <dt className="font-medium text-gray-900">Date placed</dt>
    <dd className="mt-1 text-gray-500">
      {new Date(order.orderDate).toLocaleDateString()}
    </dd>
  </div>
  <div className="flex items-center justify-between space-x-4">
    <div>
      <dt className="font-medium text-gray-900">Total amount</dt>
      <dd className="mt-1 font-medium text-gray-900">{order.totalAmount}</dd>
    </div>
    <div className="flex space-x-4">
      <Link
        to={`/order/${order.orderId}`}
        className="flex items-center justify-center whitespace-nowrap rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
      >
        View Order
      </Link>
      <Link
        to={`/invoice/${order.orderId}`}
        className="flex items-center justify-center whitespace-nowrap rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
      >
        View Invoice
      </Link>
    </div>
  </div>
</dl>



                    <Menu as="div" className="relative flex justify-end lg:hidden">
                      <MenuButton className="-m-2 flex items-center p-2 text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Options for order {order.orderId}</span>
                        <EllipsisVerticalIcon aria-hidden="true" className="h-6 w-6" />
                      </MenuButton>
                      <MenuItems
                        className="absolute right-0 z-10 mt-2 w-40 origin-bottom-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none"
                      >
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            View
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Invoice
                          </a>
                        </MenuItem>
                      </MenuItems>
                    </Menu>
                  </div>

                  {/* Order Items */}
                  <div className="p-4 sm:p-6">
                    {order.orderItems.map((item) => (
                      <div
                        key={item.orderItemId}
                        className="flex space-x-4 border-b border-gray-200 pb-4"
                      >
                        <img
                          src={item.product.images[0]}
                          alt={item.product.productName}
                          className="h-20 w-20 rounded object-cover"
                        />
                        <div>
                          <h3 className="font-medium text-gray-900">{item.product.productName}</h3>
                          <p className="text-gray-500">{item.product.brandName}</p>
                          <p className="text-gray-500">Quantity: {item.quantity}</p>
                          <p className="text-gray-500">Price: ₹{item.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
