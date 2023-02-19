import React from 'react';
import BlogDashboardHeader from './BlogDashboardHeader';

function BlogDashboard() {
    return (
        <div className="p-8">
            <BlogDashboardHeader title="Profile Overview" />
            <div className="bg-white rounded-xl shadow p-5">
                <div className="bg-white">
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead className="">
                                <tr>
                                    <th>SL</th>
                                    <th>Job Title</th>
                                    <th>Published</th>
                                    <th>Last Updated</th>
                                    <th>
                                        <h4 className="text-center">Actions</h4>
                                    </th>
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
                                                        UI / UX Designer Fulltime Salary $800 per
                                                        month
                                                    </h3>
                                                    <div className="text-sm opacity-50">
                                                        <span className="mr-2">
                                                            <i className="far fa-eye mr-1" />
                                                            25 Views
                                                        </span>
                                                        <span className="mr-2">
                                                            <i className="fas fa-heart mr-1" />
                                                            12 Loves
                                                        </span>
                                                        <span>
                                                            <i className="fas fa-comments mr-1" />5
                                                            Comments
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Dec 5, 2022</td>
                                        <td>Feb 12, 2023</td>
                                        <th>
                                            <span className="py-2 px-3 rounded bg-info hover:cursor-pointer">
                                                <i className="fas fa-eye text-accent" />
                                            </span>
                                            <span className="py-2 px-3 rounded bg-green-300 hover:cursor-pointer mx-1">
                                                <i className="fas fa-edit text-accent" />
                                            </span>
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
        </div>
    );
}

export default BlogDashboard;
