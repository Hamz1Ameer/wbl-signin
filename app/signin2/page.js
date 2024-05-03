// "use client";
// import React, { useState } from "react";
// import Link from "next/link";

// export default function SignIn() {
//   // State variables to hold the input values
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // Function to handle email input change
//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   // Function to handle password input change
//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   // Function to handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Here you can perform actions like sending the data to a server
//     console.log("Email:", email);
//     console.log("Password:", password);
//   };

//   return (
//     <section className="relative">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6">
//         <div className="pt-32 pb-12 md:pt-40 md:pb-20">
//           {/* Page header */}
//           <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
//             <h1 className="h1">
//               Welcome back. We exist to make entrepreneurship easier.
//             </h1>
//           </div>

//           {/* Form */}
//           <div className="max-w-sm mx-auto">
//             <form onSubmit={handleSubmit}>
//               <div className="flex flex-wrap -mx-3 mb-4">
//                 <div className="w-full px-3">
//                   <label
//                     className="block text-gray-300 text-sm font-medium mb-1"
//                     htmlFor="email"
//                   >
//                     Email
//                   </label>
//                   <input
//                     id="email"
//                     type="email"
//                     className="form-input w-full text-gray-300"
//                     placeholder="you@yourcompany.com"
//                     value={email}
//                     onChange={handleEmailChange}
//                     required
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-wrap -mx-3 mb-4">
//                 <div className="w-full px-3">
//                   <label
//                     className="block text-gray-300 text-sm font-medium mb-1"
//                     htmlFor="password"
//                   >
//                     Password
//                   </label>
//                   <input
//                     id="password"
//                     type="password"
//                     className="form-input w-full text-gray-300"
//                     placeholder="Password (at least 10 characters)"
//                     value={password}
//                     onChange={handlePasswordChange}
//                     required
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-wrap -mx-3 mb-4">
//                 <div className="w-full px-3">
//                   <div className="flex justify-between">
//                     <label className="flex items-center">
//                       <input type="checkbox" className="form-checkbox" />
//                       <span className="text-gray-400 ml-2">
//                         Keep me signed in
//                       </span>
//                     </label>
//                     <Link
//                       href="/reset-password"
//                       className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
//                     >
//                       Forgot Password?
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex flex-wrap -mx-3 mt-6">
//                 <div className="w-full px-3">
//                   <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">
//                     Sign in
//                   </button>
//                 </div>
//               </div>
//             </form>
//             <div className="text-gray-400 text-center mt-6">
//               Don’t you have an account?{" "}
//               <Link
//                 href="/signup"
//                 className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
//               >
//                 Sign up
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function SignIn() {
  // State variables to hold the input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle email input change
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Function to handle password input change
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  // Function to handle form submission
  const User = require("./user.js");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Here you can perform actions like sending the data to a server
    console.log("Email:", email);
    console.log("Password:", password);

    try {
      // Create a new user instance with email and password
      const newUser = new User({ email, password });

      // Save the user to the database
      const savedUser = await newUser.save();

      console.log("User saved successfully:", savedUser);
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">
              Welcome back. We exist to make entrepreneurship easier.
            </h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-300 text-sm font-medium mb-1"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-input w-full text-gray-300"
                    placeholder="you@yourcompany.com"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-300 text-sm font-medium mb-1"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="form-input w-full text-gray-300"
                    placeholder="Password (at least 10 characters)"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <div className="flex justify-between">
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="text-gray-400 ml-2">
                        Keep me signed in
                      </span>
                    </label>
                    <Link
                      href="/reset-password"
                      className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">
                    Sign in
                  </button>
                </div>
              </div>
            </form>
            <div className="text-gray-400 text-center mt-6">
              Don’t you have an account?{" "}
              <Link
                href="/signup"
                className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
