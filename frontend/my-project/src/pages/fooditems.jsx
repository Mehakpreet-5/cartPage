// import React from 'react';
// import foodItems from './foodData.js'; // Adjust the path as necessary

// const FoodItems = () => {
//   const handleAddToOrder = (item) => {
//     // Handle adding the item to the order
//     console.log(`${item.name} added to order`);
//   };

//   const renderFoodItem = (item, index) => (
//     <div key={index} className="w-24">
//       <img 
//         src={item.image} 
//         alt={item.name} 
//         className='btn btn-ghost btn-circle avatar h-20 w-20 
//        bg-orange-500 shadow-[0_0_15px_1px_rgba(247,161,91,0.973)]' 
//       />
//       <h2 className="card-title">{item.name}</h2>
//     </div>
//   );

//   const renderMenuItem = (item, index) => (
//     <div key={index} className="m-10 ml-20 border rounded shadow-2xl cursor-pointer
//      transition transform duration-300 hover:scale-105 active:scale-110">
//       <figure className="relative">
//         <img src={item.image} alt={item.name} className='h-48 w-44 border rounded 
//         shadow-2xl justify-center flex m-2 ml-6' />
//         {/* Add to order button */}
//         <button 
//           onClick={() => handleAddToOrder(item)}
//           className="absolute bottom-3 right-3 w-8 h-7 bg-white
//            text-orange-500 text-2xl rounded-full flex items-center 
//            justify-center hover:bg-orange-500 hover:text-white transition-colors 
//            duration-300 mr-5"
//         >
//           +
//         </button>
//       </figure>
//       <div className="ml-5 mr-4 m-2">
//         <div className='flex space-x-14'>
//           <h2 className="text-2xl">{item.name}</h2>
//           {/* Rating */}
//           <div className="rating rating-xs mt-3">
//             <input type="radio" name={`rating-${index}`} className="mask mask-star-2 bg-orange-400" />
//             <input name={`rating-${index}`} type="radio" className="mask mask-star-2 bg-orange-400" defaultChecked />
//             <input type="radio" name={`rating-${index}`} className="mask mask-star-2 bg-orange-400" />
//             <input type="radio" name={`rating-${index}`} className="mask mask-star-2 bg-orange-400" />
//             <input type="radio" name={`rating-${index}`} className="mask mask-star-2 bg-orange-400" />
//           </div>
//         </div>
//         <p className='text-xs mt-2'>If a dog chews shoes whose shoes does he choose?</p>
//         <div className="card-actions justify-end">
//           <h1 className='text-orange-500'>$10</h1>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <>
//       <div className='flex justify-center space-x-12 '>
//         {foodItems.map(renderFoodItem)}
//       </div>

//       <br /> <br /> 

//       {/* Menu items section */}
//       <div className=''> 
//         <h1 className='font-bold text-2xl m-8'>Types of these categories</h1> 
//         <br /> 
//         <div className='grid grid-cols-4 gap-4 justify-center border rounded shadow-xl'>
//           {foodItems.map(renderMenuItem)}
//         </div>
//       </div>
//     </>
//   );
// }

// export default FoodItems;


//right code

// import React, { useState } from 'react';
// import Dosa from '../assets/download..5.jpg';
// import './font.css'
// // import Footer from '../footer';

// // Dummy image paths for demonstration
// const categories = {
//   desserts: Dosa,
//   iceCream: Dosa,
//   northIndian: Dosa,
//   chinese: Dosa,
//   korean: Dosa,
//   italian: Dosa,
//   mexican: Dosa,
//   japanese: Dosa,
//   mediterranean: Dosa,
// };

