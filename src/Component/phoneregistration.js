

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from 'react-router-dom';

// const PhoneNumberForm = () => {
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [otp, setOtp] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const [apiError, setApiError] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const navigate = useNavigate();

//   const handlePhoneSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post(
//         "https://electronic-ecommerce.onrender.com/api/generateOTP",
//         { phoneNumber }
//       );
//       console.log("OTP sent:", response.data);
//       setOtpSent(true);
//       setApiError("");
//     } catch (error) {
//       console.error("Failed to send OTP:", error);
//       setApiError("Failed to send OTP. Please try again.");
//     }
//   };

//   const handleOtpSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post(
//         "https://electronic-ecommerce.onrender.com/api/verifyOtpOtp",
//         { phoneNumber, otp }
//       );
//       console.log("OTP verified:", response.data);
//       setSuccessMessage("OTP verified successfully!");
//       setApiError("");
//       setOtpSent(false); // Reset OTP popup
//       navigate("/register");
//     } catch (error) {
//       console.error("OTP verification failed:", error);
//       setApiError("OTP verification failed. Please try again.");
//     }
//   };

//   return (
//     <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen relative overflow-hidden">
//     <div className="hidden md:block overflow-hidden relative top-14">
//       <img
//         src="image.png"
//         alt="Description"
//         className="object-contain w-full max-h-screen md:max-h-screen lg:max-h-screen"
//       />
//     </div>
//     <div className="mt-14 sm:mx-auto sm:w-full sm:max-w-sm">
//     <div className="flex flex-col items-center">
//           <div className="flex items-center justify-center mb-5 mt-16">
//             <div className="flex items-center justify-center w-24 h-24 rounded-full mb-4">
//               <img
//                 src="B2Y_Logo.png"
//                 alt="Logo"
//                 className="w-16 h-16 object-contain"
//               />
//             </div>
//           </div>

//           <h2 className="-mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 font-sans">
//             Welcome to B2Y
//           </h2>
//           <p className="mt-2 text-center text-sm leading-5 tracking-tight text-gray-600 font-sans">
//             Welcome back! Login with your data that you entered during
//             registration
//           </p>
//         </div>
//       <form
//         action="#"
//         method="POST"
//         className="space-y-6"
//         onSubmit={handlePhoneSubmit}
//       >
//         {/* Phone Number Input */}
//         <div>
//           <label
//             htmlFor="phone"
//             className="block text-sm font-medium leading-6 text-gray-900 mt-6"
//           >
//             Phone Number
//           </label>
//           <input
//             id="phone"
//             name="phone"
//             type="tel"
//             required
//             className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//           />
//         </div>

//         {/* Submit Button */}
//         <div className="mt-10">
//           <button
//             type="submit"
//             className="flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
//           >
//             Send OTP
//           </button>
//         </div>

//         {apiError && <p className="text-red-600 mt-4">{apiError}</p>}
//         {successMessage && <p className="text-green-600 mt-4">{successMessage}</p>}
//       </form>

//       {/* OTP Popup */}
//       {otpSent && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white rounded-lg p-6 w-96">
//             <h2 className="text-lg font-semibold mb-4">Enter OTP</h2>
//             <form onSubmit={handleOtpSubmit}>
//               <input
//                 type="text"
//                 name="otp"
//                 maxLength="6"
//                 placeholder="Enter OTP"
//                 required
//                 className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//               />
//               <div className="mt-4 flex justify-end">
//                 <button
//                   type="button"
//                   className="mr-4 rounded-md bg-gray-300 px-4 py-2 text-sm font-semibold leading-6 text-gray-800 hover:bg-gray-400"
//                   onClick={() => setOtpSent(false)}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="rounded-md bg-sky-700 px-4 py-2 text-sm font-semibold leading-6 text-white hover:bg-sky-800"
//                 >
//                   Verify OTP
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//     </section>
//   );
// };

// export default PhoneNumberForm;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import LoginImage from "../assets/Login/login_img.png";

// const AuthForm = ({ onClose }) => {
//   const [formData, setFormData] = useState({
//     Email: "",
//     Password: "",
//     phoneNumber: "",
//     otp: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [loginError, setLoginError] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const [apiError, setApiError] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [name]: "",
//     }));
//     setLoginError("");
//   };

