import React from 'react';
import HeaderBrowseSearch from '../../Shared/HeaderBrowseSearch/HeaderBrowseSearch';
import SkillTestCard from '../SkillTestCard/SkillTestCard';

function SkillAssessment() {
    return (
        <div className="max-w-[1115px] mx-auto">
            <HeaderBrowseSearch
                title="Browse Skill Tests"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <SkillTestCard />
                <SkillTestCard />
                <SkillTestCard />
                <SkillTestCard />
                <SkillTestCard />
                <SkillTestCard />
                <SkillTestCard />
                <SkillTestCard />
                <SkillTestCard />
            </div>
        </div>
    );
}

export default SkillAssessment;
