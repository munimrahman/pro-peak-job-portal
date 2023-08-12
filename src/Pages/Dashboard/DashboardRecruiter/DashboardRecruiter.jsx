import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import ButtonInfo from '../../../Components/ButtonInfo/ButtonInfo';

function DashboardRecruiter() {
    const { user: { name } = {} } = useSelector((state) => state.auth);
    const data = [
        { name: 'Jan', views: 40, pv: 2400, amt: 2400 },
        { name: 'Feb', views: 30, pv: 2400, amt: 2400 },
        { name: 'Mar', views: 40, pv: 2400, amt: 2400 },
        { name: 'Apr', views: 70, pv: 2400, amt: 2400 },
        { name: 'May', views: 80, pv: 2400, amt: 2400 },
        { name: 'Jun', views: 50, pv: 2400, amt: 2400 },
    ];
    return (
        <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-6 rounded-xl bg-white welcome p-4 shadow">
                    <h1 className="text-secondary text-xl mb-2">Howdy, {name}! 🎉</h1>
                    <p className="text-neutral text-sm">
                        Welcome, Your profile is <strong>100%</strong> completed.
                    </p>
                    <p className="text-neutral text-sm mb-3">Take skill tests and get certified.</p>
                    <Link to="/skill-assessment">
                        <ButtonInfo className="px-3">Post a Job</ButtonInfo>
                    </Link>
                </div>
                <div className="md:col-span-3">
                    <div className="stats shadow text-center w-full h-full">
                        <div className="stat">
                            <div className="stat-title text-accent">Total Profile Views</div>
                            <div className="stat-value text-primary">841</div>
                            <div className="stat-desc">21% more than last month</div>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-3">
                    <div className="stats shadow text-center w-full h-full">
                        <div className="stat">
                            <div className="stat-title text-accent">Total Applied Jobs</div>
                            <div className="stat-value text-primary">34</div>
                            <div className="stat-desc">07% more than last month</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-8">
                <div className="col-span-6 p-5 shadow rounded-xl max-h-96 bg-white">
                    <h1 className="text-secondary text-xl">Last 6 Months Profile Views</h1>
                    <div className="divider my-2" />
                    <ResponsiveContainer width="100%" height="85%">
                        <LineChart
                            // width={500}
                            // height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 35,
                                left: 0,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="views" stroke="#373ae6" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="col-span-6 shadow p-5 rounded-xl bg-white">
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

export default DashboardRecruiter;
