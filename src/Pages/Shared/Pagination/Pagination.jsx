import React, { useEffect, useState } from 'react';

function Pagination({ totalPage, currentPage, setPage }) {
    const [scrollTop, setScrollTop] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [scrollTop]);

    const handleSetPage = (value) => {
        if (value) {
            setPage(value);
            setScrollTop((pre) => !pre);
            return;
        }
        setPage(currentPage + 1);
        setScrollTop((pre) => !pre);
    };

    return (
        <nav>
            <ul className="flex items-center justify-center text-sm list-none md:gap-1 text-slate-700">
                <li>
                    <button
                        onClick={handleSetPage}
                        className={`inline-flex items-center justify-center h-10 gap-4 px-4 text-sm font-medium transition duration-300 rounded text-secondary active:bg-primary active:text-white ${
                            currentPage === 1
                                ? 'cursor-not-allowed'
                                : 'hover:bg-info hover:text-primary'
                        }`}
                        disabled={currentPage === 1}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 -mx-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            role="graphics-symbol"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>
                </li>

                <li>
                    {[...Array(totalPage).keys()].map((p, i) => (
                        <button
                            key={i}
                            onClick={() => handleSetPage(i + 1)}
                            className={`items-center justify-center h-10 px-4 py-3 text-sm font-medium transition duration-300 rounded text-secondary hover:bg-info hover:text-primary active:bg-primary active:text-white ${
                                currentPage === i + 1 && 'bg-primary text-white'
                            }`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </li>

                <li>
                    <button
                        onClick={handleSetPage}
                        className={`inline-flex items-center justify-center h-10 gap-4 px-4 text-sm font-medium transition duration-300 rounded text-secondary active:bg-primary active:text-white ${
                            totalPage === currentPage
                                ? 'cursor-not-allowed'
                                : 'hover:bg-info hover:text-primary'
                        }`}
                        disabled={totalPage === currentPage}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 -mx-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            role="graphics-symbol"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;
