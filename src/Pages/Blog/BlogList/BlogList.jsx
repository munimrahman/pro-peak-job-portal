import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import FetchError from '../../../Components/FetchError/FetchError';
import JobCardSkeleton from '../../../Components/LoadingElements/JobCardSkeleton';
import NoDataFound from '../../../Components/NoDataFound/NoDataFound';
import { useGetBlogsQuery } from '../../../features/blogs/blogsApi';
import BlogCard from '../../Shared/BlogCard/BlogCard';
import Pagination from '../../Shared/Pagination/Pagination';

function BlogList() {
    const [page, setPage] = useState(1);
    const limit = 6;

    const { tagFilter, authorFilter, blogSearch } = useSelector((state) => state.filter.blog);

    // setup query for fetch data from api
    let query = '';
    if (tagFilter.length > 0) {
        query += `tags=${tagFilter.join(',').trim()}`;
    }
    if (authorFilter.length > 0) {
        if (query.length > 0) query += '&';
        query += `author=${authorFilter.join(',').trim()}`;
    }
    if (blogSearch.length > 0) {
        if (query.length > 0) query += '&';
        query += `searchQuery=${blogSearch}`;
    }
    if (page) {
        if (query.length > 0) query += '&';
        query += `page=${page}`;
    }
    if (limit) {
        if (query.length > 0) query += '&';
        query += `limit=${limit}`;
    }

    const {
        data: { data: { totalCount, blogs } = {} } = {},
        isLoading,
        isSuccess,
        isError,
    } = useGetBlogsQuery(query);

    // pagination calculation
    let totalPage;
    if (!isLoading && !isError && totalCount) {
        totalPage = Math.ceil(totalCount / limit);
    }

    let low = page * limit - limit + 1;
    let high = page * limit;
    if (high > totalCount) high = totalCount;
    if (low > totalCount) {
        low = 0;
        high = 0;
    }

    // blog list content
    let content = null;
    if (isLoading) {
        content = (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <JobCardSkeleton />
                <JobCardSkeleton />
                <JobCardSkeleton />
                <JobCardSkeleton />
            </div>
        );
    } else if (isSuccess && !isError && blogs.length === 0) {
        content = <NoDataFound />;
    } else if (isSuccess && !isError && blogs.length > 0) {
        content = (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {blogs.map((blog) => (
                    <BlogCard key={blog._id} blog={blog} />
                ))}
            </div>
        );
    } else if (isError) {
        content = <FetchError />;
    }

    return (
        <>
            <h2 className="text-4xl text-secondary font-bold">Latest Posts</h2>
            <p className="text-lg text-neutral my-2">Do not miss the trending news</p>
            {content}

            {totalPage > 1 && (
                <div className="mt-8">
                    <Pagination totalPage={totalPage} currentPage={page} setPage={setPage} />
                </div>
            )}
        </>
    );
}

export default BlogList;
