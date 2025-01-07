// import React, { useState,useEffect,useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Login from "../components/Login";
// import { Combobox } from '@headlessui/react';
// import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
// import { CustomerContext } from "../context/CustomerContext";


// const genderOptions = [
//   { id: 1, name: 'Male' },
//   { id: 2, name: 'Female' },
//   { id: 3, name: 'Other' },
// ];


// function Register() {

//   const [errors, setErrors] = useState({});
//   const [apiError, setApiError] = useState("");
//   const [selectedCountry, setSelectedCountry] = useState(null);
// const [selectedState, setSelectedState] = useState(null);
// const [selectedCity, setSelectedCity] = useState(null);
// const [selectedGender, setSelectedGender] = useState(null);
// const [countries, setCountries] = useState([]);
// const [states, setStates] = useState([]);
// const [cities, setCities] = useState([]);
// const [query, setQuery] = useState('');
// const [showPassword, setShowPassword] = useState(false);
// const [countryMap, setCountryMap] = useState({});
// const [stateMap, setStateMap] = useState({});
// const [cityMap, setCityMap] = useState({});
//  const { customerId } = useContext(CustomerContext);
//  console.log( customerId );
//  const [formData, setFormData] = useState({
//   TenantID: 1,
//   customerId:customerId,
//   FirstName: "",
//   LastName: "",
//   Email: "",
//   Password: "",
//   ConfirmPassword: "",
//   PhoneNumber: "",
//   AddressLine1: "",
//   AddressLine2: "",
//   CityID: "",
//   StateID: "",
//   CountryID: "",
//   Zipcode: "",
// });
// const togglePasswordVisibility = () => {
//   setShowPassword((prev) => !prev);
// };



//   const navigate = useNavigate();

// const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };
  
//   const handleGenderChange = (gender) => {
//     setSelectedGender(gender);
//   };

// const handleFormSubmit = async (event) => {
//   event.preventDefault(); // Prevent the default form submission behavior
//   let valid = true;
//   let newErrors = {};

//   try {
//     // Make the API call with form data
//     const response = await axios.post(
//       "https://electronic-ecommerce.onrender.com/api/completeRegistration",
//       {
//         customerId:customerId,
//         TenantID: formData.TenantID,
//         FirstName: formData.FirstName,
//         LastName: formData.LastName,
//         Email: formData.Email,
//         Password: formData.Password,
//         PhoneNumber: formData.PhoneNumber,
//         Address: {
//           TenantID: formData.TenantID,
//           AddressLine1: formData.AddressLine1,
//           AddressLine2: formData.AddressLine2,
//           CityID: formData.CityID,
//           StateID: formData.StateID,
//           CountryID: formData.CountryID,
//           Zipcode: formData.Zipcode,
//         },
//       }
//     );

//     console.log("Registration successful:", response.data);

//     // Redirect or show success message
//     navigate("/login"); // Navigate to login on success
//   } catch (error) {
//     console.error("Registration failed:", error);

//     // Show an error message
//     setApiError("Registration failed. Please try again.");
//   }
// };
  
// useEffect(() => {
//     const fetchCountries = async () => {
//       try {
//         const response = await axios.get('https://electronic-ecommerce.onrender.com/api/getCountries');
//         const countryData = response.data.data;
//         setCountries(countryData);
        
//         // Create countryMap
//         const countryMapData = countryData.reduce((map, country) => {
//           map[country.CountryName] = country.CountryID;
//           return map;
//         }, {});
//         setCountryMap(countryMapData);
  
//         console.log("Fetched countries:", countryData);
//       } catch (error) {
//         console.error("Error fetching countries:", error);
//       }
//     };
  
//     fetchCountries();
//   }, []);
  
//   const fetchStatesByCountry = async (countryId) => {
//     if (!countryId) return;
  
//     try {
//       // const response = await axios.get(`https://electronic-ecommerce.onrender.com/api/getStatesByCountry/${countryId}`);
//       const response = await axios.get(`https://electronic-ecommerce.onrender.com/api/getStatesByCountry`);
//       if (response.data.status === "SUCCESS") {
//         const stateData = response.data.data;
//         setStates(stateData);
  
//         // Create stateMap
//         const stateMapData = stateData.reduce((map, state) => {
//           map[state.StateName] = state.StateID;
//           return map;
//         }, {});
//         setStateMap(stateMapData);
  
//         console.log("Fetched states:", stateData);
//       }
//     } catch (error) {
//       console.error("Error fetching states:", error);
//     }
//   };
  
//   const fetchCitiesByState = async (stateId) => {
//     if (!stateId) return;
  
//     try {
//       // const response = await axios.get(`https://electronic-ecommerce.onrender.com/api/getCitiesByState/${stateId}`);
//       const response = await axios.get(`https://electronic-ecommerce.onrender.com/api/getCitiesByState`);
//       if (response.data.status === "SUCCESS") {
//         const cityData = response.data.data;
//         setCities(cityData);
  
//         // Create cityMap
//         const cityMapData = cityData.reduce((map, city) => {
//           map[city.CityName] = city.CityID;
//           return map;
//         }, {});
//         setCityMap(cityMapData);
  
//         console.log("Fetched cities:", cityData);
//       }
//     } catch (error) {
//       console.error("Error fetching cities:", error);
//     }
//   };
// const handleCountryChange = (selectedCountry) => {
//   if (!selectedCountry) return;

//   const countryID = countryMap[selectedCountry.CountryName] || selectedCountry.CountryID;

//   setSelectedCountry(selectedCountry);
//   setFormData({
//     ...formData,
//     CountryID: countryID,
//     CountryName: selectedCountry.CountryName
//   });
//   fetchStatesByCountry(countryID);
  
// };

// const handleStateChange = (state) => {
//   if (!state) return;

//   const stateID = stateMap[state.StateName] || state.StateID;

//   setSelectedState(state);
//   setFormData({
//     ...formData,
//     StateID: stateID,
//     StateName: state.StateName
//   });
 
//   fetchCitiesByState(stateID);
// };

// const handleCityChange = (city) => {
//   if (!city) return;

//   const cityID = cityMap[city.CityName] || city.CityID;

//   setSelectedCity(city);
//   setFormData({
//     ...formData,
//     CityID: cityID,
//     CityName: city.CityName
//   });
// };

//   const [loginOpen, setLoginOpen] = useState(false);

//   const handleOpen = (e) => {
//     e.preventDefault();
//     setLoginOpen(true);
//   };

//   const handleClose = () => {
//     setLoginOpen(false);
//   };

//   return (
//     <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen relative overflow-hidden">
//       <div className="hidden md:block overflow-hidden relative top-14">
//         <img
//           src="image.png"
//           alt="Description"
//           className="object-contain w-full max-h-screen md:max-h-screen lg:max-h-screen"
//         />
//       </div>
//       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-6 relative overflow-hidden">
//         <div className="flex flex-col items-center">
//           <div className="flex items-center justify-center mb-5 mt-16">
//             <div className="flex items-center justify-center w-24 h-24 rounded-full mb-4">
//               <img
//                 src="B2Y_Logo.png"
//                 alt="Logo"
//                 className="w-16 h-16 object-contain"
//               />
//             </div>
//           </div>

