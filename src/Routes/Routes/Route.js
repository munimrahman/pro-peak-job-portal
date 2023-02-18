import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../Layout/DashboardLayout';
import Main from '../../Layout/Main';
import RecruiterDashboardLayout from '../../Layout/RecruiterDashboardLayout';
import About from '../../Pages/About/About/About';
import Blog from '../../Pages/Blog/Blog/Blog';
import BlogDetails from '../../Pages/BlogDetails/BlogDetails/BlogDetails';
import CandidateDetails from '../../Pages/CandidateDetails/CandidateDetails/CandidateDetails';
import CandidateList from '../../Pages/CandidateList/CandidateList/CandidateList';
import CompanyDetails from '../../Pages/CompanyDetails/CompanyDetails/CompanyDetails';
import CompanyList from '../../Pages/CompanyList/CompanyList/CompanyList';
import AppliedJobs from '../../Pages/Dashboard/AppliedJobs/AppliedJobs';
import BlogDashboard from '../../Pages/Dashboard/BlogDashboard/BlogDashboard/BlogDashboard';
import CandidateProfile from '../../Pages/Dashboard/CandidateProfile/CandidateProfile';
import CompanyProfile from '../../Pages/Dashboard/CompanyProfile/CompanyProfile';
import DashboardCandidate from '../../Pages/Dashboard/DashboardCandidate/DashboardCandidate';
import DashboardRecruiter from '../../Pages/Dashboard/DashboardRecruiter/DashboardRecruiter';
import Inbox from '../../Pages/Dashboard/Inbox/Inbox';
import ManageJobs from '../../Pages/Dashboard/ManageJobs/ManageJobs';
import RecruiterProfile from '../../Pages/Dashboard/RecruiterProfile/RecruiterProfile';
import SkillTest from '../../Pages/Dashboard/SkillTest/SkillTest';
import Home from '../../Pages/Home/Home/Home';
import JobDetails from '../../Pages/JobDetails/JobDetails/JobDetails';
import JobList from '../../Pages/JobList/JobList/JobList';
import RecruiterDetails from '../../Pages/RecruiterDetails/RecruiterDetails/RecruiterDetails';
import ComingSoon from '../../Pages/Shared/ComingSoon/ComingSoon';
import DisplayError from '../../Pages/Shared/ErrorPage/DisplayError';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <DisplayError />,
    },
    {
        path: '/',
        element: <Main />,
        errorElement: <DisplayError />,
        children: [
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/find-jobs',
                element: <JobList />,
            },
            {
                path: '/job-details',
                element: <JobDetails />,
            },
            {
                path: '/company-list',
                element: <CompanyList />,
            },
            {
                path: '/company-details',
                element: <CompanyDetails />,
            },
            {
                path: '/recruiter-details',
                element: <RecruiterDetails />,
            },
            {
                path: '/candidate-list',
                element: <CandidateList />,
            },
            {
                path: '/candidate-details',
                element: <CandidateDetails />,
            },
            {
                path: '/candidate-profile',
                element: <CandidateProfile />,
            },
            {
                path: '/blogs',
                element: <Blog />,
            },
            {
                path: '/blog-details',
                element: <BlogDetails />,
            },
            {
                path: '/pricing',
                element: <ComingSoon />,
            },
        ],
    },

    {
        path: '/dashboard',
        element: <DashboardLayout />,
        errorElement: <DisplayError />,
        children: [
            {
                path: '/dashboard',
                element: <DashboardCandidate />,
            },
            {
                path: '/dashboard/candidate-profile',
                element: <CandidateProfile />,
            },
            {
                path: '/dashboard/inbox',
                element: <Inbox />,
            },
            {
                path: '/dashboard/applied-jobs',
                element: <AppliedJobs />,
            },
            {
                path: '/dashboard/skill-test',
                element: <SkillTest />,
            },
            {
                path: '/dashboard/blog',
                element: <BlogDashboard />,
            },
        ],
    },
    {
        path: '/recruiter-dashboard',
        element: <RecruiterDashboardLayout />,
        errorElement: <DisplayError />,
        children: [
            {
                path: '/recruiter-dashboard',
                element: <DashboardRecruiter />,
            },
            {
                path: '/recruiter-dashboard/recruiter-profile',
                element: <RecruiterProfile />,
            },
            {
                path: '/recruiter-dashboard/company-profile',
                element: <CompanyProfile />,
            },
            {
                path: '/recruiter-dashboard/inbox',
                element: <Inbox />,
            },
            {
                path: '/recruiter-dashboard/manage-jobs',
                element: <ManageJobs />,
            },
            {
                path: '/recruiter-dashboard/blog',
                element: <BlogDashboard />,
            },
        ],
    },
]);

export default router;
