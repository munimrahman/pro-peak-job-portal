import { createBrowserRouter } from 'react-router-dom';
import BlogDashboardLayout from '../../Layout/BlogDashboardLayout';
import DashboardLayout from '../../Layout/DashboardLayout';
import Main from '../../Layout/Main';
import NestedLayout from '../../Layout/NestedLayout';
import RecruiterDashboardLayout from '../../Layout/RecruiterDashboardLayout';
import About from '../../Pages/About/About/About';
import FormTest from '../../Pages/About/FormTest/FormTest';
import AssessmentQuiz from '../../Pages/AssessmentQuiz/AssessmentQuiz.jsx/AssessmentQuiz';
import AssessmentResult from '../../Pages/AssessmentResult/AssessmentResult';
import Blog from '../../Pages/Blog/Blog/Blog';
import BlogDetails from '../../Pages/BlogDetails/BlogDetails/BlogDetails';
import CandidateDetails from '../../Pages/CandidateDetails/CandidateDetails/CandidateDetails';
import CandidateList from '../../Pages/CandidateList/CandidateList/CandidateList';
import CompanyDetails from '../../Pages/CompanyDetails/CompanyDetails/CompanyDetails';
import CompanyList from '../../Pages/CompanyList/CompanyList/CompanyList';
import ContactUs from '../../Pages/ContactUs/ContactUs/ContactUs';
import AppliedJobs from '../../Pages/Dashboard/AppliedJobs/AppliedJobs';
import BlogDashboard from '../../Pages/Dashboard/BlogDashboard/BlogDashboard';
import PostBlog from '../../Pages/Dashboard/BlogDashboard/PostBlog';
import UpdateBlog from '../../Pages/Dashboard/BlogDashboard/UpdateBlog';
import AddWorkExperience from '../../Pages/Dashboard/CandidateProfile/AddWorkExperience';
import CandidateProfile from '../../Pages/Dashboard/CandidateProfile/CandidateProfile';
import ChangePassword from '../../Pages/Dashboard/CandidateProfile/ChangePassword';
import EditProfile from '../../Pages/Dashboard/CandidateProfile/EditProfile';
import CompanyProfile from '../../Pages/Dashboard/CompanyProfile/CompanyProfile';
import UpdateCompanyProfile from '../../Pages/Dashboard/CompanyProfile/UpdateCompanyProfile';
import DashboardCandidate from '../../Pages/Dashboard/DashboardCandidate/DashboardCandidate';
import DashboardRecruiter from '../../Pages/Dashboard/DashboardRecruiter/DashboardRecruiter';
import Inbox from '../../Pages/Dashboard/Inbox/Inbox';
import ManageJobs from '../../Pages/Dashboard/ManageJobs/ManageJobs';
import PostJob from '../../Pages/Dashboard/ManageJobs/PostJob';
import UpdateJob from '../../Pages/Dashboard/ManageJobs/UpdateJob';
import ChangeRecruiterPassword from '../../Pages/Dashboard/RecruiterProfile/ChangeRecruiterPassword';
import EditRecruiterProfile from '../../Pages/Dashboard/RecruiterProfile/EditRecruiterProfile';
import RecruiterProfile from '../../Pages/Dashboard/RecruiterProfile/RecruiterProfile';
import SkillTest from '../../Pages/Dashboard/SkillTest/SkillTest';
import Home from '../../Pages/Home/Home/Home';
import JobDetails from '../../Pages/JobDetails/JobDetails/JobDetails';
import JobList from '../../Pages/JobList/JobList/JobList';
import LogIn from '../../Pages/LogIn/LogIn';
import ProPricing from '../../Pages/ProPricing/ProPricing/ProPricing';
import RecruiterDetails from '../../Pages/RecruiterDetails/RecruiterDetails/RecruiterDetails';
import DisplayError from '../../Pages/Shared/ErrorPage/DisplayError';
import SignUp from '../../Pages/SignUp/SignUp';
import SkillAssessment from '../../Pages/SkillAssessment/SkillAssessment/SkillAssessment';
import CandidateRoute from '../CandidateRoute/CandidateRoute';
import PublicRoute from '../PublicRoute/PublicRoute';
import RecruiterRoute from '../RecruiterRoute/RecruiterRoute';

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
                path: '/log-in',
                element: (
                    <PublicRoute>
                        <LogIn />
                    </PublicRoute>
                ),
            },
            {
                path: '/sign-up',
                element: (
                    <PublicRoute>
                        <SignUp />
                    </PublicRoute>
                ),
            },
            {
                path: '/find-jobs',
                element: <JobList />,
            },
            {
                path: '/find-jobs/:id',
                element: <JobDetails />,
            },
            {
                path: '/company-list',
                element: <CompanyList />,
            },
            {
                path: '/company-list/:id',
                element: <CompanyDetails />,
            },
            {
                path: '/recruiter-details/:id',
                element: <RecruiterDetails />,
            },
            {
                path: '/candidate-list',
                element: <CandidateList />,
            },
            {
                path: '/candidate-list/:id',
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
                path: '/blogs/:id',
                element: <BlogDetails />,
            },
            {
                path: '/skill-assessment',
                element: <SkillAssessment />,
            },
            {
                path: '/quiz/:id',
                element: <AssessmentQuiz />,
            },
            {
                path: '/quiz-result',
                element: <AssessmentResult />,
            },
            {
                path: '/about',
                element: <About />,
            },
            // TODO: delete
            {
                path: '/file-upload',
                element: <FormTest />,
            },
            // TODO: delete
            {
                path: '/contact',
                element: <ContactUs />,
            },
            {
                path: '/pricing',
                element: <ProPricing />,
            },
        ],
    },
    {
        path: '/dashboard',
        element: (
            <CandidateRoute>
                <DashboardLayout />
            </CandidateRoute>
        ),
        errorElement: <DisplayError />,
        children: [
            {
                path: '/dashboard/candidate',
                element: <DashboardCandidate />,
            },
            {
                path: '/dashboard/candidate-profile',
                element: <NestedLayout />,
                children: [
                    {
                        path: '/dashboard/candidate-profile',
                        element: <CandidateProfile />,
                    },
                    {
                        path: '/dashboard/candidate-profile/edit',
                        element: <EditProfile />,
                    },
                    {
                        path: '/dashboard/candidate-profile/change-password',
                        element: <ChangePassword />,
                    },
                    {
                        path: '/dashboard/candidate-profile/add-experience',
                        element: <AddWorkExperience />,
                    },
                ],
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
                element: <BlogDashboardLayout />,
                children: [
                    {
                        path: '/dashboard/blog',
                        element: <BlogDashboard />,
                    },
                    {
                        path: '/dashboard/blog/post-new-blog',
                        element: <PostBlog />,
                    },
                    {
                        path: '/dashboard/blog/update-blog',
                        element: <UpdateBlog />,
                    },
                ],
            },
        ],
    },
    {
        path: '/recruiter-dashboard',
        element: (
            <RecruiterRoute>
                <RecruiterDashboardLayout />
            </RecruiterRoute>
        ),
        errorElement: <DisplayError />,
        children: [
            {
                path: '/recruiter-dashboard/recruiter',
                element: <DashboardRecruiter />,
            },
            {
                path: '/recruiter-dashboard/recruiter-profile',
                element: <NestedLayout />,
                children: [
                    {
                        path: '/recruiter-dashboard/recruiter-profile',
                        element: <RecruiterProfile />,
                    },
                    {
                        path: '/recruiter-dashboard/recruiter-profile/edit',
                        element: <EditRecruiterProfile />,
                    },
                    {
                        path: '/recruiter-dashboard/recruiter-profile/change-password',
                        element: <ChangeRecruiterPassword />,
                    },
                ],
            },
            {
                path: '/recruiter-dashboard/company-profile',
                element: <NestedLayout />,
                children: [
                    {
                        path: '/recruiter-dashboard/company-profile',
                        element: <CompanyProfile />,
                    },
                    {
                        path: '/recruiter-dashboard/company-profile/edit',
                        element: <UpdateCompanyProfile />,
                    },
                ],
            },
            {
                path: '/recruiter-dashboard/inbox',
                element: <Inbox />,
            },
            {
                path: '/recruiter-dashboard/manage-jobs',
                element: <NestedLayout />,
                children: [
                    {
                        path: '/recruiter-dashboard/manage-jobs',
                        element: <ManageJobs />,
                    },
                    {
                        path: '/recruiter-dashboard/manage-jobs/post-new-job',
                        element: <PostJob />,
                    },
                    {
                        path: '/recruiter-dashboard/manage-jobs/update-job/:id',
                        element: <UpdateJob />,
                    },
                ],
            },
            {
                path: '/recruiter-dashboard/blog',
                element: <BlogDashboard />,
            },
        ],
    },
]);

export default router;
