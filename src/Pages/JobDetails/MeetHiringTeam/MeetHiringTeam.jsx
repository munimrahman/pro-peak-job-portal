import React from 'react';
import avatarImg from '../../../assets/avatar.jpg';
import ButtonInfo from '../../../Components/ButtonInfo/ButtonInfo';

function MeetHiringTeam() {
    return (
        <div className="border rounded-lg p-8 mt-8">
            <h3 className="text-xl text-secondary font-bold">Meet Hiring Manager</h3>
            <div className="divider mt-2" />
            <div className="flex items-start">
                <div className="avatar">
                    <div className="w-14 rounded-full">
                        <img src={avatarImg} alt="" />
                    </div>
                </div>
                <div className="ml-3">
                    <h4 className="text-secondary font-bold">Sansa Stark</h4>
                    <p className="text-accent text-xs mt-1">Human Resource Manager</p>
                </div>
            </div>
            <div className="mt-4 flex justify-center">
                <span className="mx-1">Facebook</span>
                <span className="mx-1">LinkedIn</span>
                <span className="mx-1">Twitter</span>
            </div>
            <p className="mt-4 bg-info text-primary rounded-md p-3 text-center text-sm hover:cursor-pointer hover:bg-primary hover:text-white">
                View Profile
            </p>
            <div className="mt-4">
                <h4 className="text-secondary font-bold my-4">Send Message</h4>
                <form>
                    <textarea
                        className="textarea textarea-bordered w-full"
                        placeholder="Your Message . . ."
                    />

                    <ButtonInfo className="mt-2 px-3">SEND</ButtonInfo>
                </form>
            </div>
        </div>
    );
}

export default MeetHiringTeam;
