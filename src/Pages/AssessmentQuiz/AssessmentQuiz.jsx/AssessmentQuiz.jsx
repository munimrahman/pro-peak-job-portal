import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollRestoration, useLocation, useNavigate, useParams } from 'react-router-dom';
import ButtonInfo from '../../../Components/ButtonInfo/ButtonInfo';
import QuestionSkeleton from '../../../Components/LoadingElements/QuestionSkeleton';
import { useGetSingleQuizQuery } from '../../../features/quiz/quizApi';
import { quizResult } from '../../../features/quiz/quizSlice';
import { useEditUserMutation } from '../../../features/users/usersApi';
import useAuth from '../../../hooks/useAuth';
import useTitle from '../../../hooks/useTitle';
import AssessmentQuizCard from '../AssessmentQuizCard/AssessmentQuizCard';

function AssessmentQuiz() {
    const { id } = useParams();
    const { user: { _id, role } = {} } = useSelector((state) => state.auth);
    const isLoggedIn = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const {
        data: { quiz: { title, totalQuestions, times, questions = [] } = {} } = {},
        isLoading,
    } = useGetSingleQuizQuery(id);
    const [editUser] = useEditUserMutation();
    const [ans, setAns] = useState([]);
    const dispatch = useDispatch();
    useTitle(`${title || ''} Skill Assessment`);

    const result = ans
        .map((a, i) => a.ans === questions[i]?.options[0]?.option)
        .reduce((pre, next) => pre + next, 0);

    const resultObj = {
        testId: id,
        testName: title,
        score: result,
        correct: result,
        wrong: questions.length - result,
        result: result >= totalQuestions / 2 ? 'Passed' : 'Failed',
    };

    const handleSubmit = () => {
        dispatch(quizResult(resultObj));
        const formData = new FormData();
        formData.append('skillTest', JSON.stringify(resultObj));
        editUser({ id: _id, data: formData });
        navigate('/quiz-result');
    };

    let heading = null;
    if (isLoading) {
        heading = (
            <div className="flex flex-col items-center gap-6">
                <div className="w-5/6 h-4 rounded-xl bg-gray-300" />
                <div className="w-3/6 h-2 rounded-xl bg-gray-300" />
            </div>
        );
    } else {
        heading = (
            <>
                <h1 className="text-center text-3xl text-secondary">
                    Skill Assessment For {title}
                </h1>
                <div className="text-center mt-1">
                    <span className="text-accent mr-2">
                        <i className="fas fa-poll mr-1" />
                        {totalQuestions} Questions
                    </span>
                    <span className="text-accent">
                        <i className="far fa-clock mr-1" />
                        {times}
                    </span>
                </div>
            </>
        );
    }

    let submitButton = null;
    if (isLoggedIn && role === 'candidate') {
        submitButton = (
            <ButtonInfo onClick={handleSubmit} className="px-4 py-3">
                Submit
            </ButtonInfo>
        );
    } else if (isLoggedIn && (role === 'recruiter' || role === 'admin')) {
        submitButton = (
            <span className="font-bold text-secondary">Log In As Candidate To Participate</span>
        );
    } else {
        const handleRedirect = () => {
            navigate('/log-in', { state: { from: location } });
        };
        submitButton = <ButtonInfo onClick={handleRedirect}>Log In To Participate</ButtonInfo>;
    }

    return (
        <div className="max-w-[1115px] mx-auto">
            <div className="max-w-3xl mx-auto mt-10">
                {heading}
                {isLoading ? (
                    <div className="mt-5 grid gap-5">
                        <QuestionSkeleton />
                        <QuestionSkeleton />
                        <QuestionSkeleton />
                    </div>
                ) : (
                    <div className="mt-5 grid gap-5">
                        {questions.map((q, i) => (
                            <AssessmentQuizCard key={i} que={q} i={i + 1} setAns={setAns} />
                        ))}
                    </div>
                )}

                <div className="flex justify-center mt-5">{submitButton}</div>
            </div>

            <ScrollRestoration />
        </div>
    );
}

export default React.memo(AssessmentQuiz);
