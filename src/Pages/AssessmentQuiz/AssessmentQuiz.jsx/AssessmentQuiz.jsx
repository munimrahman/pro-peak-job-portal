import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, ScrollRestoration, useParams } from 'react-router-dom';
import ButtonInfo from '../../../Components/ButtonInfo/ButtonInfo';
import { useGetSingleQuizQuery } from '../../../features/quiz/quizApi';
import { quizResult } from '../../../features/quiz/quizSlice';
import AssessmentQuizCard from '../AssessmentQuizCard/AssessmentQuizCard';

function AssessmentQuiz() {
    const { id } = useParams();
    const { data: { quiz: { title, totalQuestions, times, questions = [] } = {} } = {} } =
        useGetSingleQuizQuery(id);
    const [ans, setAns] = useState([]);
    const dispatch = useDispatch();

    const result = ans
        .map((a, i) => a.ans === questions[i]?.options[0]?.option)
        .reduce((pre, next) => pre + next, 0);

    const resultObj = {
        testName: title,
        score: result,
        correct: result,
        wrong: questions.length - result,
    };

    const handleSubmit = () => {
        dispatch(quizResult(resultObj));
    };

    return (
        <div className="max-w-[1115px] mx-auto">
            <div className="max-w-3xl mx-auto mt-10">
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
                <div className="mt-5 grid gap-5">
                    {questions.map((q, i) => (
                        <AssessmentQuizCard key={i} que={q} i={i + 1} setAns={setAns} />
                    ))}
                </div>
                <div className="flex justify-center mt-5">
                    <Link to="/quiz-result">
                        <ButtonInfo onClick={handleSubmit} className="px-4 py-3">
                            Submit
                        </ButtonInfo>
                    </Link>
                </div>
            </div>

            <ScrollRestoration />
        </div>
    );
}

export default React.memo(AssessmentQuiz);