//           <h2 className="-mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 font-sans">
//             Welcome to B2Y
//           </h2>
//           <p className="mt-2 text-center text-sm leading-5 tracking-tight text-gray-600 font-sans">
//             Welcome back! Login with your data that you entered during
//             registration
//           </p>
//         </div>
// <div
//     className={`main-container`}
//   >
//       {/* <ToastContainer />
//       {isLoading && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50">
//           <LoadingAnimation />
//         </div>
//       )} */}
//       <div className="body-container">
//         <form className="w-full mt-5">
//           <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 px-16 md:px-24">
           
//             {/* First Name */}
//             <div className="flex items-center">
//               <div className="w-full ">
//                 <label
//                   htmlFor="FirstName"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   First Name <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   id="FirstName"
//                   name="FirstName"
//                   value={formData.FirstName || ""}
//                   onChange={handleFormChange}
//                   required
//                   className={`mt-2 mb-1 block w-full xl:w-full rounded-md border  shadow-sm py-2 px-4  sm:text-sm ${
//                     !formData.FirstName && errors.FirstNameError ? "border-red-400" : "border-gray-400"
//                   }`}
//                 />
//                 {!formData.FirstName && errors.FirstNameError && (
//                   <p className="text-red-500 text-sm mt-1 ">
//                     {errors.FirstNameError}
//                   </p>
//                 )}
//               </div>
//             </div>
//             {/* Address Line 1 */}
//             <div className="flex items-center">
//               <div className="w-full ">
//                 <label
//                   htmlFor="AddressLine1"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Address Line 1 <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   id="AddressLine1"
//                   name="AddressLine1"
//                   value={formData.AddressLine1 || ""}
//                   onChange={handleFormChange}
//                   required
//                   className={`mt-2 mb-1 block w-full xl:w-full rounded-md border shadow-sm py-2 px-4  sm:text-sm"
//                   ${!formData.AddressLine1 &&
//                     errors.AddressLine1Error
//                       ? "border-red-400"
//                       : "border-gray-400"
//                   }`}
//                 />
//                 {!formData.AddressLine1 && errors.AddressLine1Error && (
//                   <p className="text-red-500 text-sm mt-1 ">
//                     {errors.AddressLine1Error}
//                   </p>
//                 )}
//               </div>
//             </div>

//             {/* Last Name */}
//             <div>
//               <label
//                 htmlFor="LastName"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Last Name
//               </label>
//               <input
//                 type="text"
//                 id="LastName"
//                 name="LastName"
//                 value={formData.LastName || ""}
//                 onChange={handleFormChange}
//                 required
//                 // className={`mt-2 mb-1 block w-full xl:w-full rounded-md border shadow-sm py-2 px-4  sm:text-sm ${
//                 //   errors.LastNameError ? "border-red-400" : "border-gray-400"
//                 // }`}
//                 className={`mt-2 mb-1 block w-full xl:w-full rounded-md border shadow-sm py-2 px-4  sm:text-sm border-gray-400
//                 `}
//               />
//               {/* {errors.LastNameError && (
//                 <p className="text-red-500 text-sm mt-1 ">
//                   {errors.LastNameError}
//                 </p>
//               )} */}
//             </div>

//             {/* Address Line 2 */}
//             <div>
//               <label
//                 htmlFor="AddressLine2"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Address Line 2
//               </label>
//               <input
//                 type="text"
//                 id="AddressLine2"
//                 name="AddressLine2"
//                 value={formData.AddressLine2 || ""}
//                 onChange={handleFormChange}
//                 className="mt-2 mb-1 block w-full xl:w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>

//              <div>
//     <label
//       htmlFor="Email"
//       className="block text-sm font-medium text-gray-700"
//     >
//       Email <span className="text-red-500">*</span>
//     </label>
//     <input
//       type="email"
//       id="Email"
//       name="Email"
//       value={formData.Email || ""}
//       onChange={handleFormChange}
//       required
//       className={`mt-2 mb-1 block w-full xl:w-full rounded-md border shadow-sm py-2 px-4 sm:text-sm ${
//         errors.EmailError ? "border-red-400" : "border-gray-400"
//       }`}
//     />
//     {errors.EmailError && (
//       <p className="text-red-500 text-sm mt-1">
//         {errors.EmailError}
//       </p>
//     )}
//   </div>

//   <div className="flex items-center gap-4">
//   <div className="w-full">
//     <label
//       htmlFor="Country"
//       className="block text-sm font-medium text-gray-700"
//     >
//       Country
//     </label>
//     <Combobox as="div" value={selectedCountry} onChange={handleCountryChange}>
//       <div className="relative">
//         <Combobox.Input
//           id="Country"
//           name="Country"
//           className="w-full rounded-md border border-gray-400 bg-white py-2 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//           onChange={(event) => setQuery(event.target.value)} // Set the query for filtering
//           displayValue={(country) => country?.CountryName || ''} // Display selected country name
//         />
//         <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//           <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//         </Combobox.Button>

//         <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//           {countries
//             .filter((country) =>
//               country.CountryName.toLowerCase().includes(query.toLowerCase())
//             )
//             .map((country) => (
//               <Combobox.Option
//                 key={country.CountryID}
//                 value={country} // Pass the full country object to onChange
//                 className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-600 hover:text-white"
//               >
//                 <span className="block truncate font-normal group-data-[selected]:font-semibold">
//                   {country.CountryName}
//                 </span>
//                 <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
//                   <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                 </span>
//               </Combobox.Option>
//             ))}
//         </Combobox.Options>
//       </div>
//     </Combobox>
//   </div>
// </div>

//             {/* Password */}
//             <div className=" xl:w-full">
//               <label
//                 htmlFor="Password"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Password <span className="text-red-500">*</span>
//               </label>
//               <div className="relative">
//                 <input
//                   id="Password"
//                   name="Password"
//                   type={showPassword ? "text" : "password"}
//                   value={formData.Password || ""}
//                   onChange={handleFormChange}
//                   className={`mt-2 mb-1 block w-full  rounded-md border shadow-sm py-2 px-4  sm:text-sm ${ !formData.Password && 
//                     errors.PasswordError ? "border-red-400" : "border-gray-400"
//                   }`}
//                 />
//                 <span
//                   className="absolute right-2 top-1/2 pb-1 transform -translate-y-1/2 cursor-pointer "
//                   onClick={togglePasswordVisibility}
//                 >
//                   {/* {showPassword ? (
//                     <VisibilityOffIcon
//                       fontSize="small"
//                       className="opacity-75"
//                     />
//                   ) : (
//                     <VisibilityIcon fontSize="small" className="opacity-75" />
//                   )} */}
//                 </span>
//               </div>
//               {!formData.Password && errors.PasswordError && (
//                 <p className="text-red-500 text-sm mt-1 ">
//                   {errors.PasswordError}
//                 </p>
//               )}
//             </div>

