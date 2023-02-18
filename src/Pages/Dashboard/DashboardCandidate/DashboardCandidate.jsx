import React from 'react';
import ButtonInfo from '../../../Components/ButtonInfo/ButtonInfo';
import './DashboardCandidate.css';

function DashboardCandidate() {
    return (
        <div className="m-5">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-6 rounded-xl bg-white welcome p-4 shadow">
                    <h1 className="text-secondary text-xl mb-2">Howdy, Jhon Snow! 🎉</h1>
                    <p className="text-neutral text-sm">
                        Welcome, Your profile is <strong>100%</strong> completed.
                    </p>
                    <p className="text-neutral text-sm mb-3">Take skill tests and get certified.</p>
                    <ButtonInfo className="px-3">Take Test</ButtonInfo>
                </div>
                <div className="md:col-span-3">
                    <div className="stats shadow text-center w-full h-full">
                        <div className="stat">
                            <div className="stat-title text-accent">Total Profile Views</div>
                            <div className="stat-value">89,400</div>
                            <div className="stat-desc">21% more than last month</div>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-3">
                    <div className="stats shadow text-center w-full h-full">
                        <div className="stat">
                            <div className="stat-title text-accent">Total Applied Jobs</div>
                            <div className="stat-value">89,400</div>
                            <div className="stat-desc">07% more than last month</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap--8 mt-5">
                <div className="col-span-6">
                    <h1>Chart</h1>
                </div>
                <div className="col-span-6 shadow p-5 rounded-xl">
                    <h3 className="text-secondary text-xl">Notifications</h3>
                    <div className="divider my-2" />

                    <div className="flex items-start mb-3">
                        <i className="fas fa-bell text-xl text-secondary mt-1 mr-2" />
                        <p className="text-accent">
                            Henry Wilson applied for a job Product Designer Henry Wilson applied for
                            a job Product Designer
                        </p>
                    </div>
                    <div className="flex items-start mb-3">
                        <i className="fas fa-bell text-xl text-secondary mt-1 mr-2" />
                        <p className="text-accent">
                            Henry Wilson applied for a job Product Designer Henry Wilson applied for
                            a job Product Designer
                        </p>
                    </div>
                    <div className="flex items-start mb-3">
                        <i className="fas fa-bell text-xl text-secondary mt-1 mr-2" />
                        <p className="text-accent">
                            Henry Wilson applied for a job Product Designer Henry Wilson applied for
                            a job Product Designer
                        </p>
                    </div>
                    <div className="flex items-start mb-3">
                        <i className="fas fa-bell text-xl text-secondary mt-1 mr-2" />
                        <p className="text-accent">
                            Henry Wilson applied for a job Product Designer Henry Wilson applied for
                            a job Product Designer
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardCandidate;
