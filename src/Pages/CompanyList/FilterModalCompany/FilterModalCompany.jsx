/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import AdvFilterCompany from '../AdvFilterCompany/AdvFilterCompany';

function FilterModalCompany() {
    return (
        <>
            <input type="checkbox" id="filter-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label
                        htmlFor="filter-modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <h3 className="font-bold text-2xl text-center">Advance Filter</h3>

                    <AdvFilterCompany />
                    <div className="modal-action flex justify-center">
                        <label
                            htmlFor="filter-modal"
                            className="bg-primary px-3 py-2 text-white rounded-md"
                        >
                            Search
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FilterModalCompany;
