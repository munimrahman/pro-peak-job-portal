/* eslint-disable import/no-extraneous-dependencies */
/* @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    daisyui: {
        themes: [
            {
                doctortheme: {
                    primary: '#3c65f5',
                    secondary: '#05264e',
                    accent: '#4f5e64',
                    neutral: '#66789c',
                    info: '#e0e6f7',
                    textLight: '#66789c',
                    'base-100': '#FFFFFF',
                },
            },
        ],
    },
    theme: {
        extend: {},
    },
    // eslint-disable-next-line global-require
    plugins: [require('daisyui')],
};
