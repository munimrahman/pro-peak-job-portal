import React from 'react';
import { ScrollRestoration, useParams } from 'react-router-dom';
import blogCover from '../../../assets/blog-cover.png';
import { useGetSingleBlogQuery } from '../../../features/blogs/blogsApi';
import SubscribeBox from '../../Shared/SubscribeBox/SubscribeBox';
import BlogPost from '../BlogPost/BlogPost';

function BlogDetails() {
    const { id } = useParams();
    const { data: { blog } = {} } = useGetSingleBlogQuery(id);

    const { coverPhoto } = blog || {};
    return (
        <div className="">
            <div className="blog-details">
                <img src={coverPhoto || blogCover} alt="" className="max-h-96 w-full" />
            </div>
            <div className="max-w-[1115px] mx-auto relative lg:-top-36 lg:-mb-36">
                <BlogPost blog={blog} />
                <SubscribeBox />
            </div>
            <ScrollRestoration />
        </div>
    );
}

export default BlogDetails;