// <div className="flex items-center gap-4">
//   <div className="w-full">
//     <label
//       htmlFor="State"
//       className="block text-sm font-medium text-gray-700"
//     >
//       State
//     </label>
//     <Combobox as="div" value={selectedState} onChange={handleStateChange}>
//       <div className="relative">
//         <Combobox.Input
//           id="State"
//           name="State"
//           className="w-full rounded-md border border-gray-400 bg-white py-2 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//           onChange={(event) => setQuery(event.target.value)} // Handle the search query
//           displayValue={(state) => state?.StateName || ''} // Show the selected state name
//         />
//         <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//           <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//         </Combobox.Button>

//         <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//           {states
//             .filter((state) => state.StateName.toLowerCase().includes(query.toLowerCase())) // Filter based on query
//             .map((state) => (
//               <Combobox.Option
//                 key={state.StateID}
//                 value={state}
//                 className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-600 hover:text-white"
//               >
//                 <span className="block truncate font-normal group-data-[selected]:font-semibold">
//                   {state.StateName}
//                 </span>
//                 <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
//                   <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                 </span>
//               </Combobox.Option>
//             ))}
//         </Combobox.Options>
//       </div>
//     </Combobox>
//   </div>
// </div>

// <div className="flex items-center gap-4">
//   <div className="w-full">
//     <label
//       htmlFor="City"
//       className="block text-sm font-medium text-gray-700"
//     >
//       City
//     </label>
//     <Combobox as="div" value={selectedCity} onChange={handleCityChange}>
//       <div className="relative">
//         <Combobox.Input
//           id="City"
//           name="City"
//           className="w-full rounded-md border border-gray-400 bg-white py-2 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//           onChange={(event) => setQuery(event.target.value)} // Handle the search query
//           displayValue={(city) => city?.CityName || ''} // Show the selected city name
//         />
//         <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//           <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//         </Combobox.Button>

//         <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//           {cities
//             .filter((city) => city.CityName.toLowerCase().includes(query.toLowerCase())) // Filter based on query
//             .map((city) => (
//               <Combobox.Option
//                 key={city.CityID}
//                 value={city}
//                 className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-600 hover:text-white"
//               >
//                 <span className="block truncate font-normal group-data-[selected]:font-semibold">
//                   {city.CityName}
//                 </span>
//                 <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
//                   <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                 </span>
//               </Combobox.Option>
//             ))}
//         </Combobox.Options>
//       </div>
//     </Combobox>
//   </div>
// </div>

//             {/* Gender */}
//             <div className="w-full xl:w-full">
//               <label
//                 htmlFor="Gender"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Gender
//               </label>
//               <Combobox
//                 value={selectedGender}
//                 onChange={handleGenderChange}
//                 as="div"
//               >
//                 <div className="relative mt-1">
//                   <Combobox.Input
//                     className="block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                     displayValue={(gender) => gender?.name || ""}
//                   />
//                   <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
//                     <ChevronUpDownIcon
//                       className="h-5 w-5 text-gray-400"
//                       aria-hidden="true"
//                     />
//                   </Combobox.Button>
//                   <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full xl:w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//                     {genderOptions.map((gender) => (
//                       <Combobox.Option
//                         key={gender.id}
//                         value={gender}
//                         className={({ active }) =>
//                           `relative cursor-default select-none py-2 pl-3 pr-9 ${
//                             active
//                               ? "bg-indigo-600 text-white"
//                               : "text-gray-900"
//                           }`
//                         }
//                       >
//                         {({ selected, active }) => (
//                           <>
//                             <span
//                               className={`block truncate ${
//                                 selected ? "font-semibold" : "font-normal"
//                               }`}
//                             >
//                               {gender.name}
//                             </span>
//                             {selected ? (
//                               <span
//                                 className={`absolute inset-y-0 right-0 flex items-center pr-4 ${
//                                   active ? "text-white" : "text-indigo-600"
//                                 }`}
//                               >
//                                 <CheckIcon
//                                   className="h-5 w-5"
//                                   aria-hidden="true"
//                                 />
//                               </span>
//                             ) : null}
//                           </>
//                         )}
//                       </Combobox.Option>
//                     ))}
//                   </Combobox.Options>
//                 </div>
//               </Combobox>
//             </div>

//             <div>
//               <label
//                 htmlFor="ZipCode"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Zip Code <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 id="ZipCode"
//                 name="ZipCode"
//                 value={formData.ZipCode || ""}
//                 onChange={handleFormChange}
//                 required
//                 className={`mt-2 mb-1 block w-full xl:w-full rounded-md border shadow-sm py-2 px-4  sm:text-sm ${!formData.ZipCode && 
//                   errors.ZipCodeError ? "border-red-400" : "border-gray-400"
//                 }`}
//               />
//               {!formData.ZipCode && errors.ZipCodeError && (
//                 <p className="text-red-500 text-sm mt-1 ">
//                   {errors.ZipCodeError}
//                 </p>
//               )}
//             </div>

        
//           </div>

//           <div className="mt-6 flex justify-end gap-4">
//     <button
//       type="button" 
//       className="button-base save-btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//       onClick={handleFormSubmit} 
//     >
//       Submit
//     </button>
//   </div>
//         </form>
//         {/* {isLoading && <LoadingAnimation />} */}
//       </div>
//     </div>
//       </div>
//     </section>
//   );
// }

// export default Register;



// import React, { useState,useEffect,useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Login from "../components/Login";
// import { Combobox } from '@headlessui/react';
// import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
// import { CustomerContext } from "../context/CustomerContext";


// const genderOptions = [
//   { id: 1, name: 'Male' },
//   { id: 2, name: 'Female' },
//   { id: 3, name: 'Other' },
// ];


// function Register() {
// const [errors, setErrors] = useState({});
// const [apiError, setApiError] = useState("");
// const [selectedCountry, setSelectedCountry] = useState(null);
// const [selectedState, setSelectedState] = useState(null);
// const [selectedCity, setSelectedCity] = useState(null);
// const [selectedGender, setSelectedGender] = useState(null);
// const [countries, setCountries] = useState([]);
// const [states, setStates] = useState([]);
// const [cities, setCities] = useState([]);
// const [query, setQuery] = useState('');
// const [showPassword, setShowPassword] = useState(false);
// const [countryMap, setCountryMap] = useState({});
// const [stateMap, setStateMap] = useState({});
// const [cityMap, setCityMap] = useState({});
//  const { customerId } = useContext(CustomerContext);
//  const [step, setStep] = useState(1);
//  console.log( customerId );
//  const [formData, setFormData] = useState({
//   TenantID: 1,
//   customerId:customerId,
//   FirstName: "",
//   LastName: "",
//   Email: "",
//   Password: "",
//   ConfirmPassword: "",
//   PhoneNumber: "",
//   AddressLine1: "",
//   AddressLine2: "",
//   CityID: "",
//   StateID: "",
//   CountryID: "",
//   Zipcode: "",
// });
// const togglePasswordVisibility = () => {
//   setShowPassword((prev) => !prev);
// };

//   const navigate = useNavigate();

// const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };
  
//   const handleGenderChange = (gender) => {
//     setSelectedGender(gender);
//   };