// const foodItems = {
//   desserts: [
//     { name: 'Chocolate Cake', image: Dosa, price: 5 },
//     { name: 'Cheesecake', image: Dosa, price: 6 },
//     { name: 'Brownies', image: Dosa, price: 4 },
//     { name: 'Brownies', image: Dosa, price: 4 },
//   ],
//   iceCream: [
//     { name: 'Vanilla Ice Cream', image: Dosa, price: 3 },
//     { name: 'Chocolate Ice Cream', image: Dosa, price: 3 },
//     { name: 'Strawberry Ice Cream', image: Dosa, price: 3 },
//   ],
//   northIndian: [
//     { name: 'Paneer Tikka', image: Dosa, price: 8 },
//     { name: 'Butter Chicken', image: Dosa, price: 10 },
//     { name: 'Naan', image: Dosa, price: 2 },
//   ],
//   chinese: [
//     { name: 'Spring Rolls', image: Dosa, price: 5 },
//     { name: 'Fried Rice', image: Dosa, price: 7 },
//     { name: 'Sweet and Sour Chicken', image: Dosa, price: 9 },
//   ],
//   korean: [
//     { name: 'Bibimbap', image: Dosa, price: 12 },
//     { name: 'Kimchi', image: Dosa, price: 4 },
//     { name: 'Korean BBQ', image: Dosa, price: 15 },
//   ],
//   italian: [
//     { name: 'Spaghetti Carbonara', image: Dosa, price: 14 },
//     { name: 'Lasagna', image: Dosa, price: 12 },
//     { name: 'Margherita Pizza', image: Dosa, price: 10 },
//   ],
//   mexican: [
//     { name: 'Tacos', image: Dosa, price: 6 },
//     { name: 'Burritos', image: Dosa, price: 8 },
//     { name: 'Guacamole', image: Dosa, price: 5 },
//   ],
//   japanese: [
//     { name: 'Sushi', image: Dosa, price: 15 },
//     { name: 'Ramen', image: Dosa, price: 12 },
//     { name: 'Tempura', image: Dosa, price: 14 },
//   ],
//   mediterranean: [
//     { name: 'Falafel', image: Dosa, price: 7 },
//     { name: 'Hummus', image: Dosa, price: 5 },
//     { name: 'Gyro', image: Dosa, price: 8 },
//   ],
// };

// const Categories = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//   };

//   const displayedItems = selectedCategory ? foodItems[selectedCategory] : Object.values(foodItems).flat();

  
//   return (
//     <div className='flex flex-col items-center ml- play'>

//       {/* Categories Section */}
//       <div className="flex flex-wrap justify-center gap-12 mt- mb-8">
//         {Object.keys(categories).map((category) => (
//           <div
//             key={category}
//             className="flex flex-col items-center cursor-pointer"
//             onClick={() => handleCategoryClick(category)}
//           >
//             <img
//               src={categories[category]}
//               alt={category}
//               className='h-20 w-20 rounded-full bg-orange-500 transition-transform hover:scale-95'
//               style={{ boxShadow: '0 0 15px rgba(255, 165, 0, 0.8)' }}
//             />

//             <span className="mt-2 text-lg font-medium">{category}</span>
//           </div>
//         ))}
//       </div>
//       <br />
//       <br />
//       {/* Food Items Section */}
//       <div className='flex flex-col items-center w-full p-4'>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-7">
//           {displayedItems.map((item, index) => (
//             <div key={index} className="w-56 border rounded shadow-lg transition-transform transform hover:scale-105 flex flex-col items-center">
//               <button className='absolute bottom-20 right-6 text-2xl bg-slate-100 border rounded-full w-8'> + </button>
//               <img src={item.image} alt={item.name} className='w-48 h-48 object-cover border-b rounded-t mt-2' />

//               <div className="p-4 flex flex-col items-center w-full">
//                 <div className="flex justify-between items-center w-full mb-2">
//                   <h2 className="text-xl text-gray-900">{item.name}</h2>
//                   <h1 className='text-orange-500 text-lg'>${item.price}</h1>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* <div className='w-full p-7'>
//         <Footer />
//       </div> */}
//     </div>
//   );
// };

// export default Categories;




// import React, { useState } from 'react';
// import Dosa from '../assets/download..5.jpg';
// import './font.css';
// import Cart from './cart';
// // Dummy image paths for demonstration
// const categories = {
//   desserts: Dosa,
//   iceCream: Dosa,
//   northIndian: Dosa,
//   chinese: Dosa,
//   korean: Dosa,
//   italian: Dosa,
//   mexican: Dosa,
//   japanese: Dosa,
//   mediterranean: Dosa,
// };

