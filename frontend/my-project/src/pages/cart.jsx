

import React, { useContext } from 'react';
import CartContext from './CartContext';
import { placeOrder } from '../services/api.js';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  // Calculate the total price of the items in the cart
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);


  //admin order page


  const handleCheckout = async () => {
    try {
      await placeOrder({ items: cartItems, total });
      console.log('Order placed successfully');
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };


  return (

    <div className="p-4 mt-28 mx-7 ">
      <h1 className="text-6xl mb-4 fontt">Your Cart</h1>
      <div className='flex justify-center items-center space-x-16'>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="overflow-x-auto mt-12 play flex text-xl w-3/5">
            <table className="min-w-full divide-y divide-gray-200 ">
              <thead className="bg-gray-50 play text-2xl items-center">
                <tr>
                  <th className="px-6 py-3 text-left  font-medium text-orange-500  tracking-wider">Image</th>
                  <th className="px-6 py-3 text-left  font-medium text-orange-500  tracking-wider">Item</th>
                  <th className="px-6 py-3 text-left  font-medium text-orange-500  tracking-wider">Price</th>
                  <th className="px-6 py-3 text-left  font-medium text-orange-500  tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <img src={item.image} alt={item.name} className="w-20 h-20 rounded-full" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 ">{item.name}</td>
                    {/* <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 ">{item.quantity}</td> */}
                    <td className="px-6 py-4 whitespace-nowrap  text-gray-500">${item.price.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                      <button
                        onClick={() => removeFromCart(index)}
                        className="px-4 py-2 text-black rounded hover:bg-red-300"
                      >
                        X
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>

        )}

        <div className='h-96 w-64 bg-yellow-100 bg-opacity-20 play items-center'>
          <div className='m-9 space-y-2'>
            <h1 className='mt-4 fontt text-orange-500 text-4xl'>Total</h1>
            <h2 className="text-xl ">Total: ${total.toFixed(2)}</h2>
            <h3 className='text-xl '> Delivery</h3>
            <h4 className='text-base '> Standard Delivery (Free)   </h4>
            {/* <button className='bg-orange-500 text-white w-36 p-2 cursor-pointer mt-3'> Checkout</button> */}
            <button onClick={handleCheckout} className='bg-orange-500 text-white w-36 p-2 cursor-pointer mt-3'>Checkout</button>
            <h2 className='text-xl'> We Accept</h2>
          </div> </div>
      </div>
    </div>
  );
};

export default Cart;
