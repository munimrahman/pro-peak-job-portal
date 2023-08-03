/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

function AssessmentQuizCard({ que, i }) {
    const { question, options = [] } = que || {};
    const [givenAns, setGivenAns] = useState('');
    console.log(givenAns);

    return (
        <div className="bg-info p-5 rounded-lg shadow-lg">
            <h3 className="text-lg text-secondary">{`${i}. ${question}`}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 text-secondary">
                <div>
                    <div className="flex items-center my-3">
                        <label className="hover:cursor-pointer" htmlFor={`option-one-${i}`}>
                            <input
                                id={`option-one-${i}`}
                                type="radio"
                                name={`option-${i}`}
                                className="radio-xs mr-2 cursor-pointer"
                                value={options[0]?.option}
                                onChange={(e) => setGivenAns(e.target.value)}
                            />
                            {options[0]?.option}
                        </label>
                    </div>
                    <div className="flex items-center my-3">
                        <label className="hover:cursor-pointer" htmlFor={`option-two-${i}`}>
                            <input
                                id={`option-two-${i}`}
                                type="radio"
                                name={`option-${i}`}
                                className="radio-xs mr-2 cursor-pointer"
                            />
                            {options[1]?.option}
                        </label>
                    </div>
                </div>
                <div>
                    <div className="flex items-center my-3">
                        <label className="hover:cursor-pointer" htmlFor={`option-three-${i}`}>
                            <input
                                id={`option-three-${i}`}
                                type="radio"
                                name={`option-${i}`}
                                className="radio-xs mr-2 cursor-pointer"
                            />
                            {options[2]?.option}
                        </label>
                    </div>
                    <div className="flex items-center my-3">
                        <label className="hover:cursor-pointer" htmlFor={`option-four-${i}`}>
                            <input
                                id={`option-four-${i}`}
                                type="radio"
                                name={`option-${i}`}
                                className="radio-xs mr-2 cursor-pointer"
                            />
                            {options[3]?.option}
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AssessmentQuizCard;
