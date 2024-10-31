

import axios from 'axios';

// Create an instance of axios
const api = axios.create({
  baseURL: 'http://localhost:5000', // Adjust this to match your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to handle signup
export const signup = async (data) => {
  try {
    const response = await api.post('/api/signup', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to fetch users
export const adUser = async () => {
  try {
    const response = await api.get('/admin/users'); // No extra parameters needed
    return response.data; // Return the actual data
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    await api.delete(`/admin/users/${id}`);
  } catch (error) {
    throw error;
  }
};



export const placeOrder = async (orderData) => {
  try {
    const response = await api.post('/admin/orders', orderData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getOrders = async () => {
  try {
    const response = await api.get('/admin/orders');
    return response.data;
  } catch (error) {
    throw error;
  }
};


export default api;
