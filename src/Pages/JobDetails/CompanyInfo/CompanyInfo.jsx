import React from 'react';
import brand from '../../../assets/brand-1.png';

function CompanyInfo() {
    return (
        <div className="border rounded-lg p-8">
            <div className="flex">
                <img src={brand} alt="" />
                <div className="ml-4">
                    <h3 className="text-xl font-bold text-secondary hover:text-primary">LinedIn</h3>
                    <span className="text-xs text-[#a0abb8]">
                        <i className="fas fa-map-marker-alt mr-1" />
                        Dhaka, Bangladesh
                    </span>
                </div>
            </div>
            <div className="divider" />
            <div className="text-accent">
                <div className="flex justify-between text-sm my-4">
                    <p className="font-bold">Primary industry:</p>
                    <p>Software</p>
                </div>
                <div className="flex justify-between text-sm my-4">
                    <p className="font-bold">Company size:</p>
                    <p>501-1000</p>
                </div>
                <div className="flex justify-between text-sm my-4">
                    <p className="font-bold">Company size:</p>
                    <p>501-1000</p>
                </div>
                <div className="flex justify-between text-sm my-4">
                    <p className="font-bold">Founded In:</p>
                    <p>2011</p>
                </div>
                <div className="flex justify-between text-sm my-4">
                    <p className="font-bold">Phone:</p>
                    <p>985415478</p>
                </div>
                <div className="flex justify-between text-sm my-4">
                    <p className="font-bold">Email:</p>
                    <p>comapany@gmail.com</p>
                </div>
                <div className="flex justify-between text-sm my-4">
                    <p className="font-bold">Location:</p>
                    <p>Dhaka, Bangladesh</p>
                </div>
                <div className="flex justify-between text-sm my-4">
                    <p className="font-bold">Social Media:</p>
                    <p>Facebook, LinkedIn</p>
                </div>
            </div>
            <div className="text-center mt-6">
                <p className="bg-info text-primary text-sm p-3 rounded hover:text-white hover:bg-primary hover:cursor-pointer">
                    View Company Profile
                </p>
            </div>
        </div>
    );
}

export default CompanyInfo;
