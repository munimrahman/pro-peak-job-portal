import React from 'react';
import { Link } from 'react-router-dom';
import ButtonInfo from '../../../Components/ButtonInfo/ButtonInfo';
import AssessmentQuizCard from '../AssessmentQuizCard/AssessmentQuizCard';

function AssessmentQuiz() {
    return (
        <div className="max-w-[1115px] mx-auto">
            <div className="max-w-3xl mx-auto mt-10">
                <h1 className="text-center text-3xl text-secondary">
                    Assessment For JavaScript Basics
                </h1>
                <div className="text-center mt-1">
                    <span className="text-accent mr-2">
                        <i className="fas fa-poll mr-1" />
                        10 Questions
                    </span>
                    <span className="text-accent">
                        <i className="far fa-clock mr-1" />
                        30 Minutes
                    </span>
                </div>
                <div className="mt-5 grid gap-5">
                    <AssessmentQuizCard />
                    <AssessmentQuizCard />
                    <AssessmentQuizCard />
                </div>
                <div className="flex justify-center mt-5">
                    <ButtonInfo className="px-4 py-3">
                        <Link to="/quiz-result">Submit</Link>
                    </ButtonInfo>
                </div>
            </div>
        </div>
    );
}

export default AssessmentQuiz;
