import React from 'react';
import { Link } from 'react-router-dom';

function DashboardMenu() {
    return (
        <ul className="menu bg-base-100 w-56 rounded-box">
            <li>
                <Link to="/">Item 1</Link>
            </li>
            <li className="bordered">
                <Link to="/">I have border</Link>
            </li>
            <li>
                <Link to="/">Item 3</Link>
            </li>
        </ul>
    );
}

export default DashboardMenu;
