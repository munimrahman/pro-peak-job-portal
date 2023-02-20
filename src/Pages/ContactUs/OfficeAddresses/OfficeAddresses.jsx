import React from 'react';

function OfficeAddresses() {
    return (
        <div className="my-12">
            <div className="grid grid-cols-1 md:grid-cols-4 bg-[#F2F6FD] p-12 rounded">
                <div className="p-2">
                    <h4 className="text-secondary text-lg font-bold mb-1">ProPeak Corporation</h4>
                    <p className="text-accent text-sm">
                        205 North Michigan Avenue, Suite 810 Chicago, 60601, USA
                    </p>
                    <p className="text-accent text-sm">Phone: (123) 456-7890</p>
                    <p className="text-accent text-sm">Email: contact@jobbox.com</p>
                    <p className="text-primary mt-1 text-sm">VIEW MAP</p>
                </div>
                <div className="p-2">
                    <div className="mb-4">
                        <h4 className="text-secondary text-lg font-bold mb-1">London</h4>
                        <p className="text-accent text-sm">
                            2118 Thornridge Cir. Syracuse, Connecticut 35624
                        </p>
                    </div>
                    <div>
                        <h4 className="text-secondary text-lg font-bold mb-1">New York</h4>
                        <p className="text-accent text-sm">
                            4517 Washington Ave. Manchester, Kentucky 39495
                        </p>
                    </div>
                </div>
                <div className="p-2">
                    <div className="mb-4">
                        <h4 className="text-secondary text-lg font-bold mb-1">Chicago</h4>
                        <p className="text-accent text-sm">
                            3891 Ranchview Dr. Richardson, California 62639
                        </p>
                    </div>
                    <div>
                        <h4 className="text-secondary text-lg font-bold mb-1">San Francisco</h4>
                        <p className="text-accent text-sm">
                            4140 Parker Rd. Allentown, New Mexico 31134
                        </p>
                    </div>
                </div>
                <div className="p-2">
                    <div className="mb-4">
                        <h4 className="text-secondary text-lg font-bold mb-1">Sysney</h4>
                        <p className="text-accent text-sm">
                            3891 Ranchview Dr. Richardson, California 62639
                        </p>
                    </div>
                    <div>
                        <h4 className="text-secondary text-lg font-bold mb-1">Singapore</h4>
                        <p className="text-accent text-sm">
                            4140 Parker Rd. Allentown, New Mexico 31134
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OfficeAddresses;
