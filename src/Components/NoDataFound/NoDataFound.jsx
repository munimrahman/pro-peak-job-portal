import React from 'react';
import noData from '../../assets/no-data.png';

function NoJobsFound() {
    return (
        <div className="text-center">
            <figure className="flex justify-center">
                <img src={noData} className="w-2/3 md:w-1/3" alt="no-data-found" />
            </figure>
            <h2 className="text-2xl text-secondary font-bold">Ups!... no results found</h2>
            <p className="text-secondary font-bold">Please try another search</p>
        </div>
    );
}

export default NoJobsFound;
