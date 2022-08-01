interface PropConfig {
  name: string;
  description?: string;
  type?: string;
  defaultValue?: string;
  control?: string | { type: string; [key: string]: any };
  options?: string[];
  action?: string;
  isRequired?: boolean;
}

export const genArgTypes = (allProps: PropConfig[]) => {
  const argTypes: Record<string, any> = {};

  allProps.map(
    ({
      name,
      description,
      type,
      defaultValue,
      control,
      options,
      action,
      isRequired,
    }) => {
      argTypes[name] = {
        description,
        type: {
          required: isRequired,
        },
        table: {
          type: {
            summary: type,
          },
          defaultValue: { summary: defaultValue },
        },
        control,
        options,
        action,
      };
    },
  );

  return argTypes;
};

export const genArgTypesWithCommonArgs = (allProps: PropConfig[]) => ({
  ...genArgTypes(allProps),
  ...genArgTypes([
    {
      name: "css",
      description: "(optional) CSS object for overwriting styles",
      type: "CSSObject",
      control: "object",
    },
    {
      name: "className",
      description:
        "(optional) Custom classname for overwriting styles. If you can, we recommend to use `extendedCss` instead.",
      type: "string",
      control: "text",
    },
    {
      name: "testId",
      description:
        "(optional) Test id. Gets passed to the `data-testid` prop. Used for querying [ByTestId](https://testing-library.com/docs/queries/bytestid/) in your tests.",
      type: "string",
      control: "text",
    },
  ]),
});
