import { RefObject } from "react";
export interface OptProps {
    isDisabled?: boolean;
    onMouseDownInside?: EventListener;
    onMouseDownOutside?: EventListener;
    onMouseUpInside?: EventListener;
    onMouseUpOutside?: EventListener;
}
declare function useTargetBoundary(ref: RefObject<HTMLElement>, { isDisabled, onMouseDownInside, onMouseDownOutside, onMouseUpInside, onMouseUpOutside, }: OptProps): void;
export default useTargetBoundary;
