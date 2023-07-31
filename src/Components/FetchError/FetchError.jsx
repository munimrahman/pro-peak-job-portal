import React from 'react';
import { useDispatch } from 'react-redux';
import wrong from '../../assets/wrong.png';
import { clearSearch, resetFilter } from '../../features/filter/filterSlice';

function FetchError() {
    const dispatch = useDispatch('');
    const handleRefresh = () => {
        dispatch(resetFilter());
        dispatch(clearSearch());
    };
    return (
        <div className="text-center">
            <figure className="flex justify-center">
                <img src={wrong} className="w-2/3 md:w-1/3" alt="no-data-found" />
            </figure>
            <h2 className="text-2xl text-[#FE543C] font-bold">Ups!... something went wrong!</h2>
            <p className="text-[#FE543C] font-bold">Please try again...</p>
            <button
                onClick={handleRefresh}
                className="bg-primary text-white px-1 my-1 rounded-md text-sm"
            >
                Refresh Data
            </button>
        </div>
    );
}

export default FetchError;
