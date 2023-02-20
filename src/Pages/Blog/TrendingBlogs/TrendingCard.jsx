import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/img-news1.png';

function TrendingCard() {
    return (
        <div className="grid grid-cols-12 gap-3 my-3">
            <figure className="col-span-4">
                <img src={img} alt="" className="rounded-md h-full" />
            </figure>
            <div className="col-span-8">
                <Link to="/blog-details">
                    <h2 className="text-secondary text-sm hover:text-primary hover:cursor-pointer">
                        21 Job Interview Tips: How To Make a Great Impression
                    </h2>
                </Link>
                <span className="text-neutral text-xs hover:text-primary hover:cursor-pointer">
                    Writers Name
                </span>
            </div>
        </div>
    );
}

export default TrendingCard;
