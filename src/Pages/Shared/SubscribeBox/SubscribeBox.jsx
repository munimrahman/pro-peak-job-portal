import React, { useState } from 'react';
import Swal from 'sweetalert2';
import imgLeft from '../../../assets/newsletter-left.png';
import imgRight from '../../../assets/newsletter-right.png';
import bgImg from '../../../assets/subscribe-bg.svg';

function SubscribeBox() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Thank You For Subscribing!',
            text: "We'll keep you posted on the latest job posts, tips and special offers.",
            icon: 'success',
            iconColor: '#21C6FD',
            confirmButtonColor: '#3C65F6',
        });
        setEmail('');
    };
    return (
        <div
            style={{
                backgroundImage: `url(${bgImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
            className="p-14 mt-16 rounded-2xl border flex justify-center"
        >
            <img src={imgLeft} alt="" className="hidden lg:block" />
            {/* <div className="text-center self-center"> */}
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-2xl sm:text-4xl font-serif font-bold text-white mb-7 w-10/12 mx-auto text-center">
                    New Things Will Always Update Regularly
                </h1>
                <form onSubmit={handleSubmit} className="relative">
                    <div className="hidden md:block absolute top-4 left-[14px]">
                        <i className="fas fa-envelope text-neutral" />
                    </div>
                    <input
                        type="email"
                        name="email"
                        className="h-14 pl-5 md:pl-10 md:pr-20 rounded-xl z-0 focus:outline-none"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <div className="absolute top-2 right-2">
                        <button
                            type="submit"
                            className="flex justify-center items-center h-10 w-24 text-white rounded-xl bg-primary hover:bg-secondary"
                        >
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>
            <img src={imgRight} alt="" className="hidden lg:block" />
        </div>
    );
}

export default SubscribeBox;