// const foodItems = {
//   desserts: [
//     { name: 'Chocolate Cake', image: Dosa, price: 5 },
//     { name: 'Cheesecake', image: Dosa, price: 6 },
//     { name: 'Brownies', image: Dosa, price: 4 },
//   ],
//   iceCream: [
//     { name: 'Vanilla Ice Cream', image: Dosa, price: 3 },
//     { name: 'Chocolate Ice Cream', image: Dosa, price: 3 },
//     { name: 'Strawberry Ice Cream', image: Dosa, price: 3 },
//   ],
//   northIndian: [
//         { name: 'Paneer Tikka', image: Dosa, price: 8 },
//         { name: 'Butter Chicken', image: Dosa, price: 10 },
//         { name: 'Naan', image: Dosa, price: 2 },
//       ],
//       chinese: [
//         { name: 'Spring Rolls', image: Dosa, price: 5 },
//         { name: 'Fried Rice', image: Dosa, price: 7 },
//         { name: 'Sweet and Sour Chicken', image: Dosa, price: 9 },
//       ],
//       korean: [
//         { name: 'Bibimbap', image: Dosa, price: 12 },
//         { name: 'Kimchi', image: Dosa, price: 4 },
//         { name: 'Korean BBQ', image: Dosa, price: 15 },
//       ],
//       italian: [
//         { name: 'Spaghetti Carbonara', image: Dosa, price: 14 },
//         { name: 'Lasagna', image: Dosa, price: 12 },
//         { name: 'Margherita Pizza', image: Dosa, price: 10 },
//       ],
//       mexican: [
//         { name: 'Tacos', image: Dosa, price: 6 },
//         { name: 'Burritos', image: Dosa, price: 8 },
//         { name: 'Guacamole', image: Dosa, price: 5 },
//       ],
//       japanese: [
//         { name: 'Sushi', image: Dosa, price: 15 },
//         { name: 'Ramen', image: Dosa, price: 12 },
//         { name: 'Tempura', image: Dosa, price: 14 },
//       ],
//       mediterranean: [
//         { name: 'Falafel', image: Dosa, price: 7 },
//         { name: 'Hummus', image: Dosa, price: 5 },
//         { name: 'Gyro', image: Dosa, price: 8 },
//       ],
//     };
//   // Add other categories as needed


// const Categories = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null);

  
//   const [cartItems, setCartItems] = useState([]);

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//   };

//   const addToCart = (item) => {
//     setCartItems([...cartItems, item]);
//   };
//   const removeFromCart = (index) => {
//     setCartItems(cartItems.filter((_, i) => i !== index));
//   };

//   const displayedItems = selectedCategory ? foodItems[selectedCategory] : Object.values(foodItems).flat();

//   return (
//     <div className='flex flex-col items-center'>
//       {/* Categories Section */}
//       <div className="flex flex-wrap justify-center gap-12 mt-8 mb-8">
//         {Object.keys(categories).map((category) => (
//           <div
//             key={category}
//             className="flex flex-col items-center cursor-pointer"
//             onClick={() => handleCategoryClick(category)}
//           >
//             <img
//               src={categories[category]}
//               alt={category}
//               className='h-20 w-20 rounded-full bg-orange-500 transition-transform hover:scale-95'
//               style={{ boxShadow: '0 0 15px rgba(255, 165, 0, 0.8)' }}
//             />
//             <span className="mt-2 text-lg font-medium">{category}</span>
//           </div>
//         ))}
//       </div>

