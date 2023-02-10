import React from 'react';
import { Link } from 'react-router-dom';

function Pagination() {
    return (
        // <!-- Component: Primary basic pagination -->
        <nav>
            <ul className="flex items-center justify-center text-sm list-none md:gap-1 text-slate-700">
                <li>
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center h-10 gap-4 px-4 text-sm font-medium transition duration-300 rounded text-secondary hover:bg-info hover:text-primary active:bg-primary active:text-white"
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
                    </Link>
                </li>

                <li>
                    <Link
                        to="/"
                        className="items-center justify-center h-10 px-4 py-3 text-sm font-medium transition duration-300 rounded text-secondary hover:bg-info hover:text-primary active:bg-primary active:text-white"
                    >
                        1
                    </Link>
                </li>
                <li>
                    <Link
                        to="/"
                        className="items-center justify-center h-10 px-4 py-3 text-sm font-medium transition duration-300 rounded text-secondary hover:bg-info hover:text-primary active:bg-primary active:text-white"
                    >
                        2
                    </Link>
                </li>
                <li>
                    <Link
                        to="/"
                        className="items-center justify-center h-10 px-4 py-3 text-sm font-medium transition duration-300 rounded text-secondary hover:bg-info hover:text-primary active:bg-primary active:text-white"
                    >
                        3
                    </Link>
                </li>
                <li>
                    <Link
                        to="/"
                        className="items-center justify-center h-10 px-4 py-3 text-sm font-medium transition duration-300 rounded text-secondary hover:bg-info hover:text-primary active:bg-primary active:text-white"
                    >
                        4
                    </Link>
                </li>
                <li>
                    <Link
                        to="/"
                        className="items-center justify-center h-10 px-4 py-3 text-sm font-medium transition duration-300 rounded text-secondary hover:bg-info hover:text-primary active:bg-primary active:text-white"
                    >
                        5
                    </Link>
                </li>
                <li>
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center h-10 gap-4 px-4 text-sm font-medium transition duration-300 rounded text-secondary hover:bg-info hover:text-primary active:bg-primary active:text-white"
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
                    </Link>
                </li>
            </ul>
        </nav>
        // <!-- End Primary basic pagination -->
    );
}

export default Pagination;
