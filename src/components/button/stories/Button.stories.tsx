import { Meta, Story } from "@storybook/react";
import React from "react";

import { genArgTypesWithCommonArgs } from "~/utils/_/genArgTypes";

import LibraryButton from "../Button";
import type { ButtonProps } from "../Button.types";

export default {
  title: "Button",
  component: LibraryButton,
  argTypes: genArgTypesWithCommonArgs([]),
} as Meta<typeof LibraryButton>;

const Template: Story<ButtonProps> = (args) => <LibraryButton {...args} />;

export const Button = Template.bind({});
