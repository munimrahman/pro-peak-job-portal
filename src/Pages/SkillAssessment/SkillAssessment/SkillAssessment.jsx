import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ScrollRestoration } from 'react-router-dom';
import FetchError from '../../../Components/FetchError/FetchError';
import QuizSkeleton from '../../../Components/LoadingElements/QuizSkeleton';
import NoDataFound from '../../../Components/NoDataFound/NoDataFound';
import { useGetQuizzesQuery } from '../../../features/quiz/quizApi';
import useTitle from '../../../hooks/useTitle';
import HeaderBrowseSearch from '../../Shared/HeaderBrowseSearch/HeaderBrowseSearch';
import Pagination from '../../Shared/Pagination/Pagination';
import SkillTestCard from '../SkillTestCard/SkillTestCard';

function SkillAssessment() {
    const [page, setPage] = useState(1);
    const limit = 6;
    useTitle('Skill Assessment | Pro Peak');
    const { quizSearchText } = useSelector((state) => state.filter.quiz);

    // setup query for fetch data from api
    let query = '';
    if (quizSearchText.length > 0) {
        if (query.length > 0) query += '&';
        query += `searchQuery=${quizSearchText}`;
    }
    if (page) {
        if (query.length > 0) query += '&';
        query += `page=${page}`;
    }
    if (limit) {
        if (query.length > 0) query += '&';
        query += `limit=${limit}`;
    }

    const {
        data: { data: { totalCount, quizzes = [] } = {} } = {},
        isLoading,
        isSuccess,
        isError,
    } = useGetQuizzesQuery(query);
    console.log(quizzes);
    // pagination calculation
    let totalPage;
    if (!isLoading && !isError && totalCount) {
        totalPage = Math.ceil(totalCount / limit);
    }
    let low = page * limit - limit + 1;
    let high = page * limit;
    if (high > totalCount) high = totalCount;
    if (low > totalCount) {
        low = 0;
        high = 0;
    }

    // company list content
    let content = null;
    if (isLoading) {
        content = (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <QuizSkeleton />
                <QuizSkeleton />
                <QuizSkeleton />
            </div>
        );
    } else if (isSuccess && !isError && quizzes.length === 0) {
        content = <NoDataFound />;
    } else if (isSuccess && !isError && quizzes.length > 0) {
        content = (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {quizzes.map((quiz) => (
                    <SkillTestCard key={quiz._id} quiz={quiz} />
                ))}
            </div>
        );
    } else if (isError) {
        content = <FetchError />;
    }

    return (
        <div className="max-w-[1115px] mx-auto">
            <HeaderBrowseSearch
                title="Browse Skill Tests"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?"
            />
            {content}
            {totalPage > 1 && (
                <div className="mt-10">
                    <Pagination totalPage={totalPage} currentPage={page} setPage={setPage} />
                </div>
            )}
            <ScrollRestoration />
        </div>
    );
}

export default SkillAssessment;