//       {/* Food Items Section */}
//       <div className='flex flex-col items-center w-full p-4'>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-7">
//           {displayedItems.map((item, index) => (
//             <div key={index} className="relative w-56 border rounded shadow-lg transition-transform transform hover:scale-105 flex flex-col items-center">
//               <img src={item.image} alt={item.name} className='w-48 h-48 object-cover border-b rounded-t mt-2' />
//               <button
//                 onClick={() => addToCart(item)}
//                 className='absolute bottom-3 right-3 text-2xl bg-slate-100 border rounded-full 
//                 w-8 h-8 flex items-center justify-center text-gray-700 hover:bg-orange-500 hover:text-white transition-colors'
//               > 
//                 +
//               </button>
//               {/* <Cart cartItems={cartItems} removeFromCart={removeFromCart} /> */}
//               <div className="p-4 flex flex-col items-center w-full">
//                 <div className="flex justify-between items-center w-full mb-2">
//                   <h2 className="text-xl text-gray-900">{item.name}</h2>
//                   <h1 className='text-orange-500 text-lg'>${item.price}</h1>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Cart Items Section */}
     
//        <Cart cartItems={cartItems} removeFromCart={removeFromCart} /> 
//        {/* <Cart cartItems={cartItems} removeFromCart={removeFromCart} />  */}
//     </div>
//   );
// };

// export default Categories;












// import React, { useState } from 'react';
// import Dosa from '../assets/download..5.jpg';
// import './font.css';
// import Cart from './cart';

// const categories = {
//   desserts: Dosa,
//   iceCream: Dosa,
//   northIndian: Dosa,
//   chinese: Dosa,
//   korean: Dosa,
//   italian: Dosa,
//   mexican: Dosa,
//   japanese: Dosa,
//   mediterranean: Dosa,
// };

// const foodItems = {
//   desserts: [
//     { name: 'Chocolate Cake', image: Dosa, price: 5 },
//     { name: 'Cheesecake', image: Dosa, price: 6 },
//     { name: 'Brownies', image: Dosa, price: 4 },
//   ],
  
//   // Add the rest of the categories here...
// };

// const Categories = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [cartItems, setCartItems] = useState([]);

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//   };

//   const addToCart = (item) => {
//     setCartItems([...cartItems, item]);
//   };

//   const removeFromCart = (index) => {
//     setCartItems(cartItems.filter((_, i) => i !== index));
//   };

//   const displayedItems = selectedCategory ? foodItems[selectedCategory] : Object.values(foodItems).flat();

//   return (
//     <div className="flex flex-col items-center">
//       {/* Categories Section */}
//       <div className="flex flex-wrap justify-center gap-12 mt-8 mb-8">
//         {Object.keys(categories).map((category) => (
//           <div
//             key={category}
//             className="flex flex-col items-center cursor-pointer"
//             onClick={() => handleCategoryClick(category)}
//           >
//             <img
//               src={categories[category]}
//               alt={category}
//               className='h-20 w-20 rounded-full bg-orange-500 transition-transform hover:scale-95'
//               style={{ boxShadow: '0 0 15px rgba(255, 165, 0, 0.8)' }}
//             />
//             <span className="mt-2 text-lg font-medium">{category}</span>
//           </div>
//         ))}
//       </div>

//       {/* Food Items Section */}
//       <div className='flex flex-col items-center w-full p-4'>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-7">
//           {displayedItems.map((item, index) => (
//             <div key={index} className="relative w-56 border rounded shadow-lg transition-transform transform hover:scale-105 flex flex-col items-center">
//               <img src={item.image} alt={item.name} className='w-48 h-48 object-cover border-b rounded-t mt-2' />
//               <button
//                 onClick={() => addToCart(item)}
//                 className='absolute bottom-3 right-3 text-2xl bg-slate-100 border rounded-full 
//                 w-8 h-8 flex items-center justify-center text-gray-700 hover:bg-orange-500 hover:text-white transition-colors'
//               > 
//                 +
//               </button>
//               <div className="p-4 flex flex-col items-center w-full">
//                 <div className="flex justify-between items-center w-full mb-2">
//                   <h2 className="text-xl text-gray-900">{item.name}</h2>
//                   <h1 className='text-orange-500 text-lg'>${item.price}</h1>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Cart Component */}
//       <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
//     </div>
//   );
// };

// export default Categories;


// Categories.jsx
import React, { useState, useContext } from 'react';
import CartContext from './CartContext';
import Dosa from '../assets/download..5.jpg';
import './font.css';

