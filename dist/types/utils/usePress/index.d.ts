import { RefObject } from "react";
export interface Props {
    defaultState?: boolean;
    isDisabled?: boolean;
}
declare function usePress(ref: RefObject<HTMLButtonElement>, { defaultState, isDisabled }: Props): {
    isPressed: boolean;
};
export default usePress;
