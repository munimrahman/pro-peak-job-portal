/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

function FormTest() {
    const [email, setEmail] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Create Form Data
        // const formData = new FormData();
        // formData.append('email', email);
        // formData.append('image', image);
        // console.log(Object.fromEntries(formData));
        const obj = { email, image };
        console.log(obj);
    };

    return (
        <div className="flex flex-col items-center">
            <h1 className="my-3 text-lg font-bold">File Upload Test</h1>
            <form onSubmit={handleSubmit}>
                <input
                    className="border"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />{' '}
                <br /> <br />
                <input
                    className="border"
                    type="file"
                    name="image"
                    alt="profile_photo"
                    onChange={(e) => setImage(e.target.files[0])} // Fix this line
                />
                <br /> <br />
                <input className="btn btn-primary" type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default FormTest;
