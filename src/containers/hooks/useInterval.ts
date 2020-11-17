import { useEffect, useRef } from 'react';

type callbackType = () => void;

type useIntervalType = (callback: callbackType, delay?: number) => void;

const useInterval: useIntervalType = (callback, delay = 5000) => {
    const savedCallback = useRef<callbackType | undefined>();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    const callbackUse = (current: callbackType | undefined) => {
        if (current) {
            current();
        }
    };

    useEffect(() => {
        const handler = () => callbackUse(savedCallback.current);

        if (delay !== null) {
            handler();
            const interval = setInterval(handler, delay);
            return () => clearInterval(interval);
        }
    }, [delay]);
};

export default useInterval;
