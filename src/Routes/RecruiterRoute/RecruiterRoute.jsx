import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function RecruiterRoute({ children }) {
    const location = useLocation();
    const { role } = useSelector((state) => state.auth);
    const isLoggedIn = useAuth();

    const isRecruiter = role === 'recruiter' || 'admin';

    if (isLoggedIn && isRecruiter) return children;
    return <Navigate to="/log-in" state={{ from: location }} replace />;
}

export default RecruiterRoute;
