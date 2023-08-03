import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    candidateSearch,
    companySearch,
    quizSearch,
    resetFilter,
} from '../../../features/filter/filterSlice';
// import key from '../../../assets/key-search-bar.svg';

function HeaderBrowseSearch({ title, description }) {
    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(resetFilter());
        if (title === 'Browse Companies') dispatch(companySearch(searchText.trim()));
        if (title === 'Browse Candidates') dispatch(candidateSearch(searchText.trim()));
        if (title === 'Browse Skill Tests') dispatch(quizSearch(searchText.trim()));
        setSearchText('');
    };

    useEffect(() => {
        const delayId = setTimeout(() => {
            if (title === 'Browse Companies') dispatch(companySearch(searchText.trim()));
            if (title === 'Browse Candidates') dispatch(candidateSearch(searchText.trim()));
            if (title === 'Browse Skill Tests') dispatch(quizSearch(searchText.trim()));
        }, 500);

        return () => clearTimeout(delayId);
    }, [dispatch, title, searchText]);

    return (
        <div className="bg-[#f2f6fd] py-12 rounded-xl mt-8 flex flex-col items-center header-search-box">
            <h1 className="text-secondary text-3xl font-bold">{title}</h1>
            <p className="md:w-6/12 text-center text-sm text-neutral mt-3 mb-10">{description}</p>
            <form onSubmit={handleSubmit} className="relative">
                <div className="hidden md:block absolute top-4 left-[14px]">
                    <i className="fas fa-search text-neutral" />
                </div>
                <input
                    type="text"
                    className="h-14 pl-5 md:pl-10 md:pr-20 rounded-xl z-0 focus:outline-none"
                    placeholder="Search Name..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <div className="absolute top-2 right-2">
                    <button
                        type="submit"
                        className="flex justify-center items-center h-10 w-20 text-white rounded-xl bg-primary hover:bg-secondary"
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
}

export default HeaderBrowseSearch;
