import React from 'react';
import BlogCard from '../../Shared/BlogCard/BlogCard';
import Pagination from '../../Shared/Pagination/Pagination';

function BlogList() {
    return (
        <>
            <h2 className="text-4xl text-secondary font-bold">Latest Posts</h2>
            <p className="text-lg text-neutral my-2">Do not miss the trending news</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>

            <div className="mt-8">
                <Pagination />
            </div>
        </>
    );
}

export default BlogList;
