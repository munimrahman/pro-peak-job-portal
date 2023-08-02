import React from 'react';
import { Link } from 'react-router-dom';
import ButtonInfo from '../../../Components/ButtonInfo/ButtonInfo';

function MeetHiringTeam({ jobPost }) {
    const {
        hiringManagerId: {
            _id,
            name,
            designation,
            profilePhoto,
            socialMedia: { facebook = '', linkedin = '', twitter = '' } = {},
        } = {},
    } = jobPost || {};

    return (
        <div className="border rounded-lg p-8 mt-8">
            <h3 className="text-xl text-secondary font-bold">Meet Hiring Manager</h3>
            <div className="divider mt-2" />
            <div className="flex items-start">
                <div className="avatar">
                    <div className="w-14 rounded-full">
                        <img src={profilePhoto} alt="" />
                    </div>
                </div>
                <div className="ml-3">
                    <h4 className="text-secondary font-bold">{name}</h4>
                    <p className="text-accent text-xs mt-1">{designation}</p>
                </div>
            </div>
            <div className="mt-4 flex justify-center items-center gap-3">
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
                    href={twitter}
                    target="_blank"
                    className="ml-3 text-accent hover:text-primary"
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
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
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
            </div>
            <Link
                to={`/recruiter-details/${_id}`}
                className="mt-4 bg-info text-primary rounded-md p-3 text-center text-sm hover:cursor-pointer hover:bg-primary hover:text-white block"
            >
                View Profile
            </Link>
            <div className="mt-4">
                <h4 className="text-secondary font-bold my-4">Send Message</h4>
                <form>
                    <textarea
                        className="textarea textarea-bordered w-full focus:outline-none"
                        placeholder="Your Message . . ."
                    />

                    <ButtonInfo className="mt-2 px-3">SEND</ButtonInfo>
                </form>
            </div>
        </div>
    );
}

export default MeetHiringTeam;
