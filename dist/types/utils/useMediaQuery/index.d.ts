declare function useMediaQuery(): {
    isMobile: boolean;
    isGteTablet: boolean | 0 | undefined;
    isGteDesktop: boolean | 0 | undefined;
};
export default useMediaQuery;
