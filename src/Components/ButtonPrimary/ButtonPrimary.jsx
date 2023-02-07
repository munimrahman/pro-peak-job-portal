/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

function ButtonPrimary({ children, className, ...rest }) {
    return (
        <button
            className={`btn btn-sm text-xs sm:btn-md btn-primary md:hover:btn-secondary text-white ${
                className || ''
            }`}
            {...rest}
        >
            {children}
        </button>
    );
}

export default ButtonPrimary;
