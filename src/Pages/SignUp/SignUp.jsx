/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/ProPeak.png';
import { useRegisterMutation } from '../../features/auth/authApi';
import useTitle from '../../hooks/useTitle';

function SignUp() {
    const navigate = useNavigate();
    const location = useLocation();
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    useTitle('Sign Up | Pro Peak');
    const [register, { error, isError, isSuccess, isLoading }] = useRegisterMutation();
    const [errorObj, setErrorObj] = useState({
        name: '',
        role: '',
        companyName: '',
        email: '',
        password: '',
    });
    const from = location?.state?.from || '/';

    const handleSignUp = (e) => {
        e.preventDefault();
        const userObj = { name, email, password, role, companyName };
        register(userObj);
    };

    if (!isError && isSuccess) {
        console.log('in login', from);
        navigate(from, { replace: true });
    }

    useEffect(() => {
        const { data: { message, errors = {} } = {} } = error || {};
        if (errors.name) {
            setErrorObj((pre) => ({ ...pre, name: errors?.name?.msg }));
        } else {
            setErrorObj((pre) => ({ ...pre, name: '' }));
        }
        if (errors.password) {
            setErrorObj((pre) => ({ ...pre, password: errors?.password?.msg }));
        } else {
            setErrorObj((pre) => ({ ...pre, password: '' }));
        }
        if (message?.includes('email_1 dup key')) {
            console.log('object');
            setErrorObj((pre) => ({ ...pre, email: 'Email Already Used, Try With Another Email' }));
        } else {
            setErrorObj((pre) => ({ ...pre, email: '' }));
        }
    }, [error]);

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center pt-10 px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-10" src={logo} alt="Pro Peak Logo" />
                <h2 className="mt-2 text-center text-xl leading-9 tracking-tight text-gray-900">
                    Create New Account
                </h2>
            </div>

            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSignUp} className="space-y-2">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Name
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                id="name"
                                placeholder="John Snow"
                                className="input input-bordered focus:outline-none w-full"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <p className="text-red-500 text-sm">{errorObj.name && errorObj.name}</p>
                    </div>
                    <div className="form-control">
                        <label
                            htmlFor="role"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Role
                        </label>
                        <select
                            className="select select-bordered focus:outline-none w-full"
                            name="role"
                            required
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option value="" disabled>
                                Select Role
                            </option>
                            <option value="candidate">Candidate</option>
                            <option value="recruiter">Recruiter</option>
                        </select>
                    </div>

                    {role === 'recruiter' && (
                        <div>
                            <label
                                htmlFor="companyName"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Company Name
                            </label>
                            <div className="mt-">
                                <input
                                    type="text"
                                    id="companyName"
                                    placeholder="Company Name"
                                    className="input input-bordered focus:outline-none w-full"
                                    name="companyName"
                                    value={companyName}
                                    onChange={(e) => setCompanyName(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    )}

                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Email Address
                        </label>
                        <div className="mt-">
                            <input
                                type="email"
                                id="email"
                                placeholder="jhon@gmail.com"
                                className="input input-bordered focus:outline-none w-full"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <p className="text-red-500 text-sm">{errorObj.email && errorObj.email}</p>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                type="password"
                                placeholder="********"
                                className="input input-bordered focus:outline-none w-full"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <p className="text-red-500 text-sm">
                            {errorObj.password && errorObj.password}
                        </p>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className={`flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                                isLoading && 'cursor-wait'
                            }`}
                            disabled={isLoading}
                        >
                            {!isLoading ? 'Sign Up' : 'Loading...'}
                        </button>
                    </div>
                </form>

                <p className="mt-2 text-center text-sm text-gray-500">
                    Already a member?{' '}
                    <Link
                        to="/log-in"
                        className="font-semibold leading-6 text-primary hover:text-blue-500"
                    >
                        Log In Here
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default SignUp;