//   const validateLoginForm = () => {
//     const errors = {};
//     if (!formData.Email) errors.Email = "Enter your email";
//     if (!formData.Password) errors.Password = "Enter your password";
//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleLoginSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateLoginForm()) return;
//     try {
//       const response = await axios.post(
//         "https://electronic-ecommerce.onrender.com/api/customerLogin",
//         { Email: formData.Email, Password: formData.Password }
//       );
//       const { token } = response.data;
//       // const decodedToken = jwtDecode(token);
//       localStorage.setItem("jwtToken", token);
//       // localStorage.setItem("customerId", decodedToken.id);
//       navigate("/home");
//       onClose();
//     } catch (error) {
//       setLoginError("Please check your email and password.");
//     }
//   };

//   const handlePhoneSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(
//         "https://electronic-ecommerce.onrender.com/api/generateOTP",
//         { phoneNumber: formData.phoneNumber }
//       );
//       setOtpSent(true);
//       setApiError("");
//     } catch (error) {
//       setApiError("Failed to send OTP. Please try again.");
//     }
//   };

//   const handleOtpSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(
//         "https://electronic-ecommerce.onrender.com/api/verifyOtp",
//         { phoneNumber: formData.phoneNumber, otp: formData.otp }
//       );
//       setSuccessMessage("OTP verified successfully!");
//       navigate("/register");
//     } catch (error) {
//       setApiError("OTP verification failed. Please try again.");
//     }
//   };

//   return (
 
//     <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
//   <div className="relative p-6 w-full max-w-3xl h-[80vh] flex">
   

//     {/* Left Section */}
//     <div className="w-1/2 flex flex-col justify-between bg-blue-500 text-white p-6">
//       <h2 className="text-2xl font-bold">Looks like you're new here!</h2>
//       <p className="-mt-20">
//         Sign up with your mobile number to get started
//       </p>
//       <div className="flex items-center justify-center">
//         <img src={LoginImage} alt="Login Illustration" className="w-60" />
//       </div>
//     </div>

//     {/* Right Section */}
//     <div className="w-1/2 p-6 bg-white">
//      {/* Close button */}
//      <button
//       onClick={onClose}
//       className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-50"
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-6 w-6"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M6 18L18 6M6 6l12 12"
//         />
//       </svg>
//     </button>
//       <form onSubmit={otpSent ? handleOtpSubmit : handlePhoneSubmit}>
//         <div className="mb-4">
//           <label>Phone Number</label>
//           <input
//             type="tel"
//             name="phoneNumber"
//             value={formData.phoneNumber}
//             onChange={handleChange}
//             className="border px-4 py-2 w-full rounded"
//             placeholder="Enter your phone number"
//           />
//         </div>
//         {otpSent && (
//           <div className="mb-4">
//             <label>OTP</label>
//             <input
//               type="text"
//               name="otp"
//               value={formData.otp}
//               onChange={handleChange}
//               className="border px-4 py-2 w-full rounded"
//               placeholder="Enter OTP"
//             />
//           </div>
//         )}
//         {apiError && (
//           <p className="text-red-500 text-center">{apiError}</p>
//         )}
//         <button
//           type="submit"
//           className="bg-black text-white px-4 py-2 w-full rounded"
//         >
//           {otpSent ? "Verify OTP" : "Send OTP"}
//         </button>
//         {successMessage && (
//           <p className="text-green-500 text-center">{successMessage}</p>
//         )}
//       </form>
//     </div>
//   </div>
// </div>

//   );
// };

// export default AuthForm;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import LoginImage from "../assets/Login/login_img.png";

// const AuthForm = ({ onClose }) => {
//   const [formData, setFormData] = useState({
//     Email: "",
//     Password: "",
//     phoneNumber: "",
//     otp: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [loginError, setLoginError] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const [apiError, setApiError] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [name]: "",
//     }));
//     setLoginError("");
//   };

//   const validateLoginForm = () => {
//     const errors = {};
//     if (!formData.Email) errors.Email = "Enter your email";
//     if (!formData.Password) errors.Password = "Enter your password";
//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleLoginSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateLoginForm()) return;
//     try {
//       const response = await axios.post(
//         "https://electronic-ecommerce.onrender.com/api/customerLogin",
//         { Email: formData.Email, Password: formData.Password }
//       );
//       const { token } = response.data;
//       localStorage.setItem("jwtToken", token);
//       navigate("/home");
//       onClose();
//     } catch (error) {
//       setLoginError("Please check your email and password.");
//     }
//   };

