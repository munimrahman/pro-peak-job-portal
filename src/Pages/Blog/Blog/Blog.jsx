import React from 'react';
import SubscribeBox from '../../Shared/SubscribeBox/SubscribeBox';
import WeHiring from '../../Shared/WeHiring/WeHiring';
import BlogHeader from '../BlogHeader/BlogHeader';
import BlogList from '../BlogList/BlogList';
import FeaturedBlog from '../FeaturedBlog/FeaturedBlog';
import TrendingBlogs from '../TrendingBlogs/TrendingBlogs';
import './Blog.css';

function Blog() {
    return (
        <>
            <BlogHeader />
            <div className="max-w-[1115px] mx-auto">
                <FeaturedBlog />
                <div className="grid grid-cols-1 gap-8 md:grid-cols-12 my-8">
                    <div className="md:col-span-8">
                        <BlogList />
                    </div>
                    <div className="md:col-span-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search here . . ."
                                className="input input-bordered focus:outline-none w-full"
                            />
                            <i className="fas fa-search text-accent absolute bottom-3 right-6 text-lg" />
                        </div>
                        <TrendingBlogs />
                        <WeHiring />
                    </div>
                </div>
                <SubscribeBox />
            </div>
        </>
    );
}

export default Blog;