// const handleFormSubmit = async (event) => {
//   event.preventDefault(); // Prevent the default form submission behavior
//   let valid = true;
//   let newErrors = {};

//   try {
//     // Make the API call with form data
//     const response = await axios.post(
//       "https://electronic-ecommerce.onrender.com/api/completeRegistration",
//       {
//         customerId:customerId,
//         TenantID: formData.TenantID,
//         FirstName: formData.FirstName,
//         LastName: formData.LastName,
//         Email: formData.Email,
//         Password: formData.Password,
//         PhoneNumber: formData.PhoneNumber,
//         Address: {
//           TenantID: formData.TenantID,
//           AddressLine1: formData.AddressLine1,
//           AddressLine2: formData.AddressLine2,
//           CityID: formData.CityID,
//           StateID: formData.StateID,
//           CountryID: formData.CountryID,
//           Zipcode: formData.Zipcode,
//         },
//       }
//     );

//     console.log("Registration successful:", response.data);

//     // Redirect or show success message
//     navigate("/login"); // Navigate to login on success
//   } catch (error) {
//     console.error("Registration failed:", error);

//     // Show an error message
//     setApiError("Registration failed. Please try again.");
//   }
// };
  
// useEffect(() => {
//     const fetchCountries = async () => {
//       try {
//         const response = await axios.get('https://electronic-ecommerce.onrender.com/api/getCountries');
//         const countryData = response.data.data;
//         setCountries(countryData);
        
//         // Create countryMap
//         const countryMapData = countryData.reduce((map, country) => {
//           map[country.CountryName] = country.CountryID;
//           return map;
//         }, {});
//         setCountryMap(countryMapData);
  
//         console.log("Fetched countries:", countryData);
//       } catch (error) {
//         console.error("Error fetching countries:", error);
//       }
//     };
  
//     fetchCountries();
//   }, []);
  
//   const fetchStatesByCountry = async (countryId) => {
//     if (!countryId) return;
  
//     try {
//       // const response = await axios.get(`https://electronic-ecommerce.onrender.com/api/getStatesByCountry/${countryId}`);
//       const response = await axios.get(`https://electronic-ecommerce.onrender.com/api/getStatesByCountry`);
//       if (response.data.status === "SUCCESS") {
//         const stateData = response.data.data;
//         setStates(stateData);
  
//         // Create stateMap
//         const stateMapData = stateData.reduce((map, state) => {
//           map[state.StateName] = state.StateID;
//           return map;
//         }, {});
//         setStateMap(stateMapData);
  
//         console.log("Fetched states:", stateData);
//       }
//     } catch (error) {
//       console.error("Error fetching states:", error);
//     }
//   };
  
//   const fetchCitiesByState = async (stateId) => {
//     if (!stateId) return;
  
//     try {
//       // const response = await axios.get(`https://electronic-ecommerce.onrender.com/api/getCitiesByState/${stateId}`);
//       const response = await axios.get(`https://electronic-ecommerce.onrender.com/api/getCitiesByState`);
//       if (response.data.status === "SUCCESS") {
//         const cityData = response.data.data;
//         setCities(cityData);
  
//         // Create cityMap
//         const cityMapData = cityData.reduce((map, city) => {
//           map[city.CityName] = city.CityID;
//           return map;
//         }, {});
//         setCityMap(cityMapData);
  
//         console.log("Fetched cities:", cityData);
//       }
//     } catch (error) {
//       console.error("Error fetching cities:", error);
//     }
//   };
// const handleCountryChange = (selectedCountry) => {
//   if (!selectedCountry) return;

//   const countryID = countryMap[selectedCountry.CountryName] || selectedCountry.CountryID;

//   setSelectedCountry(selectedCountry);
//   setFormData({
//     ...formData,
//     CountryID: countryID,
//     CountryName: selectedCountry.CountryName
//   });
//   fetchStatesByCountry(countryID);
  
// };

// const handleStateChange = (state) => {
//   if (!state) return;

//   const stateID = stateMap[state.StateName] || state.StateID;

//   setSelectedState(state);
//   setFormData({
//     ...formData,
//     StateID: stateID,
//     StateName: state.StateName
//   });
 
//   fetchCitiesByState(stateID);
// };

// const handleCityChange = (city) => {
//   if (!city) return;

//   const cityID = cityMap[city.CityName] || city.CityID;

//   setSelectedCity(city);
//   setFormData({
//     ...formData,
//     CityID: cityID,
//     CityName: city.CityName
//   });
// };

//   const [loginOpen, setLoginOpen] = useState(false);

//   const handleOpen = (e) => {
//     e.preventDefault();
//     setLoginOpen(true);
//   };

//   const handleClose = () => {
//     setLoginOpen(false);
//   };

//   const handleNext = () => {
//     // if (validateStep()) {
//       setStep((prev) => prev + 1);
//     // }
//   };

//   const handleBack = () => {
//     setStep((prev) => prev - 1);
//   };

//   return (
//     <div>
//       <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
//         <div className="p-6 w-full max-w-4xl h-[90vh] relative flex">
          
//       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-6 relative overflow-hidden bg-white">
       
//         <form className="w-full mt-5 bg-white">
//           <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 px-16 md:px-24">
        
//             {/* First Name */}
//             <div className="flex items-center">
//               <div className="w-full ">
//                 <label
//                   htmlFor="FirstName"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   First Name <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   id="FirstName"
//                   name="FirstName"
//                   value={formData.FirstName || ""}
//                   onChange={handleFormChange}
//                   required
//                   className={`mt-2 mb-1 block w-full xl:w-full rounded-md border  shadow-sm py-2 px-4  sm:text-sm ${
//                     !formData.FirstName && errors.FirstNameError ? "border-red-400" : "border-gray-400"
//                   }`}
//                 />
//                 {!formData.FirstName && errors.FirstNameError && (
//                   <p className="text-red-500 text-sm mt-1 ">
//                     {errors.FirstNameError}
//                   </p>
//                 )}
//               </div>
//             </div>
//             {/* Address Line 1 */}
//             <div className="flex items-center">
//               <div className="w-full ">
//                 <label
//                   htmlFor="AddressLine1"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Address Line 1 <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   id="AddressLine1"
//                   name="AddressLine1"
//                   value={formData.AddressLine1 || ""}
//                   onChange={handleFormChange}
//                   required
//                   className={`mt-2 mb-1 block w-full xl:w-full rounded-md border shadow-sm py-2 px-4  sm:text-sm"
//                   ${!formData.AddressLine1 &&
//                     errors.AddressLine1Error
//                       ? "border-red-400"
//                       : "border-gray-400"
//                   }`}
//                 />
//                 {!formData.AddressLine1 && errors.AddressLine1Error && (
//                   <p className="text-red-500 text-sm mt-1 ">
//                     {errors.AddressLine1Error}
//                   </p>
//                 )}
//               </div>
//             </div>
           
