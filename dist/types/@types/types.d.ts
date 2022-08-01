import type { CSS } from "@stitches/react";
import type { ReactNode } from "react";
import { config } from "../styles/stitches.config";
export declare type ReactChildren = ReactNode | ReactNode[];
export declare type StitchesCSS = CSS<typeof config>;
export interface PropsWithChild {
    children?: ReactNode;
}
export interface PropsWithChildren {
    children?: ReactChildren;
}
export interface CommonProps {
    css?: StitchesCSS;
    className?: string;
    testId?: string;
}
