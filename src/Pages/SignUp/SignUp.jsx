import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { userLoggedIn } from '../../features/auth/authSlice';

function SignUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from || '/';

    const handleLogIn = (user, role) => {
        const authObj = {
            accessToken: 'sldkfjlsdkjfiseyt038947hfskdjnfvlk',
            user,
            role,
        };
        dispatch(userLoggedIn(authObj));
        navigate(from);
    };

    return (
        <div>
            <h1 className="text-center text-3xl my-2">Sign Up Page</h1>
            <div className="flex justify-center my-5 gap-5">
                <button className="btn" onClick={() => handleLogIn(true, 'candidate')}>
                    Log In As Candidate
                </button>
                <button className="btn" onClick={() => handleLogIn(true, 'recruiter')}>
                    Log In As Recruiter
                </button>
                <button className="btn" onClick={() => handleLogIn(true, 'admin')}>
                    Log In As Admin
                </button>
            </div>
        </div>
    );
}

export default SignUp;
