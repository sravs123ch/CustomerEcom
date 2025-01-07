import React, { useState, useEffect, useContext } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon, TrashIcon } from "@heroicons/react/20/solid";
import { GlobalContext } from "../../context/GlobalContext";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const CheckoutPage = ({ history }) => {
  const { page } = useParams();
  const { cartItems, buyNow } = useContext(GlobalContext);
  const { products } = useContext(GlobalContext);
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [buyitem, setbuyItem] = useState([]);
  const [email, setEmail] = useState("");
  const [tenantID] = useState(1); // Assuming TenantID is static
  const [customerID] = useState(1); // Assuming CustomerID is static
  const [addressID] = useState(1); // Assuming AddressID is static; 
 const navigate = useNavigate();

  // useEffect(() => {
  //   // Calculate the subtotal
  //   const newSubtotal = cartItems.reduce(
  //     (acc, product) =>
  //       acc +
  //       (product.quantity || 1) *
  //         (product.variants?.find((v) => v.colorName === product.color)
  //           ?.sizes?.[0]?.price || 0),
  //     0
  //   );
  //   setSubtotal(newSubtotal);
  // }, [cartItems]);

  const combinedItems = page === "buynow" ? buyNow : [...cartItems, ...buyNow];

  useEffect(() => {
    // Calculate the subtotal for combined items
    const newSubtotal = combinedItems.reduce(
      (acc, product) =>
        acc +
        (product.quantity || 1) *
          (product.variants?.find((v) => v.colorName === product.color)
            ?.sizes?.[0]?.price || 0),
      0
    );
    setSubtotal(newSubtotal);
  }, [combinedItems]);
  
  useEffect(() => {
    // Calculate the total
    const shippingPrice = selectedDeliveryMethod?.price || 0;
    setTotal(subtotal + shippingPrice);
  }, [subtotal, selectedDeliveryMethod]);

  const item = products.filter((item) => item.id == buyNow);

  const onRemove = (index) => {
    const updatedbuynow = [...buyitem];
    updatedbuynow.splice(index, 1);
    setbuyItem(updatedbuynow);
    localStorage.setItem("Buynow", JSON.stringify(updatedbuynow));
  };

  const handleBuyNow = async (event) => {
    event.preventDefault();
  
    const orderItems = (page !== "buynow" ? cartItems : item).map((product) => {
      // Log the product data
      console.log("Product Data:", product);
      
      // Find the variant based on the color
      const variant = product.variants?.find(
        (v) => v.colorName.toLowerCase() === (product.color?.toLowerCase() || "")
      );
      
      // Log if variant is not found
      if (!variant) {
        console.error(`Variant not found for color ${product.color}`);
      } else {
        console.log("Selected Variant:", variant);
      }
  
      // Log the selected size
      const selectedSize = product.sizeLabel || "M"; // Default to "M" if no size is specified
      console.log("Selected Size:", selectedSize);
  
      // Find the size details
      const sizeDetails = variant?.sizes?.find((s) => s.sizeLabel === selectedSize);
      
      // Log the size details
      console.log("Size Details:", sizeDetails);
  
      // Get the variantId and price
      const productVariantID = sizeDetails?.variantId || null;
      const price = sizeDetails?.price || 0;
  
      // Log the final product details
      console.log("Final Product Details:", {
        ProductID: product.productId,
        ProductVariantID: productVariantID,
        Quantity: product.quantity || 1,
        Price: price,
      });
  
      return {
        ProductID: product.productId,
        ProductVariantID: productVariantID,
        Quantity: product.quantity || 1,
        Price: price,
      };
    });
  
    // Log the final orderData before sending it
    const orderData = {
      TenantID: tenantID,
      CustomerID: customerID,
      AddressID: addressID,
      OrderItems: orderItems,
      OrderDate: new Date().toISOString().split("T")[0], // Current Date
      TotalQuantity: orderItems.reduce((acc, item) => acc + item.Quantity, 0),
      TotalAmount: total,
    };
  
    console.log("Order Data to be sent:", orderData);
  
    try {
      const response = await fetch(
        "https://electronic-ecommerce.onrender.com/api/createOrderWithDetails",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        }
      );
  
      if (response.ok) {
        const result = await response.json();
        console.log("Order confirmed:", result);
        
      navigate('/home');

      } else {
        const errorResponse = await response.json();
        console.error("Failed to create order", response.status, errorResponse);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  const deliveryMethods = [
    {
      id: 1,
      title: "Standard",
      turnaround: "4-6 business days",
      price: "5.00",
    },
    {
      id: 2,
      title: "Express",
      turnaround: "2-3 business days",
      price: "15.00",
    },
  ];

  const paymentMethods = [
    { id: "credit-card", title: "Credit Card" },
    { id: "paypal", title: "PayPal" },
  ];


  return (
    <div className="bg-gray-50 relative top-20">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Checkout</h2>

        <form
          className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16"
          onSubmit={handleBuyNow}
        >
          <div>
            <div>
              <h2 className="text-lg font-medium text-gray-900">
                Contact information
              </h2>

              <div className="mt-4">
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email-address"
                    name="email-address"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4"
                  />
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-10">
              <h2 className="text-lg font-medium text-gray-900">
                Shipping information
              </h2>

              <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-gray-300 ring-1 ring-inset ring-gray-300 shadow-sm border-0 p-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-gray-300 p-2  ring-1 ring-inset ring-gray-300  border-0 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Company
                  </label>
                  <div className="mt-1">
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className="block w-full rounded-md border-gray-300 shadow-sm  ring-1 ring-inset ring-gray-300  p-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address
                  </label>
                  <div className="mt-1">
                    <input
                      id="address"
                      name="address"
                      type="text"
                      autoComplete="street-address"
                      className="block w-full rounded-md border-gray-300 p-2  ring-1 ring-inset ring-gray-300  shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="apartment"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Apartment, suite, etc.
                  </label>
                  <div className="mt-1">
                    <input
                      id="apartment"
                      name="apartment"
                      type="text"
                      className="block w-full rounded-md border-gray-300  p-2  ring-1 ring-inset ring-gray-300  shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  <div className="mt-1">
                    <input
                      id="city"
                      name="city"
                      type="text"
                      autoComplete="address-level2"
                      className="block w-full rounded-md border-gray-300  ring-1 ring-inset ring-gray-300  p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Country
                  </label>
                  <div className="mt-1">
                    {/* <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="block w-full rounded-md border-gray-300  ring-1 ring-inset ring-gray-300  shadow-sm  p-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select> */}
                    <input
                      id="country"
                      name="country"
                      type="text"
                      autoComplete="address-level2"
                      className="block w-full rounded-md border-gray-300  ring-1 ring-inset ring-gray-300  p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="region"
                    className="block text-sm font-medium text-gray-700"
                  >
                    State / Province
                  </label>
                  <div className="mt-1">
                    <input
                      id="region"
                      name="region"
                      type="text"
                      autoComplete="address-level1"
                      className="block w-full rounded-md border-gray-300 shadow-sm  ring-1 ring-inset ring-gray-300   p-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="postal-code"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Postal code
                  </label>
                  <div className="mt-1">
                    <input
                      id="postal-code"
                      name="postal-code"
                      type="text"
                      autoComplete="postal-code"
                      className="block w-full rounded-md border-gray-300 shadow-sm p-2 ring-1 ring-inset ring-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <div className="mt-1">
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      autoComplete="tel"
                      className="block w-full rounded-md border-gray-300 shadow-sm p-2  ring-1 ring-inset ring-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-10">
              <RadioGroup
                value={selectedDeliveryMethod}
                onChange={setSelectedDeliveryMethod}
              >
                <RadioGroup.Label className="text-lg font-medium text-gray-900">
                  Delivery method
                </RadioGroup.Label>

                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  {deliveryMethods.map((deliveryMethod) => (
                    <RadioGroup.Option
                      key={deliveryMethod.id}
                      value={deliveryMethod}
                      className={({ checked, active }) =>
                        classNames(
                          checked ? "border-transparent" : "border-gray-300",
                          active ? "ring-2 ring-indigo-500" : "",
                          "relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none"
                        )
                      }
                    >
                      {({ checked, active }) => (
                        <>
                          <span className="flex flex-1">
                            <span className="flex flex-col">
                              <RadioGroup.Label
                                as="span"
                                className="block text-sm font-medium text-gray-900"
                              >
                                {deliveryMethod.title}
                              </RadioGroup.Label>
                              <RadioGroup.Description
                                as="span"
                                className="mt-1 flex items-center text-sm text-gray-500"
                              >
                                {deliveryMethod.turnaround}
                              </RadioGroup.Description>
                              <RadioGroup.Description
                                as="span"
                                className="mt-6 text-sm font-medium text-gray-900"
                              >
                                {deliveryMethod.price}
                              </RadioGroup.Description>
                            </span>
                          </span>
                          {checked ? (
                            <CheckCircleIcon
                              className="h-5 w-5 text-indigo-600"
                              aria-hidden="true"
                            />
                          ) : null}
                          <span
                            className={classNames(
                              active ? "border" : "border-2",
                              checked
                                ? "border-indigo-500"
                                : "border-transparent",
                              "pointer-events-none absolute -inset-px rounded-lg"
                            )}
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-10">
              <fieldset>
                <legend className="text-lg font-medium text-gray-900">
                  Payment method
                </legend>

                <div className="mt-4 space-y-4">
                  {paymentMethods.map((paymentMethod) => (
                    <div key={paymentMethod.id} className="flex items-center">
                      <input
                        id={paymentMethod.id}
                        name="payment-method"
                        type="radio"
                        defaultChecked={paymentMethod.id === "credit-card"}
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        onChange={() => setPaymentMethod(paymentMethod.id)}
                      />
                      <label
                        htmlFor={paymentMethod.id}
                        className="ml-3 block text-sm font-medium text-gray-700"
                      >
                        {paymentMethod.title}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>
          </div>
{/* <div className="mt-10 lg:mt-0">
  <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>

  <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
    <h3 className="sr-only">Items in your cart</h3>
    <ul role="list" className="divide-y divide-gray-200">
      {cartItems.map((product, productIdx) => {
        const variant = product.variants?.find(
          (v) => v.colorName === product.color
        ); // Find variant matching the product color
        const mainImage = variant?.images?.[0] || "placeholder.jpg"; // Get the first image for the color
        const price = variant?.sizes?.[0]?.price || "N/A"; // Get the first size price
        const sizeLabel = variant?.sizes?.[0]?.sizeLabel || "N/A"; // Get the size label
        const brandName = product.brand?.brandName || "Unknown Brand"; // Get brand name

        return (
          <li key={product.productId} className="flex py-6 px-4 sm:px-6">
            <div className="flex-shrink-0">
              <img
                src={mainImage}
                alt={product.productName}
                className="w-20 rounded-md"
              />
            </div>
            <div className="ml-6 flex flex-1 flex-col">
              <div className="flex">
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-gray-700 hover:text-gray-800"
                    >
                      {product.productName}
                    </a>
                  </h4>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  <p className="mt-1 text-sm text-gray-500">{sizeLabel}</p>
                  <p className="mt-1 text-sm text-gray-500">Brand: {brandName}</p>
                </div>
                <div className="ml-4 flow-root flex-shrink-0">
                  <button
                    type="button"
                    className="-m-2.5 bg-white p-2.5 text-gray-400 hover:text-gray-500"
                    onClick={() => onRemove(productIdx)}
                  >
                    <span className="sr-only">Remove</span>
                    <TrashIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="flex flex-1 items-end justify-between pt-2">
  <p className="mt-1 text-sm font-medium text-gray-900">
    ₹{(product.quantity || 1) * (price || 0)}
  </p>
</div>
<div className="mt-1 flex items-center space-x-4">
  <span className="mx-2">Quantity: {product.quantity || 1}</span>
</div>

          

            </div>
          </li>
        );
      })}
    </ul>

    <dl className="space-y-6 border-t border-gray-200 py-6 px-4 sm:px-6">
      <div className="flex items-center justify-between">
        <dt className="text-sm">Subtotal</dt>
        <dd className="text-sm font-medium text-gray-900">₹{subtotal}</dd>
      </div>
      <div className="flex items-center justify-between">
        <dt className="text-sm">Shipping</dt>
        <dd className="text-sm font-medium text-gray-900">
          ₹{selectedDeliveryMethod?.price || "0.00"}
        </dd>
      </div>
      <div className="flex items-center justify-between border-t border-gray-200 pt-6">
        <dt className="text-base font-medium">Total</dt>
        <dd className="text-base font-medium text-gray-900">₹{total}</dd>
      </div>
    </dl>

    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
      <button
        type="submit"
        className="w-full rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Buy Now
      </button>
    </div>
  </div>
</div> */}


<div className="mt-10 lg:mt-0">
  <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>

  <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
    <h3 className="sr-only">Items in your cart</h3>
    <ul role="list" className="divide-y divide-gray-200">
  {combinedItems.map((product, productIdx) => {
    const variant = product.variants?.find(
      (v) => v.colorName === product.color
    );
    const mainImage = variant?.images?.[0] || "placeholder.jpg";
    const price = variant?.sizes?.[0]?.price || "N/A";
    const sizeLabel = variant?.sizes?.[0]?.sizeLabel || "N/A";
    const brandName = product.brand?.brandName || "Unknown Brand";

    return (
      <li key={`${product.productId}-${productIdx}`} className="flex py-6 px-4 sm:px-6">
        <div className="flex-shrink-0">
          <img
            src={mainImage}
            alt={product.productName}
            className="w-20 rounded-md"
          />
        </div>
        <div className="ml-6 flex flex-1 flex-col">
          <div className="flex">
            <div className="min-w-0 flex-1">
              <h4 className="text-sm">
                <a
                  href="#"
                  className="font-medium text-gray-700 hover:text-gray-800"
                >
                  {product.productName}
                </a>
              </h4>
              <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              <p className="mt-1 text-sm text-gray-500">{sizeLabel}</p>
              <p className="mt-1 text-sm text-gray-500">
                Brand: {brandName}
              </p>
            </div>
            <div className="ml-4 flow-root flex-shrink-0">
              <button
                type="button"
                className="-m-2.5 bg-white p-2.5 text-gray-400 hover:text-gray-500"
                onClick={() => onRemove(productIdx)}
              >
                <span className="sr-only">Remove</span>
                <TrashIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="flex flex-1 items-end justify-between pt-2">
            <p className="mt-1 text-sm font-medium text-gray-900">
              ₹{(product.quantity || 1) * (price || 0)}
            </p>
          </div>
          <div className="mt-1 flex items-center space-x-4">
            <span className="mx-2">Quantity: {product.quantity || 1}</span>
          </div>
        </div>
      </li>
    );
  })}
</ul>

    <dl className="space-y-6 border-t border-gray-200 py-6 px-4 sm:px-6">
      <div className="flex items-center justify-between">
        <dt className="text-sm">Subtotal</dt>
        <dd className="text-sm font-medium text-gray-900">₹{subtotal}</dd>
      </div>
      <div className="flex items-center justify-between">
        <dt className="text-sm">Shipping</dt>
        <dd className="text-sm font-medium text-gray-900">
          ₹{selectedDeliveryMethod?.price || "0.00"}
        </dd>
      </div>
      <div className="flex items-center justify-between border-t border-gray-200 pt-6">
        <dt className="text-base font-medium">Total</dt>
        <dd className="text-base font-medium text-gray-900">₹{total}</dd>
      </div>
    </dl>

    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
      <button
        type="submit"
        className="w-full rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Buy Now
      </button>
    </div>
  </div>
</div>



        </form>
      </div>
    </div>
  );
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default CheckoutPage;
