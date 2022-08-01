import { RefObject } from "react";
export interface Props {
    defaultState?: boolean;
    isDisabled?: boolean;
}
declare function useFocus(ref: RefObject<HTMLElement>, { defaultState, isDisabled }: Props): {
    isFocused: boolean;
};
export default useFocus;
