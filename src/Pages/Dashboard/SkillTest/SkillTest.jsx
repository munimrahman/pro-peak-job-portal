import React from 'react';

function SkillTest() {
    return (
        <div className="p-8">
            <h2 className="text-secondary text-3xl">Skill Assessment Results</h2>
            <div className="divider my-3" />
            <div className="bg-white rounded-xl shadow p-5">
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead className="">
                            <tr>
                                <th>SL</th>
                                <th>Test Name</th>
                                <th>Score</th>
                                <th>Result</th>
                                <th>Date</th>
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
                                                <h3>JavaScript Assessment</h3>
                                                <div className="text-sm opacity-50">
                                                    <span className="mr-2">
                                                        <i className="fas fa-poll mr-1" />
                                                        10 Questions
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>8/10</td>
                                    <td>
                                        <span className="bg-green-500 px-2 py-1 rounded text-white text-sm">
                                            PASS
                                        </span>
                                    </td>
                                    <td>Jan 12, 2023</td>
                                    <td>
                                        <div>
                                            <button className="bg-info px-2 py-1 rounded mr-2 text-primary hover:bg-primary hover:text-white hover:cursor-pointer text-sm">
                                                Retake
                                            </button>
                                            <button className="bg-info px-2 py-1 rounded text-primary hover:bg-primary hover:text-white hover:cursor-pointer text-sm">
                                                Details
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default SkillTest;
