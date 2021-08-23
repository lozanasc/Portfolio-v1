import { useState, useEffect } from 'react';

/**
 *  Utility Function: Custom useOnScreen Hook
 *  Tracks the component if its on the viewport or not
 * @param {*} ref some HTML element
 * @returns boolean
 */
export default function useOnScreen(ref){

    const [ isOnScreen, setIsOnScreen] = useState(false);
    
    useEffect(() => {
        const Observer = new IntersectionObserver(
            ([entry]) => setIsOnScreen(entry.isIntersecting)
        );
        Observer.observe(ref.current);
        return () => {Observer.disconnect()}
    }, [ref]);

    return isOnScreen;

}