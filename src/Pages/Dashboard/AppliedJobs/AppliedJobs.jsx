/* eslint-disable jsx-a11y/no-static-element-interactions */
import moment from 'moment';
import React from 'react';
import { useSelector } from 'react-redux';
import {
    useDeleteJobApplicationMutation,
    useGetJobApplicationsQuery,
} from '../../../features/jobApplication/jobApplicationApi';

function AppliedJobs() {
    const { user: { _id } = {} } = useSelector((state) => state.auth);
    const { data: { data: { applications = [] } = {} } = {} } = useGetJobApplicationsQuery(
        `candidate=${_id}&limit=20`
    );
    const [deleteJob] = useDeleteJobApplicationMutation();

    const handleDelete = (applicationId) => {
        deleteJob({ id: applicationId, queryId: `candidate=${_id}&limit=20` });
    };

    return (
        <div className="p-8">
            <h2 className="text-secondary text-3xl">Applied Jobs</h2>
            <div className="divider my-3" />
            <div className="bg-white rounded-xl shadow p-5">
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead className="">
                            <tr>
                                <th>SL</th>
                                <th>Job Title</th>
                                <th>Applied Date</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applications.map(
                                (
                                    {
                                        _id: id,
                                        createdAt,
                                        jobPostId: { title, salary, location } = {},
                                    },
                                    i
                                ) => (
                                    <tr key={id}>
                                        <th>{i + 1}</th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div>
                                                    <h3>{title}</h3>
                                                    <div className="text-sm opacity-50">
                                                        <span className="mr-2">
                                                            <i className="fas fa-dollar-sign mr-1" />
                                                            {salary}/Month
                                                        </span>
                                                        <span>
                                                            <i className="fas fa-map-marker-alt mr-1" />
                                                            {location}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{moment(createdAt).format('ll')}</td>
                                        <td>Active</td>
                                        <th>
                                            <span
                                                onClick={() => handleDelete(_id)}
                                                className="py-2 px-3 rounded bg-red-200 hover:cursor-pointer"
                                            >
                                                <i className="fas fa-trash-alt text-red-600" />
                                            </span>
                                        </th>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AppliedJobs;
