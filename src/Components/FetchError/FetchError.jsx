import React from 'react';
import wrong from '../../assets/wrong.png';

function FetchError() {
    return (
        <div className="text-center">
            <figure className="flex justify-center">
                <img src={wrong} className="w-2/3 md:w-1/3" alt="no-data-found" />
            </figure>
            <h2 className="text-2xl text-[#FE543C] font-bold">Ups!... something went wrong!</h2>
            <p className="text-[#FE543C] font-bold">Please try again...</p>
        </div>
    );
}

export default FetchError;
