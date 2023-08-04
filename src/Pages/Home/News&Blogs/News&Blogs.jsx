import React from 'react';
import JobCardSkeleton from '../../../Components/LoadingElements/JobCardSkeleton';
import { useGetBlogsQuery } from '../../../features/blogs/blogsApi';
import BlogCard from '../../Shared/BlogCard/BlogCard';

function NewsBlogs() {
    const { data: { data: { blogs = [] } = {} } = {}, isLoading } = useGetBlogsQuery('limit=3');

    let content = null;
    if (isLoading) {
        content = (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                <JobCardSkeleton />
                <JobCardSkeleton />
                <JobCardSkeleton />
            </div>
        );
    } else {
        content = (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                {blogs.map((blog) => (
                    <BlogCard key={blog._id} blog={blog} />
                ))}
            </div>
        );
    }
    return (
        <div className="mt-16">
            <h1 className="text-4xl text-secondary text-center font-bold">Latest News & Blogs</h1>
            <p className="text-lg text-neutral text-center my-2 md:w-6/12 md:mx-auto">
                Get the latest news, updates and tips
            </p>
            {content}
        </div>
    );
}

export default NewsBlogs;
