import React from 'react';
import ButtonInfo from '../../../Components/ButtonInfo/ButtonInfo';
import companyCover from '../../../assets/company-cover.png';

function CompanyDetailsHeader({ company }) {
    const { name, logo, coverPhoto, location, motto, website } = company || {};

    return (
        <div className="my-10">
            <div className="relative">
                <img src={coverPhoto || companyCover} alt="" className="rounded-2xl" />
                <img
                    src={logo}
                    alt=""
                    className="absolute -bottom-10 left-10 rounded-md w-20 h-20"
                />
            </div>

            <div className="flex justify-between items-center mt-14 mx-10">
                <div>
                    <div className="flex items-end">
                        <h1 className="text-secondary text-3xl font-bold">{name}</h1>
                        <p className="text-sm text-accent pb-1 ml-2">
                            <i className="fas fa-map-marker-alt mr-1" />
                            {location}
                        </p>
                    </div>
                    <h3 className="text-neutral">{motto}</h3>
                </div>
                <a
                    href={website?.includes('http') ? website : `http://${website}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    <ButtonInfo className="py-3 px-4 font-bold uppercase">View Website</ButtonInfo>
                </a>
            </div>
            <div className="divider" />
        </div>
    );
}

export default CompanyDetailsHeader;
