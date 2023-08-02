import React from 'react';
import { Link } from 'react-router-dom';

function TrendingCard({ blog }) {
    const {
        _id,
        featuredPhoto,
        title,
        author: { name },
    } = blog || {};

    return (
        <div className="grid grid-cols-12 gap-3 my-3">
            <figure className="col-span-4">
                <img src={featuredPhoto} alt="" className="rounded-md" />
            </figure>
            <div className="col-span-8">
                <Link to={`/blogs/${_id}`}>
                    <h2 className="text-secondary text-sm hover:text-primary hover:cursor-pointer mt-1">
                        {title}
                    </h2>
                </Link>
                <span className="text-neutral text-xs hover:text-primary hover:cursor-pointer">
                    {name}
                </span>{' '}
                <br />
            </div>
        </div>
    );
}

export default TrendingCard;
