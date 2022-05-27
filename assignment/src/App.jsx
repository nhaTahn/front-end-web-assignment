import React from 'react';
import { NoMatch } from './no-match'
import { Routes, Route, Outlet, Link } from "react-router-dom";

import { Footer, Navbar } from './containers'

import { Home, About, Products } from './pages'

import './App.css';


export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/about" element={<About/>} />
          
          <Route path="*" element={<NoMatch/>} />
        </Route>
      </Routes>
  );
}

function Layout(){
  return (
    <div>
      <Navbar />

      <Outlet />
      <Footer />
    </div>
  );
}