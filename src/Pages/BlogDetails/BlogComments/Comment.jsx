import React from 'react';
import avatar from '../../../assets/avatar.jpg';
import ButtonInfo from '../../../Components/ButtonInfo/ButtonInfo';

function Comment() {
    return (
        <div className="grid grid-cols-12 gap-5 my-2">
            <div className="hidden md:block md:col-span-1">
                <div className="avatar">
                    <div className="w-16 rounded-full">
                        <img src={avatar} alt="" />
                    </div>
                </div>
            </div>
            <div className="col-span-11 px-3 py-3 md:py-0">
                <div className="flex items-start justify-between">
                    <div className="">
                        <h4 className="text-xl text-secondary">Person Name</h4>
                        <span className="text-neutral text-sm">
                            <i className="fas fa-clock mr-1" />
                            Aug 22, 2022 @ 21.90
                        </span>
                    </div>
                    <div className="">
                        <ButtonInfo className="px-3">Reply</ButtonInfo>
                    </div>
                </div>
                <p className="my-2 text-accent">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic officia deleniti
                    et reiciendis alias voluptates, quae accusamus facere amet rem.
                </p>
            </div>
        </div>
    );
}

export default Comment;
