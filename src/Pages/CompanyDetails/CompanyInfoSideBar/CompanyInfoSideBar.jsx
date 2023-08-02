import React from 'react';

function CompanyInfoSideBar({ company }) {
    const {
        name,
        logo,
        industry,
        location,
        companySize,
        foundedIn,
        phone,
        email,
        facebook,
        linkedin,
    } = company || {};
    return (
        <div className="border rounded-lg p-8">
            <h3 className="text-xl text-secondary font-bold">Company Information</h3>
            <div className="divider mt-2" />
            <div className="flex">
                <img src={logo} alt="" className="w-14 h-14 rounded-lg" />
                <div className="ml-4">
                    <h3 className="text-xl font-bold text-secondary hover:text-primary">{name}</h3>
                    <span className="text-xs text-[#a0abb8]">
                        <i className="fas fa-map-marker-alt mr-1" />
                        {location}
                    </span>
                </div>
            </div>
            <div className="divider" />
            <div className="text-accent">
                <div className="flex justify-between text-sm my-4">
                    <p className="font-bold">Primary industry:</p>
                    <p>{industry}</p>
                </div>
                <div className="flex justify-between text-sm my-4">
                    <p className="font-bold">Company size:</p>
                    <p>{companySize}</p>
                </div>

                <div className="flex justify-between text-sm my-4">
                    <p className="font-bold">Founded In:</p>
                    <p>{foundedIn}</p>
                </div>
                <div className="flex justify-between text-sm my-4">
                    <p className="font-bold">Phone:</p>
                    <p>{phone}</p>
                </div>
                <div className="flex justify-between text-sm my-4">
                    <p className="font-bold">Email:</p>
                    <p>{email}</p>
                </div>
                <div className="flex justify-between text-sm my-4">
                    <p className="font-bold">Location:</p>
                    <p>{location}</p>
                </div>
                <div className="flex justify-between text-sm my-4">
                    <p className="font-bold">Social Media:</p>
                    <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
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
        </div>
    );
}

export default CompanyInfoSideBar;
