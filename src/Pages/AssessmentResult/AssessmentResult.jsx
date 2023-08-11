/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, ScrollRestoration, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import failImg from '../../assets/quiz-fail.png';
import passImg from '../../assets/quiz-result-pass.png';
import quizShow from '../../assets/quiz-show.png';
import { clearQuizResult } from '../../features/quiz/quizSlice';
import { useEditUserMutation } from '../../features/users/usersApi';
import useTitle from '../../hooks/useTitle';

function AssessmentResult() {
    const id = '64c331d8bbcc3f56eec1c99f';
    const { score, correct, wrong, testName, result } = useSelector((state) => state.quiz.result);
    useTitle(`${testName} Test Result`);
    const [editUser] = useEditUserMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleCertificate = () => {
        const formData = new FormData();
        formData.append('certificate', `${testName}`);
        editUser({ id, data: formData });
        Swal.fire({
            title: 'Congratulations!',
            text: 'Assessment Badge Added On Your Profile',
            icon: 'success',
            iconColor: '#21C6FD',
            confirmButtonColor: '#3C65F6',
        });
        dispatch(clearQuizResult());
        navigate('/dashboard/skill-test');
    };

    let content = null;
    if (result && result === 'Passed') {
        content = (
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
                <figure>
                    <img src={passImg} alt="" className="h-80 w-auto mx-auto" />
                </figure>
                <div className="text-center">
                    <h1 className="text-3xl text-secondary">
                        <span className="text-primary"> Congratulations!</span> You{' '}
                        <span className="text-primary">{result}</span> The {testName} Assessment!
                    </h1>
                    <div className="mt-2 text-accent">
                        <span className="mr-2">
                            <i className="fas fa-star text-sm text-primary mr-1" />
                            Score: {score}
                        </span>
                        <span className="mr-2">
                            <i className="far fa-check-circle text-primary mr-1" />
                            Total Correct: {correct}
                        </span>
                        <span className="mr-2">
                            <i className="far fa-times-circle text-red-500 mr-1" />
                            Total Wrong: {wrong}
                        </span>
                    </div>
                    <div className="mt-2">
                        <p
                            onClick={handleCertificate}
                            className="text-primary text-sm underline mb-2 cursor-pointer"
                        >
                            Show Assessment Badge On Your Profile
                        </p>
                        <Link
                            to="/skill-assessment"
                            className="text-primary text-sm underline cursor-pointer"
                        >
                            Take Another Assessment
                        </Link>
                    </div>
                </div>
            </div>
        );
    } else if (result && result === 'Failed') {
        content = (
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
                <figure>
                    <img src={failImg} alt="" className="h-80 w-auto mx-auto" />
                </figure>
                <div className="text-center">
                    <h1 className="text-3xl text-secondary">
                        <span className="text-red-500"> Sorry!</span> You{' '}
                        <span className="text-red-500">{result}</span> The {testName} Assessment!
                    </h1>
                    <div className="mt-2 text-accent">
                        <span className="mr-2">
                            <i className="fas fa-star text-sm text-primary mr-1" />
                            Score: {score}
                        </span>
                        <span className="mr-2">
                            <i className="far fa-check-circle text-primary mr-1" />
                            Total Correct: {correct}
                        </span>
                        <span className="mr-2">
                            <i className="far fa-times-circle text-red-500 mr-1" />
                            Total Wrong: {wrong}
                        </span>
                    </div>
                    <div className="mt-2">
                        <Link
                            to="/skill-assessment"
                            className="text-primary text-sm underline cursor-pointer"
                        >
                            Take Another Assessment
                        </Link>
                    </div>
                </div>
            </div>
        );
    } else {
        content = (
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
                <figure>
                    <img src={quizShow} alt="" className="h-80 w-auto mx-auto" />
                </figure>
                <div className="text-center">
                    <h1 className="text-3xl text-secondary">
                        Please Participate a Assessment to See You Result & Add Certificate Badge to
                        Your Profile
                    </h1>
                    <div className="mt-2">
                        <Link
                            to="/skill-assessment"
                            className="text-primary text-sm underline cursor-pointer"
                        >
                            Take a Assessment
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="max-w-[1115px] mx-auto mt-16">{content}</div>
            <ScrollRestoration />
        </>
    );
}

export default AssessmentResult;
