import React from 'react';
import blogCover from '../../../assets/blog-cover.png';
import BlogPost from '../BlogPost/BlogPost';

function BlogDetails() {
    return (
        <div className="">
            <div className="blog-details">
                <img src={blogCover} alt="" className="max-h-96 w-full" />
            </div>
            <div className="max-w-[1115px] mx-auto relative lg:-top-36 lg:-mb-36">
                <BlogPost />
            </div>
        </div>
    );
}

export default BlogDetails;
