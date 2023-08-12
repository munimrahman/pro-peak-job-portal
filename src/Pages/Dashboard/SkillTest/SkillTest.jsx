/* eslint-disable radix */
import moment from 'moment';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useGetUserQuery } from '../../../features/users/usersApi';

function SkillTest() {
    const { user: { _id } = {} } = useSelector((state) => state.auth);
    const { data: { user: { skillTests = [] } = {} } = {} } = useGetUserQuery(_id);
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
                            {skillTests.map(
                                ({ testId, testName, correct, wrong, result, date }, i) => (
                                    <tr>
                                        <th>{i + 1}</th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div>
                                                    <h3>{testName}</h3>
                                                    <div className="text-sm opacity-50">
                                                        <span className="mr-2">
                                                            <i className="fas fa-poll mr-1" />
                                                            {parseInt(correct) +
                                                                parseInt(wrong)}{' '}
                                                            Questions
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {correct}/{parseInt(correct) + parseInt(wrong)}
                                        </td>
                                        <td>
                                            {result === 'Passed' ? (
                                                <span className="bg-green-500 px-2 py-1 rounded text-white text-sm">
                                                    PASSED
                                                </span>
                                            ) : (
                                                <span className="bg-red-500 px-2 py-1 rounded text-white text-sm">
                                                    FAILED
                                                </span>
                                            )}
                                        </td>
                                        <td>{moment(date).format('ll')}</td>
                                        <td>
                                            <div>
                                                <Link
                                                    to={`/quiz/${testId}`}
                                                    className="bg-info px-2 py-1 rounded mr-2 text-primary hover:bg-primary hover:text-white hover:cursor-pointer text-sm"
                                                >
                                                    Retake
                                                </Link>
                                                {/* <button className="bg-info px-2 py-1 rounded text-primary hover:bg-primary hover:text-white hover:cursor-pointer text-sm">
                                                Details
                                            </button> */}
                                            </div>
                                        </td>
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

export default SkillTest;
