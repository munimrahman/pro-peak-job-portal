import React, { useState } from 'react';
import CommentBox from '../CommentBox/CommentBox';
import Comment from './Comment';

function BlogComments({ comments = [], blogId }) {
    const [show, setShow] = useState({ status: false, id: '' });

    return (
        <div className="pb-8">
            <h3 className="text-xl text-secondary font-bold">Comments</h3>
            <div className="mt-5">
                {comments.map((comment) => {
                    const { replies = [] } = comment;
                    if (replies.length >= 1) {
                        return (
                            <>
                                <Comment
                                    key={comment._id}
                                    from="comment"
                                    comment={comment}
                                    setShow={setShow}
                                />
                                <div className="ml-8">
                                    {replies.map((reply) => (
                                        <Comment
                                            from="reply"
                                            key={reply._id}
                                            comment={reply}
                                            commentId={comment._id}
                                            setShow={setShow}
                                        />
                                    ))}
                                </div>

                                <div className="ml-8">
                                    {show.status && show.id === comment._id && (
                                        <CommentBox
                                            commentId={comment._id}
                                            isFocused={show.status}
                                            from="comment"
                                            setShow={setShow}
                                            blogId={blogId}
                                        />
                                    )}
                                </div>
                            </>
                        );
                    }

                    return (
                        <>
                            <Comment
                                key={comment._id}
                                from="comment"
                                comment={comment}
                                setShow={setShow}
                            />
                            <div className="ml-8">
                                {show.status && show.id === comment._id && (
                                    <CommentBox
                                        commentId={comment._id}
                                        isFocused={show.status}
                                        from="comment"
                                        setShow={setShow}
                                        blogId={blogId}
                                    />
                                )}
                            </div>
                        </>
                    );
                })}
            </div>

            <div className="divider" />
            <div className="">
                <h3 className="text-xl text-secondary font-bold mb-3">Leave a Comment</h3>
                <CommentBox from="blog" blogId={blogId} />
            </div>
        </div>
    );
}

export default BlogComments;
