import { render } from "@testing-library/react";
import React from "react";

import Button from "../Button";

describe("Button", () => {
  test("Renders to screen", () => {
    const { baseElement } = render(<Button testId='button' />);
    expect(baseElement).toBeTruthy();
  });
});
