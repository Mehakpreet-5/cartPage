
// adminRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const authController = require('../controllers/authController')

// User data
router.get('/admin/users', async (req, res) => {
    try {
      // Fetch users from the database
      const users = await User.find({}, 'username email role'); 
      res.json(users); 
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  });

  router.delete('/admin/users/:id', async (req, res) => {
    try {
      const userId = req.params.id;
      const result = await User.findByIdAndDelete(userId);
  
      if (!result) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  });

  
  //Order data

  const Order = require('../models/orderSchema');
  
  // Route to add an order
  // router.post('/orders', async (req, res) => {
  //   try {
  //     const { items, totalPrice, userId } = req.body;
  //     const newOrder = new Order({ items, totalPrice, userId });
  //     await newOrder.save();
  //     res.status(201).json(newOrder);
  //   } catch (error) {
  //     res.status(500).json({ message: 'Server error' });
  //   }
  // });
  
  // // Route to get all orders (for admin)
  // router.get('/admin/orders', async (req, res) => {
  //   try {
  //     const orders = await Order.find().populate('userId', 'username email');
  //     res.json(orders);
  //   } catch (error) {
  //     res.status(500).json({ message: 'Server error' });
  //   }
  // });
  

  // routes/adminRoutes.js
  router.get('/admin/orders', async (req, res) => {
    try {
      const orders = await Order.find(); // Adjust query as needed
      res.json(orders);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  });

module.exports = router;