//             {/* Last Name */}
//             <div>
//               <label
//                 htmlFor="LastName"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Last Name
//               </label>
//               <input
//                 type="text"
//                 id="LastName"
//                 name="LastName"
//                 value={formData.LastName || ""}
//                 onChange={handleFormChange}
//                 required
//                 // className={`mt-2 mb-1 block w-full xl:w-full rounded-md border shadow-sm py-2 px-4  sm:text-sm ${
//                 //   errors.LastNameError ? "border-red-400" : "border-gray-400"
//                 // }`}
//                 className={`mt-2 mb-1 block w-full xl:w-full rounded-md border shadow-sm py-2 px-4  sm:text-sm border-gray-400
//                 `}
//               />
//               {/* {errors.LastNameError && (
//                 <p className="text-red-500 text-sm mt-1 ">
//                   {errors.LastNameError}
//                 </p>
//               )} */}
//             </div>

//             {/* Address Line 2 */}
//             <div>
//               <label
//                 htmlFor="AddressLine2"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Address Line 2
//               </label>
//               <input
//                 type="text"
//                 id="AddressLine2"
//                 name="AddressLine2"
//                 value={formData.AddressLine2 || ""}
//                 onChange={handleFormChange}
//                 className="mt-2 mb-1 block w-full xl:w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//               />
//             </div>

//              <div>
//     <label
//       htmlFor="Email"
//       className="block text-sm font-medium text-gray-700"
//     >
//       Email <span className="text-red-500">*</span>
//     </label>
//     <input
//       type="email"
//       id="Email"
//       name="Email"
//       value={formData.Email || ""}
//       onChange={handleFormChange}
//       required
//       className={`mt-2 mb-1 block w-full xl:w-full rounded-md border shadow-sm py-2 px-4 sm:text-sm ${
//         errors.EmailError ? "border-red-400" : "border-gray-400"
//       }`}
//     />
//     {errors.EmailError && (
//       <p className="text-red-500 text-sm mt-1">
//         {errors.EmailError}
//       </p>
//     )}
//   </div>

//   <div className="flex items-center gap-4">
//   <div className="w-full">
//     <label
//       htmlFor="Country"
//       className="block text-sm font-medium text-gray-700"
//     >
//       Country
//     </label>
//     <Combobox as="div" value={selectedCountry} onChange={handleCountryChange}>
//       <div className="relative">
//         <Combobox.Input
//           id="Country"
//           name="Country"
//           className="w-full rounded-md border border-gray-400 bg-white py-2 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//           onChange={(event) => setQuery(event.target.value)} // Set the query for filtering
//           displayValue={(country) => country?.CountryName || ''} // Display selected country name
//         />
//         <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//           <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//         </Combobox.Button>

//         <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//           {countries
//             .filter((country) =>
//               country.CountryName.toLowerCase().includes(query.toLowerCase())
//             )
//             .map((country) => (
//               <Combobox.Option
//                 key={country.CountryID}
//                 value={country} // Pass the full country object to onChange
//                 className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-600 hover:text-white"
//               >
//                 <span className="block truncate font-normal group-data-[selected]:font-semibold">
//                   {country.CountryName}
//                 </span>
//                 <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
//                   <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                 </span>
//               </Combobox.Option>
//             ))}
//         </Combobox.Options>
//       </div>
//     </Combobox>
//   </div>
// </div>

//             {/* Password */}
//             <div className=" xl:w-full">
//               <label
//                 htmlFor="Password"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Password <span className="text-red-500">*</span>
//               </label>
//               <div className="relative">
//                 <input
//                   id="Password"
//                   name="Password"
//                   type={showPassword ? "text" : "password"}
//                   value={formData.Password || ""}
//                   onChange={handleFormChange}
//                   className={`mt-2 mb-1 block w-full  rounded-md border shadow-sm py-2 px-4  sm:text-sm ${ !formData.Password && 
//                     errors.PasswordError ? "border-red-400" : "border-gray-400"
//                   }`}
//                 />
//                 <span
//                   className="absolute right-2 top-1/2 pb-1 transform -translate-y-1/2 cursor-pointer "
//                   onClick={togglePasswordVisibility}
//                 >
//                   {/* {showPassword ? (
//                     <VisibilityOffIcon
//                       fontSize="small"
//                       className="opacity-75"
//                     />
//                   ) : (
//                     <VisibilityIcon fontSize="small" className="opacity-75" />
//                   )} */}
//                 </span>
//               </div>
//               {!formData.Password && errors.PasswordError && (
//                 <p className="text-red-500 text-sm mt-1 ">
//                   {errors.PasswordError}
//                 </p>
//               )}
//             </div>

// <div className="flex items-center gap-4">
//   <div className="w-full">
//     <label
//       htmlFor="State"
//       className="block text-sm font-medium text-gray-700"
//     >
//       State
//     </label>
//     <Combobox as="div" value={selectedState} onChange={handleStateChange}>
//       <div className="relative">
//         <Combobox.Input
//           id="State"
//           name="State"
//           className="w-full rounded-md border border-gray-400 bg-white py-2 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//           onChange={(event) => setQuery(event.target.value)} // Handle the search query
//           displayValue={(state) => state?.StateName || ''} // Show the selected state name
//         />
//         <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//           <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//         </Combobox.Button>

//         <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//           {states
//             .filter((state) => state.StateName.toLowerCase().includes(query.toLowerCase())) // Filter based on query
//             .map((state) => (
//               <Combobox.Option
//                 key={state.StateID}
//                 value={state}
//                 className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-600 hover:text-white"
//               >
//                 <span className="block truncate font-normal group-data-[selected]:font-semibold">
//                   {state.StateName}
//                 </span>
//                 <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
//                   <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                 </span>
//               </Combobox.Option>
//             ))}
//         </Combobox.Options>
//       </div>
//     </Combobox>
//   </div>
// </div>

// <div className="flex items-center gap-4">
//   <div className="w-full">
//     <label
//       htmlFor="City"
//       className="block text-sm font-medium text-gray-700"
//     >
//       City
//     </label>
//     <Combobox as="div" value={selectedCity} onChange={handleCityChange}>
//       <div className="relative">
//         <Combobox.Input
//           id="City"
//           name="City"
//           className="w-full rounded-md border border-gray-400 bg-white py-2 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//           onChange={(event) => setQuery(event.target.value)} // Handle the search query
//           displayValue={(city) => city?.CityName || ''} // Show the selected city name
//         />
//         <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//           <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//         </Combobox.Button>

//         <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//           {cities
//             .filter((city) => city.CityName.toLowerCase().includes(query.toLowerCase())) // Filter based on query
//             .map((city) => (
//               <Combobox.Option
//                 key={city.CityID}
//                 value={city}
//                 className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-600 hover:text-white"
//               >
//                 <span className="block truncate font-normal group-data-[selected]:font-semibold">
//                   {city.CityName}
//                 </span>
//                 <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
//                   <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                 </span>
//               </Combobox.Option>
//             ))}
//         </Combobox.Options>
//       </div>
//     </Combobox>
//   </div>
// </div>

