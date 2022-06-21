import { useState, useEffect, useCallback } from 'react';

export const useMediaQuery = (query : string) => {
    const [matches, setMatches] = useState(false);
    const updateMatches = useCallback(() => {
        setMatches(window.matchMedia(query).matches);
    }, []);
    useEffect(() => {
        const mediaMatcher = window.matchMedia(query);
        setMatches(mediaMatcher.matches);
        mediaMatcher.addListener(updateMatches);
        return () => mediaMatcher.removeListener(updateMatches)
    }, [query]);
    return matches;
}

export const useIsMobile = () => {
    return useMediaQuery("screen and (max-width: 600px)");
}