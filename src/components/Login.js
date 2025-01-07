
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import LoginImage from '../assets/logo/Login_1.png'; // Update the path to your image
// import { jwtDecode } from 'jwt-decode';

// const Login = ({ onClose }) => {
//   const [formData, setFormData] = useState({
//     Email: '',
//     Password: '',
//   });
//   const [errors, setErrors] = useState({});
//   const [loginError, setLoginError] = useState('');
//   const navigate = useNavigate(); // Initialize the useNavigate hook

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [name]: '',
//     }));
//     setLoginError('');
//   };

//   const validateForm = () => {
//     let valid = true;
//     let errors = {};

//     if (!formData.Email) {
//       errors.Email = 'Enter your email';
//       valid = false;
//     }

//     if (!formData.Password) {
//       errors.Password = 'Enter your password';
//       valid = false;
//     }

//     setErrors(errors);
//     return valid;
//   };

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   // Check if the form is valid
//   if (!validateForm()) {
//     return;
//   }

//   try {
//     // Send login request to the server
//     const response = await fetch('https://electronic-ecommerce.onrender.com/api/customerLogin', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     });
//     const data = await response.json();

//     // Check if the response is successful
//     if (response.ok) {
//       const { token } = data;

//       // Decode the JWT token to get the payload
//       const decodedToken = jwtDecode(token);

//       // Store the JWT token and the decoded customerId, addressId in localStorage
//       localStorage.setItem('jwtToken', data.token);
//       localStorage.setItem('customerId', decodedToken.id);
//       console.log(decodedToken);
//       // localStorage.setItem('addressId', decodedToken.AddressID);

//       // Navigate to the home page
//       navigate('/home');

//       // Close the login modal (if needed)
//       onClose();
//     } else {
//       console.error('Login failed');
//       setLoginError('Please check your email and password.');
//     }
//   } catch (error) {
//     console.error('An error occurred:', error);
//     setLoginError('An error occurred. Please try again later.');
//   }
// };

  

