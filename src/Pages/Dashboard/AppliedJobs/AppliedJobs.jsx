import React from 'react';

function AppliedJobs() {
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
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((r, i) => (
                                <tr>
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div>
                                                <h3>
                                                    UI / UX Designer Fulltime Salary $800 per month
                                                </h3>
                                                <div className="text-sm opacity-50">
                                                    <span className="mr-2">
                                                        <i className="fas fa-dollar-sign mr-1" />
                                                        25/Hour
                                                    </span>
                                                    <span>
                                                        <i className="fas fa-map-marker-alt mr-1" />
                                                        United States
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Dec 5, 2022</td>
                                    <td>Active</td>
                                    <th>
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

export default AppliedJobs;
