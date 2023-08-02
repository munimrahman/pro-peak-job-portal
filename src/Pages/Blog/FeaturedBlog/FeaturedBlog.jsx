import React from 'react';
import { Link } from 'react-router-dom';

function FeaturedBlog({ blog }) {
    const { _id, title, tags, description } = blog || {};
    return (
        <div className="grid grid-cols-1 gap-3 md:grid-cols-12 rounded-xl shadow-xl border">
            <figure className="col-span-5">
                <img
                    src="https://placehold.co/800"
                    alt="Album"
                    className="h-96 rounded-tl-xl rounded-tr-xl md:rounded-l-xl md:rounded-tr-none"
                />
            </figure>
            <div className="md:col-span-7 px-8 md:pt-8 md:px-2 my-3">
                <div className="flex flex-wrap">
                    {tags.map((tag, i) => (
                        <span
                            key={i}
                            className="capitalize text-xs bg-info text-[#4f5e64] hover:text-primary hover:cursor-pointer px-3 py-2 rounded mr-1 my-1"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <Link to={`/blogs/${_id}`}>
                    <h2 className="text-secondary text-3xl font-bold hover:text-primary mt-2 hover:cursor-pointer">
                        {title}
                    </h2>
                </Link>
                <p className="my-5 text-accent">{description}</p>
                <div className="card-actions justify-start">
                    <Link to={`/blogs/${_id}`}>
                        <span className="text-primary hover:underline hover:underline-offset-1 text-sm font-bold hover:cursor-pointer">
                            Read More
                            <i className="fas fa-arrow-right text-xs ml-1" />
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default FeaturedBlog;
