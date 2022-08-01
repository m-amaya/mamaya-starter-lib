import { createStitches } from "@stitches/react";

import {
  breakpoints,
  fonts,
  fontSizes,
  fontWeights,
  palette,
  zIndex,
} from "~/tokens/tokens.json";
import rgba from "~/utils/rgba";

function replace<T>(vars: T, template: string) {
  type KeyType = keyof T;
  const tokens = {} as Record<KeyType, string>;

  for (const key in vars) {
    tokens[key] = template.replace("%", `${vars[key]}`);
  }

  return tokens;
}

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: palette,
    fonts,
    fontSizes: replace(fontSizes, "%px"),
    fontWeights,
    zIndices: zIndex,
  },
  media: replace(breakpoints, "(min-width: %px)"),
  utils: {
    // typography
    textStyle: () => ({
      fontFamily: "$sansSerif",
      fontSize: "$regular",
      fontWeight: "$regular",
      lineHeight: "1.2em",
    }),
    // states
    focusRing: (color: keyof typeof palette) => ({
      outlineColor: rgba(palette[color], 0.35),
      outlineStyle: "solid",
      outlineWidth: 3,
    }),
    // box model
    noSpace: () => ({
      margin: 0,
      padding: 0,
    }),
    // animation
    smoothTransition: (properties: string[]) => ({
      transitionDuration: "200ms",
      transitionProperty: properties.join(", "),
    }),
  },
});
