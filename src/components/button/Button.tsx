import React, { FC } from "react";
import { styled } from "~/stitches";

import type { ComponentProps } from "./Button.types";

const ButtonStyled = styled("button");

const Button: FC<ComponentProps> = ({
  // props
  // handlers
  // common
  className,
  css,
  testId,
  children,
}) => {
  return (
    <ButtonStyled className={className} css={css} data-testid={testId}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
