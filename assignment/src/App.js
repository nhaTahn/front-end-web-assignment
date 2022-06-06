import React from 'react';
import { NoMatch } from './no-match'
import { Routes, Route, Outlet} from "react-router-dom";

import { Footer, Navbar } from './containers'
import { Home, Contact, Products, Login, SignUp, DK, AdminPage } from './pages'
import { AppProvider } from './utils/contextControl'
import './App.css';


export default function App() {
  return (
      <AppProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/>} />
            <Route path="/product" element={<Products/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/sign_in" element={<Login />} />
            <Route path="/sign_up" element={<SignUp/>} />
            <Route path="dieu-khoan" element={<DK />} />
            <Route path="/admin" element={<AdminPage />}/>
           
            <Route path="*" element={<NoMatch/>} />
          </Route>
        </Routes>
      </AppProvider>
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