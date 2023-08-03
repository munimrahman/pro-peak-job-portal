import React from 'react';
import { useSelector } from 'react-redux';
import { ScrollRestoration } from 'react-router-dom';
import passImg from '../../assets/quiz-result-pass.png';

function AssessmentResult() {
    const { score, correct, wrong, testName } = useSelector((state) => state.quiz.result);
    return (
        <div className="max-w-[1115px] mx-auto mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
                <figure>
                    <img src={passImg} alt="" className="h-80 w-auto mx-auto" />
                </figure>
                <div className="text-center">
                    <h1 className="text-3xl text-secondary">
                        <span className="text-primary"> Congratulations!</span> You{' '}
                        <span className="text-primary">Passed</span> The {testName} Assessment!
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
                        <p className="text-primary text-sm underline mb-2 cursor-pointer">
                            Show Assessment Badge On Your Profile
                        </p>
                        <p className="text-primary text-sm underline cursor-pointer">
                            Take Another Assessment
                        </p>
                    </div>
                </div>
            </div>
            <ScrollRestoration />
        </div>
    );
}

export default AssessmentResult;
