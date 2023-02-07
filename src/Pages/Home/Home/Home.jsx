import React from 'react';

import Footer from '../../Shared/Footer/Footer';
import Hero from '../Hero/Hero';

function Home() {
    return (
        <section>
            <Hero />
            <h1 className="text-4xl text-secondary text-center font-bold">Browse by Category</h1>
            <p className="text-lg text-neutral text-center">
                Find the job that’s perfect for you. about 800+ new jobs everyday
            </p>
            <div className="flex flex-col">
                <div className="text-primary text-5xl p-10 m-5">
                    <p>Hello Home Page!</p>
                </div>
                <div className="text-primary text-5xl p-10 m-5">
                    <p>Hello Home Page!</p>
                </div>
                <p className="munim">Hello</p>
                <div className="text-primary text-5xl p-10 m-5">
                    <p>Hello Home Page!</p>
                </div>
                <div className="text-primary text-5xl p-10 m-5">
                    <p>Hello Home Page!</p>
                </div>
                <div className="text-primary text-5xl p-10 m-5">
                    <p>Hello Home Page!</p>
                </div>
                <div className="text-primary text-5xl p-10 m-5">
                    <p>Hello Home Page!</p>
                </div>
                <div className="text-primary text-5xl p-10 m-5">
                    <p>Hello Home Page!</p>
                </div>
                <div className="text-primary text-5xl p-10 m-5">
                    <p>Hello Home Page!</p>
                </div>
            </div>
            <Footer />
        </section>
    );
}

export default Home;
