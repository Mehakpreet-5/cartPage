

// import React from 'react';
// import Signup from '../pages/signup';
// // import 'tailwindcss/tailwind.css';

// const Loginn = () => {

//     // const open4 = ()=>{
//     //     const model = document.getElementById('my_modal_4')
//     //     if(model){
//     //       model.showModal();
//     //     }
      
//     //       }
      

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 to-blue-200">
//       <div className="w-full max-w-xs">
//         <div className="relative z-10 text-center p-10 bg-black bg-opacity-50 rounded-lg shadow-lg">
         
//           <form className="login-form" method="post">
//             <h2 className="text-white mb-6 text-3xl font-semibold">Login</h2>
//             <input 
//               className="w-full p-2 mb-4 text-sm text-white bg-transparent border-b border-white outline-none"
//               type="Email" 
//               placeholder="Email" 
//               required="true"
//             />
//             <input 
//               className="w-full p-2 mb-4 text-sm text-white bg-transparent border-b border-white outline-none"
//               type="password" 
//               placeholder="Password" 
//               required ="true"
//             />
//             <a className="btn relative inline-block px-5 py-3 mt-4 text-sm font-semibold text-cyan-500 bg-transparent border-0 outline-none overflow-hidden transition-all duration-500" href="#">
           
//               Log in
//             </a>
//             <p className="message mt-4 text-sm text-gray-400 ">Not registered? <a className="text-cyan-500" href="#"> <Signup/></a></p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Loginn;




// import React from 'react';
// import Signup from './signup';

// const Loginn = () => {

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   return ( <>
//     <div className="w-full min-h-screen bg-gradient-to-r from-pink-300 to-blue-200">
//       <div className="flex items-center justify-center w- min-h-screen">
//         <div className="w-full max-w-xs">
//           <div className="relative z-10 text-center p-10 bg-black bg-opacity-50 rounded-lg shadow-lg">
//             <form className="login-form" method="post">
//               <h2 className="text-white mb-6 text-3xl font-semibold">Login</h2>
//               <input 
//                 className="w-full p-2 mb-4 text-sm text-white bg-transparent border-b border-white outline-none"
//                 type="email" 
//                 placeholder="Email" 
//                 required
//               />
//               <input 
//                 className="w-full p-2 mb-4 text-sm text-white bg-transparent border-b border-white outline-none"
//                 type="password" 
//                 placeholder="Password" 
//                 required
//               />
//               <a className="btn relative inline-block px-5 py-3 mt-4 text-sm font-semibold text-cyan-500 
//                 bg-transparent border-0 outline-none overflow-hidden transition-all duration-500" href="#">
//                 Log in
//               </a> 
//             </form>
//             <div className='flex justify-center items-center space-x-2'>
//               <p className="message mt-4 text-sm text-gray-400">Not registered?</p>
//               {/* Render Signup component separately */}
//               <div className="text-cyan-500 mt-4">
//                 <Signup />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div> </>
//   );
// }

// export default Loginn;


import React, { useState } from 'react';
import Signup from './signup';
import { useForm } from 'react-hook-form';

const Loginn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        // Handle success (e.g., redirect to a different page)
        console.log('Login successful:', data);
        // Optionally, save user data or token to localStorage/sessionStorage
      } else {
        // Handle error (e.g., show an error message)
        console.error('Login error:', data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-r from-pink-300 to-blue-200">
        <div className="flex items-center justify-center w-full min-h-screen">
          <div className="w-full max-w-xs">
            <div className="relative z-10 text-center p-10 bg-black bg-opacity-50 rounded-lg shadow-lg">
              <form className="login-form" method="post" onSubmit={handleLogin}>
                <h2 className="text-white mb-6 text-3xl font-semibold">Login</h2>
                <input 
                  className="w-full p-2 mb-4 text-sm text-white bg-transparent border-b border-white outline-none"
                  type="email" 
                  placeholder="Email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required = 'true'
                /> <br />
                {errors.EmailRequired && (<span>This field is required</span>)}
                <input 
                  className="w-full p-2 mb-4 text-sm text-white bg-transparent border-b border-white outline-none"
                  type="password" 
                  placeholder="Password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                /> <br />
                {errors.Password && (<span>This field is required</span>)}
                <button type="submit" className="btn relative inline-block px-5 py-3 mt-4 text-sm font-semibold text-cyan-500 
                  bg-transparent border-0 outline-none overflow-hidden transition-all duration-500">
                  Log in
                </button> 
              </form>
              <div className='flex justify-center items-center space-x-2'>
                <p className="message mt-4 text-sm text-gray-400">Not registered?</p>
                <div className="text-cyan-500 mt-4">
                  <Signup />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loginn;
