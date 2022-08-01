import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import svgr from "@svgr/rollup";
import React from "react";
import ReactDOM from "react-dom";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";

function createVersionBanner(version) {
  const repeat = (c) => c.repeat(version.length);
  return `\n/*/ @preserve
    ▛▝▝▝▝▝▝▝▝▝▝▝▝▝▝▝▝▝▝▝${repeat("▝")}▜
      Design System v${version}
    ▙ ▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖▖${repeat("▖")}▟
                       ${repeat(" ")}By Marissa Amaya
    Created Using:
      - React version ${React.version}
      - ReactDOM version ${ReactDOM.version}
    Built: ${new Date().toISOString().split("T").join(" ")}
*/\n`;
}

export default {
  external: ["react", "react-dom"],
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
      banner: createVersionBanner(pkg.version),
    },
    {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
      banner: createVersionBanner(pkg.version),
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    json(),
    url(),
    svgr({ icon: true }),
    commonjs(),
    typescript({
      typescript: require("ttypescript"),
      tsconfigDefaults: {
        compilerOptions: {
          plugins: [
            { transform: "typescript-transform-paths" },
            {
              transform: "typescript-transform-paths",
              afterDeclarations: true,
            },
          ],
        },
      },
      useTsconfigDeclarationDir: true,
    }),
  ],
};