//   return (
//     <div>
//       <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
//         <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
//           <button
//             onClick={onClose}
//             className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//           <div
//             className="bg-cover bg-full h-32 rounded-t-lg"
//             style={{ backgroundImage: `url(${LoginImage})` }}
//           >
//             <h2 className="text-2xl font-bold text-white text-center py-8">Login</h2>
//           </div>
//           <form className="mt-6" onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="block text-gray-700 mb-2" htmlFor="email">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="Email"
//                 value={formData.Email}
//                 onChange={handleChange}
//                 className="border px-4 py-2 w-full rounded"
//                 placeholder="Enter your email"
//               />
//               {errors.Email && (
//                 <p className="text-red-500 text-sm mt-1">{errors.Email}</p>
//               )}
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 mb-2" htmlFor="password">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 name="Password"
//                 value={formData.Password}
//                 onChange={handleChange}
//                 className="border px-4 py-2 w-full rounded"
//                 placeholder="Enter your password"
//               />
//               {errors.Password && (
//                 <p className="text-red-500 text-sm mt-1">{errors.Password}</p>
//               )}
//             </div>
//             {loginError && (
//               <p className="text-red-500 text-sm mt-2 text-center">{loginError}</p>
//             )}
//             <button
//               type="submit"
//               className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded w-full"
//             >
//               Login
//             </button>
//             <div className="text-center mt-4">
//               <p className="text-gray-600">or</p>
//               <button
//                 onClick={onClose}
//                 className="text-blue-500 hover:underline mt-2"
//               >
//                 Continue as Guest
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import LoginImage from '../assets/logo/Login_1.png'; 
import { jwtDecode } from 'jwt-decode';
import LoginImage from '../assets/Login/login_img.png';
import RegisterForm from "../Component/phoneregistration";
const Login = ({ onClose }) => {
  const [formData, setFormData] = useState({
    Email: '',
    Password: '',
  });
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [registerOpen, setRegisterOpen] = useState(false);
  const handleRegisterOpen = () => setRegisterOpen(true);
  const handleRegisterClose = () => setRegisterOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
    setLoginError('');
  };

  const validateForm = () => {
    let valid = true;
    let errors = {};

    if (!formData.Email) {
      errors.Email = 'Enter your email';
      valid = false;
    }

    if (!formData.Password) {
      errors.Password = 'Enter your password';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  // Check if the form is valid
  if (!validateForm()) {
    return;
  }

  try {
    // Send login request to the server
    const response = await fetch('https://electronic-ecommerce.onrender.com/api/customerLogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();

    // Check if the response is successful
    if (response.ok) {
      const { token } = data;

      // Decode the JWT token to get the payload
      const decodedToken = jwtDecode(token);

      // Store the JWT token and the decoded customerId, addressId in localStorage
      localStorage.setItem('jwtToken', data.token);
      localStorage.setItem('customerId', decodedToken.id);
      console.log(decodedToken);
      // localStorage.setItem('addressId', decodedToken.AddressID);

      // Navigate to the home page
      navigate('/home');

      // Close the login modal (if needed)
      onClose();
      onClose();
    } else {
      console.error('Login failed');
      setLoginError('Please check your email and password.');
    }
  } catch (error) {
    console.error('An error occurred:', error);
    setLoginError('An error occurred. Please try again later.');
  }
};

  

  return (
   
<div>
  <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
    <div className="p-6 w-full max-w-3xl h-[80vh] relative flex">
      {/* Left Section: Image */}
      <div className="w-1/2 flex flex-col justify-between bg-blue-500">
        <h2 className="text-2xl font-bold text-white ml-6 py-8">
          Login
        </h2>
        <p className="text-xl text-gray-200 ml-6 mr-6 -mt-36">
  Get access to your Orders, Wishlist, and Recommendations
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

       
        <form className="flex flex-col h-full mt-6">
  <div className="mb-4 mt-10">
    <div className="relative">
      <input
        type="email"
        id="email"
        name="Email"
        value={formData.Email}
        onChange={handleChange}
        className="border-b py-1 focus:outline-none focus:border-blue-600 focus:border-b-2 transition-all peer w-full focus:w-full focus:max-w-lg"
        placeholder=" "
        autoComplete="off"
      />
      <label
        htmlFor="email"
        className={`absolute left-0 top-1 text-gray-600 cursor-text transition-all ${
          formData.Email ? 'text-xs -top-4' : 'peer-focus:text-xs peer-focus:-top-4'
        }`}
      >
        Enter Email
      </label>
    </div>
    {errors.Email && <p className="text-red-500 text-sm mt-1">{errors.Email}</p>}
  </div>

  <div className="mb-4 mt-4">
    <div className="relative">
      <input
        type="password"
        id="password"
        name="Password"
        value={formData.Password}
        onChange={handleChange}
        className="border-b py-1 focus:outline-none focus:border-blue-600 focus:border-b-2 transition-all peer w-full focus:w-full focus:max-w-lg"
        placeholder=" "
        autoComplete="off"
      />
      <label
        htmlFor="password"
        className={`absolute left-0 top-1 text-gray-600 cursor-text transition-all ${
          formData.Password ? 'text-xs -top-4' : 'peer-focus:text-xs peer-focus:-top-4'
        }`}
      >
        Enter Password
      </label>
    </div>
    {errors.Password && <p className="text-red-500 text-sm mt-1">{errors.Password}</p>}
  </div>

  {loginError && (
    <p className="text-red-500 text-sm mt-2 text-center">{loginError}</p>
  )}

  <div className="flex flex-col items-center w-full">
  <a href="/forgot-password" className="text-orange-600 text-sm mb-2 self-end">Forgot Password?</a>
  <button
    type="submit"
    className="bg-orange-600 text-white px-4 py-2 rounded w-full mt-4"
    onClick={handleSubmit}
  >
    Login
  </button>
</div>



  {/* New Customer Section */}
  <div className="text-center mt-auto flex justify-center items-center space-x-2 mb-4">
    <p className="text-gray-600">New Customer?</p>
    <button
      onClick={handleRegisterOpen}
      className="text-blue-500 hover:underline"
    >
      Create an account
    </button>
    {registerOpen && (
      <RegisterForm isOpen={registerOpen} onClose={handleRegisterClose} />
    )}
  </div>
</form>

      </div>
    </div>
  </div>
</div>

  );
};

export default Login;
