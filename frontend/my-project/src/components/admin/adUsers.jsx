

// import React, { useEffect, useState } from 'react';
// import { adUser, deleteUser } from '../../services/api'; // Adjust the path as needed
// import AdminNav from './adminNav';
// const AdminUsers = () => {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         const fetchUsers = async () => {
//             try {
//                 const data = await adUser();
//                 setUsers(data);
//             } catch (error) {
//                 console.error('Error fetching users:', error);
//             }
//         };

//         fetchUsers();
//     }, []);

//     const handleDelete = async (id) => {
//         try {
//             await deleteUser(id);
//             setUsers(users.filter(user => user._id !== id)); // Remove the deleted user from the list
//         } catch (error) {
//             console.error('Error deleting user:', error);
//         }
//     };

//     return (
//         <div className='flex'>
//             <div><AdminNav /></div>

//             <h1 className=' mt-28 ml-16 fontt text-4xl'>Admin Users</h1>
//             <div className='flex justify-center mt-48'>

//                 <div className="flex h-72 ">

//                     <table className='space-x-10'>
//                         <thead >
//                             <tr>
//                                 <th>Username</th>
//                                 <th>Email</th>
//                                 <th>Role</th>
//                                 <th>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {users.map(user => (
//                                 <tr key={user._id}>
//                                     <td>{user.username}</td>
//                                     <td>{user.email}</td>
//                                     <td>{user.role}</td>
//                                     <td>
//                                         <button onClick={() => handleDelete(user._id)}>Delete</button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>


//                 </div>
//             </div>
//         </div>

//     );
// };

// export default AdminUsers;


import React, { useEffect, useState } from 'react';
import { adUser, deleteUser } from '../../services/api'; // Adjust the path as needed
import AdminNav from './adminNav';

const AdminUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await adUser();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteUser(id);
            setUsers(users.filter(user => user._id !== id)); // Remove the deleted user from the list
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <div className='flex '>
            <div><AdminNav /></div>

            <div className='flex-1 mt-28 ml-44'>
                <h1 className='text-5xl font-bold mb-6 fontt'>Admin Users</h1>
                <div className='overflow-x-auto mt-12'>
                    <table className='w-3/5 bg-white border border-gray-200 shadow-md rounded-lg'>
                        <thead className='bg-gray-100 text-gray-600 uppercase text-sm '>
                            <tr>
                                <th className='py-3 px-6 text-left '>Username</th> 
                                <th className='py-3 px-6 text-left'>Email</th>
                                <th className='py-3 px-6 text-left'>Role</th>
                                <th className='py-3 px-6 text-left'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='text-sm text-gray-700'>
                            {users.map(user => (
                                <tr key={user._id} className='hover:bg-gray-50 border border-y-2 border-gray-300'>
                                    <td className='py-3 px-6 '>{user.username}</td>
                                    <td className='py-3 px-6'>{user.email}</td>
                                    <td className='py-3 px-6'>{user.role}</td>
                                    <td className='py-3 px-6'>
                                        <button
                                            onClick={() => handleDelete(user._id)}
                                            className='bg-red-500 bg-opacity-85 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500'
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminUsers;
