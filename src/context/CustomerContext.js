import React, { createContext, useState } from "react";

export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const [customerId, setCustomerId] = useState(null);
console.log(customerId);
  return (
    <CustomerContext.Provider value={{ customerId, setCustomerId }}>
      {children}
    </CustomerContext.Provider>
  );
};