//   const handlePhoneSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(
//         "https://electronic-ecommerce.onrender.com/api/generateOTP",
//         { phoneNumber: formData.phoneNumber }
//       );
//       setOtpSent(true);
//       setApiError("");
//     } catch (error) {
//       setApiError("Failed to send OTP. Please try again.");
//     }
//   };

//   const handleOtpSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(
//         "https://electronic-ecommerce.onrender.com/api/verifyOtp",
//         { phoneNumber: formData.phoneNumber, otp: formData.otp }
//       );
//       setSuccessMessage("OTP verified successfully!");
//       navigate("/register");
//     } catch (error) {
//       setApiError("OTP verification failed. Please try again.");
//     }
//   };

//   const handleClose = () => {
//     navigate("/");
//   };

//   return (
//     <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
//       <div className="relative p-6 w-full max-w-3xl h-[80vh] flex">
//         {/* Left Section */}
//         <div className="w-1/2 flex flex-col justify-between bg-blue-500 text-white p-6">
//           <h2 className="text-2xl font-bold">Looks like you're new here!</h2>
//           <p className="-mt-20">Sign up with your mobile number to get started</p>
//           <div className="flex items-center justify-center">
//             <img src={LoginImage} alt="Login Illustration" className="w-60" />
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="w-1/2 p-6 bg-white">
//           {/* Close button */}
//           <button
//             onClick={handleClose}
//             className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-50"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>
//           <form onSubmit={otpSent ? handleOtpSubmit : handlePhoneSubmit}>
//             <div className="mb-4">
//               <label>Phone Number</label>
//               <input
//                 type="tel"
//                 name="phoneNumber"
//                 value={formData.phoneNumber}
//                 onChange={handleChange}
//                 className="border px-4 py-2 w-full rounded"
//                 placeholder="Enter your phone number"
//               />
//             </div>
//             {otpSent && (
//               <div className="mb-4">
//                 <label>OTP</label>
//                 <input
//                   type="text"
//                   name="otp"
//                   value={formData.otp}
//                   onChange={handleChange}
//                   className="border px-4 py-2 w-full rounded"
//                   placeholder="Enter OTP"
//                 />
//               </div>
//             )}
//             {apiError && <p className="text-red-500 text-center">{apiError}</p>}
//             <button
//               type="submit"
//               className="bg-black text-white px-4 py-2 w-full rounded"
//             >
//               {otpSent ? "Verify OTP" : "Send OTP"}
//             </button>
//             {successMessage && (
//               <p className="text-green-500 text-center">{successMessage}</p>
//             )}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthForm;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// // import LoginImage from '../assets/logo/Login_1.png'; 
// import { jwtDecode } from 'jwt-decode';
// import axios from "axios";
// import LoginImage from '../assets/Login/login_img.png';
// import Login from "../components/Login";
// const PhoneNumberReg = ({ onClose }) => {
 
//   const [formData, setFormData] = useState({
//     phoneNumber: "",
//     otp: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [loginError, setLoginError] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const [apiError, setApiError] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const navigate = useNavigate();
//   const [loginOpen, setLoginOpen] = useState(false);
//   const handleOpen = () => setLoginOpen(true);
//   const handleClose = () => setLoginOpen(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [name]: "",
//     }));
//     setLoginError("");
//   };



//   const handlePhoneSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(
//         "https://electronic-ecommerce.onrender.com/api/generateOTP",
//         { phoneNumber: formData.phoneNumber }
//       );
//       setOtpSent(true);
//       setApiError("");
//     } catch (error) {
//       setApiError("Failed to send OTP. Please try again.");
//     }
//   };

//   const handleOtpSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(
//         "https://electronic-ecommerce.onrender.com/api/verifyOtpOtp",
//         { phoneNumber: formData.phoneNumber, otp: formData.otp }
//       );
//       setSuccessMessage("OTP verified successfully!");
//       navigate("/register");
//       onClose();
//     } catch (error) {
//       setApiError("OTP verification failed. Please try again.");
//     }
//   };

//   // const handleCloseLogin = () => {
//   //   navigate("/");
//   // };