const categories = {
  desserts: Dosa,
  iceCream: Dosa,
  northIndian: Dosa,
  chinese: Dosa,
  korean: Dosa,
  italian: Dosa,
  mexican: Dosa,
  japanese: Dosa,
  mediterranean: Dosa,
};

const foodItems = {
  desserts: [
    { name: 'Chocolate Cake', image: Dosa, price: 5 },
    { name: 'Cheesecake', image: Dosa, price: 6 },
    { name: 'Brownies', image: Dosa, price: 4 },
  ],
  iceCream: [
        { name: 'Vanilla Ice Cream', image: Dosa, price: 3 },
        { name: 'Chocolate Ice Cream', image: Dosa, price: 3 },
        { name: 'Strawberry Ice Cream', image: Dosa, price: 3 },
      ],
      northIndian: [
            { name: 'Paneer Tikka', image: Dosa, price: 8 },
            { name: 'Butter Chicken', image: Dosa, price: 10 },
            { name: 'Naan', image: Dosa, price: 2 },
          ],
          chinese: [
            { name: 'Spring Rolls', image: Dosa, price: 5 },
            { name: 'Fried Rice', image: Dosa, price: 7 },
            { name: 'Sweet and Sour Chicken', image: Dosa, price: 9 },
          ],
          korean: [
            { name: 'Bibimbap', image: Dosa, price: 12 },
            { name: 'Kimchi', image: Dosa, price: 4 },
            { name: 'Korean BBQ', image: Dosa, price: 15 },
          ],
          italian: [
            { name: 'Spaghetti Carbonara', image: Dosa, price: 14 },
            { name: 'Lasagna', image: Dosa, price: 12 },
            { name: 'Margherita Pizza', image: Dosa, price: 10 },
          ],
          mexican: [
            { name: 'Tacos', image: Dosa, price: 6 },
            { name: 'Burritos', image: Dosa, price: 8 },
            { name: 'Guacamole', image: Dosa, price: 5 },
          ],
          japanese: [
            { name: 'Sushi', image: Dosa, price: 15 },
            { name: 'Ramen', image: Dosa, price: 12 },
            { name: 'Tempura', image: Dosa, price: 14 },
          ],
          mediterranean: [
            { name: 'Falafel', image: Dosa, price: 7 },
            { name: 'Hummus', image: Dosa, price: 5 },
            { name: 'Gyro', image: Dosa, price: 8 },
          ],
        };


const Categories = () => {
  const { addToCart } = useContext(CartContext);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const displayedItems = selectedCategory ? foodItems[selectedCategory] : Object.values(foodItems).flat();

  return (
    <div className="flex flex-col items-center">
      {/* Categories Section */}
      <div className="flex flex-wrap justify-center gap-12 mt-8 mb-8">
        {Object.keys(categories).map((category) => (
          <div
            key={category}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => handleCategoryClick(category)}
          >
            <img
              src={categories[category]}
              alt={category}
              className='h-20 w-20 rounded-full bg-orange-500 transition-transform hover:scale-95'
              style={{ boxShadow: '0 0 15px rgba(255, 165, 0, 0.8)' }}
            />
            <span className="mt-2 text-lg font-medium">{category}</span>
          </div>
        ))}
      </div>

      {/* Food Items Section */}
      <div className='flex flex-col items-center w-full p-4'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-7">
          {displayedItems.map((item, index) => (
            <div key={index} className="relative w-56 border rounded shadow-lg transition-transform transform hover:scale-105 flex flex-col items-center">
              <img src={item.image} alt={item.name} className='w-48 h-48 object-cover border-b rounded-t mt-2' />
              <button
                onClick={() => addToCart(item)}
                className='absolute bottom-3 right-3 text-2xl bg-slate-100 border rounded-full 
                w-8 h-8 flex items-center justify-center text-gray-700 hover:bg-orange-500 hover:text-white transition-colors'
              >
                +
              </button>
              <div className="p-4 flex flex-col items-center w-full">
                <div className="flex justify-between items-center w-full mb-2">
                  <h2 className="text-xl text-gray-900">{item.name}</h2>
                  <h1 className='text-orange-500 text-lg'>${item.price}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
