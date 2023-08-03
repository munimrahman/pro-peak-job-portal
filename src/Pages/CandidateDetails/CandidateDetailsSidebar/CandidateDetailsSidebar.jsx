import React from 'react';

function CandidateDetailsSidebar({ user }) {
    const {
        experience,
        hourlyRate,
        language = [],
        mobile,
        email,
        website,
        socialMedia: { facebook, linkedin } = {},
    } = user || {};

    return (
        <div className="border rounded-lg p-8">
            <h3 className="text-xl text-secondary font-bold">Overview</h3>
            <div className="divider" />
            <div className="text-accent">
                <div className="flex justify-between text-sm my-4">
                    <p className="font-bold">Experience</p>
                    <p>{experience || '2 Years'}</p>
                </div>
                <div className="flex justify-between text-sm my-4">
                    <p className="font-bold">Hourly Rate:</p>
                    <p>${hourlyRate || '25'}</p>
                </div>
                <div className="flex justify-between text-sm my-4">
                    <p className="font-bold">Language:</p>
                    <p>Bangla, English</p>
                </div>
                <div className="flex justify-between text-sm my-4">
                    <p className="font-bold">Location:</p>
                    <p>{language.join(', ')}</p>
                </div>
                <div className="flex justify-between text-sm my-4">
                    <p className="font-bold">Phone:</p>
                    <p>{mobile || '01254865254'}</p>
                </div>
                <div className="flex justify-between text-sm my-4">
                    <p className="font-bold">Email:</p>
                    <p>{email}</p>
                </div>
                <div className="flex justify-between text-sm my-4">
                    <p className="font-bold">Website:</p>
                    <a
                        href={website || '/'}
                        target="_blank"
                        rel="noreferrer"
                        className="border-b border-b-black hover:text-primary"
                    >
                        Visit Website
                    </a>
                </div>
                <div className="flex justify-between text-sm my-4">
                    <p className="font-bold">Social Media:</p>
                    <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto gap-2">
                        <a
                            href={facebook}
                            target="_blank"
                            className="text-accent hover:text-primary"
                            rel="noreferrer"
                        >
                            <svg
                                fill="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                            </svg>
                        </a>
                        <a
                            href={linkedin}
                            target="_blank"
                            className="ml-3 text-accent hover:text-primary"
                            rel="noreferrer"
                        >
                            <svg
                                fill="currentColor"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="0"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="none"
                                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                />
                                <circle cx="4" cy="4" r="2" stroke="none" />
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
            <div className="text-center mt-6">
                <p className="bg-info text-primary text-sm p-3 rounded hover:text-white hover:bg-primary hover:cursor-pointer">
                    Send Message
                </p>
            </div>
        </div>
    );
}

export default CandidateDetailsSidebar;