//   return (
   
// <div>
//   <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
//     <div className="p-6 w-full max-w-3xl h-[80vh] relative flex">
//       {/* Left Section: Image */}
//       <div className="w-1/2 flex flex-col justify-between bg-blue-500">
//         <h2 className="text-2xl font-bold text-white ml-6 py-8">
//         Looks like you're new here!
//         </h2>
//         <p className="text-xl text-gray-200 ml-6 mr-6 -mt-36">
//         Sign up with your mobile number to get started
// </p>

//         <div className="flex items-center justify-center h-[250px] relative">
//   <img
//     src={LoginImage}
//     alt="Login Illustration"
//     className="w-60 rounded-bl-lg"
//   />
// </div>

       
//       </div>

//       {/* Right Section: Input Fields */}
//       <div className="w-2/3 p-6 relative bg-white">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         </button>

// <form onSubmit={otpSent ? handleOtpSubmit : handlePhoneSubmit} className="flex flex-col h-full">
//   <div className="mb-4 mt-10">
//     <label className="block mb-2">Enter Phone Number</label>
//     <input
//       type="tel"
//       name="phoneNumber"
//       value={formData.phoneNumber}
//       onChange={handleChange}
//       className="border-b border-gray-300 focus:border-blue-500 focus:outline-none w-full pb-1"
//     />
//   </div>

//   {otpSent && (
//     <div className="mb-4">
//       <div className="flex items-center justify-between">
//         <label className="block mr-2">OTP sent to Mobile</label>
//         <button
//           type="button"
//           className="text-blue-500 text-sm"
//           onClick={handlePhoneSubmit}
//         >
//           Resend
//         </button>
//       </div>
//       <input
//         type="text"
//         name="otp"
//         value={formData.otp}
//         onChange={handleChange}
//         className="border-b border-gray-300 focus:border-blue-500 focus:outline-none w-full pb-1 mt-2"
//         placeholder="Enter OTP"
//       />
//     </div>
//   )}

//   {apiError && <p className="text-red-500 text-center">{apiError}</p>}

//   <button
//     type="submit"
//     className="bg-orange-600 text-white px-4 py-2 w-full rounded"
//   >
//     {otpSent ? "Verify OTP" : "Send OTP"}
//   </button>

//   {successMessage && (
//     <p className="text-green-500 text-center">{successMessage}</p>
//   )}

//   {/* Always at the bottom */}
//   <div className="text-center mt-auto flex justify-center items-center space-x-2">
//     <p className="text-gray-600">Already have an account?</p>
//     <button
//       type="button" // Prevent form submission
//       onClick={handleOpen} // Same function to open the Login form
//       className="text-blue-500 hover:underline"
//     >
//       Login
//     </button>
//     {loginOpen && (
//       <Login isOpen={loginOpen} onClose={handleClose} />
//     )}
//   </div>
// </form>


//       </div>
//     </div>
//   </div>
// </div>

//   );
// };

// export default PhoneNumberReg;