//             {/* Gender */}
//             <div className="w-full xl:w-full">
//               <label
//                 htmlFor="Gender"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Gender
//               </label>
//               <Combobox
//                 value={selectedGender}
//                 onChange={handleGenderChange}
//                 as="div"
//               >
//                 <div className="relative mt-1">
//                   <Combobox.Input
//                     className="block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                     displayValue={(gender) => gender?.name || ""}
//                   />
//                   <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
//                     <ChevronUpDownIcon
//                       className="h-5 w-5 text-gray-400"
//                       aria-hidden="true"
//                     />
//                   </Combobox.Button>
//                   <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full xl:w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//                     {genderOptions.map((gender) => (
//                       <Combobox.Option
//                         key={gender.id}
//                         value={gender}
//                         className={({ active }) =>
//                           `relative cursor-default select-none py-2 pl-3 pr-9 ${
//                             active
//                               ? "bg-indigo-600 text-white"
//                               : "text-gray-900"
//                           }`
//                         }
//                       >
//                         {({ selected, active }) => (
//                           <>
//                             <span
//                               className={`block truncate ${
//                                 selected ? "font-semibold" : "font-normal"
//                               }`}
//                             >
//                               {gender.name}
//                             </span>
//                             {selected ? (
//                               <span
//                                 className={`absolute inset-y-0 right-0 flex items-center pr-4 ${
//                                   active ? "text-white" : "text-indigo-600"
//                                 }`}
//                               >
//                                 <CheckIcon
//                                   className="h-5 w-5"
//                                   aria-hidden="true"
//                                 />
//                               </span>
//                             ) : null}
//                           </>
//                         )}
//                       </Combobox.Option>
//                     ))}
//                   </Combobox.Options>
//                 </div>
//               </Combobox>
//             </div>

//             <div>
//               <label
//                 htmlFor="ZipCode"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Zip Code <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 id="ZipCode"
//                 name="ZipCode"
//                 value={formData.ZipCode || ""}
//                 onChange={handleFormChange}
//                 required
//                 className={`mt-2 mb-1 block w-full xl:w-full rounded-md border shadow-sm py-2 px-4  sm:text-sm ${!formData.ZipCode && 
//                   errors.ZipCodeError ? "border-red-400" : "border-gray-400"
//                 }`}
//               />
//               {!formData.ZipCode && errors.ZipCodeError && (
//                 <p className="text-red-500 text-sm mt-1 ">
//                   {errors.ZipCodeError}
//                 </p>
//               )}
//             </div>

        
//           </div>

//           {/* <div className="mt-6 flex justify-end gap-4">
//     <button
//       type="button" 
//       className="button-base save-btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//       onClick={handleFormSubmit} 
//     >
//       Submit
//     </button>
//   </div> */}
//   <div className="col-span-2 flex justify-between mt-6">
//   {step > 1 && (
//     <button
//       type="button"
//       onClick={handleBack}
//       className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
//     >
//       Back
//     </button>
//   )}
//   {step < 3 ? (
//     <button
//       type="button"
//       onClick={handleNext}
//       className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
//     >
//       Next
//     </button>
//   ) : (
//     <button
//       type="submit"
//       onClick={handleFormSubmit}
//       className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
//     >
//       Submit
//     </button>
//   )}
// </div>
//         </form>
//         {/* {isLoading && <LoadingAnimation />} */}
//       </div>
       
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


