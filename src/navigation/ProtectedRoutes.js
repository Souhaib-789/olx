import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
return <Navigate to="/" />
// return localStorage.getItem("uid") ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoutes