import React from 'react';

function CandidateDescription({ user }) {
    const { name, bio } = user || {};
    return (
        <div className="text-accent leading-7">
            <h2 className="text-2xl font-bold mb-4">About {name}</h2>
            {bio}
            <div className="divider" />
        </div>
    );
}

export default CandidateDescription;
