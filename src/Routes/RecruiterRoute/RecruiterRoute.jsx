import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function RecruiterRoute({ children }) {
    const location = useLocation();
    const isLoggedIn = useAuth();
    const { user: { role } = {} } = useSelector((state) => state.auth);

    const isRecruiter = role === 'recruiter' || role === 'admin';

    if (isLoggedIn && isRecruiter) return children;
    return <Navigate to="/log-in" state={{ from: location }} replace />;
}

export default RecruiterRoute;
