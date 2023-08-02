import React from 'react';
import FetchError from '../../../Components/FetchError/FetchError';
import TrendingBlogSkeleton from '../../../Components/LoadingElements/TrendingBlogSkeleton';
import NoDataFound from '../../../Components/NoDataFound/NoDataFound';
import { useGetBlogsQuery } from '../../../features/blogs/blogsApi';
import TrendingCard from './TrendingCard';

function TrendingBlogs() {
    // setup query for fetch data from api

    const {
        data: { data: { blogs } = {} } = {},
        isLoading,
        isSuccess,
        isError,
    } = useGetBlogsQuery('limit=6&sortBy=title');

    // company list content
    let content = null;
    if (isLoading) {
        content = (
            <div className="space-y-2">
                <TrendingBlogSkeleton />
                <TrendingBlogSkeleton />
                <TrendingBlogSkeleton />
                <TrendingBlogSkeleton />
                <TrendingBlogSkeleton />
                <TrendingBlogSkeleton />
            </div>
        );
    } else if (isSuccess && !isError && blogs.length === 0) {
        content = <NoDataFound />;
    } else if (isSuccess && !isError && blogs.length > 0) {
        content = (
            <>
                {blogs.map((blog) => (
                    <TrendingCard key={blog._id} blog={blog} />
                ))}
            </>
        );
    } else if (isError) {
        content = <FetchError />;
    }
    return (
        <div className="border px-5 rounded-md mt-8">
            <h3 className="text-secondary text-xl font-bold mt-7">Trending Now</h3>
            <div className="divider mt-3" />
            {content}
        </div>
    );
}

export default TrendingBlogs;
