/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import JobCardSkeleton from '../../../Components/LoadingElements/JobCardSkeleton';
// import img from '../../../assets/human.svg';
import { useGetJobsQuery } from '../../../features/jobPosts/jobPostApi';
import JobCardOne from '../../Shared/JobCardOne/JobCardOne';

function LatestJobs() {
    // const [category, setCategory] = useState('Software Development');
    const {
        data: { data: { jobs = [] } = {} } = {},
        isLoading,
        isSuccess,
        isError,
    } = useGetJobsQuery(`&limit=6&sortBy=-createdAt`);

    let listContent = null;

    if (isLoading) {
        listContent = (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <JobCardSkeleton />
                <JobCardSkeleton />
                <JobCardSkeleton />
            </div>
        );
    } else if (isSuccess && !isError && jobs.length > 0) {
        listContent = (
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 mt-5">
                {jobs.map((job) => (
                    <JobCardOne key={job._id} job={job} />
                ))}
            </div>
        );
    }

    return (
        <div className="mt-16">
            <h1 className="text-4xl text-secondary text-center font-bold">Latest Jobs Posts</h1>
            <p className="text-lg text-neutral text-center my-2 md:w-6/12 md:mx-auto">
                Explore the different types of available jobs to apply discover which is right for
                you.
            </p>
            {/* category */}
            {/* <div className="flex flex-wrap md:justify-center mt-5">
                <div
                    className={`flex items-center border hover:border-primary rounded-lg py-2 px-3 mx-1 my-1 hover:cursor-pointer hover:text-primary hover:shadow ${
                        category === 'Software Development' && 'border-primary text-primary'
                    }`}
                    onClick={() => setCategory('Software Development')}
                >
                    <img src={img} alt="" className="w-5" />
                    <span className="ml-2 text-xs font-bold">Software</span>
                </div>

                <div
                    className={`flex items-center border hover:border-primary rounded-lg py-2 px-3 mx-1 my-1 hover:cursor-pointer hover:text-primary hover:shadow ${
                        category === 'Marketing & Sales' && 'border-primary text-primary'
                    }`}
                    onClick={() => setCategory('Marketing & Sales')}
                >
                    <img src={img} alt="" className="w-5" />
                    <span className="ml-2 text-xs font-bold">Marketing & Sales</span>
                </div>
                <div
                    className={`flex items-center border hover:border-primary rounded-lg py-2 px-3 mx-1 my-1 hover:cursor-pointer hover:text-primary hover:shadow ${
                        category === 'Finance' && 'border-primary text-primary'
                    }`}
                    onClick={() => setCategory('Finance')}
                >
                    <img src={img} alt="" className="w-5" />
                    <span className="ml-2 text-xs font-bold">Finance</span>
                </div>
                <div
                    className={`flex items-center border hover:border-primary rounded-lg py-2 px-3 mx-1 my-1 hover:cursor-pointer hover:text-primary hover:shadow ${
                        category === 'Humane Resource' && 'border-primary text-primary'
                    }`}
                    onClick={() => setCategory('Humane Resource')}
                >
                    <img src={img} alt="" className="w-5" />
                    <span className="ml-2 text-xs font-bold">Humane Resource</span>
                </div>
                <div
                    className={`flex items-center border hover:border-primary rounded-lg py-2 px-3 mx-1 my-1 hover:cursor-pointer hover:text-primary hover:shadow ${
                        category === 'Retail & Products' && 'border-primary text-primary'
                    }`}
                    onClick={() => setCategory('Retail & Products')}
                >
                    <img src={img} alt="" className="w-5" />
                    <span className="ml-2 text-xs font-bold">Retail & Products</span>
                </div>
                <div
                    className={`flex items-center border hover:border-primary rounded-lg py-2 px-3 mx-1 my-1 hover:cursor-pointer hover:text-primary hover:shadow ${
                        category === 'listContent Writer' && 'border-primary text-primary'
                    }`}
                    onClick={() => setCategory('listContent Writer')}
                >
                    <img src={img} alt="" className="w-5" />
                    <span className="ml-2 text-xs font-bold">listContent Writer</span>
                </div>
            </div> */}

            {listContent}
        </div>
    );
}

export default LatestJobs;
