import React from 'react';
import blogCover from '../../../assets/blog-cover.png';
import BlogPost from '../BlogPost/BlogPost';

function BlogDetails() {
    return (
        <div className="">
            <div className="blog-details z-0">
                <img src={blogCover} alt="" className="max-h-80 w-full" />
            </div>
            <div className="max-w-[1115px] mx-auto bg-green-400 z-10">
                <BlogPost />
            </div>
        </div>
    );
}

export default BlogDetails;
