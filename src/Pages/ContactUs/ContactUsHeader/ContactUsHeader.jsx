import React from 'react';
import { Link } from 'react-router-dom';

function ContactUsHeader() {
    return (
        <div className="blog-header mb-10">
            <div className="flex justify-between items-end max-w-[1115px] mx-auto py-14">
                <div className="">
                    <p className="text-secondary text-4xl font-bold">Contact Us</p>
                    <p className="text-neutral mt-2">Get the latest news, updates and tips</p>
                </div>
                <div className="text-sm breadcrumbs">
                    <ul className="bg-white px-2 py-2 rounded text-secondary">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ContactUsHeader;
