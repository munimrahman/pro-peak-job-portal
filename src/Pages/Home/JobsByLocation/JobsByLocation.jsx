import React from 'react';
import location1 from '../../../assets/location1.png';
import location2 from '../../../assets/location2.png';
import location3 from '../../../assets/location3.png';
import location4 from '../../../assets/location4.png';
import location5 from '../../../assets/location5.png';
import location6 from '../../../assets/location6.png';
import JobsByLocationCard from './JobsByLocationCard';

function JobsByLocation() {
    return (
        <div className="mt-16">
            <h1 className="text-4xl text-secondary text-center font-bold">Jobs By Location</h1>
            <p className="text-lg text-neutral text-center my-2">
                Find your favourite jobs and get the benefits of yourself
            </p>
            {/* TODO: Change location name and value */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-12 md:gap-5">
                <JobsByLocationCard
                    name="Paris, France"
                    value="Khulna, Bangladesh"
                    vacancy={12}
                    companies={120}
                    img={location1}
                    colSpan="col-span-3"
                />
                <JobsByLocationCard
                    name="London, England"
                    value="Dhaka, Bangladesh"
                    vacancy={7}
                    companies={68}
                    img={location2}
                    colSpan="col-span-4"
                />
                <JobsByLocationCard
                    name="New York, USA"
                    value="Dhaka, Bangladesh"
                    vacancy={9}
                    companies={80}
                    img={location3}
                    colSpan="col-span-5"
                />
                <JobsByLocationCard
                    name="Amsterdam, Holland"
                    value="Dhaka, Bangladesh"
                    vacancy={15}
                    companies={69}
                    img={location4}
                    colSpan="col-span-4"
                />
                <JobsByLocationCard
                    name="Copenhagen, Denmark"
                    value="Dhaka, Bangladesh"
                    vacancy={19}
                    companies={154}
                    img={location5}
                    colSpan="col-span-5"
                />
                <JobsByLocationCard
                    name="Berlin, Germany"
                    value="Dhaka, Bangladesh"
                    vacancy={12}
                    companies={25}
                    img={location6}
                    colSpan="col-span-3"
                />
            </div>
        </div>
    );
}

export default JobsByLocation;
