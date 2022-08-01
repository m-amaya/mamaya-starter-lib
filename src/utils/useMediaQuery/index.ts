import { breakpoints } from "~/tokens/variables.json";
import useWindowSize from "~/utils/useWindowSize";

function useMediaQuery() {
  const { windowWidth } = useWindowSize();

  const isGteTablet = windowWidth && windowWidth >= breakpoints.tablet;
  const isGteTabletLs = windowWidth && windowWidth >= breakpoints["tablet-ls"];
  const isGteDesktop = windowWidth && windowWidth >= breakpoints.desktop;
  const isGteDesktopSm =
    windowWidth && windowWidth >= breakpoints["desktop-sm"];
  const isGteDesktopXl =
    windowWidth && windowWidth >= breakpoints["desktop-xl"];
  const isMobile =
    !isGteTablet &&
    !isGteTabletLs &&
    !isGteDesktop &&
    !isGteDesktopSm &&
    !isGteDesktopXl;

  return {
    isMobile,
    isGteTablet,
    isGteTabletLs,
    isGteDesktopSm,
    isGteDesktop,
    isGteDesktopXl,
  };
}

export default useMediaQuery;
