import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function CandidateRoute({ children }) {
    const location = useLocation();
    const isLoggedIn = useAuth();
    const { user: { role } = {} } = useSelector((state) => state.auth);
    console.log(location);
    const isCandidate = role === 'candidate';

    if (isLoggedIn && isCandidate) return children;
    if (isLoggedIn && !isCandidate) return <Navigate to="/" />;
    return <Navigate to="/log-in" state={{ from: location }} replace />;
}

export default CandidateRoute;
