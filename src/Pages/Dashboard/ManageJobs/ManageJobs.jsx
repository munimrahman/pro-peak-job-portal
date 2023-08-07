import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';
import { useGetJobsQuery } from '../../../features/jobPosts/jobPostApi';
import ManageJobHeader from './ManageJobHeader';

function ManageJobs() {
    const id = '64c32ff4bbcc3f56eec1c98c';
    const { data: { data: { jobs = [] } = {} } = {} } = useGetJobsQuery(
        `hiringManagerId=${id}&limit=20`
    );

    return (
        <div className="p-8">
            <ManageJobHeader title="Manage Jobs" />
            <div className="bg-white rounded-xl shadow p-5">
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead className="">
                            <tr>
                                <th>SL</th>
                                <th>Job Title</th>
                                <th>Post Date</th>
                                <th>Status</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobs.map(({ _id, title, salary, location, createdAt }, i) => (
                                <tr key={_id}>
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
                                    <th className="text-center">
                                        <Link
                                            to={`/find-jobs/${_id}`}
                                            className="py-2 px-3 rounded bg-info hover:cursor-pointer"
                                        >
                                            <i className="fas fa-eye text-accent" />
                                        </Link>
                                        <Link
                                            to={`/recruiter-dashboard/manage-jobs/update-job/${_id}`}
                                            className="py-2 px-3 rounded bg-green-300 hover:cursor-pointer mx-1"
                                        >
                                            <i className="fas fa-edit text-accent" />
                                        </Link>
                                        <span className="py-2 px-3 rounded bg-red-200 hover:cursor-pointer">
                                            <i className="fas fa-trash-alt text-red-600" />
                                        </span>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ManageJobs;