import React, { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import LoginImage from '../assets/logo/Login_1.png'; 
import { jwtDecode } from 'jwt-decode';
import axios from "axios";
import LoginImage from '../assets/Login/login_img.png';
import Login from "../components/Login";
import { CustomerContext } from "../context/CustomerContext";

const PhoneNumberReg = ({ onClose }) => {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    otp: "",
  });
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [apiError, setApiError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const [loginOpen, setLoginOpen] = useState(false);
  const { setCustomerId } = useContext(CustomerContext);
  const handleOpen = () => setLoginOpen(true);
  const handleClose = () => setLoginOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
    setLoginError("");
  };

  const handlePhoneSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      await axios.post(
        "https://electronic-ecommerce.onrender.com/api/generateOTP",
        { phoneNumber: formData.phoneNumber }
      );
      setOtpSent(true);
      setApiError("");
    } catch (error) {
      setApiError("Failed to send OTP. Please try again.");
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await axios.post(
        "https://electronic-ecommerce.onrender.com/api/verifyOtpOtp",
        { phoneNumber: formData.phoneNumber, otp: formData.otp }
      );

      const { customerId } = response.data.data; // Extract customerId from response
      setCustomerId(customerId); // Store customerId in context
      navigate("/register");
      onClose();
    } catch (error) {
      setApiError("OTP verification failed. Please try again.");
    }
  };

  return (
    <div>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
        <div className="p-6 w-full max-w-3xl h-[80vh] relative flex">
          {/* Left Section: Image */}
          <div className="w-1/2 flex flex-col justify-between bg-blue-500">
            <h2 className="text-2xl font-bold text-white ml-6 py-8">
              Looks like you're new here!
            </h2>
            <p className="text-xl text-gray-200 ml-6 mr-6 -mt-36">
              Sign up with your mobile number to get started
            </p>
            <div className="flex items-center justify-center h-[250px] relative">
              <img
                src={LoginImage}
                alt="Login Illustration"
                className="w-60 rounded-bl-lg"
              />
            </div>
          </div>

          {/* Right Section: Input Fields */}
          <div className="w-2/3 p-6 relative bg-white">
            {/* Close Button */}
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

            <form
              onSubmit={otpSent ? handleOtpSubmit : handlePhoneSubmit}
              className="flex flex-col h-full"
            >
           {/* <div className="mb-4 mt-10">
  <div className="relative">
    <input
      type="tel"
      name="phoneNumber"
      value={formData.phoneNumber}
      onChange={handleChange}
      className="border-b py-1 focus:outline-none focus:border-blue-600 focus:border-b-2 transition-all peer w-full focus:w-full focus:max-w-lg"
      placeholder=" "
      autoComplete="off"
    />
    <label
      htmlFor="phoneNumber"
      className={`absolute left-0 top-1 text-gray-600 cursor-text transition-all ${
        formData.phoneNumber ? 'text-xs -top-4' : 'peer-focus:text-xs peer-focus:-top-4'
      }`}
    >
      Enter Phone Number
    </label>
  </div>
</div> */}
<div className="mb-4 mt-10">
  <div className="relative">
    <input
      type="tel"
      id="phoneNumber"  // Set an id here
      name="phoneNumber"
      value={formData.phoneNumber}
      onChange={handleChange}
      className="border-b py-1 focus:outline-none focus:border-blue-600 focus:border-b-2 transition-all peer w-full focus:w-full focus:max-w-lg"
      placeholder=" "
      autoComplete="off"
    />
    <label
      htmlFor="phoneNumber"  // This now matches the id of the input
      className={`absolute left-0 top-1 text-gray-600 cursor-text transition-all ${
        formData.phoneNumber ? 'text-xs -top-4' : 'peer-focus:text-xs peer-focus:-top-4'
      }`}
    >
      Enter Phone Number
    </label>
  </div>
</div>


              {otpSent && (
              
              <div className="mb-4 mt-4">
              <div className="relative">
                <input
                  type="text"
                  id="otp"
                  name="otp"
                  value={formData.otp}
                  onChange={handleChange}
                  className="border-b py-1 focus:outline-none focus:border-blue-600 focus:border-b-2 transition-all peer w-full focus:w-full focus:max-w-lg"
                  placeholder=" "
                  autoComplete="off"
                />
                <label
                  htmlFor="otp"
                  className={`absolute left-0 top-1 text-gray-600 cursor-text transition-all ${
                    formData.otp ? 'text-xs -top-4' : 'peer-focus:text-xs peer-focus:-top-4'
                  }`}
                >
                  Enter OTP
                </label>
                <button
                  type="button"
                  className="text-blue-500 text-sm absolute right-0 top-1"
                  onClick={handlePhoneSubmit}
                >
                  Resend
                </button>
              </div>
            </div>
            
             
              )}

              {apiError && <p className="text-red-500 text-center">{apiError}</p>}

              <button
                type="submit"
                className="bg-orange-600 text-white px-4 py-2 w-full rounded mt-10"
              >
                {otpSent ? "Verify OTP" : "Send OTP"}
              </button>

              {successMessage && (
                <p className="text-green-500 text-center">{successMessage}</p>
              )}

              {/* Always at the bottom */}
              <div className="text-center mt-auto flex justify-center items-center space-x-2">
                <p className="text-gray-600">Already have an account?</p>
                <button
                  type="button" // Prevent form submission
                  onClick={handleOpen} // Same function to open the Login form
                  className="text-blue-500 hover:underline"
                >
                  Login
                </button>
                {loginOpen && (
                  <Login isOpen={loginOpen} onClose={handleClose} />
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneNumberReg;
