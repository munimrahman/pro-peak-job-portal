import React from 'react';

function Pagination({ totalPage, currentPage, setPage }) {
    return (
        // <!-- Component: Primary basic pagination -->
        <nav>
            <ul className="flex items-center justify-center text-sm list-none md:gap-1 text-slate-700">
                <li>
                    <button
                        onClick={() => setPage(currentPage - 1)}
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
                            onClick={() => setPage(i + 1)}
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
                        onClick={() => setPage(currentPage + 1)}
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
        // <!-- End Primary basic pagination -->
    );
}

export default Pagination;
