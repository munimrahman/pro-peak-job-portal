/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function AssessmentQuizCard() {
    return (
        <div className="bg-info p-5 rounded-lg shadow-lg">
            <h3 className="text-lg text-secondary">
                1. How do you round the number 7.25, to the nearest integer?
            </h3>
            <form className="grid grid-cols-1 md:grid-cols-2 text-secondary">
                <div>
                    <div className="flex items-center my-3">
                        <input
                            type="radio"
                            name="radio-1"
                            className="radio-xs mr-2 cursor-pointer"
                        />
                        <span>rnd(7.25)</span>
                    </div>
                    <div className="flex items-center my-3">
                        <input
                            type="radio"
                            name="radio-1"
                            className="radio-xs mr-2 cursor-pointer"
                        />
                        <span>round(7.25)</span>
                    </div>
                </div>
                <div>
                    <div className="flex items-center my-3">
                        <input
                            type="radio"
                            name="radio-1"
                            className="radio-xs mr-2 cursor-pointer"
                        />
                        <span>Math.rnd(7.25)</span>
                    </div>
                    <div className="flex items-center my-3">
                        <input
                            type="radio"
                            name="radio-1"
                            className="radio-xs mr-2 cursor-pointer"
                        />
                        <span>Math.round(7.25)</span>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AssessmentQuizCard;
