import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../Layout/DashboardLayout';
import Main from '../../Layout/Main';
import About from '../../Pages/About/About/About';
import Blog from '../../Pages/Blog/Blog/Blog';
import BlogDetails from '../../Pages/BlogDetails/BlogDetails/BlogDetails';
import CandidateDetails from '../../Pages/CandidateDetails/CandidateDetails/CandidateDetails';
import CandidateList from '../../Pages/CandidateList/CandidateList/CandidateList';
import CandidateProfile from '../../Pages/CandidateProfile/CandidateProfile/CandidateProfile';
import CompanyDetails from '../../Pages/CompanyDetails/CompanyDetails/CompanyDetails';
import CompanyList from '../../Pages/CompanyList/CompanyList/CompanyList';
import DashboardCandidate from '../../Pages/Dashboard/DashboardCandidate/DashboardCandidate';
import Home from '../../Pages/Home/Home/Home';
import JobDetails from '../../Pages/JobDetails/JobDetails/JobDetails';
import JobList from '../../Pages/JobList/JobList/JobList';
import RecruiterDetails from '../../Pages/RecruiterDetails/RecruiterDetails/RecruiterDetails';
import RecruiterProfile from '../../Pages/RecruiterProfile/RecruiterProfile/RecruiterProfile';
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
                path: '/recruiter-profile',
                element: <RecruiterProfile />,
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
            { path: '/dashboard', element: <DashboardCandidate /> },
            { path: '/dashboard/candidate-profile', element: <CandidateProfile /> },
        ],
    },
]);

export default router;
