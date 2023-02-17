import React from 'react';
import CommentBox from '../CommentBox/CommentBox';
import Comment from './Comment';

function BlogComments() {
    return (
        <div className="pb-8">
            <h3 className="text-xl text-secondary font-bold">Comments</h3>
            <div className="mt-5">
                <Comment />
                <div className="ml-8">
                    <Comment />
                    <Comment />
                </div>
                <Comment />
            </div>
            <div className="divider" />
            <div className="">
                <h3 className="text-xl text-secondary font-bold mb-3">Leave a Comment</h3>
                <CommentBox />
            </div>
        </div>
    );
}

export default BlogComments;
