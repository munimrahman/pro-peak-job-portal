import moment from 'moment';
import React from 'react';
import ButtonInfo from '../../../Components/ButtonInfo/ButtonInfo';

function Comment({ comment, setShow, from, commentId }) {
    const { _id, author: { name, profilePhoto } = {}, createdAt, content } = comment || {};

    const handleShow = () => {
        setShow(() => ({ status: true, id: from === 'comment' ? _id : commentId }));
    };

    return (
        <div className="grid grid-cols-12 gap-5 my-2">
            <div className="hidden md:block md:col-span-1">
                <div className="avatar">
                    <div className="w-16 rounded-full">
                        <img src={profilePhoto} alt="" />
                    </div>
                </div>
            </div>
            <div className="col-span-11 px-3 py-3 md:py-0">
                <div className="flex items-start justify-between">
                    <div className="">
                        <h4 className="text-lg text-secondary">{name}</h4>
                        <span className="text-neutral text-sm">
                            <i className="fas fa-clock mr-1" />
                            {moment(createdAt).format('lll')}
                        </span>
                    </div>
                    <div className="">
                        <ButtonInfo onClick={handleShow} className="px-3">
                            Reply
                        </ButtonInfo>
                    </div>
                </div>
                <p className="my-2 text-accent">{content}</p>
            </div>
        </div>
    );
}

export default Comment;
