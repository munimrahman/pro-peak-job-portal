import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function CandidateRoute({ children }) {
    const location = useLocation();
    const { user: { role } = {} } = useSelector((state) => state.auth);
    const isLoggedIn = useAuth();

    const isCandidate = role === 'candidate';

    if (isLoggedIn && isCandidate) return children;
    return <Navigate to="/log-in" state={{ from: location }} replace />;
}

export default CandidateRoute;
