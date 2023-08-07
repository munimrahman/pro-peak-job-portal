import React from 'react';
import WorkExperienceCard from './WorkExperienceCard';

function WorkExperience({ user }) {
    const { workExperience = [] } = user || {};

    return (
        <div>
            <h3 className="text-secondary text-xl font-bold mb-5">Work Experience</h3>
            <div className="grid gap-3">
                {workExperience.map((exp, i) => (
                    <WorkExperienceCard key={i} experience={exp} />
                ))}
            </div>
        </div>
    );
}

export default WorkExperience;
