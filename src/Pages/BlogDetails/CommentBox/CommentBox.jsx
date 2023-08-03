import React, { useEffect, useRef } from 'react';
import ButtonInfo from '../../../Components/ButtonInfo/ButtonInfo';
import avatar from '../../../assets/avatar.jpg';

function CommentBox({ isFocused, commentId, from, blogId }) {
    console.log(commentId, blogId, from);
    const ref = useRef();

    useEffect(() => {
        if (isFocused) ref.current.focus();
    }, [isFocused]);

    return (
        <div className="grid grid-cols-12 md:gap-5 my-2">
            <div className="hidden md:block md:col-span-1">
                <div className="avatar">
                    <div className="w-16 rounded-full">
                        <img src={avatar} alt="" />
                    </div>
                </div>
            </div>
            <div className="col-span-11 px-3 py-3 md:py-0">
                <textarea
                    ref={ref}
                    className="textarea textarea-bordered focus:outline-none w-full h-28"
                    placeholder="Write Your Comment . . ."
                />
                <div className="flex justify-end mt-2">
                    <ButtonInfo>Comment</ButtonInfo>
                </div>
            </div>
        </div>
    );
}

export default CommentBox;
