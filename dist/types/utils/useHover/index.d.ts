import { RefObject } from "react";
export interface Props {
    defaultState?: boolean;
    isDisabled?: boolean;
}
declare function useHover(ref: RefObject<HTMLElement>, { defaultState, isDisabled }: Props): {
    isHovered: boolean;
};
export default useHover;
