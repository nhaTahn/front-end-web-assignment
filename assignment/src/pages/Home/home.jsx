import React from "react";
import Cookies from "js-cookie";
import { Navigate } from 'react-router-dom'
import { decode } from 'string-encode-decode'
import { Header } from '../../containers';
import { Card } from '../../components';

export default function Home() {
  if (String(decode(Cookies.get('role'))) === 'admin') return <Navigate  to="/admin-page" />
  return (
    <div>
        <Header/>
        <Card />
    </div>
   
  );
}