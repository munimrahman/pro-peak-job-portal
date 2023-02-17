import React from 'react';
import WorkExperienceCard from './WorkExperienceCard';

function WorkExperience() {
    return (
        <div>
            <h3 className="text-secondary text-xl font-bold mb-5">Work Experience</h3>
            <div className="grid gap-3">
                <WorkExperienceCard />
            </div>
        </div>
    );
}

export default WorkExperience;
