import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../../assets/human.svg';

function SlideCard({ category }) {
    return (
        <Link to="/find-jobs">
            <div className="border text-center px-8 py-5 rounded-xl hover:shadow-xl cursor-pointer text-secondary hover:text-primary">
                <img src={img} alt="" className="inline-block text-center" />
                <h3 className="mt-2 font-bold">{category.name}</h3>
                <p className="text-xs text-accent">{category.jobCount} Jobs Available</p>
            </div>
        </Link>
    );
}

export default SlideCard;
