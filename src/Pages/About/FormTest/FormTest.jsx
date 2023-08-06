/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useEditUserMutation, useGetAssignmentsQuery } from '../../../features/users/usersApi';
import AssignmentRow from './AssignmentRow';

function FormTest() {
    const [email, setEmail] = useState('');
    const [image, setImage] = useState('');
    const [editUser] = useEditUserMutation();
    const { data: assignments } = useGetAssignmentsQuery();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Create Form Data
        const formData = new FormData();
        formData.append('email', email);
        formData.append('image', image);
        console.log(Object.fromEntries(formData));
        editUser({ id: '64c331d8bbcc3f56eec1c99f', data: formData });
    };

    return (
        <div className="flex flex-col items-center">
            <h1 className="my-3 text-lg font-bold">File Upload Test</h1>
            <form onSubmit={handleSubmit}>
                <input
                    className="border"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />{' '}
                <br /> <br />
                <input
                    className="border"
                    type="file"
                    name="image"
                    alt="profile_photo"
                    onChange={(e) => setImage(e.target.files[0])} // Fix this line
                />
                <br /> <br />
                <input className="btn btn-primary" type="submit" value="Submit" />
            </form>
            <br />
            <div className="text-primary h-1 w-full bg-black" />
            <div className="overflow-x-auto mt-4">
                <table className="divide-y-1 text-base divide-gray-600 w-full">
                    <thead>
                        <tr>
                            <th className="table-th">Title</th>
                            <th className="table-th">Video Title</th>
                            <th className="table-th">Mark</th>
                            <th className="table-th">Action</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-600/50">
                        {assignments?.map((assignment) => (
                            <AssignmentRow key={assignment.id} assignment={assignment} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default FormTest;
