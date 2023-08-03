import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';
import calculateReadingTime from '../../../utils/readingTime';

function BlogCard({ blog }) {
    const {
        _id,
        title,
        description,
        featuredPhoto,
        author: { name, profilePhoto } = {},
        createdAt,
        tags = [],
    } = blog || {};
    const readingTime = calculateReadingTime(description);

    return (
        <div className="border rounded-xl p-2 shadow-md">
            <Link to={`/blogs/${_id}`}>
                <img src={featuredPhoto} alt="" className="rounded-xl w-full" />
            </Link>
            <div className="px-1">
                <Link to={`/blogs/${_id}`}>
                    <h2 className="text-secondary hover:text-primary text-lg hover:cursor-pointer font-bold mt-4">
                        {title}
                    </h2>
                </Link>
                <div className="mt-1 flex flex-wrap">
                    {tags.map((tag, i) => (
                        <span
                            key={i}
                            className="capitalize text-xs bg-info text-secondary hover:text-primary hover:cursor-pointer px-3 py-2 rounded mr-1 my-1"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <p className="text-sm text-accent my-3 text-justify">
                    {description?.slice(0, 110)}...
                </p>
                <div className="flex justify-between items-end mb-3">
                    <div className="flex">
                        <div className="avatar">
                            <div className="w-10 rounded-full">
                                <img src={profilePhoto} alt="" />
                            </div>
                        </div>
                        <div className="ml-2 flex flex-col">
                            <Link to="/blogs">
                                <span className="text-neutral text-base font-bold hover:text-primary">
                                    {name}
                                </span>
                            </Link>

                            <span className="text-neutral text-xs">
                                {moment(createdAt).format('ll')}
                            </span>
                        </div>
                    </div>
                    <span className="text-neutral text-xs">{readingTime} mins to read</span>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;
