/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function FilterOption({ name, vacancies }) {
    return (
        <div className="flex justify-between my-3">
            <label className="flex justify-start items-center cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-primary checkbox-xs" />
                <span className="ml-2 text-accent">{name}</span>
            </label>
            <span className="bg-info text-primary text-sm px-1 rounded">{vacancies}</span>
        </div>
    );
}

export default FilterOption;
