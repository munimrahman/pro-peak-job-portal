import React from 'react';
import bg from '../../../assets/we-hiring-right.svg';
import './WeHiring.css';

function WeHiring() {
    return (
        <div className="border rounded bg-[#f2f6fd] pl-8 pt-8 mt-8">
            <h4 className="text-neutral text-5xl font-bold">
                <span className="text-3xl text-[#a0abb8] font-normal">WE ARE</span> <br /> HIRING
            </h4>
            <p className="text-accent text-sm my-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto
            </p>
            <button className="bg-accent text-white text-xs p-2 rounded mb-2">KNOW MORE</button>
            <img src={bg} alt="" className="w-full" />
        </div>
    );
}

export default WeHiring;
