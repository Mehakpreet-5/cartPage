// import React, { useEffect, useState } from 'react';
// import { fetchOrders } from '../../services/api';

// const AdminOrders = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const fetchOrderData = async () => {
//       try {
//         const data = await fetchOrders();
//         setOrders(data);
//       } catch (error) {
//         console.error('Error fetching orders:', error);
//       }
//     };

//     fetchOrderData();
//   }, []);

//   return (
//     <div className='flex'>
//       <div className='ml-16 mt-28'>
//         <h1 className='text-4xl fontt'>Admin Orders</h1>
//         <div className='mt-10'>
//           <table className='min-w-full divide-y divide-gray-200'>
//             <thead className='bg-gray-50'>
//               <tr>
//                 <th className='px-6 py-3 text-left font-medium text-orange-500 tracking-wider'>Order ID</th>
//                 <th className='px-6 py-3 text-left font-medium text-orange-500 tracking-wider'>User</th>
//                 <th className='px-6 py-3 text-left font-medium text-orange-500 tracking-wider'>Items</th>
//                 <th className='px-6 py-3 text-left font-medium text-orange-500 tracking-wider'>Total</th>
//                 <th className='px-6 py-3 text-left font-medium text-orange-500 tracking-wider'>Status</th>
//               </tr>
//             </thead>
//             <tbody className='bg-white divide-y divide-gray-200'>
//               {orders.map(order => (
//                 <tr key={order._id}>
//                   <td className='px-6 py-4 whitespace-nowrap'>{order._id}</td>
//                   <td className='px-6 py-4 whitespace-nowrap'>{order.userId.username}</td>
//                   <td className='px-6 py-4 whitespace-nowrap'>
//                     {order.items.map(item => (
//                       <div key={item.name}>
//                         {item.name} - ${item.price} x {item.quantity}
//                       </div>
//                     ))}
//                   </td>
//                   <td className='px-6 py-4 whitespace-nowrap'>${order.totalPrice.toFixed(2)}</td>
//                   <td className='px-6 py-4 whitespace-nowrap'>{order.status}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminOrders;


// import React, { useEffect, useState } from 'react';
// import { getOrders } from '../../services/api'; // Implement getOrders in your API service

// const AdminOrders = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const data = await getOrders();
//         setOrders(data);
//       } catch (error) {
//         console.error('Error fetching orders:', error);
//       }
//     };

//     fetchOrders();
//   }, []);

//   return (
//     <div>
//       <h1>Admin Orders</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Order ID</th>
//             <th>Items</th>
//             <th>Total</th>
//             <th>Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map(order => (
//             <tr key={order._id}>
//               <td>{order._id}</td>
//               <td>
//                 {order.items.map(item => (
//                   <div key={item.name}>{item.name} - {item.quantity}</div>
//                 ))}
//               </td>
//               <td>${order.total.toFixed(2)}</td>
//               <td>{new Date(order.createdAt).toLocaleString()}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminOrders;


import React, { useEffect, useState } from 'react';
import { getOrders } from '../../services/api'; // Implement getOrders in your API service

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getOrders();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h1>Admin Orders</h1>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Items</th>
            <th>Total</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>
                {order.items.map(item => (
                  <div key={item.name}>{item.name} - {item.quantity}</div>
                ))}
              </td>
              <td>${order.total.toFixed(2)}</td>
              <td>{new Date(order.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminOrders;
