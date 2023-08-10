/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/ProPeak.png';
import { userLoggedIn } from '../../features/auth/authSlice';

function LogIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const from = location.state?.from?.pathname || '/';

    const handleLogIn = (user, role) => {
        const authObj = {
            accessToken: 'sldkfjlsdkjfiseyt038947hfskdjnfvlk',
            user,
            role,
        };
        dispatch(userLoggedIn(authObj));
        navigate(from);
    };

    const toSignUp = () => {
        navigate('/sign-up', { state: { from } });
    };
    console.log(handleLogIn, toSignUp);

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center h-[80vh] px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-10" src={logo} alt="Pro Peak Logo" />
                <h2 className="mt-2 text-center text-xl leading-9 tracking-tight text-gray-900">
                    Log In to Your Account
                </h2>
            </div>

            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Email Address
                        </label>
                        <div className="mt-2">
                            <input
                                type="email"
                                id="email"
                                placeholder="Jhon Snow"
                                className="input input-bordered focus:outline-none w-full"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Password
                            </label>
                            <div className="text-sm">
                                <a
                                    href="#"
                                    className="font-semibold text-primary hover:text-blue-500"
                                >
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                type="password"
                                id="password"
                                placeholder="**********"
                                className="input input-bordered focus:outline-none w-full"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Log In
                        </button>
                    </div>
                </form>

                <p className="mt-2 text-center text-sm text-gray-500">
                    Not a member?{' '}
                    <Link
                        to="/sign-up"
                        className="font-semibold leading-6 text-primary hover:text-blue-500"
                    >
                        Sign Up Here
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default LogIn;
