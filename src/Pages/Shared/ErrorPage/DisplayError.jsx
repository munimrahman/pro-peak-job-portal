import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

function DisplayError() {
    const error = useRouteError();

    return (
        <div>
            <h1>Something Went Wrong!!!</h1>
            <p>{error.statusText}</p>
            <p>{error.stack}</p>
            <Link to="/" className="btn btn-primary">
                Go Home
            </Link>
        </div>
    );
}

export default DisplayError;
