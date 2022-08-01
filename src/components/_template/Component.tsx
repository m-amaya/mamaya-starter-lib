import React, { FC } from "react";
import { styled } from "~/stitches";

import type { ComponentProps } from "./Component.types";

const Container = styled("div");

const Component: FC<ComponentProps> = ({
  // props
  // handlers
  // common
  className,
  css,
  testId,
  children,
}) => {
  return (
    <Container className={className} css={css} data-testid={testId}>
      {children}
    </Container>
  );
};

export default Component;
