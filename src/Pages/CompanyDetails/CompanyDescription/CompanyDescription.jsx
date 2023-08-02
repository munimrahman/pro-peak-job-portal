import React from 'react';

function CompanyDescription({ company }) {
    const { name, description } = company || {};
    return (
        <div className="text-accent leading-7">
            <h2 className="text-2xl font-bold mb-4">Welcome to {name}</h2>
            <p className="my-5">{description}</p>
            <p className="my-5">
                The ideal candidate will have strong creative skills and a portfolio of work which
                demonstrates their passion for illustrative design and typography. This candidate
                will have experiences in working with numerous different design platforms such as
                digital and print forms.
            </p>
            <h2 className="text-2xl font-bold my-4">Essential Knowledge, Skills, and Experience</h2>
            <ul className="list-disc ml-10">
                <li>
                    A portfolio demonstrating well thought through and polished end to end customer
                    journeys
                </li>
                <li>
                    5+ years of industry experience in interactive design and / or visual design
                </li>
                <li>Excellent interpersonal skills</li>
                <li>Aware of trends inmobile, communications, and collaboration</li>
                <li>
                    Ability to create highly polished design prototypes, mockups, and other
                    communication artifacts
                </li>
                <li>
                    The ability to scope and estimate efforts accurately and prioritize tasks and
                    goals independently
                </li>
                <li>History of impacting shipping products with your work</li>
                <li>
                    A Bachelor Degree in Design (or related field) or equivalent professional
                    experience
                </li>
                <li>
                    Proficiency in a variety of design tools such as Figma, Photoshop, Illustrator,
                    and Sketch
                </li>
            </ul>
            <h2 className="text-2xl font-bold my-4">Preferred Experience</h2>
            <ul className="list-disc ml-10">
                <li>Designing user experiences for enterprise software / services</li>
                <li>
                    Creating and applying established design principles and interaction patterns
                </li>
                <li>
                    Aligning or influencing design thinking with teams working in other geographies
                </li>
            </ul>
            <h2 className="text-2xl font-bold my-4">Product Designer</h2>
            <p className="my-5">
                <strong>Product knowledge:</strong> Deeply understand the technology and features of
                the product area to which you are assigned.
            </p>
            <p className="my-5">
                <strong>Research:</strong>Provide human and business impact and insights for
                products.
            </p>
            <p className="my-5">
                <strong>Deliverables:</strong> Create deliverables for your product area (for
                example competitive analyses, user flows, low fidelity wireframes, high fidelity
                mockups, prototypes, etc.) that solve real user problems through the user
                experience.
            </p>
            <p className="my-5">
                <strong>Communication:</strong> Communicate the results of UX activities within your
                product area to the design team department, cross-functional partners within your
                product area, and other interested Superformula team members using clear language
                that simplifies complexity.
            </p>
            <div className="divider" />
        </div>
    );
}

export default CompanyDescription;
