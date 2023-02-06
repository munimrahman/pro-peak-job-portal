import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import About from '../../Pages/About/About/About';
import CandidateDetails from '../../Pages/CandidateDetails/CandidateDetails/CandidateDetails';
import CandidateList from '../../Pages/CandidateList/CandidateList/CandidateList';
import CompanyDetails from '../../Pages/CompanyDetails/CompanyDetails/CompanyDetails';
import CompanyList from '../../Pages/CompanyList/CompanyList/CompanyList';
import Home from '../../Pages/Home/Home/Home';
import JobDetails from '../../Pages/JobDetails/JobDetails/JobDetails';
import JobList from '../../Pages/JobList/JobList/JobList';
import RecruiterDetails from '../../Pages/RecruiterDetails/RecruiterDetails/RecruiterDetails';
import RecruiterList from '../../Pages/RecruiterList/RecruiterList/RecruiterList';
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
                path: '/jobs',
                element: <JobList />,
            },
            {
                path: 'job-details',
                element: <JobDetails />,
            },
            {
                path: '/company-list',
                element: <CompanyList />,
            },
            {
                path: 'company-details',
                element: <CompanyDetails />,
            },
            {
                path: 'recruiters',
                element: <RecruiterList />,
            },
            {
                path: '/recruiter-details',
                element: <RecruiterDetails />,
            },
            {
                path: 'candidate-list',
                element: <CandidateList />,
            },
            {
                path: 'candidate-details',
                element: <CandidateDetails />,
            },
        ],
    },
]);

export default router;