import React, { useState,useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Login from "../components/Login";
import { Combobox } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { CustomerContext } from "../context/CustomerContext";


const genderOptions = [
  { id: 1, name: 'Male' },
  { id: 2, name: 'Female' },
  { id: 3, name: 'Other' },
];


function Register() {

  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
const [selectedState, setSelectedState] = useState(null);
const [selectedCity, setSelectedCity] = useState(null);
const [selectedGender, setSelectedGender] = useState(null);
const [countries, setCountries] = useState([]);
const [states, setStates] = useState([]);
const [cities, setCities] = useState([]);
const [query, setQuery] = useState('');
const [showPassword, setShowPassword] = useState(false);
const [countryMap, setCountryMap] = useState({});
const [stateMap, setStateMap] = useState({});
const [cityMap, setCityMap] = useState({});
const [step, setStep] = useState(1);
 const { customerId } = useContext(CustomerContext);
 console.log( customerId );
 const [formData, setFormData] = useState({
  TenantID: 1,
  customerId:customerId,
  FirstName: "",
  LastName: "",
  Email: "",
  Password: "",
  ConfirmPassword: "",
  PhoneNumber: "",
  AddressLine1: "",
  AddressLine2: "",
  CityID: "",
  StateID: "",
  CountryID: "",
  Zipcode: "",
});
const togglePasswordVisibility = () => {
  setShowPassword((prev) => !prev);
};



  const navigate = useNavigate();

const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
  };

const handleFormSubmit = async (event) => {
  event.preventDefault(); // Prevent the default form submission behavior
  let valid = true;
  let newErrors = {};

  try {
    // Make the API call with form data
    const response = await axios.post(
      "https://electronic-ecommerce.onrender.com/api/completeRegistration",
      {
        customerId:customerId,
        TenantID: formData.TenantID,
        firstName: formData.FirstName,
        lastName: formData.LastName,
        email: formData.Email,
        password: formData.Password,
        PhoneNumber: formData.PhoneNumber,
        gender:formData.Gender,
        dateOfBirth:formData.DateOfBirth,
        address: {
          addressLine1: formData.AddressLine1,
          addressLine2: formData.AddressLine2,
          cityId: formData.CityID,
          stateId: formData.StateID,
          countryId: formData.CountryID,
          zipcode: formData.Zipcode,
        },
      }
    );

    console.log("Registration successful:", response.data);

    // Redirect or show success message
    navigate("/login"); // Navigate to login on success
  } catch (error) {
    console.error("Registration failed:", error);

    // Show an error message
    setApiError("Registration failed. Please try again.");
  }
};
  
useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://electronic-ecommerce.onrender.com/api/getCountries');
        const countryData = response.data.data;
        setCountries(countryData);
        
        // Create countryMap
        const countryMapData = countryData.reduce((map, country) => {
          map[country.CountryName] = country.CountryID;
          return map;
        }, {});
        setCountryMap(countryMapData);
  
        console.log("Fetched countries:", countryData);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
  
    fetchCountries();
  }, []);
  
  const fetchStatesByCountry = async (countryId) => {
    if (!countryId) return;
  
    try {
      // const response = await axios.get(`https://electronic-ecommerce.onrender.com/api/getStatesByCountry/${countryId}`);
      const response = await axios.get(`https://electronic-ecommerce.onrender.com/api/getStatesByCountry`);
      if (response.data.status === "SUCCESS") {
        const stateData = response.data.data;
        setStates(stateData);
  
        // Create stateMap
        const stateMapData = stateData.reduce((map, state) => {
          map[state.StateName] = state.StateID;
          return map;
        }, {});
        setStateMap(stateMapData);
  
        console.log("Fetched states:", stateData);
      }
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  };
  
  const fetchCitiesByState = async (stateId) => {
    if (!stateId) return;
  
    try {
      // const response = await axios.get(`https://electronic-ecommerce.onrender.com/api/getCitiesByState/${stateId}`);
      const response = await axios.get(`https://electronic-ecommerce.onrender.com/api/getCitiesByState`);
      if (response.data.status === "SUCCESS") {
        const cityData = response.data.data;
        setCities(cityData);
  
        // Create cityMap
        const cityMapData = cityData.reduce((map, city) => {
          map[city.CityName] = city.CityID;
          return map;
        }, {});
        setCityMap(cityMapData);
  
        console.log("Fetched cities:", cityData);
      }
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };
const handleCountryChange = (selectedCountry) => {
  if (!selectedCountry) return;

  const countryID = countryMap[selectedCountry.CountryName] || selectedCountry.CountryID;

  setSelectedCountry(selectedCountry);
  setFormData({
    ...formData,
    CountryID: countryID,
    CountryName: selectedCountry.CountryName
  });
  fetchStatesByCountry(countryID);
  
};

const handleStateChange = (state) => {
  if (!state) return;

  const stateID = stateMap[state.StateName] || state.StateID;

  setSelectedState(state);
  setFormData({
    ...formData,
    StateID: stateID,
    StateName: state.StateName
  });
 
  fetchCitiesByState(stateID);
};

const handleCityChange = (city) => {
  if (!city) return;

  const cityID = cityMap[city.CityName] || city.CityID;

  setSelectedCity(city);
  setFormData({
    ...formData,
    CityID: cityID,
    CityName: city.CityName
  });
};

  const [loginOpen, setLoginOpen] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setLoginOpen(true);
  };

  const handleClose = () => {
    setLoginOpen(false);
  };
  const handleNext = () => {
    // if (validateStep()) {
      setStep((prev) => prev + 1);
    // }
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };
  // const validateStep = () => {
  //   const newErrors = {};
  //   if (step === 1) {
  //     if (!formData.FirstName) newErrors.FirstNameError = "First Name is required.";
  //     if (!formData.LastName) newErrors.LastNameError = "Last Name is required.";
  //   }
  //   if (step === 2) {
  //     if (!formData.AddressLine1) newErrors.AddressLine1Error = "Address Line 1 is required.";
  //   }
  //   if (step === 3) {
  //     if (!formData.ZipCode) newErrors.ZipCodeError = "Zip Code is required.";
  //     if (!formData.Email) newErrors.EmailError = "Email is required.";
  //   }
  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };

 const onClose = () => {
    // setIsPopupOpen(false); 
  };

  return (

  <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
  <div className="p-6 w-full max-w-4xl h-[66vh] relative flex bg-white rounded-lg shadow-lg">
    <form className="w-full">
    <h2 className="text-center text-2xl mb-4">Registration Form</h2>
    <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

      <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 px-8 md:px-16">
        {step === 1 && (
          <>
            {/* First Name */}
            <div className="flex items-center">
               <div className="w-full ">
                 <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="FirstName"
                  name="FirstName"
                  value={formData.FirstName || ""}
                  onChange={handleFormChange}
                  required
                  className={`mt-2 mb-1 block w-full xl:w-full rounded-md border  shadow-sm py-2 px-4  sm:text-sm ${
                    !formData.FirstName && errors.FirstNameError ? "border-red-400" : "border-gray-400"
                  }`}
                />
                {!formData.FirstName && errors.FirstNameError && (
                  <p className="text-red-500 text-sm mt-1 ">
                    {errors.FirstNameError}
                  </p>
                )}
              </div>
            </div>
            {/* Last Name */}
            <div>
              <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="LastName"
                name="LastName"
                value={formData.LastName || ""}
                onChange={handleFormChange}
                required
                className={`mt-2 block w-full rounded-md border py-2 px-4 sm:text-sm ${
                  errors.LastNameError ? "border-red-400" : "border-gray-400"
                }`}
              />
              {errors.LastNameError && <p className="text-red-500 text-sm">{errors.LastNameError}</p>}
            </div>
             {/* Email */}
             <div>
              <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="Email"
                name="Email"
                value={formData.Email || ""}
                onChange={handleFormChange}
                required
                className={`mt-2 block w-full rounded-md border py-2 px-4 sm:text-sm ${
                  errors.EmailError ? "border-red-400" : "border-gray-400"
                }`}
              />
              {errors.EmailError && <p className="text-red-500 text-sm">{errors.EmailError}</p>}
            </div>

                 {/* Password */}
             <div className=" xl:w-full">
              <label
                htmlFor="Password"
                className="block text-sm font-medium text-gray-700"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="Password"
                  name="Password"
                  type={showPassword ? "text" : "password"}
                  value={formData.Password || ""}
                  onChange={handleFormChange}
                  className={`mt-2 mb-1 block w-full  rounded-md border shadow-sm py-2 px-4  sm:text-sm ${ !formData.Password && 
                    errors.PasswordError ? "border-red-400" : "border-gray-400"
                  }`}
                />
                <span
                  className="absolute right-2 top-1/2 pb-1 transform -translate-y-1/2 cursor-pointer "
                  onClick={togglePasswordVisibility}
                >
                  {/* {showPassword ? (
                    <VisibilityOffIcon
                      fontSize="small"
                      className="opacity-75"
                    />
                  ) : (
                    <VisibilityIcon fontSize="small" className="opacity-75" />
                  )} */}
                </span>
              </div>
              {!formData.Password && errors.PasswordError && (
                <p className="text-red-500 text-sm mt-1 ">
                  {errors.PasswordError}
                </p>
              )}
            </div>

                 {/* Gender */}
             <div className="w-full xl:w-full">
               <label
                htmlFor="Gender"
                className="block text-sm font-medium text-gray-700"
              >
                Gender
              </label>
              <Combobox
                value={selectedGender}
                onChange={handleGenderChange}
                as="div"
              >
                <div className="relative mt-1">
                  <Combobox.Input
                    className="block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    displayValue={(gender) => gender?.name || ""}
                  />
                  <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Combobox.Button>
                  <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full xl:w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {genderOptions.map((gender) => (
                      <Combobox.Option
                        key={gender.id}
                        value={gender}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-3 pr-9 ${
                            active
                              ? "bg-indigo-600 text-white"
                              : "text-gray-900"
                          }`
                        }
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-semibold" : "font-normal"
                              }`}
                            >
                              {gender.name}
                            </span>
                            {selected ? (
                              <span
                                className={`absolute inset-y-0 right-0 flex items-center pr-4 ${
                                  active ? "text-white" : "text-indigo-600"
                                }`}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Combobox.Option>
                    ))}
                  </Combobox.Options>
                </div>
              </Combobox>
            </div>

            <div className="xl:w-full">
  <label
    htmlFor="DateOfBirth"
    className="block text-sm font-medium text-gray-700"
  >
    Date of Birth <span className="text-red-500">*</span>
  </label>
  <div className="relative">
    <input
      id="DateOfBirth"
      name="DateOfBirth"
      type="date"
      value={formData.DateOfBirth || ""}
      onChange={handleFormChange}
      className={`mt-2 mb-1 block w-full rounded-md border shadow-sm py-2 px-4 sm:text-sm ${
        !formData.DateOfBirth && errors.DateOfBirthError
          ? "border-red-400"
          : "border-gray-400"
      }`}
    />
  </div>
  {!formData.DateOfBirth && errors.DateOfBirthError && (
    <p className="text-red-500 text-sm mt-1">
      {errors.DateOfBirthError}
    </p>
  )}
</div>

          </>
        )}
        {step === 2 && (
          <>
            {/* Address Line 1 */}
            <div>
              <label htmlFor="AddressLine1" className="block text-sm font-medium text-gray-700">
                Address Line 1 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="AddressLine1"
                name="AddressLine1"
                value={formData.AddressLine1 || ""}
                onChange={handleFormChange}
                required
                className={`mt-2 block w-full rounded-md border py-2 px-4 sm:text-sm ${
                  errors.AddressLine1Error ? "border-red-400" : "border-gray-400"
                }`}
              />
              {errors.AddressLine1Error && <p className="text-red-500 text-sm">{errors.AddressLine1Error}</p>}
            </div>
            {/* Address Line 2 */}
            <div>
              <label htmlFor="AddressLine2" className="block text-sm font-medium text-gray-700">
                Address Line 2
              </label>
              <input
                type="text"
                id="AddressLine2"
                name="AddressLine2"
                value={formData.AddressLine2 || ""}
                onChange={handleFormChange}
                className="mt-2 block w-full rounded-md border py-2 px-4 sm:text-sm border-gray-400"
              />
            </div>

          <div className="flex items-center gap-4">
   <div className="w-full">
     <label
      htmlFor="Country"
      className="block text-sm font-medium text-gray-700"
    >
      Country
    </label>
    <Combobox as="div" value={selectedCountry} onChange={handleCountryChange}>
      <div className="relative">
        <Combobox.Input
          id="Country"
          name="Country"
          className="w-full rounded-md border border-gray-400 bg-white py-2 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          onChange={(event) => setQuery(event.target.value)} // Set the query for filtering
          displayValue={(country) => country?.CountryName || ''} // Display selected country name
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>

        <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {countries
            .filter((country) =>
              country.CountryName.toLowerCase().includes(query.toLowerCase())
            )
            .map((country) => (
              <Combobox.Option
                key={country.CountryID}
                value={country} // Pass the full country object to onChange
                className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-600 hover:text-white"
              >
                <span className="block truncate font-normal group-data-[selected]:font-semibold">
                  {country.CountryName}
                </span>
                <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                </span>
              </Combobox.Option>
            ))}
        </Combobox.Options>
      </div>
    </Combobox>
  </div>
</div>

 <div className="flex items-center gap-4">
   <div className="w-full">
     <label
      htmlFor="State"
      className="block text-sm font-medium text-gray-700"
    >
      State
    </label>
    <Combobox as="div" value={selectedState} onChange={handleStateChange}>
      <div className="relative">
        <Combobox.Input
          id="State"
          name="State"
          className="w-full rounded-md border border-gray-400 bg-white py-2 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          onChange={(event) => setQuery(event.target.value)} // Handle the search query
          displayValue={(state) => state?.StateName || ''} // Show the selected state name
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>

        <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {states
            .filter((state) => state.StateName.toLowerCase().includes(query.toLowerCase())) // Filter based on query
            .map((state) => (
              <Combobox.Option
                key={state.StateID}
                value={state}
                className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-600 hover:text-white"
              >
                <span className="block truncate font-normal group-data-[selected]:font-semibold">
                  {state.StateName}
                </span>
                <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                </span>
              </Combobox.Option>
            ))}
        </Combobox.Options>
      </div>
    </Combobox>
  </div>
</div>

<div className="flex items-center gap-4">
  <div className="w-full">
    <label
      htmlFor="City"
      className="block text-sm font-medium text-gray-700"
    >
      City
    </label>
    <Combobox as="div" value={selectedCity} onChange={handleCityChange}>
      <div className="relative">
        <Combobox.Input
          id="City"
          name="City"
          className="w-full rounded-md border border-gray-400 bg-white py-2 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          onChange={(event) => setQuery(event.target.value)} // Handle the search query
          displayValue={(city) => city?.CityName || ''} // Show the selected city name
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>

        <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {cities
            .filter((city) => city.CityName.toLowerCase().includes(query.toLowerCase())) // Filter based on query
            .map((city) => (
              <Combobox.Option
                key={city.CityID}
                value={city}
                className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-600 hover:text-white"
              >
                <span className="block truncate font-normal group-data-[selected]:font-semibold">
                  {city.CityName}
                </span>
                <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                </span>
              </Combobox.Option>
            ))}
        </Combobox.Options>
      </div>
    </Combobox>
  </div>
</div>
               <div>
               <label
                htmlFor="ZipCode"
                className="block text-sm font-medium text-gray-700"
              >
                Zip Code <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="Zipcode"
                name="Zipcode"
                value={formData.Zipcode || ""}
                onChange={handleFormChange}
                required
                className={`mt-2 mb-1 block w-full xl:w-full rounded-md border shadow-sm py-2 px-4  sm:text-sm ${!formData.Zipcode && 
                  errors.ZipCodeError ? "border-red-400" : "border-gray-400"
                }`}
              />
              {!formData.Zipcode && errors.ZipCodeError && (
                <p className="text-red-500 text-sm mt-1 ">
                  {errors.ZipCodeError}
                </p>
              )}
            </div>
          </>
        )}
      
     {/* Navigation Buttons */}
{/* <div className="col-span-2 flex justify-between mt-6">
  {step > 1 && (
    <button
      type="button"
      onClick={handleBack}
      className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
    >
      Back
    </button>
  )}
  {step < 2 ? (
    <button
      type="button"
      onClick={handleNext}
      className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
    >
      Next
    </button>
  ) : (
    <button
      type="submit"
      onClick={handleFormSubmit}
      className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
    >
      Submit
    </button>
  )}
</div> */}
{/* Navigation Buttons */}
{/* <div className="col-span-2 flex justify-between mt-6">
  {step > 1 && (
    <button
      type="button"
      onClick={handleBack}
      className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
    >
      Back
    </button>
  )}
  <button
    type="button"
    onClick={step < 2 ? handleNext : handleFormSubmit}  // Handle Next or Submit depending on the step
    className={`px-4 py-2 text-white ${step < 2 ? 'bg-blue-500 hover:bg-blue-600' : 'bg-green-500 hover:bg-green-600'} rounded-md`}
  >
    {step < 2 ? 'Next' : 'Submit'}
  </button>
</div> */}
{/* Navigation Buttons */}
<div className="col-span-2 flex justify-between mt-6">
  {step > 1 && (
    <button
      type="button"
      onClick={handleBack}
      className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
    >
      Back
    </button>
  )}
  <button
    type="button"
    onClick={step < 2 ? handleNext : handleFormSubmit}  // Handle Next or Submit depending on the step
    className={`px-4 py-2 text-white ${step < 2 ? 'bg-blue-500 hover:bg-blue-600' : 'bg-green-500 hover:bg-green-600'} rounded-md ml-auto`}  // Add ml-auto to push button to the right
  >
    {step < 2 ? 'Next' : 'Submit'}
  </button>
</div>


      </div>
    </form>
  </div>
</div>
  );
};

export default Register;
