import React from 'react';
import img from '../../../assets/coming-soon.svg';

function ComingSoon() {
    return (
        <div className="max-w-[1115px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 -mb-10">
                <figure className="col-span-6">
                    <img src={img} alt="" className="w- mx-auto" />
                </figure>
                <div className="col-span-6 self-center">
                    <h1 className="text-secondary text-4xl font-bold">Something Cooking Special</h1>
                    <p className="text-neutral mt-3 text-lg">
                        We are currently working on this feature.
                    </p>
                    <p className="text-neutral mb-3 text-lg">Subscribe & Get Notified!!!</p>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                    />
                </div>
            </div>
        </div>
    );
}

export default ComingSoon;
