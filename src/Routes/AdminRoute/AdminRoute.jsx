import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function AdminRoute({ children }) {
    const location = useLocation();
    const { isLoggedIn, role } = useAuth();
    const isAdmin = role === 'admin';

    if (isLoggedIn && isAdmin) return children;

    return <Navigate to="/login" state={{ from: location }} replace />;
}

export default AdminRoute;
