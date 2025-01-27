import React, { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import LoginImage from '../assets/logo/Login_1.png'; 
import { jwtDecode } from 'jwt-decode';
import axios from "axios";
import LoginImage from '../assets/Login/login_img.png';
import Login from "../components/Login";
import { CustomerContext } from "../context/CustomerContext";
import image from '../assets/Bannaer_Images/Background.png';

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
  // const handleOpen = () => setLoginOpen(true);
  // const handleClose = () => setLoginOpen(false);

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
  const handleOpen = () => {
    // Navigate to the login page
    navigate('/login');
  };
  const handleClose = () => {
    // Navigate to the home page
    navigate('/');
  };
  return (
    <div>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
        <div className="p-6 w-full max-w-3xl h-[80vh] relative flex">
          {/* Left Section: Image */}
          {/* <div className="w-1/2 flex flex-col justify-between bg-blue-500">
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
          </div> */}
          <div 
            className="w-1/2 flex flex-col justify-between bg-blue-500" 
            style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
          >
            <h2 className="text-2xl font-bold text-white ml-6 py-8">
            Looks like you're new here!
            </h2>
            <p className="text-xl text-gray-200 ml-6 mr-6 -mt-36">
            Sign up with your mobile number to get started
            </p>
          
            <div className="flex items-center justify-center h-[250px] relative">
              {/* <img
                src={LoginImage}
                alt="Login Illustration"
                className="w-60 rounded-bl-lg"
              /> */}
            </div>
          </div>

          {/* Right Section: Input Fields */}
          <div className="w-2/3 p-6 relative bg-white">
            {/* Close Button */}
            <button
              // onClick={onClose}
              onClick={handleClose}
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

<div className="mb-4 mt-10">
  <div className="relative">
    <input
      type="tel"
      id="phoneNumber"
      name="phoneNumber"
      value={formData.phoneNumber}
      onChange={handleChange}
      className="border-b py-1 focus:outline-none focus:border-blue-600 focus:border-b-2 transition-all peer w-full focus:w-full focus:max-w-lg"
      placeholder=" "
      autoComplete="off"
    />
    <label
      htmlFor="phoneNumber"
      className={`absolute left-0 text-gray-600 cursor-text transition-all ${
        formData.phoneNumber
          ? 'text-xs -top-4'
          : 'top-1 text-base peer-placeholder-shown:top-1 peer-placeholder-shown:text-base peer-focus:text-xs peer-focus:-top-4'
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
      className={`absolute left-0 text-gray-600 cursor-text transition-all ${
        formData.otp
          ? 'text-xs -top-4'
          : 'top-1 text-base peer-placeholder-shown:top-1 peer-placeholder-shown:text-base peer-focus:text-xs peer-focus:-top-4'
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
              {/* <div className="text-center mt-auto flex justify-center items-center space-x-2">
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
              </div> */}
              <div className="text-center mt-auto flex justify-center items-center space-x-2">
      <p className="text-gray-600">Already have an account?</p>
      <button
        type="button" // Prevent form submission
        onClick={handleOpen} // Trigger navigation to the login page
        className="text-blue-500 hover:underline"
      >
        Login
      </button>
    </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneNumberReg;
