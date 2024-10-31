


// import React from 'react';
// import { useForm } from 'react-hook-form';
// import api from '../services/api'; // Import the api instance

// function Signup() {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const onSubmit = async (data) => {
//     try {
//       const response = await api.post('/signup', data); // Use the api instance to make the request
//       console.log('Signup successful:', response.data);
//       // Handle success, like redirecting the user
//     } catch (error) {
//       console.error('Signup failed:', error);
//       // Handle the error, e.g., by showing an error message to the user
//     }
//   };

//   return (
//     <>
//       <div>
//         <dialog id="my_modal_4" className="modal">
//           <div className="modal-box w-11/12">
//             <div className='ml-20'>
//               <h1 className='text-2xl text-orange-500'>Signup</h1> <br />
//               <form className='text-black' onSubmit={handleSubmit(onSubmit)}>
//                 <div className="form-group text-lg">
//                   <label htmlFor="username" className='font-bold'>Username:</label> <br />
//                   <input
//                     className='border rounded text-xl s'
//                     type="text"
//                     id="username"
//                     name="username"
//                     {...register('username', { required: 'Username is required' })}
//                   />
//                   {errors.username && <p className="text-red-500">{errors.username.message}</p>}
//                 </div> <br />
//                 <div className="form-group text-lg">
//                   <label htmlFor="email">Email:</label> <br />
//                   <input
//                     className='border rounded text-xl s'
//                     type="email"
//                     id="email"
//                     name="email"
//                     {...register('email', { required: 'Email is required' })}
//                   />
//                   {errors.email && <p className="text-red-500">{errors.email.message}</p>}
//                 </div> <br />
//                 <div className="form-group text-lg">
//                   <label htmlFor="password">Password:</label> <br />
//                   <input
//                     className='border rounded text-xl s'
//                     type="password"
//                     id="password"
//                     name="password"
//                     {...register('password', { required: 'Password is required' })}
//                   />
//                   {errors.password && <p className="text-red-500">{errors.password.message}</p>}
//                 </div> <br />
//                 <div className="modal-action mt-1">
//                   <button type="submit" className='text-bold bg-pink-500 rounded text-white mr-52 py-1 px-2 text-lg'>Sign Up</button>
//                   <button type="button" className="btn mr-4" onClick={() => document.getElementById('my_modal_4').close()}>Close</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </dialog>
//       </div>
//     </>
//   );
// }

// export default Signup;


// import React from 'react';
// import { useForm } from 'react-hook-form';
// import api from '../services/api'; // Import the api instance

// function Signup() {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const onSubmit = async (data) => {
//     console.log("Form Data:", data); // Debugging: Check form data
//     try {
//       const response = await api.post('/signup', data); // Use the api instance to make the request
//       console.log('Signup successful:', response.data);
//       // Handle success, like redirecting the user
//     } catch (error) {
//       console.error('Signup failed:', error.response?.data?.message || error.message);
//       // Handle the error, e.g., by showing an error message to the user
//     }
//   };

//   return (
//     <>
//       <div>
//         <dialog id="my_modal_4" className="modal">
//           <div className="modal-box w-11/12">
//             <div className='ml-20'>
//               <h1 className='text-2xl text-orange-500'>Signup</h1> <br />
//               <form className='text-black' onSubmit={handleSubmit(onSubmit)}>
//                 <div className="form-group text-lg">
//                   <label htmlFor="username" className='font-bold'>Username:</label> <br />
//                   <input
//                     className='border rounded text-xl s'
//                     type="text"
//                     id="username"
//                     name="username"
//                     {...register('username', { required: 'Username is required' })}
//                   />
//                   {errors.username && <p className="text-red-500">{errors.username.message}</p>}
//                 </div> <br />
//                 <div className="form-group text-lg">
//                   <label htmlFor="email">Email:</label> <br />
//                   <input
//                     className='border rounded text-xl s'
//                     type="email"
//                     id="email"
//                     name="email"
//                     {...register('email', { required: 'Email is required' })}
//                   />
//                   {errors.email && <p className="text-red-500">{errors.email.message}</p>}
//                 </div> <br />
//                 <div className="form-group text-lg">
//                   <label htmlFor="password">Password:</label> <br />
//                   <input
//                     className='border rounded text-xl s'
//                     type="password"
//                     id="password"
//                     name="password"
//                     {...register('password', { required: 'Password is required' })}
//                   />
//                   {errors.password && <p className="text-red-500">{errors.password.message}</p>}
//                 </div> <br />
//                 <div className="modal-action mt-1">
//                   <button type="submit" className='text-bold bg-pink-500 rounded text-white mr-52 py-1 px-2 text-lg'>Sign Up</button>
//                   <button type="button" className="btn mr-4" onClick={() => document.getElementById('my_modal_4').close()}>Close</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </dialog>
//       </div>
//     </>
//   );
// }

// export default Signup;



// import React from 'react';
// import { useForm } from 'react-hook-form';
// import api from '../services/api'; // Import the api instance

// function Signup() {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const onSubmit = async (data) => {
//     console.log("Form Data:", data); // Debugging: Check form data in the console
//     try {
//       const response = await api.post('/signup', data); // Use the api instance to make the request
//       console.log('Signup successful:', response.data);
//       // Handle success, like redirecting the user or showing a success message
//     } catch (error) {
//       console.error('Signup failed:', error.response?.data?.message || error.message);
//       // Handle the error, e.g., by showing an error message to the user
//     }
//   };

