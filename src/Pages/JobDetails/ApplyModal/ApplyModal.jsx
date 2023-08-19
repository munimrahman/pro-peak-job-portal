/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import ButtonInfo from '../../../Components/ButtonInfo/ButtonInfo';
import { useApplyJobMutation } from '../../../features/jobApplication/jobApplicationApi';

const initialState = {
    coverLetter: '',
    expectedSalary: '',
    joinDate: '',
};

function ApplyModal({ id, isChecked, setModalCheck }) {
    const { user: { _id } = {} } = useSelector((state) => state.auth);
    const [applyData, setApplyData] = useState(initialState);
    const [applyJob, { data: resData, isSuccess, error, isLoading }] = useApplyJobMutation();
    const [err, setErr] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const userData = { ...applyData };
        userData[e.target.name] = e.target.value;
        setApplyData(userData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { ...applyData };
        data.candidate = _id;
        data.jobPostId = id;
        applyJob({ data });
    };

    useEffect(() => {
        if (error) {
            setErr(error);
        }
        if (resData?.success === true && isSuccess) {
            setSuccess(true);
        }
    }, [error, resData, isSuccess]);

    useEffect(() => {
        if (success) {
            setSuccess(false);
            Swal.fire({
                title: 'Congratulations!',
                text: "Your application has been successfully sent. We'll be in touch soon.",
                icon: 'success',
                iconColor: '#21C6FD',
                confirmButtonColor: '#3C65F6',
            });
            setModalCheck(!isChecked);
        } else if (err) {
            setErr(null);
            Swal.fire({
                title: 'Oops!',
                text: "Something went wrong. Your application couldn't be submitted.",
                icon: 'error',
                // iconColor: '#21C6FD',
                confirmButtonColor: '#3C65F6',
            });
            setModalCheck(!isChecked);
        }
    }, [success, setModalCheck, isChecked, err]);

    return (
        <>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" checked={isChecked} />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center">Apply Now</h3>
                    <form>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-secondary">Expected Salary:</span>
                            </label>
                            <input
                                type="number"
                                placeholder="1000"
                                className="input input-bordered focus:outline-none w-full max-w-lg"
                                required
                                name="expectedSalary"
                                value={applyData.expectedSalary}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-secondary">Preferred Joining Date:</span>
                            </label>
                            <input
                                type="date"
                                className="input input-bordered focus:outline-none w-full max-w-lg"
                                name="joinDate"
                                value={applyData.joinDate}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="md:col-span-12">
                            <label className="label">
                                <span className="text-secondary">Cover Letter:</span>
                            </label>
                            <textarea
                                className="textarea textarea-bordered w-full h-32 focus:outline-none"
                                placeholder="Cover Letter . . ."
                                name="coverLetter"
                                value={applyData.coverLetter}
                                onChange={handleChange}
                            />
                        </div>
                    </form>

                    <div className="modal-action">
                        <ButtonInfo
                            onClick={handleSubmit}
                            className={`px-5 py-3 rounded-lg text-base ${
                                isLoading && 'cursor-wait'
                            }`}
                            disabled={isLoading}
                        >
                            Apply
                        </ButtonInfo>

                        <button onClick={() => setModalCheck(!isChecked)} className="btn">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ApplyModal;
