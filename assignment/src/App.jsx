import React from 'react';
import { NoMatch } from './no-match'
import { Routes, Route, Outlet, Link } from "react-router-dom";

import { Home, Products, About  } from './containers';

import './App.css';


export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          {/* <Route path="/products" element={<Products/>} /> */}
          <Route path="*" element={<NoMatch/>} />
        </Route>
      </Routes>
  );
}

function Layout(){
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Products">Products</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}