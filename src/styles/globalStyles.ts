import { globalCss } from "~/stitches";

const globalStyles = globalCss({
  "@import": ["url('https://unpkg.com/modern-css-reset/dist/reset.min.css')"],
  "*": {
    boxSizing: "border-box",
  },
});

export default globalStyles;
