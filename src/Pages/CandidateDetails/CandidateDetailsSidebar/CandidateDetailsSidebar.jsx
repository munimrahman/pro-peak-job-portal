import React from 'react';

function CandidateDetailsSidebar() {
    return (
        <div className="border rounded-lg p-8">
            <h3 className="text-xl text-secondary font-bold">Overview</h3>
            <div className="divider" />
            <div className="text-accent">
                <div className="flex justify-between text-sm my-4">
                    <p className="font-bold">Experience</p>
                    <p>2 Years</p>
                </div>
                <div className="flex justify-between text-sm my-4">
                    <p className="font-bold">Hourly Rate:</p>
                    <p>$25</p>
                </div>
                <div className="flex justify-between text-sm my-4">
                    <p className="font-bold">Language:</p>
                    <p>Bangla, English</p>
                </div>
                <div className="flex justify-between text-sm my-4">
                    <p className="font-bold">Location:</p>
                    <p>Dhaka, Bangladesh</p>
                </div>
                <div className="flex justify-between text-sm my-4">
                    <p className="font-bold">Phone:</p>
                    <p>985415478</p>
                </div>
                <div className="flex justify-between text-sm my-4">
                    <p className="font-bold">Email:</p>
                    <p>comapany@gmail.com</p>
                </div>
                <div className="flex justify-between text-sm my-4">
                    <p className="font-bold">Website:</p>
                    <p>Visit Website</p>
                </div>
                <div className="flex justify-between text-sm my-4">
                    <p className="font-bold">Social Media:</p>
                    <p>Facebook, LinkedIn</p>
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
