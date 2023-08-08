/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());

function AssessmentQuizCard({ que, i, setAns }) {
    const { question, options = [] } = que || {};

    const ansOptions = shuffleArray([
        options[0].option,
        options[1].option,
        options[2].option,
        options[3].option,
    ]);

    const handleChange = (e) => {
        setAns((pre) => {
            const result = pre.filter((r) => r.id !== i);
            return [...result, { id: i, ans: e.target.value }];
        });
    };

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
                                value={ansOptions[0]}
                                onChange={handleChange}
                            />
                            {ansOptions[0]}
                        </label>
                    </div>
                    <div className="flex items-center my-3">
                        <label className="hover:cursor-pointer" htmlFor={`option-two-${i}`}>
                            <input
                                id={`option-two-${i}`}
                                type="radio"
                                name={`option-${i}`}
                                value={ansOptions[1]}
                                onChange={handleChange}
                                className="radio-xs mr-2 cursor-pointer"
                            />
                            {ansOptions[1]}
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
                                value={ansOptions[2]}
                                onChange={handleChange}
                                className="radio-xs mr-2 cursor-pointer"
                            />
                            {ansOptions[2]}
                        </label>
                    </div>
                    <div className="flex items-center my-3">
                        <label className="hover:cursor-pointer" htmlFor={`option-four-${i}`}>
                            <input
                                id={`option-four-${i}`}
                                type="radio"
                                name={`option-${i}`}
                                value={ansOptions[3]}
                                onChange={handleChange}
                                className="radio-xs mr-2 cursor-pointer"
                            />
                            {ansOptions[3]}
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(AssessmentQuizCard);
