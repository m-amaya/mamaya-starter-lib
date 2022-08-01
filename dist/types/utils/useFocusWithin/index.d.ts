import { RefObject } from "react";
export interface Props {
    defaultState?: boolean;
    isDisabled?: boolean;
}
declare function useFocusWithin(ref: RefObject<HTMLElement>, { defaultState, isDisabled }: Props): {
    isFocusedWithin: boolean;
};
export default useFocusWithin;
