import { useEffect } from 'react';

const useTitle = (title, prevailOnUnmount = false) => {
    useEffect(() => {
        document.title = title;
    }, [title]);

    useEffect(
        () => () => {
            if (!prevailOnUnmount) {
                document.title = 'Pro Peak | Find Your Dream Job';
            }
        },
        [prevailOnUnmount]
    );
};

export default useTitle;
