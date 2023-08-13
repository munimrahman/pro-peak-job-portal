import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import ButtonInfo from '../../../Components/ButtonInfo/ButtonInfo';
import avatar from '../../../assets/avatar.png';
import { useCreateCommentMutation, useCreateReplyMutation } from '../../../features/blogs/blogsApi';

function CommentBox({ isFocused, commentId, from, blogId, setShow = () => {} }) {
    const { user: { _id, name, profilePhoto } = {} } = useSelector((state) => state.auth);
    const author = { _id, name, profilePhoto };

    const [text, setText] = useState('');
    const [createComment] = useCreateCommentMutation();
    const [createReply] = useCreateReplyMutation();

    const ref = useRef();

    useEffect(() => {
        if (isFocused) ref.current.focus();
    }, [isFocused]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (from === 'blog') {
            const comment = {
                author: author._id,
                content: text,
            };
            createComment({
                blogId,
                data: comment,
                cacheData: { author, content: text, _id: Date.now() },
            });
        } else {
            const reply = {
                author: author._id,
                content: text,
                commentId,
            };
            createReply({ blogId, data: reply, cacheData: { author, content: text, commentId } });
        }
        setText('');
        setShow(() => ({ status: false, id: '' }));
    };

    return (
        <div className="grid grid-cols-12 md:gap-5 my-2">
            <div className="hidden md:block md:col-span-1">
                <div className="avatar">
                    <div className="w-16 rounded-full">
                        <img src={profilePhoto || avatar} alt="" />
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="col-span-11 px-3 py-3 md:py-0">
                <textarea
                    ref={ref}
                    className="textarea textarea-bordered focus:outline-none w-full h-28"
                    placeholder="Write Your Comment . . ."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <div className="flex justify-end mt-2">
                    <ButtonInfo type="submit">Comment</ButtonInfo>
                </div>
            </form>
        </div>
    );
}

export default CommentBox;
