import React from 'react';
import { useRouteError } from 'react-router-dom';

function DisplayError() {
    const error = useRouteError();
    return (
        <div>
            <h1>Something Went Wrong!!!</h1>
            <p>{error.statusText}</p>
            <p>{error.message}</p>
        </div>
    );
}

export default DisplayError;
