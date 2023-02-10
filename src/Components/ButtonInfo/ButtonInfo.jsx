/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

function ButtonInfo({ children, className, ...rest }) {
    return (
        <button
            className={`bg-info text-primary text-sm p-2 rounded hover:bg-primary hover:text-white transition duration-300 ${
                className || ''
            }`}
            {...rest}
        >
            {children}
        </button>
    );
}

export default ButtonInfo;
