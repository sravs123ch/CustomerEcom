
// import React, { useState, useEffect, useContext } from "react";
// import {jwtDecode} from "jwt-decode";
// import { GlobalContext } from "../../context/GlobalContext";
// import { useNavigate } from "react-router-dom";

// const ProfileForm = () => {
//   const { getToken } = useContext(GlobalContext);
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     FirstName: "",
//     LastName: "",
//     Email: "",
//     PhoneNumber: "",
//     AddressLine1: "",
//     AddressLine2: "",
//     CityID: "",
//     StateID: "",
//     CountryID: "",
//     Zipcode: "",
//   });

//   const [isEditing, setIsEditing] = useState(false);


//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [id]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form data submitted:", formData);
//     setIsEditing(false); // Stop editing mode after saving
//   };

//   const handleEditClick = () => {
//     setIsEditing(true); // Enable editing mode
//   };

//   return (
//     <form className="space-y-4" onSubmit={handleSubmit}>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700 mb-4">
//             First Name
//           </label>
//           <input
//             id="FirstName"
//             type="text"
//             value={formData.FirstName}
//             onChange={handleChange}
//             readOnly={!isEditing} // Make fields read-only if not editing
//             className={`mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12 ${!isEditing ? 'bg-gray-100' : ''}`}
//           />
//         </div>
//         <div>
//           <label htmlFor="LastName" className="block text-sm font-medium text-gray-700 mb-4">
//             Last Name
//           </label>
//           <input
//             id="LastName"
//             type="text"
//             value={formData.LastName}
//             onChange={handleChange}
//             readOnly={!isEditing}
//             className={`mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12 ${!isEditing ? 'bg-gray-100' : ''}`}
//           />
//         </div>
//         <div>
//           <label htmlFor="Email" className="block text-sm font-medium text-gray-700 mb-4">
//             Email
//           </label>
//           <input
//             id="Email"
//             type="email"
//             value={formData.Email}
//             onChange={handleChange}
//             readOnly={!isEditing}
//             className={`mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12 ${!isEditing ? 'bg-gray-100' : ''}`}
//           />
//         </div>
//         <div>
//           <label htmlFor="PhoneNumber" className="block text-sm font-medium text-gray-700 mb-4">
//             Phone Number
//           </label>
//           <input
//             id="PhoneNumber"
//             type="tel"
//             value={formData.PhoneNumber}
//             onChange={handleChange}
//             readOnly={!isEditing}
//             className={`mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12 ${!isEditing ? 'bg-gray-100' : ''}`}
//           />
//         </div>
//         <div>
//           <label htmlFor="AddressLine1" className="block text-sm font-medium text-gray-700 mb-4">
//             Address Line 1
//           </label>
//           <input
//             id="AddressLine1"
//             type="text"
//             value={formData.AddressLine1}
//             onChange={handleChange}
//             readOnly={!isEditing}
//             className={`mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12 ${!isEditing ? 'bg-gray-100' : ''}`}
//           />
//         </div>
//         <div>
//           <label htmlFor="AddressLine2" className="block text-sm font-medium text-gray-700 mb-4">
//             Address Line 2
//           </label>
//           <input
//             id="AddressLine2"
//             type="text"
//             value={formData.AddressLine2}
//             onChange={handleChange}
//             readOnly={!isEditing}
//             className={`mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12 ${!isEditing ? 'bg-gray-100' : ''}`}
//           />
//         </div>
//         <div>
//           <label htmlFor="CityID" className="block text-sm font-medium text-gray-700 mb-4">
//             City ID
//           </label>
//           <input
//             id="CityID"
//             type="text"
//             value={formData.CityID}
//             onChange={handleChange}
//             readOnly={!isEditing}
//             className={`mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12 ${!isEditing ? 'bg-gray-100' : ''}`}
//           />
//         </div>
//         <div>
//           <label htmlFor="StateID" className="block text-sm font-medium text-gray-700 mb-4">
//             State ID
//           </label>
//           <input
//             id="StateID"
//             type="text"
//             value={formData.StateID}
//             onChange={handleChange}
//             readOnly={!isEditing}
//             className={`mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12 ${!isEditing ? 'bg-gray-100' : ''}`}
//           />
//         </div>
//         <div>
//           <label htmlFor="CountryID" className="block text-sm font-medium text-gray-700 mb-4">
//             Country ID
//           </label>
//           <input
//             id="CountryID"
//             type="text"
//             value={formData.CountryID}
//             onChange={handleChange}
//             readOnly={!isEditing}
//             className={`mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12 ${!isEditing ? 'bg-gray-100' : ''}`}
//           />
//         </div>
//         <div>
//           <label htmlFor="Zipcode" className="block text-sm font-medium text-gray-700 mb-4">
//             Zipcode
//           </label>
//           <input
//             id="Zipcode"
//             type="text"
//             value={formData.Zipcode}
//             onChange={handleChange}
//             readOnly={!isEditing}
//             className={`mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12 ${!isEditing ? 'bg-gray-100' : ''}`}
//           />
//         </div>
//       </div>
//       <div className="flex justify-between space-x-4 mt-4">
//         <button
//           type="button"
//           onClick={handleEditClick}
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Edit
//         </button>
//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Save Changes
//         </button>
//       </div>
//     </form>
//   );
// };

// export default ProfileForm;


