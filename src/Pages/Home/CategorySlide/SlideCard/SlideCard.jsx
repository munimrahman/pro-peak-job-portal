import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import img from '../../../../assets/human.svg';
import { jobSearch } from '../../../../features/filter/filterSlice';

function SlideCard({ category }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = (value) => {
        dispatch(jobSearch({ industry: value, location: '', searchText: '' }));
        navigate('/find-jobs');
    };

    return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <span onClick={() => handleClick(category.value)}>
            <div className="border text-center px-8 py-5 rounded-xl hover:shadow-xl cursor-pointer text-secondary hover:text-primary">
                <img src={img} alt="" className="inline-block text-center" />
                <h3 className="mt-2 font-bold">{category.name}</h3>
                <p className="text-xs text-accent">{category.jobCount} Jobs Available</p>
            </div>
        </span>
    );
}

export default SlideCard;
