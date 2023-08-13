import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ScrollRestoration } from 'react-router-dom';
import FeaturedBlogSkeleton from '../../../Components/LoadingElements/FeaturedBlogSkeleton';
import { useGetSingleBlogQuery } from '../../../features/blogs/blogsApi';
import { blogSearch } from '../../../features/filter/filterSlice';
import useTitle from '../../../hooks/useTitle';
import SubscribeBox from '../../Shared/SubscribeBox/SubscribeBox';
import WeHiring from '../../Shared/WeHiring/WeHiring';
import BlogHeader from '../BlogHeader/BlogHeader';
import BlogList from '../BlogList/BlogList';
import FeaturedBlog from '../FeaturedBlog/FeaturedBlog';
import TrendingBlogs from '../TrendingBlogs/TrendingBlogs';
import './Blog.css';

function Blog() {
    const [inputText, setInputText] = useState('');
    const dispatch = useDispatch();
    useTitle('Blogs | Pro Peak');
    const {
        data: { blog = {} } = {},
        isLoading,
        isSuccess,
        isError,
    } = useGetSingleBlogQuery('64ca24d277173d6c4bd8f69a');
    // TODO: change static blog id
    useEffect(() => {
        const delayId = setTimeout(() => {
            dispatch(blogSearch(inputText));
        }, 500);

        return () => clearTimeout(delayId);
    }, [dispatch, inputText]);

    let featuredBlog = null;
    if (isLoading) {
        featuredBlog = <FeaturedBlogSkeleton />;
    } else if (isSuccess && !isError) {
        featuredBlog = <FeaturedBlog blog={blog} />;
    }

    return (
        <>
            <BlogHeader />
            <div className="max-w-[1115px] mx-auto">
                {featuredBlog}
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
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                            />
                            <i className="fas fa-search text-accent absolute bottom-3 right-6 text-lg" />
                        </div>
                        <TrendingBlogs />
                        <WeHiring />
                    </div>
                </div>
                <SubscribeBox />
                <ScrollRestoration />
            </div>
        </>
    );
}

export default Blog;