//   return (
//     <div>
//       <dialog id="my_modal_4" className="modal">
//         <div className="modal-box w-11/12">
//           <div className='ml-20'>
//             <h1 className='text-2xl text-orange-500'>Signup</h1> <br />
//             <form className='text-black'>
//               <div className="form-group text-lg">
//                 <label htmlFor="username" className='font-bold'>Username:</label> <br />
//                 <input
//                   className='border rounded text-xl s'
//                   type="text"
//                   id="username"
//                   name="username"
//                   {...register('username', { required: 'Username is required' })}
//                 />
//                 {errors.username && <p className="text-red-500">{errors.username.message}</p>}
//               </div> <br />
//               <div className="form-group text-lg">
//                 <label htmlFor="email">Email:</label> <br />
//                 <input
//                   className='border rounded text-xl s'
//                   type="email"
//                   id="email"
//                   name="email"
//                   {...register('email', { required: 'Email is required' })}
//                 />
//                 {errors.email && <p className="text-red-500">{errors.email.message}</p>}
//               </div> <br />
//               <div className="form-group text-lg">
//                 <label htmlFor="password">Password:</label> <br />
//                 <input
//                   className='border rounded text-xl s'
//                   type="password"
//                   id="password"
//                   name="password"
//                   {...register('password', { required: 'Password is required' })}
//                 />
//                 {errors.password && <p className="text-red-500">{errors.password.message}</p>}
//               </div> <br />
//               <div className="modal-action mt-1">
//                 <button type="submit" className='text-bold bg-pink-500 rounded text-white mr-52 py-1 px-2 text-lg'
//                  onSubmit={handleSubmit(onSubmit)}>
//                   Sign Up
//                 </button>
//                 <button type="button" className="btn mr-4" onClick={() => document.getElementById('my_modal_4').close()}>
//                   Close
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </dialog>
//     </div>
//   );
// }

// export default Signup;

import React from 'react';
import { useForm } from 'react-hook-form';
import api from '../services/api'; // Import the api instance

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  // const onSubmit = async (data) => {
  //   console.log("Form Data:", data); // Debugging: Check form data in the console
  //   try {
  //    // Use the api instance to make the request
  //     console.log('Signup successful:', response.data);
  //     // Handle success, like redirecting the user or showing a success message
  //   } catch (error) {
  //     console.error('Signup failed:', error.response?.data?.message || error.message);
  //     // Handle the error, e.g., by showing an error message to the user
  //   }
  // };
  // const onSubmit = async (data) => {
  //   console.log("Form Data:", data); // Debugging: Check form data in the console
  //   try {
  //     // Use the api instance to make the request
  //     const response = await api.post('/signup', data); // Ensure this line is correct
  //     console.log('Signup successful:', response.data);
  //     // Handle success, like redirecting the user or showing a success message
  //   } catch (error) {
  //     console.error('Signup failed:', error.response?.data?.message || error.message);
  //     // Handle the error, e.g., by showing an error message to the user
  //   }
  // };
  
  const onSubmit = async (data) => {
    console.log("Form Data:", data); // Debugging: Check form data in the console
    try {
      // Use the api instance to make the request
      const response = await api.post('/api/signup', data); // Adjusted to match the correct backend endpoint
      console.log('Signup successful:', response.data);
      // Handle success, like redirecting the user or showing a success message
    } catch (error) {
      console.error('Signup failed:', error.response?.data?.message || error.message);
      // Handle the error, e.g., by showing an error message to the user
    }
  };
  

  return (
    <div>
         <h3 className="" onClick={()=>document.getElementById('my_modal_4').showModal()}> Sign Up</h3>

      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12">
          <div className='ml-20'>
            <h1 className='text-2xl text-orange-500'>Signup</h1> <br />
            <form className='text-black' onSubmit={handleSubmit(onSubmit)} action="/signup" method="POST">
              <div className="form-group text-lg">
                <label htmlFor="username" className='font-bold'>Username:</label> <br />
                <input
                  className='border rounded text-xl s'
                  type="text"
                  id="username"
                  name="username"
                  autoComplete="username"
                  {...register('username', { required: 'Username is required' })}
                />
                {errors.username && <p className="text-red-500">{errors.username.message}</p>}
              </div> <br />
              <div className="form-group text-lg">
                <label htmlFor="email">Email:</label> <br />
                <input
                  className='border rounded text-xl s'
                  type="email"
                  id="email"
                  name="email"
                   autoComplete="email"
                  {...register('email', { required: 'Email is required' })}
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              </div> <br />
              <div className="form-group text-lg">
                <label htmlFor="password">Password:</label> <br />
                <input
                  className='border rounded text-xl s'
                  type="password"
                  id="password"
                  name="password"
                   autoComplete="password"
                  {...register('password', { required: 'Password is required' })}
                />
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
              </div> <br />
              <div className="modal-action mt-1">
                <button type="submit" className='text-bold bg-pink-500 rounded text-white mr-52 py-1 px-2 text-lg'>
                  Sign Up
                </button>
                <button type="button" className="btn mr-4" onClick={() => document.getElementById('my_modal_4').close()}>
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Signup;
