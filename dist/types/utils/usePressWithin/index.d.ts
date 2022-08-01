import { RefObject } from "react";
export interface Props {
    defaultState?: boolean;
    isDisabled?: boolean;
}
declare function usePressWithin(ref: RefObject<HTMLButtonElement>, { defaultState, isDisabled }: Props): {
    isPressedWithin: boolean;
};
export default usePressWithin;
