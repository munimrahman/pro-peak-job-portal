import React, { useEffect, useRef, useState } from 'react';
import ButtonInfo from '../../../Components/ButtonInfo/ButtonInfo';
import avatar from '../../../assets/avatar.jpg';

function CommentBox({ isFocused, commentId, from, blogId, setShow }) {
    const [text, setText] = useState('');

    const ref = useRef();

    useEffect(() => {
        if (isFocused) ref.current.focus();
    }, [isFocused]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (from === 'blog') {
            console.log(`Comment of Blog ID:${blogId}= ${text}`);
        } else {
            console.log(`Comment Reply ID:${commentId}= ${text}`);
        }
        setText('');
        setShow(() => ({ status: false, id: '' }));
    };

    return (
        <div className="grid grid-cols-12 md:gap-5 my-2">
            <div className="hidden md:block md:col-span-1">
                <div className="avatar">
                    <div className="w-16 rounded-full">
                        <img src={avatar} alt="" />
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