import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";

const ProfileForm = () => {
  const { getToken } = useContext(GlobalContext); // If you have a token in context
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    PhoneNumber: "",
    AddressLine1: "",
    AddressLine2: "",
    CityID: "",
    StateID: "",
    CountryID: "",
    Zipcode: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  // Fetch customer data from API
  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const response = await fetch(
          "https://electronic-ecommerce.onrender.com/api/getCustomerById/1",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${getToken()}`, // Include token if required
            },
          }
        );

        const data = await response.json();

        if (data.status === "SUCCESS") {
          setFormData((prevData) => ({
            ...prevData,
            FirstName: data.data.FirstName || "",
            LastName: data.data.LastName || "",
            Email: data.data.Email || "",
            PhoneNumber: data.data.PhoneNumber || "",
            AddressLine1: data.data.AddressLine1 || "",
            AddressLine2: data.data.AddressLine2 || "",
            CityID: data.data.CityID || "",
            StateID: data.data.StateID || "",
            CountryID: data.data.CountryID || "",
            Zipcode: data.data.Zipcode || "",
          }));
        } else {
          console.error("Failed to fetch customer data:", data.message);
        }
      } catch (error) {
        console.error("Error fetching customer data:", error);
      }
    };

    fetchCustomerData();
  }, [getToken]);

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    setIsEditing(false); // Disable editing after saving
  };

  // Enable editing mode
  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700 mb-4">
            First Name
          </label>
          <input
            id="FirstName"
            type="text"
            value={formData.FirstName}
            onChange={handleChange}
            readOnly={!isEditing} // Make fields read-only if not editing
            className={`mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12 ${
              !isEditing ? "bg-gray-100" : ""
            }`}
          />
        </div>
        <div>
          <label htmlFor="LastName" className="block text-sm font-medium text-gray-700 mb-4">
            Last Name
          </label>
          <input
            id="LastName"
            type="text"
            value={formData.LastName}
            onChange={handleChange}
            readOnly={!isEditing}
            className={`mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12 ${
              !isEditing ? "bg-gray-100" : ""
            }`}
          />
        </div>
        <div>
           <label htmlFor="Email" className="block text-sm font-medium text-gray-700 mb-4">
             Email
           </label>
           <input
            id="Email"
            type="email"
            value={formData.Email}
            onChange={handleChange}
            readOnly={!isEditing}
            className={`mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12 ${!isEditing ? 'bg-gray-100' : ''}`}
          />
        </div>
        <div>
           <label htmlFor="PhoneNumber" className="block text-sm font-medium text-gray-700 mb-4">
             Phone Number
           </label>
           <input
            id="PhoneNumber"
            type="tel"
            value={formData.PhoneNumber}
            onChange={handleChange}
            readOnly={!isEditing}
            className={`mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12 ${!isEditing ? 'bg-gray-100' : ''}`}
          />
        </div>
        <div>
          <label htmlFor="AddressLine1" className="block text-sm font-medium text-gray-700 mb-4">
            Address Line 1
          </label>
          <input
            id="AddressLine1"
            type="text"
            value={formData.AddressLine1}
            onChange={handleChange}
            readOnly={!isEditing}
            className={`mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12 ${!isEditing ? 'bg-gray-100' : ''}`}
          />
        </div>
        <div>
          <label htmlFor="AddressLine2" className="block text-sm font-medium text-gray-700 mb-4">
            Address Line 2
          </label>
          <input
            id="AddressLine2"
            type="text"
            value={formData.AddressLine2}
            onChange={handleChange}
            readOnly={!isEditing}
            className={`mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12 ${!isEditing ? 'bg-gray-100' : ''}`}
          />
        </div>
        <div>
           <label htmlFor="CityID" className="block text-sm font-medium text-gray-700 mb-4">
             City ID
           </label>
           <input
            id="CityID"
            type="text"
            value={formData.CityID}
            onChange={handleChange}
            readOnly={!isEditing}
            className={`mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12 ${!isEditing ? 'bg-gray-100' : ''}`}
          />
        </div>
        <div>
          <label htmlFor="StateID" className="block text-sm font-medium text-gray-700 mb-4">
            State ID
          </label>
          <input
            id="StateID"
            type="text"
            value={formData.StateID}
            onChange={handleChange}
            readOnly={!isEditing}
            className={`mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12 ${!isEditing ? 'bg-gray-100' : ''}`}
          />
        </div>
        <div>
          <label htmlFor="CountryID" className="block text-sm font-medium text-gray-700 mb-4">
            Country ID
          </label>
          <input
            id="CountryID"
            type="text"
            value={formData.CountryID}
            onChange={handleChange}
            readOnly={!isEditing}
            className={`mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12 ${!isEditing ? 'bg-gray-100' : ''}`}
          />
        </div>
        <div>
          <label htmlFor="Zipcode" className="block text-sm font-medium text-gray-700 mb-4">
            Zipcode
          </label>
          <input
            id="Zipcode"
            type="text"
            value={formData.Zipcode}
            onChange={handleChange}
            readOnly={!isEditing}
            className={`mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12 ${!isEditing ? 'bg-gray-100' : ''}`}
          />
        </div>
      </div>
      <div className="flex justify-between space-x-4 mt-4">
        <button
          type="button"
          onClick={handleEditClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Edit
        </button>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
