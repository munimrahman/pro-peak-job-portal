/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import img from '../../../assets/contact-form.png';
import ButtonInfo from '../../../Components/ButtonInfo/ButtonInfo';

function ContactForm() {
    return (
        <div className="mx-2 md:mx-0 md:grid md:grid-cols-12 md:gap-8">
            <div className="md:col-span-8">
                <div>
                    <p className="text-primary">Contact Us</p>
                    <h2 className="text-secondary text-4xl font-bold my-1">Get In Touch</h2>
                    <p className="text-accent w-2/3">
                        The right move at the right time saves your investment. live the dream of
                        expanding your business.
                    </p>
                </div>
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name:</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="input input-bordered focus:outline-none w-full"
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Company:</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Company (Optional)"
                                className="input input-bordered focus:outline-none w-full"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email:</span>
                            </label>
                            <input
                                type="text"
                                placeholder="propeak@gmail.com"
                                className="input input-bordered focus:outline-none w-full"
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Mobile:</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Mobile (Optional)"
                                className="input input-bordered focus:outline-none w-full"
                            />
                        </div>
                    </div>
                    <div className="mt-3">
                        <label className="label">
                            <span className="label-text">Your Message:</span>
                        </label>
                        <textarea
                            className="textarea textarea-bordered focus:outline-none w-full h-44"
                            placeholder="Your Message . . ."
                        />
                    </div>

                    <ButtonInfo className="px-4 py-3 uppercase font-bold mt-2">
                        Send Message
                    </ButtonInfo>
                </form>
            </div>
            <div className="hidden md:block md:col-span-4">
                <img src={img} alt="" />
            </div>
        </div>
    );
}

export default ContactForm;
