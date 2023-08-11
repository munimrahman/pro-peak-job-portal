import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function PublicRoute({ children }) {
    const isLoggedIn = useAuth();
    const location = useLocation();
    const path = location?.state?.from?.pathname || '/';

    return !isLoggedIn ? children : <Navigate to={path} />;
}

export default PublicRoute;
