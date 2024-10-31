
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './pages/menu.jsx';
import Cart from './pages/cart.jsx';
import Navbar from './components/navbar.jsx';
import Content from './components/content.jsx';
import Login from './pages/login.jsx';
import Categories from './pages/fooditems.jsx'
import { CartProvider } from './pages/CartContext.jsx';
import Admin from '../src/components/admin/adminNav.jsx';
import AdUsers from './components/admin/adUsers.jsx';
import AdOrder from './components/admin/adOrder.jsx';
function App() {


  return (
    <>
      <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Content />} />
          <Route path='/menu' element={<Menu />} />
             <Route path='/login' element={<Login />} />
          {/* <Route path='/cart' element={<Cart />} /> */}
          {/* <Route path='/admin' element={<Admin />} /> */}
          {/* <Route path="/admin/users" element={<AdUsers/>} /> */}
          {/* <Route path="/admin/orders" element={<AdOrder/>} /> */}
          {/* <Route path='/categories' element={<Categories />} /> */}
        </Routes>

      </Router>
      </CartProvider>
    </>
  );
}

export default App;
