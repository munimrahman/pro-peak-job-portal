/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import ButtonInfo from '../../../Components/ButtonInfo/ButtonInfo';
import ButtonSecondary from '../../../Components/ButtonSecondary/ButtonSecondary';
import RecruiterProfileHeader from './RecruiterProfileHeader';

function ChangeRecruiterPassword() {
    return (
        <div className="p-8">
            <RecruiterProfileHeader title="Change Password" />
            <div className="grid grid-cols-1 gap-5 bg-white p-5 shadow rounded-xl mt-8">
                <div className="form-control">
                    <label className="label">
                        <span className="text-secondary">Current Password:</span>
                    </label>
                    <input
                        type="text"
                        placeholder="********"
                        className="input input-bordered focus:outline-none w-full max-w-lg"
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="text-secondary">New Password:</span>
                    </label>
                    <input
                        type="text"
                        placeholder="********"
                        className="input input-bordered focus:outline-none w-full max-w-lg"
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="text-secondary">Confirm New Password:</span>
                    </label>
                    <input
                        type="text"
                        placeholder="********"
                        className="input input-bordered focus:outline-none w-full max-w-lg"
                    />
                </div>
            </div>
            <div className="mt-5">
                <ButtonInfo className="px-5 py-3 rounded-lg text-base">Save</ButtonInfo>
                <ButtonSecondary className="ml-2">
                    <Link to="/recruiter-dashboard/recruiter-profile">Back</Link>
                </ButtonSecondary>
            </div>
        </div>
    );
}

export default ChangeRecruiterPassword;
