/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

function ButtonSecondary({ children, className, ...rest }) {
    return (
        <button
            className={`btn btn-sm text-xs sm:btn-md btn-secondary md:hover:btn-primary text-white transition duration-300 ${
                className || ''
            }`}
            {...rest}
        >
            {children}
        </button>
    );
}

export default ButtonSecondary;
