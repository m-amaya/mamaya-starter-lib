import { Meta, Story } from "@storybook/react";
import React from "react";

import { genArgTypesWithCommonArgs } from "~/utils/_/genArgTypes";

import LibraryComponent from "../Component";
import type { ComponentProps } from "../Component.types";

export default {
  title: "Component",
  component: LibraryComponent,
  argTypes: genArgTypesWithCommonArgs([]),
} as Meta<typeof LibraryComponent>;

const Template: Story<ComponentProps> = (args) => (
  <LibraryComponent {...args} />
);

export const Component = Template.bind({});
