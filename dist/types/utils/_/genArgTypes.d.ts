interface PropConfig {
    name: string;
    description?: string;
    type?: string;
    defaultValue?: string;
    control?: string | {
        type: string;
        [key: string]: any;
    };
    options?: string[];
    action?: string;
    isRequired?: boolean;
}
export declare const genArgTypes: (allProps: PropConfig[]) => Record<string, any>;
export declare const genArgTypesWithCommonArgs: (allProps: PropConfig[]) => {
    [x: string]: any;
};
export {};
