import moment from 'moment';
import React from 'react';
import calculateReadingTime from '../../../utils/readingTime';
import BlogComments from '../BlogComments/BlogComments';

function BlogPost({ blog }) {
    const {
        _id,
        author: { name, designation, profilePhoto } = {},
        title,
        description,
        createdAt,
        featuredPhoto,
        tags = [],
        loves,
        comments = [],
    } = blog || {};

    const readingTime = calculateReadingTime(description);

    return (
        <div className="bg-base-100 rounded shadow-xl px-8 lg:px-36">
            <div className="flex justify-between flex-wrap pt-10">
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-12 rounded-full">
                            <img src={profilePhoto} alt="" className="" />
                        </div>
                    </div>
                    <div className="ml-2">
                        <p className="text-secondary">{name}</p>
                        <p className="text-neutral text-xs mt-1">{designation}n</p>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-neutral">{moment(createdAt).format('ll')}</p>
                    <p className="text-neutral text-sm">{readingTime} mins to Read</p>
                </div>
            </div>

            <h1 className="text-center text-secondary text-xl md:text-3xl font-bold py-2 border-t border-neutral border-b my-5">
                {title}
            </h1>
            <figure className="my-4">
                <img src={featuredPhoto} alt="" className="w-3/5 mx-auto rounded" />
            </figure>
            <p className="text-accent text-lg leading-relaxed">{description}</p>

            <div className="divider" />
            <div className="flex justify-between items-center pb-6">
                <div className="flex items-center">
                    <span className="text-2xl hover:cursor-pointer">
                        <i className="far fa-heart text-red-500" />
                    </span>
                    <span className="ml-2 text-neutral font-thin">{loves} Loves</span>
                </div>
                <div className="flex flex-wrap justify-center">
                    {tags.map((tag, i) => (
                        <span
                            key={i}
                            className="capitalize text-xs bg-info text-secondary hover:text-primary hover:cursor-pointer px-3 py-2 rounded mr-1 my-1"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <BlogComments comments={comments} blogId={_id} />
        </div>
    );
}

export default BlogPost;
