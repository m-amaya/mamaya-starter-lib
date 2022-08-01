import { render } from "@testing-library/react";
import React from "react";

import Component from "../Component";

describe("Component", () => {
  test("Renders to screen", () => {
    const { baseElement } = render(<Component testId='component' />);
    expect(baseElement).toBeTruthy();
  });
});
